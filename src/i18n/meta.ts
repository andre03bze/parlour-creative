import type { Metadata } from "next";
import { localePath, type Lang } from "./config";

/** canonical + hreflang alternates for a route (path is the unprefixed English path, e.g. "/work"). */
export function alternatesFor(lang: Lang, path: string): Metadata["alternates"] {
  return {
    canonical: localePath(lang, path),
    languages: { en: path, es: localePath("es", path), "x-default": path },
  };
}

/** Default social image: an existing portfolio photograph (Blue Ocean Belize aerial). */
export const ogImage = {
  url: "/work/blue-ocean-belize/aerial-009-2000w.webp",
  width: 2000,
  height: 1125,
  alt: "Aerial view of the San Pedro coastline, Belize",
};

export const ogLocale = (lang: Lang) => (lang === "es" ? "es_LA" : "en_US");
