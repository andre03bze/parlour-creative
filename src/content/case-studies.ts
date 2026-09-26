import { portfolioProjects } from "./portfolio-data";
import type { PortfolioProject } from "./portfolio-types";

/**
 * Case-study data. Every claim here is sourced in CLAIMS-REGISTER.md — do
 * not add a metric, testimonial, or number without logging it there first.
 * `null` fields render as an honest pending state (see /work/[slug]/page.tsx);
 * never fill one in with a plausible-sounding guess.
 */

/**
 * Work taxonomy — derived from the actual portfolio (37 published projects), restrained, multi-label.
 * A project lists 1–3 categories (first = primary). Categories with no published project are hidden automatically.
 */
export type Category =
  | "real-estate"
  | "spaces-design-build"
  | "broadcast-media"
  | "sports"
  | "events-experiences"
  | "food-beverage"
  | "fashion-retail"
  | "editorial-publishing"
  | "founders"
  | "hospitality"
  | "construction-b2b";

/** Order = chip order on /work. */
export const categoryLabels: Record<Category, string> = {
  "real-estate": "Real Estate",
  "spaces-design-build": "Spaces & Design-Build",
  "broadcast-media": "Broadcast & Media",
  sports: "Sports",
  "events-experiences": "Events & Experiences",
  "food-beverage": "Food & Beverage",
  "fashion-retail": "Fashion & Retail",
  "editorial-publishing": "Editorial & Publishing",
  founders: "Founders & Personal Brands",
  hospitality: "Hospitality",
  "construction-b2b": "Construction & B2B",
};

/** Markets the source documents. Current commercial focus is Belize and the Americas; the rest of the portfolio is international experience. */
export type Market = "Belize" | "Canada";

export interface CaseStudyImage {
  src: string;
  alt: string;
  /** Intrinsic size — when present, media renders at its natural aspect ratio instead of a fixed crop. */
  w?: number;
  h?: number;
}

export interface Metric {
  label: string;
  value: string | null;
}

/** One block in a project's media stack (Gladstone-style long image sequence). */
export type MediaBlock =
  | { kind: "full"; image: CaseStudyImage; caption?: string }
  | { kind: "grid"; images: CaseStudyImage[]; aspect?: "portrait" | "landscape" | "natural" };

