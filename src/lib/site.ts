/**
 * Site-wide constants sourced from CLAIMS-REGISTER.md. Nothing here is
 * invented — a null/empty value means the fact isn't confirmed yet, and
 * callers must render an honest fallback, not a guess.
 */

/**
 * Indexing is OFF unless NEXT_PUBLIC_ALLOW_INDEXING=1 is set at build time. Temporary and preview deployments therefore
 * ship noindex metadata, an X-Robots-Tag header, a blocking robots.txt and an empty sitemap by default.
 */
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "1";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://parlourcreative.ca";

/** Menu overlay (Gladstone-style single menu). Insights joins once a real article exists. */
export const primaryNav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Site to Sales", href: "/approach" },
  { label: "Growth Diagnostic", href: "/growth-diagnostic", badge: "Start here" },
  { label: "Contact", href: "/contact" },
] as const;

/** Secondary sector / region links shown small in the overlay and footer. */
export const sectorNav = [
  { label: "Real Estate", href: "/real-estate" },
  { label: "Hospitality", href: "/hospitality" },
  { label: "Founders", href: "/founders" },
  { label: "Belize", href: "/belize" },
] as const;

export const footerNav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Growth Diagnostic", href: "/growth-diagnostic" },
  { label: "Belize", href: "/belize" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export const contact = {
  email: "laura@parlourcreative.ca",
  whatsapp: "+501 600 8548",
  whatsappHref: "https://wa.me/5016008548",
} as const;

/**
 * Social / contact channels — the single source for icons in the footer, menu and contact page.
 * WhatsApp is a confirmed direct contact channel. Instagram, Facebook and LinkedIn render only once their final
 * https URL is supplied via NEXT_PUBLIC_SOCIAL_INSTAGRAM / _FACEBOOK / _LINKEDIN (see .env.example); until then they
 * are omitted rather than linking to handles that may not exist.
 */
const httpsUrl = (v?: string) => (v && /^https:\/\//.test(v) ? v : null);
const channels = [
  { id: "whatsapp", href: contact.whatsappHref },
  { id: "instagram", href: httpsUrl(process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM) },
  { id: "facebook", href: httpsUrl(process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK) },
  { id: "linkedin", href: httpsUrl(process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN) },
] as const;
export type ChannelId = (typeof channels)[number]["id"];
export const socialChannels: { id: ChannelId; href: string }[] = channels.flatMap((c) => (c.href ? [{ id: c.id, href: c.href }] : []));

export const footerTagline = "Positioning / Story / Performance / Sales";

/** Site → Sales framework, approved wording (used on the homepage and /approach). */
export const siteToSales = ["Site", "Strategy", "Brand", "Story", "Experience", "Distribution", "Sales"] as const;
