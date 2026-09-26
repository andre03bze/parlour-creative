# Project Inventory

Engineering reference for the case-study system (`src/content/case-studies.ts`). Full
claim-level sourcing is in `CLAIMS-REGISTER.md` — this file is the compact index:
slug, bucket, publish status, and what's real vs. placeholder. Read this before
re-deriving anything from the playbook.

| Slug | Client | Bucket | Attribution | Status |
|---|---|---|---|---|
| `blue-ocean-belize` | Blue Ocean Belize | Development & Real Estate | Parlour | **Flagship — ready to publish** |
| `caves-branch-river-estates` | Caves Branch River Estates | Development & Real Estate | Parlour | Ready to publish |
| `offi-belize` | Offi Belize | Development & Real Estate | Parlour | Ready to publish |
| `stelcor-solutions` | STELCOR Solutions | Construction & B2B | Parlour | **Published** (approved 2026-09-25); no imagery/metrics yet — labelled media slot |
| `stephen-mater` | Stephen Mater — (im)possible pursuit | Founders & Personal Brands | Parlour | Ready to publish (narrative only, no metrics yet — started Sept 28, 2026) |
| `laura-artform` | (multiple, see below) | Heritage | **Laura — Artform** (historical, not Parlour) | Ready to publish, text-first (no media files supplied) |

Hospitality bucket: **no case study exists.** Per playbook: render the Hospitality
page's proof section as an honest empty state, not a placeholder card.

## Artform heritage sub-projects (all under one `laura-artform` case study, grouped by sub-bucket)

| Sub-bucket | Clients | Work type |
|---|---|---|
| Real estate & development | Forgestone Capital, Avenue & Park, The HUB at 30 Bay, Freed Developments | Real estate branding and sales environments |
| Broadcast & media | CBC News, Rogers Sportsnet, Rogers Sports & Media, TVO / The Agenda, Blue Jays / Budweiser, Furze World Wonders | Broadcast design and sets, media environments, broadcast advertising |
| Food & beverage | LCBO, Aquamiel Tequila, Alida Tequila | Branding and communications |
| Hospitality & experiences | Karl Lagerfeld hotel partnership + Toronto Fashion Week, Muskoka Bay Club, DSquared² × Fashion Television | Marketing and build for a Toronto hotel tied to Fashion Week; resort/event work |

Render as one Heritage case study page with four sections (matching sub-buckets
above), each tagged **"Laura — Artform"**, never "Parlour." Link from Laura's About
bio. No individual project pages per client (source material doesn't support that
level of individual detail) — see `CLAIMS-REGISTER.md` for exactly what's confirmed
vs. not.

## Case-study data shape

Following the brief's schema (§18), trimmed to what's actually populated:

```ts
interface CaseStudy {
  slug: string;
  bucket: "development-real-estate" | "hospitality" | "founders" | "construction-b2b" | "heritage";
  attribution: "parlour" | "laura-artform";
  client: string;
  location: string | null;
  sector: string;
  since: string | null;
  services: string[];
  headline: string;
  challenge: string;
  approach: { position: string; express: string; perform: string; enableSales: string };
  whatChanged: string[];       // bullets — only include if a real bullet exists
  metrics: { label: string; value: string | null }[]; // value: null renders as pending
  testimonial: { quote: string; name: string; title: string } | null;
  sourceNote: string | null;   // e.g. "Source: cavesbranchriverestates.com"
  featured: boolean;
}
```

Do not add speculative fields (drone footage counts, awards, etc.) beyond what a real
project actually has data for — the brief's own rule 3 ("no half-finished
implementations").


---

## Update 2026-09-25 — full portfolio

The "Heritage / laura-artform" bucket and page are **retired**. The 33 projects from artform.com are regular Parlour case studies:
see `ARTFORM-PROJECT-INVENTORY.md` for the per-project inventory. `/work/laura-artform` now 301-redirects to `/work`.
Buckets: Real Estate · Broadcast & Media · Food & Beverage · Fashion & Retail · Founders (+ Hospitality / Construction & B2B, hidden until populated).

**Taxonomy update:** the single "bucket" is replaced by multi-label categories (Real Estate, Spaces & Design-Build, Broadcast & Media, Sports,
Events & Experiences, Food & Beverage, Fashion & Retail, Editorial & Publishing, Founders & Personal Brands) plus a documented-market field
(Belize / Canada). Full mapping and market policy: `ARTFORM-PROJECT-INVENTORY.md`. Work filters are deep-linkable: `/work?category=…&market=…&view=list`.