export interface CaseStudy {
  slug: string;
  /** One-line descriptor shown beside the title on the project page and in the index. */
  tagline: string;
  /** Uppercase discipline labels (display metadata, mono slash list). */
  disciplines: string[];
  /** Set on localised copies: the English disciplines, which the Method mapping keys on. */
  disciplinesEn?: string[];
  /** Image used in the index hover, thumbnail grid and social cards. null → typographic placeholder tile. */
  cover: CaseStudyImage | null;
  /** Extra narrative paragraphs shown under the headline in the editorial record. */
  story?: string[];
  /** Named partners / clients / collaborators. */
  credits?: { role: string; name: string }[];
  /** Embedded film (click-to-play facade with a local poster; nothing third-party loads until played). */
  video?: { provider: "youtube" | "vimeo"; id: string; title: string; poster: CaseStudyImage };
  /** Curated position in the Work index (lower = earlier). Not chronological. */
  order: number;
  /** Shown in the homepage index. */
  home?: boolean;
  /** Muted looping hero video (own footage). Poster is required. */
  heroVideo?: { src: string; poster: string };
  /** Full-width media sequence under the intro. Empty → "media pending" slot is rendered. */
  sequence: MediaBlock[];
  /** 1–3 categories, first is primary. */
  categories: Category[];
  /** Short place label for the index. */
  place: string | null;
  /** Documented commercial market, if any. */
  market: Market | null;
  published: boolean;
  featured: boolean;
  client: string;
  location: string | null;
  sector: string;
  since: string | null;
  services: string[];
  headline: string;
  challenge: string;
  approach: {
    position: string;
    express: string;
    perform: string;
    enableSales: string;
  };
  whatChanged: string[];
  metrics: Metric[];
  testimonial: { quote: string; name: string; title: string } | null;
  sourceNote: string | null;
  heroImage: CaseStudyImage | null;
  gallery: CaseStudyImage[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "blue-ocean-belize",
    order: 1,
    home: true,
    tagline: "Five coastal developments, one marketing system.",
    disciplines: ["Positioning", "Development brands", "Photography", "Film production", "Drone", "Paid media", "Web", "CRM", "Sales enablement"],
    cover: {
      src: "/work/blue-ocean-belize/aerial-009-2000w.webp",
      alt: "Aerial view of the San Pedro coastline on Ambergris Caye, Belize, with the reef and open sea beyond",
    },
    heroVideo: {
      src: "/work/blue-ocean-belize/hero-loop.mp4",
      poster: "/work/blue-ocean-belize/hero-poster-2200w.webp",
    },
    sequence: [
      {
        kind: "grid",
        aspect: "portrait",
        images: [
          { src: "/work/blue-ocean-belize/photo-002.webp", alt: "A couple walking away along a palm-lined path towards the sea" },
          { src: "/work/blue-ocean-belize/photo-004.webp", alt: "A woman relaxing in a black hammock on white sand beside a turquoise-roofed cottage" },
        ],
      },
      {
        kind: "full",
        image: {
          src: "/work/blue-ocean-belize/aerial-006-2000w.webp",
          alt: "Aerial view of a lagoon and the island shoreline under a broken sky",
        },
        caption: "Drone photography",
      },
      {
        kind: "grid",
        aspect: "portrait",
        images: [
          { src: "/work/blue-ocean-belize/photo-044.webp", alt: "A couple walking hand in hand down a street strung with bunting" },
          { src: "/work/blue-ocean-belize/photo-052.webp", alt: "A couple seated together on the bow of a boat over turquoise water" },
          { src: "/work/blue-ocean-belize/photo-074.webp", alt: "A couple sitting on the sand looking out to a boat on turquoise water" },
        ],
      },
      {
        kind: "grid",
        aspect: "portrait",
        images: [
          { src: "/work/blue-ocean-belize/photo-078.webp", alt: "A couple walking hand in hand along a white-sand shoreline" },
          { src: "/work/blue-ocean-belize/photo-080.webp", alt: "A couple on a tree swing at the edge of a turquoise lagoon" },
          { src: "/work/blue-ocean-belize/photo-083.webp", alt: "A couple floating in clear shallow water, smiling at each other" },
        ],
      },
      {
        kind: "grid",
        aspect: "portrait",
        images: [
          { src: "/work/blue-ocean-belize/photo-070.webp", alt: "A couple sharing a toast on the bow of a boat" },
          { src: "/work/blue-ocean-belize/photo-072.webp", alt: "Turquoise shallows and a low green island under a wide blue sky" },
        ],
      },
    ],
    categories: ["real-estate"],
    place: "Belize",
    market: "Belize",
    published: true,
    featured: true,
    client: "Blue Ocean Belize",
    location: "San Pedro, Ambergris Caye and Caye Caulker, Belize",
    sector: "Real estate development",
    since: "2025",
    services: [
      "Portfolio positioning",
      "Development brands",
      "Content and production",
      "Paid media",
      "Websites",
      "CRM and sales enablement",
    ],
    headline: "Blue Ocean Belize: building the marketing system behind a coastal portfolio",
    challenge:
      "Blue Ocean had valuable inventory and strong development opportunities. But each project was being marketed on its own, with no clear portfolio story, uneven development brands, and no joined-up route from a buyer's first look to an enquiry to a sale.",
    approach: {
      position:
        "Clarified Blue Ocean's portfolio position and gave each development a distinct buyer, story and reason to choose it.",
      express:
        "Built or rebuilt development brands and identity systems, and produced the photography, video and drone content to carry them.",
      perform:
        "Ran paid media across Meta and Google, built the websites and landing pages, planned lead generation, and set up CRM and sales hand-off so enquiries reach the sales team fast.",
      enableSales:
        "Created brochures, field materials, signage and a co-broker kit, and aligned marketing with the sales team's weekly reality.",
    },
    whatChanged: [
      "Five development brands and campaigns created or rebuilt under one portfolio story: Laguna Bay, Laguna Rio, Laguna Point, Bonefish Bay and Laguna Point Estates.",
      "120+ hours of production and 14 finished videos in a single production period.",
      "Two campaign-ready content packages.",
      "Always-on paid media and lead generation across Meta and Google.",
    ],
    metrics: [
      { label: "Qualified leads / month", value: null },
      { label: "Cost per lead", value: null },
      { label: "Lead growth since 2025", value: null },
    ],
    testimonial: null,
    sourceNote: null,
    heroImage: null,
    gallery: [],
  },
  {
    slug: "caves-branch-river-estates",
    order: 2,
    home: true,
    tagline: "Own your place in the wild heart of Belize.",
    disciplines: ["Positioning", "Brand story", "Web", "Content", "Google and Meta campaigns", "Lead capture"],
    cover: {
      src: "/work/caves-branch-river-estates/hero-estate-1280w.webp",
      alt: "Aerial view of Caves Branch River Estates, Cayo District, Belize",
    },
    sequence: [
      {
        kind: "full",
        image: {
          src: "/work/caves-branch-river-estates/hero-estate-1920w.webp",
          alt: "Aerial view of Caves Branch River Estates, jungle lots bordering the Caves Branch River",
        },
      },
      {
        kind: "grid",
        aspect: "landscape",
        images: [
          { src: "/work/caves-branch-river-estates/place-river-700w.webp", alt: "Aerial view of the Caves Branch River winding through jungle canopy" },
          { src: "/work/caves-branch-river-estates/place-cave-700w.webp", alt: "Aerial view of a karst cave feature on the property" },
        ],
      },
      {
        kind: "full",
        image: {
          src: "/work/caves-branch-river-estates/river-band-1440w.webp",
          alt: "Wide aerial view of the Caves Branch River",
        },
      },
      {
        kind: "grid",
        aspect: "landscape",
        images: [{ src: "/work/caves-branch-river-estates/place-ridge-860w.webp", alt: "Aerial view of jungle ridge at Caves Branch River Estates" }],
      },
    ],
    categories: ["real-estate"],
    place: "Belize",
    market: "Belize",
    published: true,
    featured: false,
    client: "Caves Branch River Estates",
    location: "Franks Eddy Village, Cayo District, Belize (12–15 minutes from Belmopan)",
    sector: "Real estate development",
    since: null,
    services: [
      "Positioning",
      "Brand story",
      "Website",
      "Content",
      "Google and Meta campaigns",
      "Lead capture",
      "Offi distribution",
    ],
    headline: "Caves Branch River Estates: selling the wild heart of Belize",
    challenge:
      "Inland jungle land is a harder sell than beachfront. Buyers need a reason to look beyond the coast, and a clear picture of what owning land in the rainforest feels like.",
    approach: {
      position:
        "Built the project's story around one idea, “Own your place in the wild heart of Belize,” and created four collections — Riverfront Estates, Nature Reserve, Jungle Estate and Mountain View Jungle — so each buyer (river, privacy, investment, views) sees their lot.",
      express:
        "Built the Caves Branch River Estates website with tour requests and enquiry capture.",
      perform: "Supported the launch with content, Google and Meta campaigns, and Offi distribution.",
      enableSales:
        "42 individually titled lots of 0.86–1.25 acres, seven with direct river frontage, from US$31,500 (Jungle Estate) to US$115,500 (Riverfront Estates), behind a gated entrance with paved and internal access roads.",
    },
    whatChanged: [
      "A complete sales-ready website with four clear product collections and tour booking.",
      "34 of 42 lots available as of September 2026.",
    ],
    metrics: [{ label: "Lots available (of 42)", value: "34, as of September 2026" }],
    testimonial: null,
    sourceNote: "Source: cavesbranchriverestates.com",
    heroImage: {
      src: "/work/caves-branch-river-estates/hero-estate-1920w.webp",
      alt: "Aerial view of Caves Branch River Estates, jungle lots bordering the Caves Branch River, Cayo District, Belize",
    },
    gallery: [
      {
        src: "/work/caves-branch-river-estates/place-river-700w.webp",
        alt: "Aerial view of the Caves Branch River winding through jungle canopy",
      },
      {
        src: "/work/caves-branch-river-estates/place-cave-700w.webp",
        alt: "Aerial view of a karst cave feature on the Caves Branch River Estates property",
      },
      {
        src: "/work/caves-branch-river-estates/place-ridge-860w.webp",
        alt: "Aerial view of jungle ridge at Caves Branch River Estates",
      },
      {
        src: "/work/caves-branch-river-estates/river-band-1440w.webp",
        alt: "Wide aerial view of the Caves Branch River",
      },
    ],
  },
  {
    slug: "offi-belize",
    order: 3,
    home: true,
    tagline: "Positioning a national real estate marketplace.",
    disciplines: ["Positioning", "Web and platform", "Brokerage model", "Outreach", "Sales materials"],
    cover: null,
    sequence: [],
    categories: ["real-estate"],
    place: "Belize",
    market: "Belize",
    published: true,
    featured: false,
    client: "Offi Belize",
    location: "Belize",
    sector: "Real estate marketplace / platform",
    since: null,
    services: [
      "Website and platform presence",
      "Market positioning",
      "Brokerage participation model",
      "Agent and broker outreach",
      "Sales materials",
    ],
    headline: "Offi Belize: positioning a national real estate marketplace",
    challenge:
      "Offi set out to become Belize's central real estate marketplace. To work, it had to win over brokerages that already had their own channels, and give buyers a reason to search there first.",
    approach: {
      position:
        "Defined Offi's market position and platform messaging for expats, North American buyers, agents and developers.",
      express: "Built the Offi Belize website and platform presence.",
      perform: "Led agent and broker outreach and listing acquisition strategy, and shaped the expansion into rentals.",
      enableSales: "Designed the brokerage participation model and produced sales materials.",
    },
    whatChanged: [],
    metrics: [{ label: "Brokerages / listings onboarded", value: null }],
    testimonial: null,
    sourceNote: null,
    heroImage: null,
    gallery: [],
  },
  {
    slug: "stelcor-solutions",
    order: 11,
    tagline: "Marketing a technical building platform to the development industry.",
    disciplines: ["Positioning", "ICF marketing", "Outreach", "Sales materials"],
    cover: null,
    sequence: [],
    categories: ["construction-b2b"],
    place: "Belize",
    market: "Belize",
    published: true,
    featured: false,
    client: "STELCOR Solutions",
    location: "Belize",
    sector: "Construction / ICF building solutions",
    since: null,
    services: [
      "Corporate and product positioning",
      "ICF marketing",
      "Builder and developer outreach",
      "Sales materials",
    ],
    headline: "STELCOR Solutions: marketing a technical building platform to the development industry",
    challenge:
      "STELCOR's construction and ICF building solutions are technical. Selling them means convincing developers, architects, engineers and builders, each of whom cares about something different.",
    approach: {
      position: "Built STELCOR's corporate and product positioning.",
      express: "Developed its ICF marketing and commercial communications.",
      perform: "Developed builder and developer outreach and partnerships, and planned for international expansion.",
      enableSales: "Produced sales materials for a technical, multi-stakeholder buying process.",
    },
    whatChanged: [],
    metrics: [{ label: "Partnerships / projects won", value: null }],
    testimonial: null,
    sourceNote: null,
    heroImage: null,
    gallery: [],
  },
  {
    slug: "stephen-mater",
    order: 10,
    tagline: "A documentary system for a founder and endurance athlete.",
    disciplines: ["Story development", "Documentary", "Editing", "Sound and colour", "Archive"],
    cover: null,
    sequence: [],
    categories: ["founders"],
    place: "Belize",
    market: "Belize",
    published: true,
    featured: false,
    client: "Stephen Mater",
    location: "Belize",
    sector: "Founder documentary / personal brand",
    since: "September 28, 2026",
    services: [
      "Story development",
      "Documentary filming",
      "Self-shot capture systems",
      "Story archive",
      "Editing, sound, music, colour",
    ],
    headline: "Stephen Mater: documenting what happens when ideas meet reality",
    challenge:
      "Stephen's ventures, his running and his view of Belize were being told as separate stories, if they were told at all. The obvious route — a business influencer or a fitness channel — was the opposite of who he is.",
    approach: {
      position:
        "Working from Stephen's own founding document, Parlour defined the channel's territory: building something difficult while pursuing something difficult, with the rule “the cameras follow the life; the life does not reorganize itself around the need for content.”",
      express:
        "Two points of view — Stephen films proximity, Andre films perspective — and a visual language where business is observed through stillness and running through movement.",
      perform:
        "A repeatable episode format (thesis, world, deeper question, test, result, realization, next question) built around a season spine: Episode 1, “The Race Does Not Exist.”",
      enableSales:
        "A living archive logging every attempt, decision and result by date and story — footage that grows more valuable over time and can become a feature-length documentary.",
    },
    whatChanged: [],
    metrics: [
      { label: "Episodes published", value: null },
      { label: "Views / watch time", value: null },
      { label: "Subscribers", value: null },
    ],
    testimonial: null,
    sourceNote: "Channel: (im)possible pursuit, on YouTube. Led by Andre Acosta, Creative & Strategy Director.",
    heroImage: null,
    gallery: [],
  },
];

