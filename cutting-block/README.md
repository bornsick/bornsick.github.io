# Cutting Block

The programme brain for the twelve-week block. It sits **beside** Hevy, not in front of it —
Hevy logs your sets, this decides what those sets should be this week and reminds you how to
do them. No set logging, no rest timers, no exercise database. That was the scope call in the
spec and it is the reason this shipped in one pass.

Everything is derived from one date. `START = 24 August 2026` plus today's date gives the week
number, and the week number gives set counts, rep ranges, which exercises are running and
whether the last set of marked isolations goes to failure. Nothing is stored except the
measurements you type into Numbers.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app — five screens, all programme data, the stylesheet |
| `resolver.js` | The five week-maths functions. Pure, no DOM, so tests can load it |
| `pareto.js` | The 20% — the two or three points per lift that decide what it trains |
| `tests.html` | 47 assertions over the resolver. Open it in a browser, no build step |
| `sw.js` | Offline. Network-first with a 2.5 s timeout for app files; cache-first for Google Fonts |
| `manifest.webmanifest` | Makes it installable, standalone, dark |
| `icon-180/192/512.png` | Home screen icons |

## Running it locally

There is no build step, but it will **not** work from `file://`: the app is split across several
files, and the service worker needs `http`. Serve the folder:

```bash
powershell -File serve.ps1 -Root "C:\Users\momozinha\sad" -Port 8787
```

Then open `http://localhost:8787/cutting-block/`. Run the tests at
`http://localhost:8787/cutting-block/tests.html` — it should say ALL PASS, 47 assertions.

## Putting it on your phone

The whole `sad` folder is one GitHub Pages site (`https://USERNAME.github.io/`), with each app in its own
folder. `.gitignore` at the root is an allowlist, so only app folders and the home page are ever published.

1. **Once:** a GitHub repository named exactly `USERNAME.github.io`, public, empty.
2. **Deploy:** commit and push `main`. GitHub Pages rebuilds in about a minute.
3. **Install:** on the iPhone, open `https://USERNAME.github.io/cutting-block/` in Safari → Share →
   **Add to Home Screen** → from then on, open it only from that icon.

After that, updates need nothing on the phone. The service worker is network-first with a 2.5 s
timeout, so opening the app with signal loads the newest deploy; with no signal it runs from cache.

### Things iOS does that matter

- **The Home Screen icon and a Safari tab keep separate storage.** Data saved in a tab does not
  appear in the installed app. The app shows an install prompt in Safari tabs to prevent this.
- **The first launch needs signal**, so the app and its fonts get cached. Offline works after that.
- **Back up with Numbers → Your data → Export**, paste into Notes. **Restore** reads it back from the
  clipboard. Deleting the Home Screen icon deletes its data.

### On privacy

A GitHub Pages site on the free plan is public: anyone with the URL can see the programme and the
goals list. Your measurements and ticks are in the phone's storage and are never uploaded.

## The week logic

All of it lives in `resolver.js`:

| Weeks | Sets per exercise | Exercises | Reps | Failure |
|---|---|---|---|---|
| 1–2 | 1 | Block A | Block A range | no |
| 3–5 | 2 | Block A | Block A range | no |
| 6 | 1 (deload) | **Block B** | Block B range | no |
| 7–12 | per-exercise block B count | Block B | Block B range | **from week 9, marked isolations only** |

The exercise swap and the rep-range change both happen at **week 6**, not week 7. The deload is
the first week of block B, run light — that is what makes it a deload rather than a week off.

## Two things that need your input

1. **Block B has no coaching notes.** Seventeen movements swap in at week 6 and none of them
   have Set up / Execute / Cue / Don't text or a 20% list. The app shows the block A notes with
   a banner saying so. Worth writing before week 6, which by the current start date is the week
   of 28 September 2026.
2. **The rest of the spec.** P1 was the weekly change card, metrics logging, the volume audit
   and the block editor. None of that is built. The spec says to use the read-only version for
   a full week first, which is still the right call.
