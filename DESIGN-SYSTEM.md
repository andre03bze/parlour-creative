# Design System — v2 (Gladstone structure × Parlour identity)

Structure, pacing and interaction follow Gladstone (see `GLADSTONE-STRUCTURE-MAP.md`).
Identity — logo, type character, terminology — carries forward from the current Parlour
site (bisque-falcon-592077.hostingersite.com). Colour is Parlour's own evolution and is
deliberately free to change. Tokens live in `src/app/globals.css` (`@theme`).

## Logo
- Exact path data from the existing brand SVGs (`public/brand/parlour-logo-{dark,light}.svg`),
  rendered by `src/components/Logo.tsx`. Only two changes: the viewBox is cropped to the
  artwork's bounds (the SVG file carries large built-in padding) and the fill is `currentColor`
  so one component serves light/dark. Aspect 3.84 : 1.
- Sizes: `h-7` mobile, `h-9` desktop in the header. Keep clear space ≥ one cap-height all round.
- Header/footer/menu colour follows context: white over `[data-hero]` / `[data-dark]`, ink on sand.

## Type
Existing site: **Neue Haas Unica** (Adobe Fonts kit, not loaded — browsers actually rendered Helvetica Neue)
for everything, headings weight 500, tracking ≈ −0.055em at display size, line-height ≈ 0.9;
**Newsreader** italic as the accent serif; small uppercase labels with wide tracking.

| Role | Implementation |
|---|---|
| Headings / body / nav | **Inter Tight** (open licence, closest to Neue Haas/Helvetica), 500 headings, −0.04 → −0.055em, `neue-haas-unica`/`Helvetica Neue` kept first-in-stack fallbacks in `--font-display`. Swap to the real Neue Haas Unica by adding the Adobe kit or licensed webfont and changing `--font-sans-brand` |
| Accent | **Newsreader** italic (`.accent`) — one phrase per headline at most, e.g. *people want to belong to*, *sales*, *leak* |
| Labels / meta | Inter Tight 11px, 500, uppercase, 0.14em tracking (`.text-meta`) |

Scale (fluid, `clamp`): `.text-display` (0.9 lh), `.text-statement`, `.text-h2`, `.text-h3`, `.text-index`
(the giant project-index titles), `.text-lead`, body 16px/1.6, `.text-meta`.

## Colour — palette exploration (UNDECIDED)
The neutral palette below ("Current") is technically sound but still reads too close to Gladstone. Three genuinely different directions are
implemented as **theme variants** for side-by-side comparison. **No winner has been chosen.** Switch live with the pill at the bottom of every page,
keys `0–3`, or `?theme=a|b|c|current` (persisted in `localStorage`). Themes are pure CSS variable overrides (`:root[data-theme="…"]` at the end of
`src/app/globals.css`) — one shared set of components, nothing duplicated. When a direction is chosen: promote its values into `@theme`, delete the
other two blocks, then delete `ThemeSwitcher.tsx` and its two lines in `layout.tsx` (the `theme-init` script + `<ThemeSwitcher />`).

**What changed to let colour carry personality** (defaults reproduce "Current" exactly): new semantic tokens `tint` (a coloured band — the Growth
Diagnostic section), `accent` / `accent-ink` (the marquee band), `accent-text` (italic accent words + hovered project titles), `accent-dark` (accent italics on
dark bands), `mark` (highlight behind key words), `cta` / `cta-hover` / `cta-ink` (primary buttons). Motion, layout, taxonomy and components are untouched.

| Token | Current | A · Warm Editorial | B · Green & Plaster | C · Cenote & Añil |
|---|---|---|---|---|
| `paper` | `#e4e2dc` | `#f1eadf` cream vellum | `#f3ebe5` plaster | `#eae7df` limestone |
| `paper-dim` | `#d8d5cd` | `#e5daca` parchment | `#e8d9d0` | `#dedad0` |
| `tint` | `#d8d5cd` | `#e3d2be` | `#ebc6bd` blush | `#d6dbe6` pale añil wash |
| `ink` / `ink-soft` | `#171614` / `#57544d` | `#1f1613` espresso / `#5a4c44` | `#0e241a` bottle green / `#3f5246` | `#0f1830` indigo-black / `#4a5470` |
| `coal` / `coal-soft` | `#161513` / `#2a2825` | `#1d1411` / `#33251f` | `#0e241a` / `#1b3a2a` | `#101a3a` / `#1e2b5a` |
| `accent` (marquee band) | `#161513` | `#5c1e1b` oxblood | `#edb9af` blush | `#e9a63a` annatto |
| `accent-text` / `accent-dark` | ink / paper | `#6f2621` / `#c9a66b` brass | `#1f6444` / `#f0b8ae` | `#8a4e0a` / `#f0b24f` |
| `mark` | ink 12% | brass 38% | blush 60% | annatto 40% |
| `cta` (hover) | `#171614` (`#2a2825`) | `#1f1613` (`#5c1e1b`) | `#0e241a` (`#1f6444`) | `#0f1830` (`#1e2b5a`) |

**A — Warm Editorial.** *Editorial magazine + architecture + luxury hospitality.* Cream vellum, espresso instead of black, a deep oxblood band (not terracotta, not
coral) and brass as the small precious detail — brass highlighter behind key words, brass italics on dark. Reads like a printed monograph or a hotel's
brand book. Works with people photography (skin tones sit naturally on cream) and with architecture renders; the oxblood is dark enough to recede behind
images. Risk: closest to "luxury" convention; least surprising.

