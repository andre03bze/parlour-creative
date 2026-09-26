import type { MetadataRoute } from "next";
import { allowIndexing, siteUrl } from "@/lib/site";
import { getPublishedCaseStudies } from "@/content/case-studies";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/real-estate", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/hospitality", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/founders", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/approach", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/growth-diagnostic", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/belize", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
];

const url = (path: string, es = false) => `${siteUrl}${es ? (path === "" ? "/es" : `/es${path}`) : path}`;
const alt = (path: string) => ({ languages: { en: url(path), es: url(path, true) } });

export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing) return [];
  const now = new Date();

  // Every public page exists in English (unprefixed) and Spanish (/es), cross-linked with hreflang.
  const entry = (path: string, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], priority: number) =>
    [false, true].map((es) => ({ url: url(path, es), lastModified: now, changeFrequency, priority, alternates: alt(path) }));

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((r) => entry(r.path, r.changeFrequency, r.priority));
  const caseStudyEntries: MetadataRoute.Sitemap = getPublishedCaseStudies().flatMap((c) =>
    entry(`/work/${c.slug}`, "monthly", c.featured ? 0.9 : 0.7)
  );

  // /insights is intentionally excluded — no articles yet (see CONTENT-GAPS.md).
  return [...staticEntries, ...caseStudyEntries];
}
