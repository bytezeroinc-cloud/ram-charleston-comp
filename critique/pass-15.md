# Pass 15 · arches on the coast, one closing section, marks in Where we build, a shorter page

Date 2026-09-26. Design of record: pass 15. Backup of the previous state: `index.pass14-datum.html.bak`.

## The ask

Rohan, four things in one message:

1. *"You're missing the arch there in the images. everyone loved the arches."* (the coast scenes, shown as a full-bleed rectangle in pass 14)
2. *"combine these two sections: Questions and Begin a home. show Phone number and content section on the left, show FAQ under it, and then on the right show the form. keep the background as it is in the current image."*
3. *"take: Built to RAM's standard, backed by the same marks as Charlotte. logos into the section in where we build."*
4. *"We need to find ways to shorten the page a little while keeping the content and images."*

## What changed

### 1. The coast scenes sit in a fanlight

The photograph column is now one arch, `border-radius: var(--arch)`, inset 56 px from the top and from the page's wrap edge on the left, standing on the section's floor. At 1440 the arch is 780 wide with a 390 px semicircle over a 346 px straight run: the fanlight the system is named for, at section scale. The head (eyebrow, H2, lede) sits inside the arch base over its scrim; the right-hand fade into the rail is gone because the arch edge does that work. Phones get the same arch at 4:5 inside 16 px gutters. Section height eased from 92svh to 88svh.

### 2. Questions folds into Begin a home

The FAQ section (alabaster tint, arch photograph + list) is gone. Its six questions now sit under the phone number in the left column of the door, on the same Daniel Island photograph and scrim as before, ruled in `--rule-lt`, the plus marks amber, the open mark filled amber. A small-caps label "Questions / before you call" separates the phone block from the list; `id="faq"` stays on that block so the menu and footer links still land. The form keeps its arch crown and is now `position: sticky; top: 96px`, so it stays beside the questions as they are read. Folio VIII "Begin a home"; there is no IX.

Lost in the merge: the open-living-room arch photograph that sat beside the questions. Every other image on the page is kept.

### 3. The marks join Where we build

The credentials band (its own black section, 60 px padding each side) is now a ruled row inside section IV, under the colonnade and above the town marquee: the sentence in Cormorant 25 px at left, the five plates at right, one hairline above. Same ground, so nothing visibly changed but the seams.

### 4. Shorter

| Width | Pass 14 | Pass 15 | Saved |
|---|---|---|---|
| 1440 | 10,759 px | 9,921 px | 838 px |
| 390 | 17,497 px | 16,780 px | 717 px |

From the merge (about 560 px), the credential row (about 100 px), and paddings trimmed from 120 to 100 on process, work and areas, chapter top 130 to 110, section heads 56 to 48, marquee gap 84 to 56.

## Checks

- 1440 × 900: coast 792 px, areas 1,352 px with the marks row, door 1,236 px; no horizontal overflow.
- 390: coast arch and rail, door with copy, phone, six questions then the form; a first cut put the form's crown at the top of the section because the phone rule made the form `static` (the crown is absolutely positioned inside it); fixed with `position: relative`.
- The coast rail label is shortened to "What the lot asks" on phones so it holds one line.
- Anchors: `#faq` and `#door` both resolve; header, menu, footer and CTA links unchanged.

## Score

91 / 100, unchanged. D3 (rhythm) would have dropped one for the third owner-directed arch device on the page and D7 gains it back: the questions now sit next to the form and the phone, which is where a buyer reads them. Standing deductions unchanged: placeholder 843 number, generated place scenes.

## Lovable

Not synced. Workspace still out of credits; passes 11 to 15 go together in one message from the asset repo.
