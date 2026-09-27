# Pass 16 · SEO and content cleanup (headings, promises, links)

Date 2026-09-26. Design unchanged: layout, palette, imagery, type, section order and panels as pass 15. Backup of the previous state: `index.pages01-pre-seo.html.bak`, `css/charleston.pre-seo.css.bak`.

## What changed

1. Composite headings: the small descriptive label and the display line share one H1 (hero) or H2 (eight sections) in separately styled spans (`.hx`), folio numerals `aria-hidden`, a screen-reader-only separator between the two parts. Same pattern on the inner pages' heros and section heads.
2. Labels: Custom home builder · Charleston, SC; About RAM Construction; 3D home walk-through; Custom homes & renovations; Where we build · Charleston; Building on the coast; Our design-build process; RAM homes in Charlotte; Begin a home · contact us. All hold one line at 390.
3. Services: the panel carrying the H2 comes first in the source; CSS `order` keeps it on the right. The three ledger benefits are styled paragraphs, not H3s.
4. Promises: "exactly as it will be delivered" → "so you review the design before it is built"; walk-through lede now about reviewing the proposed design; "builds exactly what you approved" → "builds the home you approved"; the one-business-day and within-the-week promises removed everywhere; warranty on About and Questions qualified as RAM's Charlotte contract terms.
5. "More questions" link from every door with questions to the Questions page.

## Checks

Heading order H1 → H2 → H3, one H1 per page; page 40 px taller at both widths (the link); no wraps, no overflow; link focusable; before/after crops in the session's scratchpad matched pixel for pixel outside the label text.

## Not changed

Metadata (the Contact description still says "one business day"), and no new service pages. Both are the next pass, along with the facts RAM owes: number, domain, license, warranty coverage, response time, change-order policy, timing ranges.
