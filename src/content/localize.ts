import type { CaseStudy, CaseStudyImage, MediaBlock } from "./case-studies";
import { esCases, type CaseEs } from "./es-cases";
import { defaultLang, type Lang } from "@/i18n/config";
import { getT, type T } from "@/i18n/t";

/**
 * Case-study localisation. The project records exist once (English); Spanish lives in ./es-cases.ts (long-form copy
 * and image descriptions, keyed by slug) plus the shared dictionary (disciplines, sectors, places, credit roles).
 * `disciplinesEn` keeps the English discipline list so the Method mapping (lib/method.ts) keeps working on any language.
 */

/** Image descriptions in a fixed order: cover, hero, gallery, sequence images, video poster. */
export function collectImages(c: CaseStudy): CaseStudyImage[] {
  const seq = c.sequence.flatMap((b): CaseStudyImage[] => (b.kind === "full" ? [b.image] : b.images));
  return [c.cover, c.heroImage, ...c.gallery, ...seq, c.video?.poster].filter((x): x is CaseStudyImage => !!x);
}

const shared = (t: T, s: string | null) => (s ? t(s) : s);
const tt = (t: T, s: string) => (s ? t(s) : s);

export function localizeCase(c: CaseStudy, lang: Lang): CaseStudy {
  if (lang === defaultLang) return c;
  const t = getT(lang);
  const e: CaseEs = esCases[c.slug] ?? {};
  const alts = e.alts && e.alts.length === collectImages(c).length ? [...e.alts] : null;
  const nextAlt = (img: CaseStudyImage): CaseStudyImage => {
    const a = alts?.shift();
    return a ? { ...img, alt: a } : img;
  };
  const cover = c.cover ? nextAlt(c.cover) : null;
  const heroImage = c.heroImage ? nextAlt(c.heroImage) : null;
  const gallery = c.gallery.map(nextAlt);
  let cap = 0;
  const sequence: MediaBlock[] = c.sequence.map((b) =>
    b.kind === "full"
      ? { ...b, image: nextAlt(b.image), caption: b.caption ? (e.captions?.[cap++] ?? t(b.caption)) : b.caption }
      : { ...b, images: b.images.map(nextAlt) }
  );
  const video = c.video ? { ...c.video, poster: nextAlt(c.video.poster), title: e.videoTitle ?? t(c.video.title) } : c.video;
  const list = (en: string[], es?: string[]) => (es && es.length === en.length ? es : en.map((x) => t(x)));

  return {
    ...c,
    disciplinesEn: c.disciplinesEn ?? c.disciplines,
    tagline: e.tagline ?? t(c.tagline),
    disciplines: c.disciplines.map((d) => t(d)),
    cover,
    heroImage,
    gallery,
    sequence,
    video,
    story: c.story ? list(c.story, e.story) : c.story,
    credits: c.credits?.map((r) => ({ ...r, role: t(r.role) })),
    place: shared(t, c.place),
    location: shared(t, c.location),
    sector: t(c.sector),
    since: shared(t, c.since),
    services: list(c.services, e.services),
    headline: e.headline ?? t(c.headline),
    challenge: e.challenge ?? t(c.challenge),
    approach: {
      position: e.approach?.position ?? tt(t, c.approach.position),
      express: e.approach?.express ?? tt(t, c.approach.express),
      perform: e.approach?.perform ?? tt(t, c.approach.perform),
      enableSales: e.approach?.enableSales ?? tt(t, c.approach.enableSales),
    },
    whatChanged: list(c.whatChanged, e.whatChanged),
    metrics: c.metrics.map((m) => ({ label: t(m.label), value: shared(t, m.value) })),
    sourceNote: e.sourceNote ?? shared(t, c.sourceNote),
  };
}

export function localizeCases(list: CaseStudy[], lang: Lang): CaseStudy[] {
  return lang === defaultLang ? list : list.map((c) => localizeCase(c, lang));
}
