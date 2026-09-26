# Design System — v1

No brand assets were supplied (no logo, no palette, no type system) — this is an
original identity built from the brief's stated direction (§12: editorial,
architectural, cinematic, tropical, intelligent, distinctive, commercial; explicitly
not SaaS/startup/tourism-board/generic-agency) and Gladstone as a structural, not
visual, reference (§11: study why it feels premium, don't copy it). Everything below
is v1 — designed to be coherent and shippable now, and easy for Laura/Andre to swap
once real brand direction exists. Implemented as CSS custom properties /
Tailwind v4 `@theme` tokens in `src/app/globals.css`.

## Concept

A drawing room ("parlour") built from Belizean materials, run with commercial
discipline: warm paper and ink instead of SaaS white-and-gray; one deep jungle green
as the confident accent instead of a gradient; a soft-serif display face for editorial
authority; restrained motion. Nothing tropical-cliché (no palm-frond iconography, no
sunset gradients, no rounded "friendly" cards).

## Color

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#F7F4EC` | Primary background — warm off-white, not clinical white |
| `--color-paper-dim` | `#EFEAE0` | Secondary surface (cards, alternating sections) |
| `--color-ink` | `#15160F` | Primary text — warm near-black, never pure `#000` |
| `--color-ink-soft` | `#4A4C3F` | Secondary text, captions, metadata |
| `--color-forest` | `#1E3A2B` | Primary accent — CTAs, links, active states, the "Parlour green" |
| `--color-forest-deep` | `#12241A` | Dark sections (footer, inverted hero panels), forest hover state |
| `--color-clay` | `#B15A34` | Secondary accent — used sparingly: tags, underlines, one highlight per section max |
| `--color-line` | `#D9D2C0` | Hairline borders, dividers |
| `--color-paper-on-dark` | `#F7F4EC` | Text on `--color-forest-deep` sections |

Rule: one accent per screen at a time. Forest green carries interactive/CTA meaning
site-wide; clay is decorative only (never a second CTA color, never implies a
different action).

## Type

- **Display / editorial headlines:** `Fraunces` (variable, optical size + soft
  axis) — a warm, slightly irregular serif with real editorial weight, avoids the
  "luxury real estate template" trap of Playfair/Cormorant. Loaded via `next/font/google`
  (self-hosted, zero extra requests — brief §29).
- **Body / UI:** `Inter` (variable) — neutral, highly legible at small sizes for
  metadata-dense case study pages, wide language support for future Spanish content.
- Scale (fluid via `clamp()`, not fixed breakpoint jumps):
  - Display (hero H1): `clamp(2.75rem, 5vw + 1rem, 6rem)`, Fraunces, weight 400–500, tight tracking
  - H2 (section): `clamp(2rem, 2.5vw + 1rem, 3.25rem)`, Fraunces
  - H3 (card/subsection): `1.5rem–1.75rem`, Fraunces, weight 500
  - Body: `1.0625rem` (17px) base, Inter, 1.6 line-height — slightly larger than
    typical SaaS 16px, for an editorial-reading feel
  - Meta/label: `0.8125rem`, Inter, uppercase, letter-spacing `0.08em` — used for
    project metadata rows (client / location / sector / services), matching
    Gladstone's metadata treatment structurally

## Spacing & layout

- Base unit 4px; section rhythm uses large multiples (`space-24` = 6rem,
  `space-32` = 8rem between major homepage sections) — generous whitespace per §12/§38.
- Container: text content capped at `68ch`; imagery/full-bleed sections run edge to
  edge with a `--gutter` of `1.25rem` mobile / `4rem` desktop.
- Grid: 12-column at ≥1024px, 6-column tablet, single column mobile.

## Breakpoints

`375, 390, 430` (phones, per brief §32) · `768` (tablet) · `1024` (laptop) ·
`1280, 1536` (desktop) · `1920` (large display). Tailwind v4 custom breakpoints in
`@theme`.

## Motion

- Easing: `--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1)` (confident decel, no
  bounce) for entrances; `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)` for UI
  micro-interactions.
- Durations: micro `160ms`, standard `320ms`, cinematic reveal `600–900ms`.
- Techniques (native only — brief §30 explicitly discourages unnecessary
  dependencies): `IntersectionObserver` for scroll-triggered reveals, CSS
  `clip-path`/`transform` for image reveals, native View Transitions API for page
  nav where supported (progressive enhancement, not required), `prefers-reduced-motion`
  media query disables all of the above — content must never depend on motion to be
  visible or usable.

## Components (built as needed, not up front)

Buttons (primary = forest fill, secondary = ink outline), project card (image +
metadata row, Gladstone-structural hover: image scale `1.03` + metadata fade-in),
case-study metadata sidebar, pull-quote block, framework diagram (Site→Sales, see
`/approach`), tag/filter pill, form field (contact + growth diagnostic qualifying
form).

## What's deliberately not decided yet

Logo/wordmark treatment, icon set, a possible second accent for hospitality vs. real
estate sector pages. Flagged in `CONTENT-GAPS.md`.
