# Gladstone Structure Map

Status: **Gladstone research blocked.** `gladstoneadvertising.com` is denied by this
environment's network egress proxy, and no browser tool (Claude_Browser,
Claude-in-Chrome, remote-devices) is available in this session. Waiting on the user to
widen network access (environment menu → Edit → Network access) or supply the content
directly. Do not fill in the "Gladstone" column below from memory/training data —
leave it blank rather than guess. See CONTENT-GAPS.md.

**Do not read this file's Gladstone section as verified until the "Status" line above
is updated to confirm live research was done.**

## Step 1 — Current Parlour implementation, audited against the brief's complaints

The brief's diagnosis of the current build (session commit `f40d00a`): "behaves more
like a conventional premium agency landing page — large positioning statement,
explanatory copy, CTA buttons, process statement, proof strip" rather than work-first.
Auditing `src/app/page.tsx` confirms this precisely. Current homepage sequence:

1. Top bar (strategy-led tagline)
2. Hero — headline + subhead + 2 CTAs (no imagery, no work)
3. Proof bar (text only)
4. "Built for" — 4 text bullets
5. **"The problem"** — 4-item text explainer (Position/Alignment/Momentum/Conversion)
6. Featured work — ONE project, appears 5th, after two rounds of explanatory text
7. "One connected system" — 4-item framework, text only
8. "What Parlour runs" — 6 capability tiles, text only
9. Two sectors (Real estate / Hospitality) — text + 2 buttons
10. "From site to sales" — text + 4 short points
11. "How we work" — 5-step process, text only
12. "Ways to work with us" — pricing-tier list
13. Leadership — text + placeholder portraits
14. Region — text
15. Final CTA

**Diagnosis matches the brief exactly:** identity → long explanation (steps 3–5) →
one piece of work buried at position 6 → more explanation (7–12) → team → CTA. This is
the "Identity → long explanation → services → process → CTA → eventually work" pattern
the brief explicitly says to replace with "Identity → Work → Proof → Capability →
Commercial story → Contact." Work appears once, sixth, with a placeholder image (Blue
Ocean has no photography yet) — it is not the heart of the page.

Current `/work` page (audited separately): actually already closer to right — large
imagery-led grid, minimal copy, filter pills, metadata per card (client/location/
sector/services). This page's underlying pattern (card = image + title + metadata,
grid = the content) is likely reusable/extendable once Gladstone's exact card/grid
proportions and hover behavior are confirmed — do not rebuild `ProjectCard` from
scratch, adapt it.

Current nav: `Work · Real Estate · Hospitality · Founders · About · Contact` — sector
pages in primary nav, no Services/Insights/Growth Diagnostic in nav (they exist as
routes, reachable only via footer/CTAs). Brief's target nav: `Work · About · Services /
Capabilities · Insights / News · Growth Diagnostic · Contact` — a different shape
(disciplines instead of sectors in primary nav). **This needs Gladstone's actual nav
item count/order to finalize — noted as open pending research.**

Current case-study template (`/work/[slug]`): sidebar (services) + content column,
challenge/approach/what-changed/metrics/gallery in sequence. Reasonably close to
"editorial project page" already; likely adapt rather than rebuild once Gladstone's
project-detail hierarchy is confirmed.

Reusable as-is regardless of what Gladstone research finds (business logic, not
structure): `src/content/case-studies.ts` (data model + all 6 projects), source-of-truth
docs (`CLAIMS-REGISTER.md` etc.), the copy itself (already Parlour's own voice, not
Gladstone's), the real Caves Branch photography, the contact form/API route, SEO
plumbing (sitemap/robots/JSON-LD).

Needs rebuild once Gladstone map is confirmed: homepage section sequence and ratio of
work-to-explanation, nav shape, and whatever visual/motion patterns the live research
surfaces that the current v1 design system didn't anticipate.

## Step 2 — Gladstone homepage structure

*(pending — blocked, see Status above)*

## Step 3 — Gladstone navigation

*(pending)*

## Step 4 — Gladstone Work architecture (grid, cards, filtering)

*(pending)*

## Step 5 — Gladstone project/case-study detail page

*(pending)*

## Step 6 — Gladstone services/discipline & sector relationships

*(pending)*

## Step 7 — Gladstone About, News, Immersive, Contact, footer

*(pending)*

## Step 8 — Interaction/motion patterns observed

*(pending)*

## Gladstone → Parlour mapping

*(to be completed once the sections above are filled in from live research)*

| Gladstone pattern | Parlour equivalent |
|---|---|
| Gladstone Work | Parlour Work |
| Gladstone project | Parlour case study |
| Gladstone discipline | Parlour service |
| Gladstone industry | Parlour sector (Real Estate / Hospitality / Founders) |
| Gladstone company/about | Parlour About |
| Gladstone CTA | Parlour "Start a conversation" / Growth Diagnostic |