**B — Parlour Green & Plaster.** *The name, taken literally: a parlour.* Bottle-green ink and dark bands, plaster-pink paper, a blush band that is the
site's signature (marquee, Growth Diagnostic, highlighter). The most recognisable with the logo removed — no other agency in this space looks like this —
and it stays serious because green does the structural work while pink is a surface, not a decoration. Green also quietly nods to jungle/place without
tourism cues. Works well with the Belize aerials (green/blue) and warm people photography; broadcast sets (saturated blue/red) sit on it cleanly.
Risk: pink must be kept muted and rare; too much tips into boutique.

**C — Cenote & Añil (Place / Americas).** *Pigments of the Americas, not beaches.* Limestone paper, añil (indigo, a Central American dye) for ink and dark bands, and
annatto (achiote) amber as the single warm accent. Mineral, architectural, cool-warm — Belize's limestone and cenotes without a single turquoise or palm cue.
The pale añil tint band separates sections without another beige. Works best with aerial/place photography and blue-heavy broadcast work.
Risk: indigo + amber can read "traditional luxury / heritage" if the amber is overused.

**Contrast (WCAG, computed from the real tokens):** every text pairing in use is ≥ 4.5:1 in all four sets — ink/paper, ink-soft on paper/dim/tint, accent-text on
paper/dim/tint, paper at 70–75% on coal, accent-dark on coal, accent-ink on accent, cta-ink on cta and hover. Tightest: B accent-text on tint (4.50).

### Current palette (neutral, for reference)
| Token | Hex | Use |
|---|---|---|
| `paper` | `#e4e2dc` | Page — warm stone |
| `paper-dim` | `#d8d5cd` | Alternate band, image wells |
| `ink` / `ink-soft` | `#171614` / `#57544d` | Text, hairlines, solid buttons |
| `coal` / `coal-soft` | `#161513` / `#2a2825` | Dark bands, footer, menu |
| `oxide` (`clay`) | `#8a4a38` | Focus ring, form errors |
| `line` | `#bdb9ae` | Fine rules |

## Layout & components
- Container `container-page` (max 120rem, 1.25rem → 2.5rem gutters). Text measure `prose-column` 62ch.
- Header: fixed, logo left, single `Menu` control → full-screen clip-path overlay (`SiteHeader`).
- **Work index** (`WorkIndex`): giant titles on hairlines, hover dims siblings and floats project image +
  disciplines beside the pointer. Homepage + Work "List" view.
- **Work browser** (`WorkBrowser`): Industry chips (from real data only) + Thumbnail/List toggle.
- **Project page** (`work/[slug]`): banner (loop video or cover) → title/client/meta | tagline/disciplines/intro →
  `MediaStack` → editorial record (role, approach, what changed, metrics, testimonial, source) → prev/next → CTA.
- `Marquee`, `Reveal` (fade-up and curtain-wipe image reveal), `HeroVideo` (poster-only for reduced motion / data-saver),
  `ProjectVisual` (image or clearly-marked typographic media-slot tile).

## Motion — Gladstone's interaction language (measured on the live site), recreated natively
| Behaviour | Gladstone (observed) | Parlour implementation |
|---|---|---|
| Smooth scroll | Lenis 1.2.3 | `lenis` (MIT, ~5 KB) via `SmoothScroll`; off for reduced motion; touch stays native; stopped while the menu is open |
| Hero | Full-bleed muted loop, giant wordmark, small logo hidden until the hero passes (`opacity 0→1, .3s`) | Own footage loop + poster; giant Parlour wordmark rises on load (1.4s); header logo fades in after the hero |
| Headline | Splitting.js chars, `translateY(120%)→0`, 1s ease, staggered, masked | `SplitReveal`: per-word mask rise, 1s ease, 55 ms stagger (Gladstone's 0.3s/word felt too slow at our line lengths), marker highlight on key words |
| Content entrances | AOS `fade-up` (~100px), `fade`, `fade-right`, delays 500/1000ms | `.reveal` fade-up (56px, 700ms ease) + `delayMs`; curtain-wipe `reveal-media` for images |
| Work index hover | `.img-hover` 500px, GSAP-translated to the cursor (x≈cursor−22, y≈cursor−15), z-index −1 (behind text), disciplines list beside it, other rows → 20% opacity, 2px rules | `WorkIndex`: rAF-eased follow (0.2 lerp), same offsets/z-order/opacity/rules; disciplines beside the image (xl) |
| Touch equivalent | Rows show their image inline | Each row carries its image + disciplines below `lg` / on touch |
| Marquee | Linear, 100 px/s | `Marquee` measures its track and sets the duration for exactly 100 px/s |
| Links / hovers | `all .5s cubic-bezier(.28,0,.18,1)`; header bg `.3s ease` | `--ease-link` = same curve, used on links/buttons/arrows; header `.3s` |
| Menu | Black panel slides in from the right (~63% width), page visible at left, circular arrow to close, light-weight list | `SiteHeader`: `translateX` panel 800ms `--ease-link`, 62vw, staggered link rise, circular arrow, full-width on mobile |
| Page change | Hard navigation | Native `@view-transition` cross-fade (progressive enhancement) |

Reduced motion: blanket rule collapses all transitions/animations; reveals, split text, logo rise, marquee, smooth scroll,
follow-lag and video are disabled; content is fully visible with no JS (`no-js`) and no animation dependency.
