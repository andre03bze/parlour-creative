# Deployment notes (pre-deployment hardening)

Status: production build verified locally. **Not deployed.** No analytics, pixels, cookies or third-party scripts.

## Environment
| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical URLs, hreflang, sitemap, JSON-LD | `https://parlourcreative.ca` |
| `NEXT_PUBLIC_SHOW_PALETTES` | show the palette review switcher | off (dev only) |
| `NEXT_PUBLIC_SHOW_LAB` | serve `/lab/*` prototype routes (always noindex; disallowed in robots) | off |
| `NEXT_PUBLIC_CONTACT_DELIVERY` | `ready` removes the on-page "not connected" notice | unset |

## Contact delivery — the one open item
`/api/contact` validates, applies a honeypot and a 20 KB body cap, then answers **503 `delivery_not_configured`** until
`src/lib/deliver-enquiry.ts` is implemented. The form then says plainly that nothing was sent and shows WhatsApp/email.
To finish (during temporary deployment): implement `deliverEnquiry()` with the chosen provider (server-side key, never
`NEXT_PUBLIC_`), set `DELIVERY_WIRED`, set `NEXT_PUBLIC_CONTACT_DELIVERY=ready`, then test success and a forced failure.

## Homepage hero
`/` renders `src/components/lab/HeroLab.tsx` (Blue Ocean aerial still, scroll-driven). `/lab/hero` is the same component
behind the dev gate. The Blue Ocean case study keeps its own looping film (`public/work/blue-ocean-belize/hero-loop.mp4`).

## Known limitations
- Error/404 pages do not run the palette/no-js bootstrap scripts (only affects the dev palette switcher).
- Inactive Method-trace stages and inactive Method-lens rows are intentionally dimmed (≈3:1), which Lighthouse flags.
