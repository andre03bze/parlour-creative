export const langs = ["en", "es"] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = "en";

export const isLang = (v: string): v is Lang => (langs as readonly string[]).includes(v);

/** Prefix an internal path for the active language (English stays unprefixed). External URLs pass through. */
export function localePath(lang: Lang, href: string): string {
  if (lang === defaultLang || !href.startsWith("/") || href.startsWith("//")) return href;
  if (href === "/es" || href.startsWith("/es/") || href.startsWith("/es?") || href.startsWith("/es#")) return href;
  return href === "/" ? "/es" : `/es${href}`;
}

/** Remove a leading /es from a pathname. */
export function stripLang(pathname: string): string {
  if (pathname === "/es") return "/";
  return pathname.startsWith("/es/") ? pathname.slice(3) : pathname;
}

export const LANG_STORAGE_KEY = "parlourLang";
