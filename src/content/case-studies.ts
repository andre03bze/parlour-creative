/**
 * Case-study data. Every claim here is sourced in CLAIMS-REGISTER.md — do
 * not add a metric, testimonial, or number without logging it there first.
 * `null` fields render as an honest pending state (see /work/[slug]/page.tsx);
 * never fill one in with a plausible-sounding guess.
 */

export type Bucket =
  | "development-real-estate"
  | "hospitality"
  | "founders"
  | "construction-b2b"
  | "heritage";

export const bucketLabels: Record<Bucket, string> = {
  "development-real-estate": "Development & Real Estate",
  hospitality: "Hospitality",
  founders: "Founders & Personal Brands",
  "construction-b2b": "Construction & B2B",
  heritage: "Heritage — Laura at Artform",
};

export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface Metric {
  label: string;
  value: string | null;
}

export interface HeritageGroup {
  subBucket: string;
  clients: string;
  work: string;
}

export interface CaseStudy {
  slug: string;
  bucket: Bucket;
  attribution: "parlour" | "laura-artform";
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
  heritageGroups?: HeritageGroup[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "blue-ocean-belize",
    bucket: "development-real-estate",
    attribution: "parlour",
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
    bucket: "development-real-estate",
    attribution: "parlour",
    published: true,
    featured: false,
    client: "Caves Branch River Estates",
    location: "Franks Eddy Village, Cayo District — 12–15 minutes from Belmopan",
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
    bucket: "development-real-estate",
    attribution: "parlour",
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
    bucket: "construction-b2b",
    attribution: "parlour",
    published: false,
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
    bucket: "founders",
    attribution: "parlour",
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
  {
    slug: "laura-artform",
    bucket: "heritage",
    attribution: "laura-artform",
    published: true,
    featured: false,
    client: "Laura Curridor — Artform",
    location: "Toronto, Canada",
    sector: "Broadcast design, real estate branding, food & beverage, hospitality",
    since: null,
    services: ["Broadcast design and sets", "Real estate branding and sales environments", "Branding and communications"],
    headline: "Laura's work at Artform",
    challenge:
      "Eight years at Artform, the Toronto design and communications firm, where Laura rose to Director of Marketing — the design-build and brand thinking Parlour brings to Belize.",
    approach: {
      position: "This is historical work completed at Artform, not by Parlour — shown here as the experience behind Parlour's current methodology.",
      express: "",
      perform: "",
      enableSales: "",
    },
    whatChanged: [],
    metrics: [],
    testimonial: null,
    sourceNote: "Source: artform.com. Approved by Laura for use on the Parlour website and social media.",
    heroImage: null,
    gallery: [],
    heritageGroups: [
      {
        subBucket: "Real estate and development",
        clients: "Forgestone Capital, Avenue & Park, The HUB at 30 Bay, Freed Developments",
        work: "Real estate branding and sales environments",
      },
      {
        subBucket: "Broadcast and media",
        clients:
          "CBC News, Rogers Sportsnet, Rogers Sports & Media, TVO: The Agenda, Blue Jays / Budweiser, Furze World Wonders",
        work: "Broadcast design and sets, media environments, broadcast advertising",
      },
      {
        subBucket: "Food and beverage",
        clients: "LCBO, Aquamiel Tequila, Alida Tequila",
        work: "Branding and communications",
      },
      {
        subBucket: "Hospitality and experiences",
        clients: "Karl Lagerfeld hotel partnership and Toronto Fashion Week, Muskoka Bay Club, DSquared² × Fashion Television",
        work: "Marketing and build for a Toronto hotel tied to Fashion Week; resort and event work",
      },
    ],
  },
];

export function getPublishedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.published);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug && c.published);
}

export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return caseStudies.find((c) => c.featured && c.published);
}

export function getCaseStudiesByBucket(bucket: Bucket): CaseStudy[] {
  return getPublishedCaseStudies().filter((c) => c.bucket === bucket);
}

/** Buckets that currently have zero published case studies — hide their Work filter. */
export function getActiveBuckets(): Bucket[] {
  const active = new Set(getPublishedCaseStudies().map((c) => c.bucket));
  return (Object.keys(bucketLabels) as Bucket[]).filter((b) => active.has(b));
}
