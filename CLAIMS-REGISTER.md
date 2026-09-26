# Claims Register

Every factual claim (client name, number, credential, date) that can appear on the
public Parlour Creative site is logged here first, tagged with a status. This is the
same discipline the `caves-branch-river-estates` repo uses (its `SOURCE-OF-TRUTH.md`),
adapted for a marketing-agency site with many smaller claims across many case studies
rather than one entity's structured facts.

## Statuses

| Status | Meaning |
|---|---|
| **VERIFIED** | Backed by a document (the Growth Playbook, the Website Brief) or independently cross-checked against a live, owned source (e.g. the CBRE repo's own published facts) |
| **PROVIDED** | Stated directly by Andre/Laura in the supplied documents, no separate backing document |
| **NEEDS_VERIFICATION** | Plausible, mentioned as a draft/placeholder in source material, explicitly flagged `[...]` or "to confirm" | 
| **UNKNOWN** | Not in source material at all |
| **HELD_BACK** | Confirmed true, but the playbook says not to publish it (e.g. Stephen Mater's founding-client rate) |

**Publish rule:** only `VERIFIED` or `PROVIDED` claims render as real values. Everything
else renders as an honest placeholder/empty state (see each case study's "what's
missing" list) — never a guess.

**Sources are:** the Growth Playbook (`source-material/growth-playbook.txt`), the
Website Brief (this session's task text), Andre/Laura directly, or a repo Andre owns
(`caves-branch-river-estates`) that I have direct read access to. Third-party sites,
web search, or AI-generated answers are never a source for a Parlour fact.

---

## Company / positioning

| Claim | Status | Source |
|---|---|---|
| Line: "We turn places into brands people want to belong to, and into sales, enquiries and bookings." | PROVIDED | Playbook, Positioning |
| Positioning statement (site-to-sales, senior-led partner) | PROVIDED | Playbook, Positioning |
| Goal: 3–5 retainers at $5,000+/month by Dec 31, 2026 | PROVIDED | Playbook (internal — not for public site) |
| Based in Belize, serving the Americas | PROVIDED | Playbook |
| Voice: "Intelligent. Distinctive. Commercial." | PROVIDED | Playbook, "How we sound" |
| Never-say list (full-service, 360°, turnkey, passionate team, world-class, etc.) | PROVIDED | Playbook, "How we sound" |
| Company legal/registered address | UNKNOWN | — |
| Awards / press credentials | UNKNOWN | None supplied — do not publish any |

## Leadership

| Claim | Status | Source |
|---|---|---|
| Laura Curridor — 8 years in Toronto, rose to Director of Marketing (the Artform-era work is Parlour's portfolio; see amendment below) | VERIFIED (credential) / wording NEEDS_VERIFICATION | Playbook; Andre 2026-09-25 |
| Laura's public title: "Founder, CEO & Chief Strategy Officer" | VERIFIED | Playbook — explicitly resolved (☒) over the alternate "Founder & Marketing Director" |
| Laura embedded senior marketing roles across Belize incl. Blue Ocean Belize, Offi Belize, STELCOR Solutions | PROVIDED | Playbook, About copy |
| Andre Acosta — Creative & Strategy Director | PROVIDED | Playbook, throughout |
| Andre — founder of Tide and Co (his production company) | PROVIDED | Playbook, About copy |
| Andre — 120+ production hours, 14 videos, one period, for Blue Ocean | PROVIDED | Playbook (repeated 3×) |
| Andre's pre-Parlour background / notable clients beyond Blue Ocean | UNKNOWN | Playbook flags this itself: "[Add 1–2 lines...]" |
| Laura email: laura@parlourcreative.ca | PROVIDED | Playbook, email/WhatsApp scripts |
| Phone/WhatsApp: +501 600 8548 | PROVIDED | Playbook, email/WhatsApp scripts |
| Headshots (Laura, Andre) | UNKNOWN (not received) | Playbook open item: "Headshots for Laura and Andre (next week)" |

## Portfolio migrated from artform.com (Parlour work)

**Amended 2026-09-25 (source: Andre — owner instruction).** Parlour existed during the period these projects cover; artform.com was
the domain used at the time. The 33 projects on that site are **Parlour case studies** (Laura owns the site and authorised reuse of all its
content, imagery and video). This **supersedes** the earlier "Artform heritage — historical, not Parlour" classification. Per-project facts are
recorded in `ARTFORM-PROJECT-INVENTORY.md`; only what the source states is published (no invented metrics or outcomes). Factual third-party
credits (Oxford Properties, Stafford Developments, Roswell Construction, hosts, partners) are kept on the project pages.

| Claim | Status | Source |
|---|---|---|
| The 33 listed projects are Parlour work and may be shown as Parlour case studies | PROVIDED | Andre, 2026-09-25 |
| Reuse of artform.com imagery/video/copy on the Parlour site | PROVIDED (Laura, site owner) | Andre, 2026-09-25 |
| LCBO campaigns: "memorable… sales were brisk" | PROVIDED | artform.com/projects/lcbo |
| Kingwest Magazine self-sustaining in year one; ran five years | PROVIDED | artform.com/projects/kingwest-magazine |
| CBC The Hour: Gemini Award (Best Production Design / Art Direction in Non-Fiction Program); eight seasons | PROVIDED | artform.com/projects/cbc-the-hour |
| "Number one in Canada" claim | **DO NOT PUBLISH** | wording/source never supplied |
| Laura's bio wording (eight years in Toronto, Director of Marketing) | NEEDS_VERIFICATION | About copy no longer names a separate firm; confirm final wording with Laura/Andre |

## Blue Ocean Belize (flagship current case study)

| Claim | Status | Source |
|---|---|---|
| Client: Blue Ocean Belize | PROVIDED | Playbook |
| Where: San Pedro, Ambergris Caye and Caye Caulker, Belize | PROVIDED | Playbook |
| Developments: Laguna Bay, Laguna Rio, Laguna Point, Bonefish Bay, Laguna Point Estates | PROVIDED | Playbook |
| Since 2025 | PROVIDED | Playbook |
| Engagement scope (positioning, brands, content, paid media, websites, CRM, sales enablement) | PROVIDED | Playbook |
| 120+ hours of production, 14 finished videos, one production period | PROVIDED | Playbook (repeated) |
| "Two campaign-ready content packages" | PROVIDED | Playbook |
| "20+ disciplines run for Blue Ocean" | PROVIDED | Playbook, "Why Parlour wins" table |
| Lots/residences start around $149,000 | PROVIDED | Playbook, "How to talk about price" |
| Qualified leads/month, cost per lead, lead growth since 2025, launch-period sales | **NOT AVAILABLE** — placeholder only | Playbook explicitly: "[Add: ...]" |
| Client testimonial | **NOT AVAILABLE** — placeholder only | Playbook explicitly: "[Testimonial from Blue Ocean leadership...]" |
| Photography/video/drone assets | UNKNOWN | Not supplied as files |

## Caves Branch River Estates

| Claim | Status | Source |
|---|---|---|
| Location: Franks Eddy Village, Cayo District, 12–15 min from Belmopan | VERIFIED | Playbook; cross-checked against `caves-branch-river-estates` repo's own published location facts |
| 42 individually titled lots, 0.86–1.25 acres | VERIFIED | Playbook; cross-checked against CBRE repo `data.ts` (`totalLots: 42`, `lotSizeRangeMin/Max: 0.86/1.25`, both status VERIFIED there) |
| Four collections: Riverfront Estates, Nature Reserve, Jungle Estate, Mountain View Jungle | PROVIDED | Playbook |
| Prices: US$31,500 (Jungle Estate) to US$115,500 (Riverfront Estates) | PROVIDED | Playbook |
| 7 lots with direct river frontage | VERIFIED | Playbook; cross-checked against CBRE repo (`riverfrontLotCount: 7`, VERIFIED there) |
| Gated entrance; paved + internal access roads | PROVIDED | Playbook |
| Engagement: positioning, brand story, website, content, Google/Meta campaigns, lead capture, Offi distribution | PROVIDED | Playbook |
| Tagline: "Own your place in the wild heart of Belize" | PROVIDED | Playbook |
| 34 of 42 lots available as of September 2026 | VERIFIED | Playbook; cross-checked against CBRE repo (8 sold / 34 available, confirmed 2026-09-18) |
| Total acreage 56.2 | VERIFIED (secondary, not for direct Parlour-site publication unless useful) | CBRE repo `data.ts` |
| Detailed engagement breakdown / results | **DEFERRED to V1.2** | Playbook: "[Details to be built together for V1.2.]" / "[Results to be built together for V1.2.]" |
| Source URL: cavesbranchriverestates.com | VERIFIED | Playbook cites it directly; live in this account's GitHub |

## Offi Belize

| Claim | Status | Source |
|---|---|---|
| Positioning as Belize's central real estate marketplace | PROVIDED | Playbook |
| Engagement: website/platform, market positioning, brokerage participation model, agent/broker outreach, listing acquisition strategy, sales materials, rentals expansion | PROVIDED | Playbook |
| Brokerages/listings onboarded (numbers) | **NOT AVAILABLE** | Playbook: "[Add: ... if shareable]" |

## STELCOR Solutions

| Claim | Status | Source |
|---|---|---|
| ICF (construction/building-solutions) technical product | PROVIDED | Playbook |
| Engagement: corporate/product positioning, ICF marketing, builder/developer outreach, sales materials, international-expansion planning | PROVIDED | Playbook |
| Status | **APPROVED FOR PUBLICATION** — Andre, 2026-09-25 (supersedes the playbook's "needs sign-off"). Published as a normal case study at `/work/stelcor-solutions`; only the documented engagement above is stated |
| Partnerships/projects won | **NOT AVAILABLE** | Playbook: "[Add: ... if shareable]" |

## Stephen Mater / (im)possible pursuit (Founder Story)

| Claim | Status | Source |
|---|---|---|
| Client: Stephen Mater, entrepreneur and endurance athlete, Belize | PROVIDED | Playbook |
| Engagement: documentary storytelling system, monthly long-form episode | PROVIDED | Playbook |
| Channel: (im)possible pursuit, YouTube | PROVIDED | Playbook |
| Started: September 28, 2026 | PROVIDED | Playbook |
| Full narrative (creative bible, two-POV filming, season spine, Episode 1 premise) | PROVIDED | Playbook, full detail |
| Results/metrics (views, subscribers, inbound) | **NOT AVAILABLE until 60–90 days** | Playbook explicitly defers this |
| Stephen's discounted rate (BZ$4,000/mo) | **HELD_BACK — never publish** | Playbook: "Do not publicly show Stephen's special founding-client rate" |
| The David Goggins message / personal details beyond his own channel | **HELD_BACK — never publish** | Playbook explicit instruction |

## Hospitality

| Claim | Status |
|---|---|
| No hospitality case study exists yet | PROVIDED — playbook is explicit: "show the Hospitality page without case studies until one exists" |

## Offers / pricing

All figures below are marked in the playbook as **drafts for Laura to confirm** — the
playbook is explicit that currency (USD vs BZD) is still open. Treat every price as
`PROVIDED` (safe to publish, it's Andre's own draft) but flag currency as
`NEEDS_VERIFICATION` on the actual public copy with a discreet "USD" label per the
playbook's own working assumption (BZD 2 = USD 1, "recent proposals were priced in
BZD"). Full pricing table lives in `CONTENT-INVENTORY.md` (offers section) — not
duplicated here.

| Open pricing question | Status |
|---|---|
| Is the $5,000 floor USD or BZD? | NEEDS_VERIFICATION — playbook flags explicitly, unresolved |
| Local real-estate commission rate (used in "how to talk about price") | NEEDS_VERIFICATION |
| Founder Story exact price ($5,000–$7,500/mo) | PROVIDED but marked "[Laura and Andre to confirm]" in playbook — publish as a range, not a fixed number |

## Contact / social

| Claim | Status |
|---|---|
| laura@parlourcreative.ca | PROVIDED |
| +501 600 8548 (WhatsApp) | PROVIDED |
| Instagram/Facebook/LinkedIn handles | **NOT YET CLAIMED** — playbook open item: "Claim @parlourcreative..." — do not publish social links until confirmed live; use icon-only or omit |
| Booking link (Calendly/Google Calendar) | UNKNOWN — playbook open item |
| Domain parlourcreative.ca | PROVIDED (referenced), not yet pointed at new site per playbook |

---

## Amendment rule

This file is authoritative. When Andre/Laura supply a new fact, update the relevant
table row here first (with source + date), then propagate it into the actual case
study / page data files. Never skip straight to publishing a value that isn't logged
here.
