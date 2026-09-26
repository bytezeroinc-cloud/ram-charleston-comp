# Pass 02 · Fanlight II, The Arcade · RAM Construction Charleston homepage · 2026-09-25

Owner review of pass 01 (Rohan, same day, against the amber-red Charlotte build): *"I like the image and the
messaging … I loved the images and arches, I just didn't like the placements of them. I didn't like the header or
the footer … they lack the sophistication we need in million-dollar homes."* Pass 02 keeps every photograph, every
arch and every line of copy, and rebuilds placement, header and footer.

Renders: `renders/home-1440.jpg` (11,408 px), `renders/home-390.jpg` (19,035 px), `renders/home-1440-hero.jpg`,
`renders/home-1440-masthead-scrolled.jpg`. Pass 01 renders kept in `renders/pass-01/`; pass 01 file kept as
`index.fanlight-v1.html.bak`.

Checks: scrollWidth = viewport at 360, 390, 430, 600, 768, 860, 900, 1024, 1100, 1181, 1280, 1366, 1440, 1600;
nav single-line at every desktop width (the pass 02 first render wrapped three labels at 1440: fixed by dropping
"Questions" from the bar, `nowrap`, and hiding the italic phone below 1360 px); mobile menu opened and closed at 390;
0 broken images at 1440 (the one "broken" at 390 is the gallery's hidden eighth tile, `display:none`, never
requested); fonts Cormorant Garamond + Jost; GeneralContractor + FAQPage JSON-LD (FAQ built from the accordion);
36 `<img>`, 28 captioned slots, 1,204 visible words.

## What changed from pass 01

| Owner note | Pass 01 | Pass 02 |
|---|---|---|
| Header | Split header, logo centred with "Charleston" under it, thin nav either side, transparent → black | **Masthead**: original B&W mark + serif wordmark lockup ("RAM Construction / Charleston · South Carolina") left, four-item nav centre, italic serif 843 number + pill right, one hairline under the row; transparent over the hero, **alabaster on scroll** (Charlotte's bar is always black) |
| Footer | Generic four-column link footer | **Colophon**: sign-off row (lockup, a fan glazing, one serif line), four **ruled** columns with arch-marked small-caps heads, the 843 number at display size, licence + provenance base |
| Arch placement | Arches as rounded-card thumbnails (offer cards, service cards on alabaster tiles, area cards, rounded process tiles, boxed FAQ, spinning badge, inset photo with an 8 px frame) | Arches as **architecture**: a pair of fanlights in the chapter, an **arcade** of four bays on the tint, a **staggered colonnade** on black, one sticky arch by the coast table, one arch in the gallery, the arched form panel. Every box, tile radius, inset frame and the badge removed; hairlines carry the structure |
| Hero base | Three lifted alabaster cards | A **ruled three-fact ledger** welded to the base on black |
| Process | Checkerboard of rounded black cards and photo tiles | Four ruled columns, italic numeral, a photograph under each step captioned to the step |
| FAQ | Boxed accordions | Ruled accordions |
| Length | 11,785 px | 11,408 px (budget on the card is 10,500; the remaining height is the images at scale, not padding) |

## Score: 90 / 100 (client-ready; the owner is the gate)
| # | Dimension | Score | Note |
|---|---|---|---|
| 1 | Direction legible | 9/10 | Arches + serif italics + golden hour + hairlines read as one idea |
| 2 | Device ≥3× | 12/12 | Pair, arcade, colonnade, coast, gallery, FAQ, form, crown fan, colophon fan, eyebrow marks, marquee marks |
| 3 | Composition | 10/12 | Ledger welded, staggered colonnade, sticky arch, arched panel; four grounds alternate; four wrap-width sections run in a row from the coast to the credentials |
| 4 | Images | 11/12 | 90vh hero, 28 captioned slots at three scales; no Charleston job yet |
| 5 | Type | 10/10 | 106 px display, two faces, small-caps folios |
| 6 | Depth | 8/10 | Coast table, ruled facts, FAQ; area and service pages carry the rest |
| 7 | Conversion | 8/10 | Phone in masthead, hero, door and colophon; placeholder until the 843 line exists; one door |
| 8 | Template smell | 9/10 | Palette shared with Charlotte ↓ owner-directed; no boxes, no badge, no card grid |
| 9 | Truth | 7/8 | Scenes declared illustrative, RAM photos captioned Charlotte, no reviews or stats invented, no address |
| 10 | Mobile / technical | 6/6 | Clean 360 to 1600, nav exercised, reduced motion honoured, no-JS readable |

## Three voices
- **Creative director:** the first render's nav wrapped three labels onto two lines at 1440 (fixed); the footer
  line measured its width in the column's 15 px font, not its own 42 px serif, and broke "twenty-year" at the
  hyphen (fixed: `max-width` on the `<p>`); the range wall under an arch is the one gallery frame that argues with
  its frame. Kept: the ledger, the colonnade stagger, the ruled process.
- **Buyer (a couple about to spend $1.5M on a marsh lot):** the number is where I look for it (top right, in the
  door, in the footer); the towns are named four times; the coast table is the first thing on any builder's site
  that told me something I did not know. Hesitation: the phone is zeros, and no Charleston house is pictured yet.
  Both are client asks, both declared on the page.
- **Ceiling brand's art director (a Wade Weissmann / McAlpine register):** a light masthead on scroll and a
  serif wordmark move it into that company; the hero chips row is the one element that still reads "SEO page",
  kept because the facts are real and the owner has approved that row every time.

## Open (client asks)
843 number, domain, SC license number for the About page, real reviews, first Charleston job photos.
