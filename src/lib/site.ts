/**
 * Site-wide constants sourced from CLAIMS-REGISTER.md. Nothing here is
 * invented — a null/empty value means the fact isn't confirmed yet, and
 * callers must render an honest fallback, not a guess.
 */

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://parlourcreative.ca";

export const primaryNav = [
  { label: "Work", href: "/work" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Hospitality", href: "/hospitality" },
  { label: "Founders", href: "/founders" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
 * Social handles are NOT yet claimed (see CONTENT-GAPS.md). Keep this empty
 * — an empty array renders no social icons — rather than link to handles
 * that may not exist or belong to someone else.
 */
export const socialLinks: { label: string; href: string }[] = [];

export const footerTagline = "Positioning / Story / Performance / Sales";
