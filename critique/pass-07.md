# Pass 07 · Fanlight II, the services accordion · RAM Construction Charleston homepage · 2026-09-26

Rohan on pass 06: *"I like her but now not the sections below it. lets give it that accordion square box design that we
have on the RAM lovable the other site so it moves accordingly and the female sits on the right side overlay with info,
so it becomes dark/light section with multipurpose functionality."* Pass 06 kept as `index.pass06-story.html.bak`.

## The composition
One dark composition inside the light services section (so the page still alternates grounds): a 700 px row of
**four square service panels** that open on hover, focus or click and take turns every 4.4 s while in view, and, on the
right, **the portrait as the info panel** at 40 % of the width.

- **Closed panel:** the service photograph dimmed (brightness .42), the service name set vertically bottom-right with
  an amber rule, exactly the Charlotte device translated into Cormorant.
- **Open panel (flex 2.6):** the photograph brightens, the numeral, title, one-liner, three-item spec list and link
  rise in at the bottom left. The vertical label stays.
- **Portrait panel:** the woman on the piazza fills it; the eyebrow, the headline "Four ways to come home to the
  Lowcountry.", a 42-word version of the porch story, "Begin the conversation" and the illustrative caption sit on a
  scrim over the lower half, under her chin and over the railing, never across her face (caption block starts at 349
  px of 700; her eyes are near 315 px).
- **Mobile:** the portrait panel first at 3:3.7 with the same overlay, then the four panels stacked full width with
  their content always visible and no auto-cycle.
- **One accordion routine** now drives both the towns colonnade (3.8 s) and the services (4.4 s), out of step with
  each other; both stop under reduced motion and while off screen.

## Checks
Desktop 11,161 px (the accordion is 570 px shorter than the story + arcade), mobile 18,328 px; scrollWidth = viewport at
360 to 1600; composition 700 px tall from 1181 up, 640 px at 1100 to 900, stacked below 861; nav single-line.
First cut had the info block across her face (caption top at 248 px): fixed by widening the panel to 40 %, raising the
composition to 700 px and shortening the copy.

## Score: 91 / 100 (unchanged)
D2 and D8: the square panels are the Charlotte site's device by the owner's direction, annotated ↓ owner-directed; the
arches remain the Charleston device everywhere else (chapter, window, colonnade, coast, gallery, FAQ, form). D4 up
(a photo band with a person at mid-page). D3 flat.

## Three voices
- **Creative director:** the section now has two registers side by side, square dark panels and the warm portrait,
  and they hold because the portrait carries the section's type. Do not add a third accordion to the page.
- **Buyer:** the four kinds of home reveal themselves one at a time and the person on the porch tells me who it is for.
- **Ceiling brand's art director:** the closed panels must stay this dark; the moment they brighten the row reads as a
  photo grid again.

## Lovable
Re-synced at Lovable commit `fe657ab` (2.9 credits): stylesheet and 63 assets byte-exact, the hook's accordion refactored to
`accordion(root, selector, interval)` and run on `#acc` (3800) and `#svc` (4400); its Playwright pass confirmed zero overflow at
the four widths, the third panel opening on hover at 1440 while the first closes, and the row stacking at 390.