const noApproach = { position: "", express: "", perform: "", enableSales: "" };

function fromPortfolio(p: PortfolioProject): CaseStudy {
  return {
    slug: p.slug,
    order: p.order,
    home: p.home,
    tagline: p.tagline,
    disciplines: p.disciplines,
    cover: p.banner,
    sequence: p.sequence,
    categories: p.categories as Category[],
    place: p.place,
    market: p.market,
    published: true,
    featured: false,
    client: p.client,
    location: p.location,
    sector: p.sector,
    since: p.since,
    services: p.disciplines,
    headline: p.tagline,
    challenge: p.lead,
    approach: noApproach,
    story: p.story,
    whatChanged: p.changed,
    credits: p.credits,
    video: p.video,
    metrics: [],
    testimonial: null,
    sourceNote: null,
    heroImage: null,
    gallery: [],
  };
}

const allCaseStudies: CaseStudy[] = [...caseStudies, ...portfolioProjects.map(fromPortfolio)].sort((a, b) => a.order - b.order);

export function getPublishedCaseStudies(): CaseStudy[] {
  return allCaseStudies.filter((c) => c.published);
}

/** The curated homepage index. */
export function getHomeCaseStudies(): CaseStudy[] {
  return getPublishedCaseStudies().filter((c) => c.home);
}

