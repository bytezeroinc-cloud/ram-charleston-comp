# Pages 01 · About, Questions, Contact and the four towns

Date 2026-09-26. Design of record for the inner pages: pages-01. Homepage unchanged in appearance (pass 15, 9,921 px at 1440), but its CSS and script now live in `css/charleston.css` and `js/site.js` so every page shares one chrome.

## The ask

Rohan: *"Lets build an About us, FAQ, Contact us and where we build pages of the towns."*

## How the pages are made

`build_pages.py` reads index.html for the SVG sprite, masthead, mobile menu, contact form and footer, rewrites the homepage's section anchors to `index.html#…` for the inner pages, and writes seven files: `about.html`, `faq.html`, `contact.html`, `mount-pleasant.html`, `isle-of-palms.html`, `sullivans-island.html`, `daniel-island.html`. Page-only components live in `css/pages.css`. Re-run the script after any change to the homepage chrome.

Shared components, all from the homepage's language: the eyebrow with folio, the arch photograph, the three-fact ledger, the survey rail (here on a light ground with every row open), the door with the phone, the questions and the form, and the colophon footer.

## The pages

| Page | Opens with | Then | Closes with | 1440 height |
|---|---|---|---|---|
| About | Portrait arch (the woman on the piazza), "Twenty years in Charlotte. A new chapter on the coast." | Ledger of three verified facts; the RAM way beside a real Charlotte home; three Charlotte photographs; the Charleston division with a facts table and the five marks | Door with three RAM questions | 5,879 |
| Questions | Living-room arch (the photograph that left the homepage in pass 15), "Before you call us." | Sticky index beside four ruled groups, 19 questions | Door, "Still a question? Ask it here." | 4,604 |
| Contact | The door as the page: phone, write / meet / then, the form | The four towns as arch cards | Footer | 2,583 |
| Mount Pleasant | Oak-drive arch, "drawn around the oaks" | Four conditions on the rail with the Old Village street and the house between oaks; ledger of what RAM does here; nine neighbourhoods; links to the other towns | Door with three town questions | 5,221 |
| Isle of Palms | Elevated beach house, "raised above the dune line" | Beachfront lines, Wild Dunes, pilings, water on the lot; the dune boardwalk and the piazza rail | Door | 5,086 |
| Sullivan's Island | Island cottage, "to the island's measure" | Design Review Board, size against the lot, the historic cottages, harbour and ocean; the station cottage and the squall | Door | 5,110 |
| Daniel Island | Waterfront home at sunset, "to the plan of the place" | The ARB, the rules of the house, Daniel Island Park, the water's edge; the Wando dock and the creek aerial | Door | 4,998 |

Phone heights run 4,435 (Contact) to 10,652 (About); no page scrolls sideways at 390.

## Truth

Every town rule on the pages was read from its source before it was written, and each rail row names it:

- Mount Pleasant: protected trees at 16 inches, historic trees and live oaks at 24 inches, tree protection zones of one foot per inch (Town zoning code §156.702, §156.705); the Historic District Preservation Commission's scope and the staff meeting before a COA (Old Village guidelines); "much of the Old Village is located within flood zones" (same guidelines).
- Isle of Palms: the state baseline and setback line (S.C. Code §48-39-280; SCDES jurisdictional lines, 2018); Wild Dunes' permit, twice-monthly board and the six-inch tree survey (WDCA standards); pervious hardscaping and the 625-square-foot drainage rule (City zoning flowchart, 2020).
- Sullivan's Island: the seven-member Design Review Board and its monthly meeting; principal building coverage at 15 percent on lots of 15,000 square feet and over, the square-footage formula and the board's modification allowance (§21-25 to §21-27, §21-52); foundation height as a design standard; "Traditional Island Resource" and "Landmark" classes (DRB applications).
- Daniel Island: the ARB's reach and the five guideline sets; roof pitch 8:12 to 12:12, crawl-space foundations, home sizes and build-to lines (DICA guidelines); registered architect and landscape architect in the Park, garages de-emphasised, oversized homes not approved, marsh-front visual buffer (DIPA guide).
- RAM: founded 2004, in-house architects, building specialists and designers, budget set early before plans are final, the lead designer's 3D model approved by a structural engineer, the 10-year Quality Builders Warranty backed by Liberty Mutual, SouthPark to Dilworth (ramconstructioninc.com, About, Process, The RAM Way).

Placeholders, as on the homepage: the 843 number, the `ramconstructionsc.com` email and domain, and the SC license number ("listed at launch"). No street address for the Charleston division. No names, no testimonials, no invented figures. Generated Lowcountry scenes are declared once in the footer of every page; the seven photographs of real RAM homes carry "Charlotte" captions.

## Images

Seven new webp sizes from existing 2K originals (town heroes, the portrait, the living room, the piazza) and four new scenes generated at 2K, 4:5: the Old Village street, the dune boardwalk, the station cottage and the Wando dock. All are declared illustrative by the footer line.

## Checks

- Masthead: five items plus phone plus button hold one line at 1440; `aria-current` marks the open page in the bar and the menu.
- Every page: no horizontal overflow at 1440 or 390; fonts loaded; lazy images complete.
- Links: homepage nav, menu, footer and town cards point at the pages; inner pages point back at the homepage sections; `#faq` and `#door` still resolve on the homepage.
- JSON-LD: WebPage with breadcrumbs on the towns, AboutPage, ContactPage; FAQPage is built from the visible questions on any page that has them and skipped where there are none.

## Score

Not rescored as a system; the homepage stays at 91. The pages inherit its register and add nothing that would move a rubric row. The weakest page is Contact, which is a door with a towns row beneath it, and that is what a contact page should be.

## Open

- Lovable: unsynced (credits). The port now needs routes for seven pages and the shared stylesheet; one message from the asset repo covers it.
- From RAM: the 843 number, the domain, the SC license number, team names and portraits if they want a people section, and Charleston project photography as homes complete.
