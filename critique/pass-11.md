# Pass 11 · Fanlight II, the phone hero · RAM Construction Charleston homepage · 2026-09-27

Rohan: *"on mobile i want see the full render and want people to see the beautiful house."* Pass 09 (with the
ledger restored) kept as `index.pass09b-mobilehero.html.bak`.

## What changed (phones and tablets under 861 px only; desktop untouched)
- **A portrait frame of the same house.** Generated from the hero still as the reference (`hero-lowcountry-portrait`,
  3:4): the whole house from base to roof ridge, pastel sky above, the marsh and the house's reflection below, live
  oaks at the sides. Served to viewports up to 860 px through the `<picture>` source (900 and 1400 px versions),
  preloaded on phones.
- **Nothing over the picture.** The hero no longer stacks the headline on the photograph. The frame comes first at
  3:4 (520 px tall at 390), with only a short fade at its foot into the black, then the kicker, headline, lede, the two
  pills and the chips sit beneath on black. The horn keyline and the drift zoom are off on phones so the frame is
  shown whole. The "Illustrative Lowcountry scene" note sits in the frame's bottom-right corner.
- Tablets at 768 get the same frame at 1,024 px tall with the words under it.

## Checks
Mobile 390: no overflow, the portrait source is the one served (`hero-lowcountry-portrait-900.webp`), hero block
1,167 px including the copy. 430 and 768 checked the same way. Desktop unchanged at 11,093 px.

## Truth
Same generated house as the desktop hero, captioned illustrative like it.

## Lovable
**Not synced yet: the Lovable workspace is out of credits** (2026-09-27). Lovable sits at the pass 09 design with the ledger
restored. Re-send the sync (portrait hero source, two preloads, the 860 px hero CSS) once credits are added.
