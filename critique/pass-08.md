# Pass 08 · Fanlight II, the services at full bleed · RAM Construction Charleston homepage · 2026-09-26

Rohan on pass 07: *"can we expand it across the section so it appears full screen?"* Pass 07 kept as
`index.pass07-boxed.html.bak`.

## What changed
The services composition (four square panels + the portrait panel) left the 1,320 px wrap and the light frame: it now
runs edge to edge at `clamp(640px, 92svh, 920px)`, 828 px tall on a 900 px viewport, on a black section with no padding.
The panel copy moved in 14 px from the edges (44 px insets), the vertical labels sit 28 px from each panel's right edge,
and the provenance line became a slim strip under the composition on a hairline. Below 861 px the portrait and the four
panels stack full width as before. The portrait panel is now 576 px wide; the caption block starts at 465 of 828 px,
well under her eye line.

## Grounds
The page now runs dark from the chapter's open-room band through the services to the window: three dark grounds in a
row, by the owner's direction. The photographs differ enough (a lit interior, four dimmed façades with a golden porch,
a black band with the arched window) that it reads as a sequence rather than one block. Watch it when the page is next
reviewed for rhythm.

## Checks
Desktop 11,093 px, mobile 18,194 px; scrollWidth = viewport at 1600, 1440, 1181, 1024, 860 and 390; composition 828 px at
1181 and above, 774 px at 1024, stacked below 861.

## Score: 91 / 100 (unchanged; D3 ↓ owner-directed on the dark run, D4 up for a viewport-tall photo band)

## Lovable
Re-synced at Lovable commit `4f9ba84` (4.7 credits): 63 assets and the 531-line stylesheet byte-exact, `#svc` spanning the viewport
at 1440 / 1181 / 860 / 390 with zero overflow, hover and mobile stack verified. The agent also caught a bug of its own from the
earlier syncs: its FAQ extraction had swallowed the `.faq-list` opening tag, unbalancing the markup (door and footer escaped the
wrapper, React logged a hydration error on every load). It corrected the extraction; tag balance, the six questions, both JSON-LD
blocks and the no-JavaScript read now check out.
