# Pass 04 · Fanlight II, the chapter and the lockup · RAM Construction Charleston homepage · 2026-09-26

Rohan on the chapter section: *"this section needs a redesign. People love seeing open space housing. Moreover the
numbers in a better way. We're looking for a southern charm here so sights and numbers and how it is represented
accordingly. I love the 2 chairs there which gives warmth but that faucet does not go well. and i want the logo styles
on top like this [the Charlotte header: white mark + "Ram / Construction"]. adjust the size accordingly and mention
Charleston."* Reference pasted for the numbers: O Group's "Why work with us" band (six figures with a red plus,
hairline, small caps, vertical title, over a glass-walled ocean room).

Pass 03 kept as `index.pass03-motion.html.bak`.

## What changed

| Ask | Built |
|---|---|
| The lockup | The original RAM mark is now an inline SVG symbol (`#ram-mark`, built from `paths.json`: head with the horn cut-outs + the RAM letters) filled with `currentColor`, so it is white over the hero and black on the alabaster masthead with no white tile. Beside it "Ram / Construction" in Jost 500 with a light slash, and "Charleston · South Carolina" in small caps under it. Same lockup in the footer (larger) and the mobile menu. The hero horn keyline and the watermark now use inline `<use>` references too; the `paths.json` fetch is gone |
| The faucet | Replaced by a generated portrait of a double-height open living room (white stair, tall divided-light windows to the porch, two linen armchairs, heart pine floor), captioned illustrative. The piazza with the two rocking chairs stays as the tall arch |
| The facts table | Removed. One serif "Recognition" line under the lede (awards for quality, innovation and design; multiple years on the Dilworth Home Tour), both verified on ramconstructioninc.com |
| The numbers | A new full-bleed photo band after the chapter, on a generated open-plan great room and kitchen with the glass wall folded open to the porch and marsh: four figures in Cormorant at up to 94 px with an amber italic unit, hairline under each, small-caps label and a one-line note; a vertical serif title "The chapter, in numbers." on the right (his reference's device in our type); source line bottom-left |

## The four figures and where each comes from
| Figure | Label | Source |
|---|---|---|
| 2004 | Design-build since | ramconstructioninc.com: "Since the launch of our company in 2004" |
| 6,000 sq ft | The range of a RAM home | ramconstructioninc.com: "From chic, 6,000-sq ft ultra-modern homes in South Park, to early-century Craftsman-style bungalows in Dilworth" |
| 1 | Contract, drawing, budget | The offer already on the page (one firm, one drawing, fixed bid) |
| 4 | Towns on the coast | Client-confirmed 2026-09-25 (Mount Pleasant, Isle of Palms, Sullivan's Island, Daniel Island) |

Not used: "10-year structural warranty" (the QBW mark is on their site, but no warranty term is printed there), the
Lovable-era $2.4M / 150+ / 98% figures (no source), and a "+" after any figure (O Group's motif; a plus on 6,000 or
2004 would overstate).

## Images added (Gemini 3 Pro Image, 2K, prompts in `img/gen/prompts.json`)
`open-plan-great-room-porch-doors` (16:9, the numbers band) and `open-living-room-stair-marsh-light` (3:4, the chapter's
second arch). Both declared illustrative on the page. No people, no text.

## Checks
Desktop 11,721 px, mobile 19,153 px; scrollWidth = viewport at 360 to 1600; the first mobile render overflowed by 4 px
(the header grid's 40 px gaps pushed the menu buttons past the edge) and the source line sat beside the figures (a
static child of a flex band): both fixed (`gap:14px` at 860, the band is `display:block` on phones); nav single-line
at every desktop width; lockup 276 px at 1440, 196 px at 390.

## Score: 90 / 100 (unchanged)
D4 up (two open-space frames, a photo band mid-page), D6 up (sourced figures), D3 down one for a second dark photo
band within two screens of the window. Rows otherwise as pass 02.

## Three voices
- **Creative director:** the vertical title works because it is one line in a serif; the first cut had a second
  vertical eyebrow beside it and read as clutter. Removed. The "6,000 sq ft" unit needed air after the numeral.
- **Buyer:** the open room with the doors folded back is the picture that sells "open space"; the figures under it
  are the ones I would ask about (since when, how big, who signs, where).
- **Ceiling brand's art director:** the open-plan room and the window's great room are two interiors two screens
  apart; they are different rooms and light, and the band sits between them, so it holds. Watch it when the real
  Charleston photographs arrive.

## Lovable
Re-synced from the asset repo (comp commit `3550570`) at Lovable commit `fe5db25`, 4.8 credits: stylesheet byte-exact, 61 assets
byte-exact, `{{FAQ_ITEMS}}` kept, `paths.json` fetch removed, its own Playwright pass clean at 1440 / 1181 / 860 / 390 with the mark
white over the hero and black once solid. Open item it introduced: it removed `og:image` and `twitter:image` (Lovable wants absolute
URLs); set them to the launch domain's hero file when the domain exists.