export function getCaseStudiesByLocation(term: string): CaseStudy[] {
  return getPublishedCaseStudies().filter((c) => c.location?.includes(term));
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return allCaseStudies.find((c) => c.slug === slug && c.published);
}

export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return allCaseStudies.find((c) => c.featured && c.published);
}

export function getCaseStudiesByCategory(category: Category): CaseStudy[] {
  return getPublishedCaseStudies().filter((c) => c.categories.includes(category));
}

/** Categories that have at least one published project, in chip order. */
export function getActiveCategories(): Category[] {
  const active = new Set(getPublishedCaseStudies().flatMap((c) => c.categories));
  return (Object.keys(categoryLabels) as Category[]).filter((k) => active.has(k));
}

/** Markets present in the published portfolio, Belize first. */
export function getActiveMarkets(): Market[] {
  const active = new Set(getPublishedCaseStudies().map((c) => c.market).filter(Boolean));
  return (["Belize", "Canada"] as Market[]).filter((m) => active.has(m));
}

/** Index / hover metadata line: "Location · Sector". */
export function projectLine(c: CaseStudy): string {
  return [c.place ?? c.location, c.sector].filter(Boolean).join(" · ");
}

export function getAdjacentCaseStudies(slug: string): { prev: CaseStudy; next: CaseStudy } | null {
  const list = getPublishedCaseStudies();
  const i = list.findIndex((c) => c.slug === slug);
  if (i === -1 || list.length < 2) return null;
  return { prev: list[(i - 1 + list.length) % list.length]!, next: list[(i + 1) % list.length]! };
}

/** Portfolio facts for editorial proof lines. Always derived from published data — never hard-coded. */
export function getPortfolioStats() {
  const all = getPublishedCaseStudies();
  return {
    total: all.length,
    industries: getActiveCategories().length,
    belize: all.filter((p) => p.market === "Belize").length,
    canada: all.filter((p) => p.market === "Canada").length,
  };
}
