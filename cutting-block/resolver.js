/* Cutting Block — week resolver.
   The entire programme is derived from the block start date plus these five
   functions. Nothing here touches the DOM or global state, so tests.html can
   load this file directly and assert against it. Build order step 2. */
(function (global) {
  "use strict";

  var BLOCK_A_SETS = [1, 1, 2, 2, 2];   // working sets, weeks 1-5
  var DELOAD_WEEK  = 6;
  var LENGTH_WEEKS = 12;

  function startOfDay(d) { var x = new Date(d); x.setHours(0, 0, 0, 0); return x; }

  /* 0 means the block has not opened yet. Values above LENGTH_WEEKS mean it is done. */
  function currentWeek(today, start) {
    var days = Math.floor((startOfDay(today) - startOfDay(start)) / 864e5);
    return days < 0 ? 0 : Math.floor(days / 7) + 1;
  }

  function setsForWeek(setsBlockB, week) {
    if (week >= 1 && week <= 5) return BLOCK_A_SETS[week - 1];
    if (week === DELOAD_WEEK) return 1;
    return setsBlockB;
  }

  function exerciseForWeek(blockA, blockB, week) { return week <= 5 ? blockA : blockB; }

  function repsForWeek(repsA, repsB, week) { return week <= 5 ? repsA : repsB; }

  function failureThisWeek(failureLastSet, week) { return week >= 9 && failureLastSet === true; }

  global.CB = {
    currentWeek: currentWeek,
    setsForWeek: setsForWeek,
    exerciseForWeek: exerciseForWeek,
    repsForWeek: repsForWeek,
    failureThisWeek: failureThisWeek,
    startOfDay: startOfDay,
    BLOCK_A_SETS: BLOCK_A_SETS,
    DELOAD_WEEK: DELOAD_WEEK,
    LENGTH_WEEKS: LENGTH_WEEKS
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
