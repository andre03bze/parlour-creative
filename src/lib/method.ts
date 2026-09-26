import { getPublishedCaseStudies, type CaseStudy } from "@/content/case-studies";
import { siteToSales } from "@/lib/site";

/**
 * THE METHOD — evidence mapping (reviewable data, not per-project hand claims).
 * A project shows a stage only when one of its documented `disciplines` matches that stage's keywords.
 * Stage names are the canonical Site → Sales framework; notes reuse the playbook's own chain wording.
 */
export type Stage = (typeof siteToSales)[number];
export const stages = siteToSales;

export const stageNote: Record<Stage, string> = {
  Site: "The place and the project team",
  Strategy: "Commercial strategy and positioning",
  Brand: "Identity, naming, brand systems",
  Story: "Story, photography, film, content",
  Experience: "Websites, sales environments, launches",
  Distribution: "Campaigns, paid media, outreach",
  Sales: "Lead capture, CRM, sales tools",
};

/** Lower-case substrings matched against each discipline. */
export const stageKeywords: Record<Stage, string[]> = {
  Site: ["project coordination", "project renders", "3d render", "renders", "interior design", "sales centre"],
  Strategy: ["strategy", "positioning", "conceptualization"],
  Brand: ["brand", "identity", "naming"],
  Story: ["photography", "film", "video production", "copywriting", "editorial", "story", "content", "documentary", "publishing", "drone"],
  Experience: ["web", "build", "environmental", "environment", "experiential", "events", "sales centre", "interior", "launch"],
  Distribution: ["paid media", "media planning", "media management", "media plan", "social strategy", "social media", "outreach", "campaign", "direct marketing", "newsletter"],
  Sales: ["sales materials", "sales centre", "sales enablement", "crm", "lead capture", "lead generation", "brochure"],
};

/** Disciplines that must NOT evidence a stage even if a keyword matches ("Social strategy" is not commercial strategy). */
const stageExclude: Partial<Record<Stage, string[]>> = { Strategy: ["social"] };

/** "Site" only counts on physical-place projects (a TV set is not a development site). */
const siteCategories = ["real-estate", "spaces-design-build"];

/** Manual corrections for review: slug → stages to force on (+) or off (−). Empty by default. */
export const stageOverrides: Record<string, { add?: Stage[]; remove?: Stage[] }> = {
  // Documented design-and-build of the homes themselves (with Roswell Construction): the place is the project.
  "80-82-birch": { add: ["Site"] },
};

export function stagesFor(p: CaseStudy): Stage[] {
  const ds = (p.disciplinesEn ?? p.disciplines).map((d) => d.toLowerCase());
  const hit = (s: Stage) =>
    ds.some((d) => !stageExclude[s]?.some((x) => d.includes(x)) && stageKeywords[s].some((k) => d.includes(k)));
  const o = stageOverrides[p.slug];
  return stages.filter((s) => {
    if (o?.remove?.includes(s)) return false;
    if (o?.add?.includes(s)) return true;
    if (s === "Site" && !p.categories.some((c) => siteCategories.includes(c))) return false;
    return hit(s);
  });
}

/** One real project (and image) per stage for the homepage lens. Validated against the mapping at runtime. */
export const stageShowcase: Record<Stage, string> = {
  Site: "the-hub-at-30-bay",
  Strategy: "blue-ocean-belize",
  Brand: "aquamiel-tequila",
  Story: "blue-ocean-belize",
  Experience: "rogers-sports-media",
  Distribution: "caves-branch-river-estates",
  Sales: "avenue-park",
};

export function showcaseFor(stage: Stage): CaseStudy | undefined {
  const p = getPublishedCaseStudies().find((c) => c.slug === stageShowcase[stage]);
  return p && stagesFor(p).includes(stage) ? p : undefined;
}

export function stageCounts(): Record<Stage, number> {
  const all = getPublishedCaseStudies();
  return Object.fromEntries(stages.map((s) => [s, all.filter((p) => stagesFor(p).includes(s)).length])) as Record<Stage, number>;
}
