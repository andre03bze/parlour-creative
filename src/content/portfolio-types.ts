export interface PortfolioImage {
  src: string;
  alt: string;
  w: number;
  h: number;
}

export type PortfolioBlock =
  | { kind: "full"; image: PortfolioImage }
  | { kind: "grid"; aspect: "natural"; images: PortfolioImage[] };

export interface PortfolioVideo {
  provider: "youtube" | "vimeo";
  id: string;
  title: string;
  poster: PortfolioImage;
}

/** A migrated Parlour case study (copy + curated media). Converted to a `CaseStudy` in case-studies.ts. */
export interface PortfolioProject {
  slug: string;
  client: string;
  /** First entry is the primary category. */
  categories: string[];
  sector: string;
  /** Long location, only where the source documents it. */
  location: string | null;
  /** Short place label for the index (city / country). */
  place: string | null;
  /** Commercial market the source establishes (never inferred). */
  market: "Belize" | "Canada" | null;
  since: string | null;
  tagline: string;
  disciplines: string[];
  lead: string;
  story: string[];
  /** Documented outcomes only. */
  changed: string[];
  credits: { role: string; name: string }[];
  banner: PortfolioImage;
  sequence: PortfolioBlock[];
  video?: PortfolioVideo;
  order: number;
  home: boolean;
}
