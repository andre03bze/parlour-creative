import type { Metadata } from "next";
import type { Lang } from "./config";
import { alternatesFor, ogLocale } from "./meta";
import { getT, type T } from "./t";

export type LangParams = { params: Promise<{ lang: string }> };

/** Resolve the route language and its translator (layout has already rejected unknown languages). */
export async function pageLang(params: LangParams["params"]): Promise<{ lang: Lang; t: T }> {
  const { lang } = await params;
  return { lang: lang as Lang, t: getT(lang as Lang) };
}

/** Localised metadata with canonical + hreflang for a page. Title/description are English keys. */
export async function pageMeta(
  params: LangParams["params"],
  path: string,
  title: string,
  description?: string,
  extra: Metadata = {}
): Promise<Metadata> {
  const { lang, t } = await pageLang(params);
  return {
    title: t(title),
    ...(description ? { description: t(description) } : {}),
    alternates: alternatesFor(lang, path),
    ...extra,
    openGraph: { locale: ogLocale(lang), ...(extra.openGraph ?? {}) },
  };
}

/** Identity marker so extraction tooling can find translatable literals declared in data arrays. */
export const msg = (s: string) => s;
