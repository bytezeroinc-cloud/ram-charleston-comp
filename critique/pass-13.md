# Pass 13 · phone first screen with the CTA, horns-only mark

Date 2026-09-26. Design of record: pass 13. Backup of the previous state: `index.pass12-nocaptions.html.bak`.

## The ask

Rohan, on the pass 12 phone render: "this is too long - need to show CTA there too." Then mid-pass: "remove the RAM name under the logo. just show the horns."

## What changed

### Phone hero (≤ 860)

| Before (pass 11/12) | Now |
|---|---|
| Image locked to 3:4, then a dark copy block below it | Image height `min(100vw × 4/3, 100svh − 250px)`, floor 360 px, so the whole house stays in frame on every phone and only tablets crop |
| Copy block started under the image (`padding:26px 0 56px`) | Copy block rises into the image (`margin-top:-76px`) over a stronger marsh fade (black → 85 % at 14 % → clear at 36 %) |
| h1 fixed 46 px | h1 `clamp(36px, 10.8vw, 46px)` so 360-wide phones keep two lines |
| Lede 19 px / 1.7, 46ch | Lede 15 px / 1.55, full width |
| Two pill buttons wrapping to two rows | One row: red "Begin your home" pill fills the width with the arrow disc at its right end, the call button collapses to a round glass phone disc (label wrapped in `.lbl`, hidden on phones, `aria-label` keeps the name) |
| Kicker wrapped at 360 | ≤ 380: kicker 10 px, tracking .18em, shorter rule |

Measured first screens (CTA bottom edge vs viewport height):

| Viewport | Image | Headline lines | CTA bottom | Chips top |
|---|---|---|---|---|
| 390 × 844 (iPhone 15/16) | 520 | 2 | 694 | 720 |
| 390 × 780 | 520 | 2 | 694 | 720 |
| 360 × 740 (small Android) | 480 | 2 | 670 | 696 |
| 430 × 932 (Pro Max) | 573 | 2 | 755 | 781 |

The chips rule and first chip row also land inside the first screen on every size, which reads as "there is more".

### Mark

`#ram-mark` now reuses the horns glyph only (`<use href="#glyphdef">`, viewBox 190 128 528 488); the letters path is gone from the file (≈ 7.7 KB lighter). Mark boxes re-proportioned for the wider, shorter glyph: header 39 px (33 px solid), 1180 breakpoint 35 px, footer 66 px (52 px on phones). The mobile menu mark had no size rule at all (it inherited the 300 × 150 SVG default); it now has one at 36 px.

### Housekeeping

Dead `.hero-note` rules removed (the element went in pass 12).

## Checks

- First-screen shots at 390 × 844, 390 × 780, 360 × 740, 430 × 932: house whole, CTA row visible, no horizontal overflow (scrollWidth = clientWidth at all four).
- Desktop masthead over the hero, solid masthead after scroll, footer lockup, open mobile menu: horns only, weights read right against the wordmark.
- Full page re-rendered to `renders/home-390.jpg`, `renders/home-1440.jpg`, hero crops `home-390-hero.jpg`, `home-1440-hero.jpg`.

## Score

91 / 100, unchanged. The phone first screen is now the strongest frame on the page: the render Rohan wanted people to see, and the two ways to act, in one view. Deductions stand from earlier passes: placeholder 843 number, generated Lowcountry scenes declared only in the footer, no real Charleston project photography yet.

## Lovable

Not synced. Hashvi's workspace is still out of credits (pass 11 refusal). Passes 11, 12 and 13 sync together in one message from the asset repo once credits land.
