# Content Gaps

Everything the live site still needs from Laura/Andre. Nothing here blocks the build
— every gap below renders as an honest placeholder/empty state, never a guess. Pulled
directly from the playbook's own "Open items" list plus gaps found while building.

## Blocking the Gladstone-structure rebuild

- [ ] **Live research of gladstoneadvertising.com.** Blocked by this environment's
      network egress proxy (WebFetch returns `EGRESS_BLOCKED`); no browser tool is
      available in this session either. Waiting on the user to widen network access
      (environment menu → Edit → Network access) or supply the content directly. See
      `GLADSTONE-STRUCTURE-MAP.md` for what's already prepared (current-implementation
      audit) pending this.

## Blocking a launch-quality feel (fix first)

- [ ] **Logo.** No brand mark exists. Site ships with a wordmark ("Parlour" set in the
      display type) until a real logo arrives.
- [ ] **Headshots — Laura and Andre.** Playbook: "next week." About page and homepage
      leadership section ship with a placeholder portrait treatment (not a stock
      photo standing in as real).
- [ ] **Blue Ocean Belize metrics.** Qualified leads/month, cost per lead, lead growth
      since 2025, or launch-period sales. Playbook explicitly defers this.
- [ ] **Blue Ocean Belize testimonial.** 2–3 sentences from their leadership.
- [ ] **Photography/video for Blue Ocean, Offi, STELCOR, Stephen Mater.** None
      supplied as files. (Caves Branch has real usable photography — see
      `ASSET-INVENTORY.md`.)
- [x] Artform-site imagery/video: authorised by Laura (site owner) via Andre, 2026-09-25 — migrated as Parlour case studies.

## Confirmations needed (drafted, not final)

- [ ] Pricing currency: is the $5,000 retainer floor USD or BZD? (playbook flags this
      as unresolved; site currently shows USD per the playbook's own working
      assumption)
- [ ] Local real-estate commission rate (used in "how to talk about price" — internal
      sales material only, not public copy, so lower priority)
