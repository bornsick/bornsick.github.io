/* PDF Splitter — offline service worker (same design as Cutting Block).

   App files are NETWORK-FIRST WITH A TIMEOUT. Open the app with signal and you
   get the newest deploy on that launch, not the one after. With no signal the
   fetch fails fast; with a weak signal it gives up after
   NET_TIMEOUT_MS. Either way the cached copy renders.

   Google Fonts are CACHE-FIRST: they never change, and without them the app
   loads offline but in fallback faces.

   Bump CACHE on a deploy that removes or renames files, so the old entries are
   dropped on activate. Plain content edits do not need a bump. */

var CACHE = "pdf-splitter-v1";
var NET_TIMEOUT_MS = 2500;

var CORE = [
  "./",
  "./index.html",
  "./vendor/pdf-lib.min.js",
  "./vendor/pdf.min.js",
  "./vendor/pdf.worker.min.js",
  "./vendor/jszip.min.js",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png"
];

var FONT_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE)
      /* One by one, not addAll: addAll is atomic, so a single missing icon
         would leave the app with no offline copy at all. */
      .then(function (c) {
        return Promise.all(CORE.map(function (u) {
          return c.add(new Request(u, { cache: "reload" })).catch(function () {});
        }));
      })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function withTimeout(promise, ms) {
  return new Promise(function (resolve, reject) {
    var t = setTimeout(function () { reject(new Error("timeout")); }, ms);
    promise.then(function (v) { clearTimeout(t); resolve(v); },
                 function (err) { clearTimeout(t); reject(err); });
  });
}

function networkFirst(req) {
  var net = fetch(req, { cache: "no-cache" }).then(function (res) {
    if (res && res.status === 200) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); });
    }
    return res;
  });
  return withTimeout(net, NET_TIMEOUT_MS).catch(function () {
    return caches.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      if (req.mode === "navigate") return caches.match("./index.html");
      /* Nothing cached yet — let a slow network finish rather than fail. */
      return net;
    });
  });
}

function cacheFirst(req) {
  return caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (res) {
      if (res && (res.status === 200 || res.type === "opaque")) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    });
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  if (FONT_HOSTS.indexOf(url.hostname) !== -1) { e.respondWith(cacheFirst(req)); return; }
  if (url.origin === self.location.origin) { e.respondWith(networkFirst(req)); return; }
});
