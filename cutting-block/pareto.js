/* Cutting Block — the 20%.

   Each exercise already carries five fields of notes. That is the right amount
   to read on Sunday and the wrong amount to read between sets. This file holds
   the two or three points per lift that carry most of the result: the ones that
   change what the exercise trains if you get them wrong, as opposed to the ones
   that make it slightly better.

   Every line is condensed from that exercise's own Set up / Execute / Cue /
   Don't text in index.html. Nothing here introduces new coaching — if a point
   is not in the full notes, it does not belong here.

   Keyed by the exercise name exactly as it appears in D.DAYS. Block B swap
   movements have no entry yet, so they render without this block. */

(function (global) {
  "use strict";

  global.PARETO = {

    /* ── Monday · Upper ─────────────────────────────────────── */
    "Incline Bench Press (Barbell)": [
      "Bench 30–45°, never steeper — past 45° it is a shoulder press.",
      "Elbows 45–70° from the torso, never flared to 90°.",
      "Blades pulled back and down, held there the entire set."
    ],
    "Cable Fly Crossovers": [
      "Set the elbow bend once and never change it.",
      "Hands meet slightly past the midline, then control the stretch back.",
      "Light enough that the arms stay locked — bending makes it a press."
    ],
    "Lat Pulldown (Cable)": [
      "Shoulders down and away from the ears before the elbows bend at all.",
      "Drive the elbows down and back to the upper chest.",
      "No leaning back, no shrugging at the top."
    ],
    "Lateral Raise (Cable)": [
      "Elbow leads, hand follows.",
      "Shoulders stay down — if they rise toward your ears, halve the weight.",
      "Neutral wrist, no thumbs-down pour."
    ],
    "Smith Machine Row": [
      "Torso stays still and near parallel — the bar comes to you.",
      "Pull to the stomach, elbows at roughly 45°.",
      "Torso rising rep to rep means the set is finished."
    ],
    "Overhead Triceps Extension": [
      "Upper arms frozen beside your ears for the whole set.",
      "Elbows point forward, never flare outward.",
      "Control back into the full overhead stretch — that is the point of it."
    ],
    "Bayesian Cable Curl": [
      "Stand far enough forward that the arm starts behind your body.",
      "Elbow pinned at your side, never drifting forward.",
      "Control the negative all the way back into the stretch."
    ],

    /* ── Tuesday · Lower ────────────────────────────────────── */
    "Mesa Flexora": [
      "Hips pressed flat into the bench — if they pop up, the set is over.",
      "Set the machine for the biggest stretch at the bottom.",
      "Control the return rather than letting it drop."
    ],
    "Agachamento no Smith": [
      "Walk the feet 3–6 inches forward of a normal squat stance.",
      "Descend to roughly parallel and hold that depth as you fatigue.",
      "Heels lifting at the bottom means move the feet further forward."
    ],
    "Levantamento Terra Romeno": [
      "Hips back, not down — this is a hinge, not a squat.",
      "The bar drags your legs the whole way; drift loads your lower back.",
      "Stop about 75% up. Never lock out, never hyperextend."
    ],
    "Cadeira Extensora": [
      "Seat back as far as is comfortable to lengthen the rectus femoris.",
      "Two to three second negative on every single rep.",
      "Never slam the stack down — the negative is most of the exercise."
    ],
    "Panturrilha em Pé": [
      "Knees straight but not locked — a bent knee shortens the gastroc.",
      "One to two second pause at the bottom of every rep.",
      "No bouncing. Fast reps use tendon, not muscle."
    ],
    "Abdominal na Corda": [
      "Hips are an anchor, not a hinge — fix them and leave them.",
      "Round the lower back, bringing ribs toward the pelvis.",
      "No spinal flexion means no ab work, whatever the stack says."
    ],

    /* ── Wednesday · Pull ───────────────────────────────────── */
    "Neutral-Grip Lat Pulldown": [
      "Handle further out in front than a standard pulldown.",
      "Elbows to hips through a long arc — arms are hooks, not movers.",
      "If your torso is swinging, the weight is too heavy."
    ],
    "Pullover na Máquina": [
      "Elbow angle completely fixed — forearms are along for the ride.",
      "Drive the elbows down and forward in an arc.",
      "Bending the elbows turns it into a triceps pressdown."
    ],
    "Remada Iso-Lateral": [
      "Chest never leaves the pad — that is what the machine is for.",
      "Let the blades travel: stretch forward, squeeze hard back.",
      "Elbows out at about 45°, arms parked."
    ],
    "Crucifixo Inverso (Máquina)": [
      "Lead with the elbow, drag the hand.",
      "Pause one to two seconds in the squeeze.",
      "Any weight you can swing is too much weight."
    ],
    "1-Arm Cable Rear Delt Flye": [
      "Lead with the elbow, sweeping back and across.",
      "Pause one to two seconds and contract deliberately.",
      "Genuinely light — lighter than feels reasonable."
    ],
    "Encolhimento (Halteres)": [
      "Straight up toward the ears, straight back down.",
      "Arms stay straight — bending them is the traps cheating.",
      "Never roll the shoulders backwards."
    ],
    "Rosca Direta na Polia": [
      "Elbows are hinges, not levers — pinned at your sides.",
      "Constant tension: no resting at the bottom.",
      "Elbows drifting forward at the top gives the biceps a rest."
    ],
    "Rosca Scott": [
      "Armpits snug against the top of the pad.",
      "Full extension at the bottom without slamming into it.",
      "Never bounce out of the stretch — that is where tears happen."
    ],

    /* ── Thursday · Push ────────────────────────────────────── */
    "Supino (Barra)": [
      "Elbows 45–75° from the torso, never perpendicular.",
      "Blades retracted and depressed, glutes stay on the bench.",
      "Quick pause on the chest — no bouncing."
    ],
    "Prensa de Ombros": [
      "Elbows must break at least 90° at the bottom of every rep.",
      "Stop just short of a hard lockout.",
      "Cutting the bottom short removes the entire stimulus."
    ],
    "Crucifixo Reto (Halter)": [
      "Bottom half of the range only — this is a deliberate lengthened partial.",
      "Soft elbow bend set once and never changed.",
      "Chase the stretch across the sternum, not the weight."
    ],
    "Elevação Lateral (Cabo)": [
      "Elbow leads, hand follows.",
      "Shoulders stay down — shrugging means halve the weight, no exceptions.",
      "Slight forward lean into the handle, neutral wrist."
    ],
    "Extensão de Tríceps Atrás": [
      "Upper arm parallel to the floor and locked there.",
      "Extend to a straight arm and hold the squeeze briefly.",
      "Swinging the upper arm is the single failure mode."
    ],
    "Roman Chair Leg Raise": [
      "Let the lower back round — curl the pelvis toward the ribs.",
      "Control the descent all the way down.",
      "If you are swinging, the hip flexors are doing it, not the abs."
    ],

    /* ── Friday · Legs ──────────────────────────────────────── */
    "Leg Press 45°": [
      "Hips glued to the seat, back flat.",
      "Stop the moment the pelvis starts to tuck under.",
      "Correct depth is where your glutes stay pinned, not a fixed number."
    ],
    "Cadeira Flexora": [
      "Lean forward over the machine — that stretch is the whole advantage.",
      "Squeeze at the top, control the return.",
      "Sitting bolt upright gives away the point of the variation."
    ],
    "Agachamento Búlgaro": [
      "Front foot far enough forward that the shin stays vertical at the bottom.",
      "Drive through the front heel — the back leg only balances.",
      "Front thigh to parallel, every rep."
    ],
    "Cadeira Adutora": [
      "Squeeze the thighs together under control, hold briefly.",
      "Resist the opening — never let the pads snap your legs apart."
    ],
    "Cadeira Abdutora": [
      "Lean forward and hold the rails to deepen the stretch.",
      "Push out under control and squeeze at the end.",
      "No bouncing the weight out with momentum."
    ]
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