- [ ] Founder Story exact price ($5,000–$7,500/mo range shown; "Laura and Andre to
      confirm")
- [ ] Andre's bio: 1–2 lines on his background before Parlour, notable clients or
      specialties (drone/documentary) — playbook flags this gap itself
- [x] STELCOR Solutions — approved for publication (Andre, 2026-09-25); gate removed. Still needs imagery and any shareable results.
- [ ] The "number one in Canada" Artform claim — do not publish; exact wording/source
      was never supplied, only the *task* of confirming it was checked off

## Accounts / infrastructure (not code — Andre/Laura action items)

- [ ] Claim @parlourcreative (or closest match) on Instagram, Facebook, LinkedIn —
      until claimed, site ships with no social links rather than dead/wrong ones
- [ ] A booking link (Calendly or Google Calendar) under laura@parlourcreative.ca —
      "Book a strategy call" CTAs currently point at `/contact` until this exists
- [ ] Point parlourcreative.ca at this site; Google Analytics + Meta Pixel IDs (env
      vars wired, values not set — see `.env.example`)
- [ ] Confirm Blue Ocean's fee counts toward the 3–5 retainers goal (internal,
      doesn't affect the site)

## Original WordPress copy referenced but not supplied

- [ ] The homepage "Capabilities" section's six original descriptions (playbook says
      "Keep the six descriptions," doesn't give their text). Superseded by building a
      full `/services` page instead — see `SITE-ARCHITECTURE.md`.
- [ ] `parlour-site.zip` — the playbook mentions a "V2 website build" as a copy
      source ("use both as source material for the new build"). Not attached to this
      session. If it exists, it may contain additional copy or design direction worth
      reconciling later.

## Deferred by the playbook itself (V1.2)

- [ ] Caves Branch River Estates — detailed engagement breakdown and results ("to be
      built together for V1.2")
- [ ] Offi Belize — brokerages/listings onboarded numbers, "if shareable"
- [ ] STELCOR — partnerships/projects won, "if shareable"
- [ ] Stephen Mater — all metrics (views, subscribers, inbound), due at 60–90 days
      from Sept 28, 2026 start; a client quote at that same milestone

## Legal / operational pages

- [ ] Company registered address, entity type — not supplied; `/privacy` and
      `/terms` ship with standard, honest boilerplate and no fabricated legal
      entity details
- [ ] A Data Protection Officer / privacy contact beyond laura@parlourcreative.ca —
      use that address until told otherwise

## Insights (editorial)

- [ ] Zero articles exist. Section is built (content model + index page) but not
      linked in primary nav and not in the sitemap until it holds at least one real
      piece — per brief rule 25 (no thin doorway pages) and rule 56 (no placeholder
      content ships).

## Regional expansion

- [ ] Mexico/Yucatán, Costa Rica, Panama, Colombia, Argentina, Uruguay pages —
      explicitly deferred per playbook's market-tier table (2027+) and brief rule 25.


---

## v2 additions

- [ ] **Media slots (temporary, clearly labelled on the site):** Offi Belize, Stephen Mater, STELCOR
      show a typographic "Media slot · pending" tile. Replace by setting `cover` / `sequence` in `src/content/case-studies.ts`.
- [ ] **Blue Ocean:** confirm client permission for the lifestyle photography + drone footage; model releases for the
      couple; results and testimonial still pending (metrics show "Figure pending").
- [ ] **Neue Haas Unica licence** — the current site references it via Adobe Fonts but doesn't load it; site uses Inter Tight as the
      open-licence stand-in (see `DESIGN-SYSTEM.md`).
- [x] **Site-to-Sales wording:** now `Site → Strategy → Brand → Story → Experience → Distribution → Sales` (per Andre; source: `siteToSales` in `src/lib/site.ts`).
- [ ] **Terminology:** current site says *Position → Expression → Demand*; the playbook (authoritative) says
      *Position → Express → Perform → Sell*. The new site follows the playbook; "Constructed intelligence. Human measure." is carried from the old site as voice.
- [ ] **About banner** uses Blue Ocean drone imagery until a team photograph exists.
- [ ] Insights is intentionally not in the menu or sitemap until a real article ships.
- [ ] **LAUNCH BLOCKER — contact form delivery not wired.** The form validates (native browser validation) and posts to
      `/api/contact`, which returns **503 `delivery_not_configured`** until a provider exists; the UI then says the enquiry was
      **not** sent and shows WhatsApp/email, and a "Development notice" sits above the form. It never reports success.
      **Integration point:** `src/lib/deliver-enquiry.ts` — implement `deliverEnquiry()` (email to laura@parlourcreative.ca and/or
      a CRM webhook), set `DELIVERY_WIRED`, and set `NEXT_PUBLIC_CONTACT_DELIVERY=ready` to remove the notice. Full steps are in that file's header.
- [ ] Booking link still points to `/contact` (no Calendly yet); social handles unclaimed, so no social links render.
- [x] Palette revised to restrained neutrals (see `DESIGN-SYSTEM.md`); the earlier reef/coral palette is retired.
- [ ] `lenis` added as the one new runtime dependency (Gladstone's smooth-scroll library) — remove `SmoothScroll` in `layout.tsx` to drop it.
- [ ] Portfolio copy is short (the source pages are brief). Add real results/quotes per project only when supplied; none were invented.
- [ ] Two source videos are unavailable (Furze World Wonders, Marilyn Denis Show); several posters are low-resolution (Indspire, CBC The Hour).
- [ ] Confirm Laura's About-page bio wording now that the Artform-era projects are shown as Parlour work (`CLAIMS-REGISTER.md`).
- [ ] Hospitality has no case study (Muskoka Bay Club and Cabin are filed under Real Estate, matching their source categories).
