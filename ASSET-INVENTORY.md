# Asset Inventory

## What exists in this session

**Nothing.** No logo, no photography, no video, no Artform screenshots, no headshots
were supplied as files — only two text documents (the Growth Playbook and the
Website Brief). The playbook itself confirms this in its open items: headshots "next
week," Blue Ocean numbers/testimonial not yet pulled, Artform credentials confirmed
*as facts* but no media files attached.

## Policy on sourcing media

The brief (§35, §11) asks to research Artform's site directly and download usable
media, preserving attribution. I'm not doing that in this build, for two reasons:

1. **Rights.** The playbook's ☒ confirmations are Laura clearing specific *facts and
   client names* for public use ("approved by Laura for the website and social").
   That is not the same as clearance to copy Artform's proprietary photography/video
   off their site onto a competitor-adjacent domain. Scraping and rehosting a former
   employer's project imagery without an explicit, separate rights conversation is a
   real legal exposure for Laura and for Parlour — not a corner to cut on assumption.
2. **No browsing tool is loaded in this session for that purpose**, and even if one
   were, the same rights question would apply before using anything found.

**What I did instead:** built every case study (including Heritage) text-first, from
the facts already confirmed in the playbook, with clearly marked media slots. Nothing
is blocked on images — the copy, structure and credentials stand on their own.

**Before launch, get from Andre/Laura:**
- Explicit sign-off (ideally in writing) to reuse specific Artform images/video, naming exactly which assets, or
- Original files Laura already holds from her time there, or
- New photography/renders commissioned for the Heritage page instead.

## Blue Ocean Belize / Caves Branch / Offi photography

Andre/Laura hold this — it's their own client work — but no files were attached to
this session. Case studies are built with hero/gallery slots wired to a
`heroMedia`/`gallery` field that renders a clearly labelled placeholder treatment
(not a broken image, not a stock photo standing in as if real) until real files
arrive. See `CONTENT-GAPS.md` for the exact list.

## Caves Branch River Estates — one exception

I have **read access to the live `caves-branch-river-estates` repo** (a separate
client site Andre owns, attached to this same session). Its `public/` folder may hold
real, already-published photography for that development. If so, it's fair game to
reference (same owner, same already-public site) — but only:
- read-only, never copying that repo's code/architecture,
- with the same "Source: cavesbranchriverestates.com" attribution the playbook itself
  uses,
- and only images already live on the public CBRE site (not anything in that repo's
  private/internal folders).

**Checked — confirmed usable.** `caves-branch-river-estates/public/media/` contains
real aerial drone photography (not renders, not the SVG placeholder set in
`public/media/placeholder/` or `public/media/scene/` — those are illustrative, skip
them), already public on the live CBRE site:

| File | Subject | Use |
|---|---|---|
| `public/media/hero/hero-estate*.webp` (responsive set) | Aerial of the estate, river visible top-left | Case study hero |
| `public/media/place/place-river*.webp` | Aerial, river winding through jungle canopy | Gallery |
| `public/media/place/place-cave*.webp` | Aerial, cave/karst feature | Gallery |
| `public/media/place/place-ridge*.webp` | Aerial, ridge/jungle | Gallery |
| `public/media/river/river-band*.webp` | River band, wide crop | Gallery/banner |
| `public/brand/caves-branch-logo-{dark,light}.svg` | CBRE's own logo | Client-logo credit on the case study card, not for Parlour branding |

Plan: copy the pre-sized responsive `.webp` variants (not the largest originals) into
`public/work/caves-branch-river-estates/` in this repo during the case-study build,
with `Source: cavesbranchriverestates.com` attribution on the case study page. Do not
copy CBRE's masterplan drawing, panorama tiles, or anything under `public/media/pano/`
— those are product/UX assets for that site, not case-study marketing images.

Blue Ocean Belize, Offi Belize, STELCOR, and Stephen Mater have no equivalent — no
second repo exists for them in this session. Their case studies ship with a clearly
labelled placeholder treatment for hero/gallery media (see `CONTENT-GAPS.md`).

## Directory structure (once real assets arrive)

```
public/
  work/
    blue-ocean-belize/
    caves-branch-river-estates/
    offi-belize/
    stelcor-solutions/
    stephen-mater/
    artform/
      real-estate/
      broadcast/
      food-beverage/
      hospitality/
  team/
    laura.jpg
    andre.jpg
  brand/
    logo.svg
```

Nothing should be added under these paths without a confirmed source per the rules
above.

## Fonts / icons

No brand fonts or icon set were supplied. Design system (`DESIGN-SYSTEM.md`) specifies
a placeholder type system using licensed Google Fonts (self-hosted, per the brief's
performance rules) — swap for real brand fonts when Laura/Andre choose a type system.
