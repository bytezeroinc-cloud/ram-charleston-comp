# Pass 14 · the coast section rebuilt as "the datum"

Date 2026-09-26. Design of record: pass 14. Backup of the previous state: `index.pass13-fold.html.bak`.

## The ask

Rohan, on "Building on the coast": *"lets re-imagine this section - i feel it looks like a content block and not a design."*

He was right. Pass 13 had an arch photograph on the left and a three-column table (Condition / What we do / Where it applies) on the right: five rows of running text on alabaster, the one place on the page where the copy was laid out as a document rather than composed.

## The idea

A coastal lot sets conditions the way a survey sets a datum: flood elevation, wind, salt, the trees, the review board. So the section became a **survey rail**: a full-bleed dark frame, the photograph of the scene each condition governs on the left, and on the right one vertical hairline with five markers. The open marker lights amber, its row expands to show the one sentence of what RAM does, and an amber fill runs down its length of the rail like a countdown until the next marker takes over and the photograph crossfades to its scene. Hover or focus holds a row; keyboard and screen readers get real buttons with `aria-expanded`.

| Row | Scene (all generated, declared once in the footer) |
|---|---|
| 01 Flood elevation | the tidal creek aerial at dusk (already on the page) |
| 02 Hurricane wind | new: an elevated home with green Bahama shutters as a shelf cloud crosses the marsh, golden light still on the facade |
| 03 Salt air | new: the corner of a piazza rail, stainless fittings and a copper lantern, sea oats and salt haze beyond |
| 04 Grand trees | new: a white home sited between two grand live oaks, limbs over the roof |
| 05 Design review | the drafting-table still from pass 10, unused since the revert |

Three Gemini 3 Pro Image generations at 2K, 4:5 (the panel's own aspect at 1440 × 900), written as 1600 and 800 px webp. The oak scene needed quality 66 to come in under 700 KB.

## What changed in the file

- `.coast` is a two-column grid (60 / 40; 54 / 46 under 1180), `clamp(680px, 92svh, 900px)` tall, on `--black-night`, with the eyebrow, H2 and a new one-line lede low left over the photograph's base scrim.
- Five `.coast-ph` layers crossfade (1.3 s) with a slow settle from 1.05 to 1; the open one follows the open row.
- `.datum` rows: numeral in italic serif, title in Cormorant 27 px, the sentence in a `grid-template-rows: 0fr → 1fr` reveal, the towns in amber small caps; marker dot on the rail with a soft ring when open; `datumfill` keyframe runs 4.6 s to match the interval.
- `accordion(root, sel, every, on)` gained an `on(index)` callback and now sets `aria-expanded` on button items; the coast is its third instance (`#datum`, 4600 ms).
- Phones (≤ 860): photograph in a 4:5 frame with the head over its base, then the rail with every row open and no fill animation; the auto-advance stays gated to wide screens like the other two accordions.
- Removed: `.ctable` and its two phone rules, `.coast-grid`, `.coast-img`.

## Checks

- 1440 × 900: section 828 px, rail list 551 px centred in the column, H2 block 309 px low left; no horizontal overflow. Rows 1, 3 and 5 rendered open; the salt-air and drafting-table frames keep their subjects after per-scene `object-position`.
- 1180: 54 / 46 split holds, titles at 24 px.
- 390: photograph 488 px, headline two lines over the base scrim, five rows open, label on one line.
- Copy is the pass 13 copy verbatim plus one lede sentence; no numbers, no claims beyond the client's stated process.

## Score

91 / 100, unchanged. The rubric already scored the table as "conversion machinery present"; what moved is register, which the rubric cannot see: the last content block on the page is now a composition in the page's own language (photograph, hairline, amber marker, serif title, one sentence). Standing deductions: placeholder 843 number, generated scenes in place of Charleston photography.

## Lovable

Not synced. Workspace still out of credits; passes 11 to 14 go together in one message. The three new scenes and the drafting-table 1600/800 files are in the asset repo.
