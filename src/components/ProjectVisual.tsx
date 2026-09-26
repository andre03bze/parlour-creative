import Image from "next/image";
import type { CaseStudy } from "@/content/case-studies";

/**
 * Cover image for a project, or a deliberate typographic tile when no media
 * exists yet. The tile is a temporary slot — swap by setting `cover` in
 * src/content/case-studies.ts.
 */
export function ProjectVisual({
  project,
  sizes,
  className = "",
  priority = false,
}: {
  project: CaseStudy;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  if (project.cover) {
    return (
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div className={`absolute inset-0 flex flex-col justify-between bg-coal p-5 text-paper ${className}`} role="img" aria-label={`${project.client} — imagery to be added`}>
      <span className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-paper/70">Media slot · pending</span>
      <span className="font-display text-[clamp(1.75rem,3vw,3rem)] leading-none">{project.client}</span>
    </div>
  );
}
