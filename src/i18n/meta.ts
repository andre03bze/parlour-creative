import type { Metadata } from "next";
import { localePath, type Lang } from "./config";

/** canonical + hreflang alternates for a route (path is the unprefixed English path, e.g. "/work"). */
export function alternatesFor(lang: Lang, path: string): Metadata["alternates"] {
  return {
    canonical: localePath(lang, path),
    languages: { en: path, es: localePath("es", path), "x-default": path },
  };
}

export const ogLocale = (lang: Lang) => (lang === "es" ? "es_LA" : "en_US");
