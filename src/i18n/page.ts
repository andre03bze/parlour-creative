import type { Metadata } from "next";
import type { Lang } from "./config";
import { alternatesFor, ogImage, ogLocale } from "./meta";
import { localePath } from "./config";
import { allowIndexing } from "@/lib/site";
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
  const shownTitle = extra.title ? undefined : t(title);
  const shownDescription = description ? t(description) : undefined;
  const image = { ...ogImage, alt: t(ogImage.alt) };
  return {
    title: t(title),
    ...(description ? { description: shownDescription } : {}),
    alternates: alternatesFor(lang, path),
    ...extra,
    ...(allowIndexing ? {} : { robots: { index: false, follow: false } }),
    openGraph: {
      type: "website",
      siteName: "Parlour Creative",
      locale: ogLocale(lang),
      title: shownTitle ?? t(title),
      ...(shownDescription ? { description: shownDescription } : {}),
      url: localePath(lang, path),
      images: [image],
      ...(extra.openGraph ?? {}),
    },
    twitter: { card: "summary_large_image", title: shownTitle ?? t(title), ...(shownDescription ? { description: shownDescription } : {}), images: [image.url] },
  };
}

/** Identity marker so extraction tooling can find translatable literals declared in data arrays. */
export const msg = (s: string) => s;
