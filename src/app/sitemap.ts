import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = getPublishedCaseStudies().map((c) => ({
    url: `${siteUrl}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: c.featured ? 0.9 : 0.7,
  }));

  // /insights is intentionally excluded — no articles yet (see CONTENT-GAPS.md).
  return [...staticEntries, ...caseStudyEntries];
}
