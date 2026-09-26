# Site Architecture

Two source documents partially disagree on scope: the Website Brief (§16) sketches an
expansive IA (Services with 7 sub-areas, Approach, Insights, Belize, per-industry
pages, regional pages...); the Growth Playbook's "Website copy" tab is a concrete,
ready-to-ship copy deck for a leaner site (`Work · Real Estate · Hospitality ·
Founders · About · Contact`) — and the playbook is the more recent, more specific,
Andre-authored source. Resolution: **build the playbook's concrete pages verbatim
where it gives copy; use the brief's structure only where the playbook doesn't
cover something and the brief's own ambition is well supported by real content.**
Rule 34 ("keep the nav minimal") and rule 25 ("no thin doorway pages") govern every
judgment call below.

## Primary nav (matches playbook exactly)

`Work · Real Estate · Hospitality · Founders · About · Contact` + `Book a call` button.

## Full route map

| Route | Source | Notes |
|---|---|---|
| `/` | Playbook homepage copy, verbatim sections | Hero, proof bar, built-for, problem, featured work, one connected system, two sectors, from-site-to-sales, how we work, ways to work with us, leadership, region, final CTA |
| `/work` | Playbook "Work (New)" | Filterable grid: All · Development & Real Estate · Hospitality · Founders & Personal Brands · Construction & B2B · Heritage. Hide a filter with zero case studies (Hospitality, at launch) |
| `/work/[slug]` | `src/content/case-studies.ts` | One template, all case studies (see `PROJECT-INVENTORY.md`) |
| `/real-estate` | Playbook "Real Estate (New)" | Includes brokerages/agents as a sub-section (playbook doesn't split it into its own nav page) |
| `/hospitality` | Playbook "Hospitality (New)" | Empty-state proof section until a hospitality case study exists |
| `/founders` | Playbook "Founders (New)" | Founder Story offer + Stephen Mater as proof |
| `/about` | Playbook "About (Change)" | Laura + Andre bios, links to `/work/laura-artform` |
| `/contact` | Playbook "Contact (Change)" | Qualifying form per brief §33 |
| `/growth-diagnostic` | Playbook offer table + Brief §21 | Dedicated page for the $4,500 entry offer — it's the site's primary conversion path ("Start here"), earns its own URL for SEO + ad landing |
| `/approach` | Playbook "From site to sales" + "How we work" homepage sections, expanded | Brief §15 asks for the Site→Sales framework to have a real home beyond the homepage strip; content is the same verbatim material, just given room |
| `/services` | Brief §20 taxonomy (Strategy/Brand/Creative/Digital/Performance/Experiences/Project Coordination), written by me in Parlour's voice from that taxonomy — no results claims, service-menu only | Playbook's homepage "Capabilities" section says "keep the six descriptions" from the old WordPress site, but that copy wasn't supplied — see `CONTENT-GAPS.md`. `/services` supersedes needing that lost copy |
| `/belize` | Playbook "Region (New)" homepage section, expanded | Light at launch — see `CONTENT-GAPS.md` |
| `/insights` | Brief §28 | Index route + content model built; **no articles ship at launch** (none were supplied, and rule 25/56 forbid thin/fake content) — not in primary nav until it has ≥1 real article |
| `/privacy`, `/terms` | Standard boilerplate, honest (no fabricated certifications/DPO contact) | Required by the contact form collecting personal data |
| `/sitemap.xml`, `/robots.txt` | Generated | Excludes `/insights` while empty |

## Explicitly not built (per brief's own rules)

- Regional landing pages (Mexico, Costa Rica, Panama, Colombia, Argentina, Uruguay) —
  brief rule 25 forbids this until there's real content; playbook's own market-tier
  table puts these at "2027" earliest.
- A separate `/brokerages` nav page — folded into `/real-estate` (matches playbook).
- Individual Artform per-client pages — one Heritage case study, four sections (see
  `PROJECT-INVENTORY.md`).

## Case-study routing

`/work/[slug]` reads from `src/content/case-studies.ts`. Heritage renders with a
visoff differentiator (see `DESIGN-SYSTEM.md` — a persistent "Laura — Artform,
historical" label, never the Parlour attribution pill).


---

## v2 update — Gladstone-structured rebuild

- **Navigation:** wordmark + single Menu overlay: Work · About · Services · Site to Sales (`/approach`) ·
  Growth Diagnostic · Contact. Sector pages (Real Estate, Hospitality, Founders, Belize) are secondary links in the
  overlay and footer. **Insights** joins the menu when the first real article exists (page + model are built).
- **Homepage order:** film hero (identity) → Work index → marquee → proof band → Site to Sales → sectors →
  Growth Diagnostic → people/region. Work appears immediately after the hero.
- **Work:** `/work` = statement + Industry chips + Thumbnail/List. `/work/[slug]` = Gladstone-style project page,
  data-driven from `src/content/case-studies.ts` (new fields: `tagline`, `disciplines`, `cover`, `heroVideo`, `sequence`).
- **Site to Sales path (canonical):** Site → Strategy → Brand → Story → Experience → Distribution → Sales — single source `siteToSales` in `src/lib/site.ts`; "Digital" survives only as a services discipline on `/services`.
- CBRE is a case study only; no CBRE routing/components are reused.
