# Pass 09 · Fanlight II, the order · RAM Construction Charleston homepage · 2026-09-26

Rohan on pass 08: *"can we swap the section with the below one. keep the design of the section intact just interchange
it."* Pass 08 kept as `index.pass08-order.html.bak`.

## What changed
The walk-through window now sits directly under the chapter, and the full-bleed services accordion follows it. Nothing
inside either section changed. The folio numerals follow the new order: I the chapter, II the window, III what we build,
IV where we build, and so on. Page order is now: hero, ledger, chapter (with the numbers band), window, services, towns,
coast, process, work, credentials, questions, door, colophon.

## Grounds
The run after the chapter band reads: black window band, then the services photographs edge to edge, then the black
towns section. The window's black ground now separates the two photo bands (the open room and the services row), which
is a better rhythm than pass 08 had.

## Checks
Desktop 11,093 px, mobile unchanged in height; scrollWidth = viewport at 1440 and 390; the four folios read I to IV in
order.

## Lovable
Re-synced at Lovable commit `c4770d1` (3.1 credits): stylesheet byte-identical, 63 assets byte-identical, DOM order chapter →
window → services → areas, folios I to IV, the `srcset` / `poster` paths rewritten to `/img/` and the inline `onsubmit` dropped,
zero overflow at 1440 / 1181 / 860 / 390, menu exercised at 390, no build or page errors.
