# Gladstone Structure Map

Observed live on gladstoneadvertising.com (Sept 2026, desktop 1440 wide). This documents the
*system* only — no copy, code, logo or assets are reused. Sections 1–9 are observations; the
final section maps each pattern to its Parlour equivalent.

## 1. Global chrome
- **Header:** sticky, wordmark left, single hamburger right at every width. No inline nav.
  Sits over the hero video, then over a warm-grey page.
- **Menu overlay:** full-screen list — Work, About, Immersive (badge "New!"), News, Careers, Contact —
  plus both office addresses.
- **Type:** one grotesque (Inter, weight 300 body / 500 headings), a text serif for project
  titles and page statements, and a **monospace uppercase** for labels, chips and the marquee.
- **Palette:** warm light grey page (`#e3e2e1`), black type, charcoal (`#333`-ish) dark bands,
  white type on dark. Colour comes only from photography.
- **Footer:** big "Immersive" sub-brand promo, both offices with phone numbers, social list,
  Careers / mailing list / playlists, © + privacy. Very quiet.

## 2. Homepage sequence
1. **Full-bleed muted looping video** (100vh), nothing over it but the header.
2. **Intro statement** (40px, medium) — who they are, one paragraph of capability below.
3. **"Our Work" index** — a *typographic list*: each row is a huge serif project title (grey),
   hairline rule beneath, client name small at the far right. Only ~6 rows.
   **Hover:** row title darkens; a floating image (and a slash-separated discipline list)
   fades in beside the cursor/row.
4. **Marquee ticker** — mono uppercase "• ADVERTISING AGENCY • PRODUCTION COMPANY • DESIGN STUDIO",
   endless horizontal scroll, on the dark band edge.
5. **Dark band:** one paragraph of philosophy + "Select Clients" logo wall.
6. **Latest News & Press:** three dated rows (date, headline, View).
7. **Sub-brand banner** (Immersive / rendering division).
8. Footer.

## 3. Work page (`/work`)
- Serif statement paragraph (~40px) with a small icon at the end.
- **Filter:** "Industry" mono pill chips (ALL, BEAUTY, CHARITY, CORPORATE, FOOD & BEVERAGE,
  LIFESTYLE, REAL ESTATE) and a **Thumbnail / List** view toggle.
- **Thumbnail view:** two-column grid of large, uncropped-feeling images (approx 16:10), title
  and client beneath, discipline list in mono.
- **List view:** the same typographic index as the homepage.
- ~20 projects; industry is the only filter, disciplines are display metadata.

## 4. Project page (`/project/[slug]`)
- Full-width banner image/video at the top, page background otherwise.
- **Two-column head:** left = serif title + "CLIENT / name"; right = one-line tagline (sans, ~24px)
  + mono slash-separated discipline list (`BRANDING / STRATEGY / DESIGN …`).
- **One paragraph** of narrative (what the client asked, what was made, outcome).
- Then a **very long stack of full-width media** (~29,000px page): stills, video embeds,
  brochure spreads, renders — almost no text between them.
- **Previous / Next** project links, then footer. Scroll-reveal (AOS-style) on media.
- No metrics, testimonials or credit blocks on the observed pages: the work carries the proof.

## 5. About
- Large monochrome team photograph at the top.
- Serif statement with **highlighted key words** (marker-style background).
- **Anchor chips** (About us, Our philosophy, Services, Our team, Awards) jump to sections.
- Services as grouped lists (Creative Advertising, Print, Digital, Multimedia, Immersive).
- **Awards** listed by year, body, category, project — dense, plain text.
- Team grid.

## 6. News
- Dated list linking to press articles (external publications and on-site posts).

## 7. Immersive (sub-brand)
- Standalone landing page for a division, promoted from the nav and the footer.

## 8. Contact
- Addresses/phones for both offices; simple form.

## 9. Interaction & responsive notes
- Motion is restrained: media reveal on scroll, hover-image on the work index, header fade,
  endless mono marquee. No parallax gimmicks; the video hero carries the drama.
- Header/hamburger identical on mobile; index titles scale down and wrap; thumbnail grid
  collapses to one column.
- Performance is modest (WordPress, jQuery, slick, fancybox, many trackers) — we should be lighter.

---

# Mapping to Parlour

| Gladstone pattern | Parlour equivalent |
|---|---|
| Full-bleed muted looping hero | Blue Ocean aerial loop (own footage), poster fallback, reduced-motion → poster |
| Wordmark + hamburger, full-screen overlay | Same structure. Overlay lists Work · About · Services · Site-to-Sales · Growth Diagnostic · Insights · Contact + Belize contact details |
| Intro statement + capability paragraph | Approved positioning line + one sentence; no long explanation |
| Typographic "Our Work" index with hover image | Same mechanic on the homepage and Work list view. Only published case studies; rows show title, client, sector/location, year |
| Mono marquee "AGENCY • PRODUCTION • STUDIO" | Mono marquee "POSITION • EXPRESS • PERFORM • SELL" (approved line) |
| Dark band + "Select Clients" | Dark forest band: proof numbers from the Claims Register + client names (text only — no logos supplied) |
| Latest News | Insights teaser — **hidden until ≥1 real article** (empty state on `/insights`) |
| Sub-brand promo (Immersive) | **Growth Diagnostic** promo — Parlour's signature entry offer, "Find the leak" |
| Work page: statement + Industry chips + Thumbnail/List | Same. Chips generated from real data: Real Estate, Founders, Construction & B2B, Heritage (Hospitality hidden until a case exists) |
| Project page: banner, title/client/disciplines, tagline, paragraph, media stack | Same template, plus an editorial data block below the media (challenge, approach, what changed, metrics with pending states, credits, source) — Parlour must show commercial proof, Gladstone doesn't |
| Previous / Next | Same |
| About: photo, statement w/ highlighted words, anchor chips, services lists, awards | Same shape. Awards → **omitted** (none supplied). Team → Laura + Andre with accurate Artform attribution; Heritage list |
| Contact with offices | Belize base, WhatsApp, qualifying form |
