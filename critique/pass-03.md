# Pass 03 · Fanlight II, the motion pass · RAM Construction Charleston homepage · 2026-09-26

Rohan on pass 02: *"i like this one, lets build it in lovable. Also, we had accordion and horizontal movements of
cities and sliders, the page looks very static without it. Moreover, in section 3 … can we put a walk-through video
styled there? like opening a window in a panoramic view where the house is there and then zooms in the house and a
door opens to a vista of a sitting room with a porch that shows a similar vista."*

Pass 02 is kept as `index.pass02-static.html.bak`. Nothing in the design system changed; three sections gained motion
and section III became the window.

Renders: `renders/home-1440.jpg` (11,141 px, window frozen on the house beat), `renders/home-390.jpg` (18,617 px),
`renders/home-1440-window-beats.jpg` (six frames of the sequence at 1.2, 6.0, 8.6, 9.8, 11.2 and 14.0 s),
`renders/home-1440-colonnade-open.jpg` (third bay open), `renders/home-1440-slider.jpg` (after two "next" presses).

Checks: scrollWidth = viewport at 360 to 1600 (14 widths); mobile menu exercised at 390; the hero town cycle sampled
over 5 s (text swaps, opacity eases); colonnade arch bottoms within 2 px of each other in every state (822 to 824);
0 broken images at 1440 once the slider is scrolled (the four the capture flags are lazy tiles off the right edge,
never requested by a script that does not scroll the track); fonts Cormorant Garamond + Jost; GeneralContractor +
FAQPage JSON-LD.

## What was added

| Ask | Built |
|---|---|
| "accordion" | **The colonnade opens**: the four town arches are one flex row; hover, focus or click opens a bay (flex 2.3), the others narrow and dim; when nobody is touching it the bays take turns every 3.8 s while the section is in view; closed bays set the town at 23 px and collapse their copy so every arch keeps one baseline; even bays sit 56 px lower until they open (the stagger from pass 02, now a lift). Static two-up grid under 861 px and under reduced motion |
| "horizontal movements of cities" | The place-name marquee stays under the colonnade; the hero chip now reads "Serving <em>Mount Pleasant</em>" and takes the four towns in turn every 2.8 s |
| "sliders" | **The work slider**: eight frames in a scroll-snap track that bleeds to the right edge (the arch frame first), round prev / next buttons, mouse drag, arrow keys, and a crimson progress rule that tracks the scroll. No before/after drag pair: the library has no verified same-frame pair, and a drag reveal would claim one |
| The window in section III | **A wide Palladian arch (16:11) plays a 16 s four-beat sequence built from the page's own stills**: the marsh aerial pulls back (the window opening), the hero house crossfades in and the camera pushes in toward the door (scale 1 → 1.48 about the door), two dark door panels with an amber seam appear and slide apart, the great room with the porch and the same marsh drifts, a dip to black closes the loop. A beats list under the heading lights each stage. Under reduced motion the pane rests on the room. A muted `<video class="pane-video">` slot with `data-src` replaces the sequence once the rendered clip exists |

## The rendered clip (not started)
Recipe `hero-loop` adapted: silent 15 s walk-through, Seedance 2.5 omni_reference, 1080p 16:9, the hero still as the
reference so the house in the clip is the house on the page. Quote 2026-09-26: **180 credits** (10 s: 120), balance
915. Job folder `Ram Construction/assets/video/jobs/2026-09-26-charleston-window/` (prompt.txt, job.json). Awaiting
Rohan's yes; the CSS sequence is the page's fallback either way.

## Score: 90 / 100 (unchanged; motion added, nothing removed)
Rows 1–9 as pass 02. Row 10 re-verified with the accordion, slider and window in place. The page gained 267 px over pass
02 (the window pane and the slider's fixed height); still under pass 01.

## Three voices
- **Creative director:** the door beat is the weakest frame (two flat dark panels); a rendered clip of a real door
  will replace it, and that is the right order. The colonnade's first render had the open bay's arch 15 px lower than
  the closed ones (its copy pushed the row down); a fixed row height fixed it. The hero chip's cycling town first sat
  4 px below its label because the chip row centred its items; baseline alignment fixed it.
- **Buyer:** the window is the first thing on the page that shows what "walk it before we build" means. The slider's
  progress rule tells me there is more to the right; the arrows are where I expect them.
- **Ceiling brand's art director:** the accordion taking turns on its own is the one motion that could read "busy";
  it is slow (3.8 s) and stops the moment a cursor arrives. Keep it slow.

## Lovable
Project "RAM Construction Charleston" created 2026-09-26 in Hashvi's workspace from the public comp repo
(github.com/bytezeroinc-cloud/ram-charleston-comp): id `311f3cd5-c2e8-4f92-aa60-9791bb97bead`. The agent fetched
the tarball, wrote its plan, was told to proceed, and finished at commit `231a6d2` (about 4.3 credits): the comp's CSS verbatim in `src/styles/charleston.css`, the markup in `src/content/charleston-home.html` with `/img/` paths, the FAQ injected from one constant, all 57 assets in `public/img/`, the behaviours as one React hook, both JSON-LD blocks, fonts and meta as the comp. Its own checks: no overflow at 1440 / 1181 / 860 / 390, menu exercised at 390, hero compared to the render. Our check: the project screenshot matches the comp's hero to the pixel; the preview URL needs a Lovable login (visibility `workspace_edit`), so a full-page capture from here was not possible. Auto-named "Charleston Charm Builder"; rename to "RAM Construction Charleston" in the editor. Not published.
