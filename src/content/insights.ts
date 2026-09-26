/**
 * Editorial content model (brief §28). No articles exist yet — see
 * CONTENT-GAPS.md. This route stays out of primary nav and the sitemap
 * until it holds at least one real piece (brief rule 25: no thin doorway
 * pages, rule 56: no placeholder content ships).
 */
export interface Insight {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  relatedCaseStudySlug?: string;
  relatedServiceHref?: string;
}

export const insights: Insight[] = [];
