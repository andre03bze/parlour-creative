import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui";
import { bucketLabels, getActiveBuckets, getPublishedCaseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Blue Ocean Belize and other real estate and development clients.",
};

export default function WorkPage() {
  const projects = getPublishedCaseStudies();
  const buckets = getActiveBuckets();

  return (
    <Section className="pt-16 lg:pt-20">
      <h1 className="text-display max-w-3xl">Work that sells places.</h1>
      <p className="prose-column mt-6 text-lg text-ink-soft">
        Every project starts with a commercial objective: more qualified
        enquiries, faster sales, more direct bookings. Here&rsquo;s how
        we&rsquo;ve met it.
      </p>

      <nav aria-label="Filter work by category" className="mt-12 flex flex-wrap gap-3 border-y border-line py-4">
        <span className="text-meta px-4 py-2">All</span>
        {buckets.map((b) => (
          <span key={b} className="text-meta px-4 py-2 text-ink-soft">
            {bucketLabels[b]}
          </span>
        ))}
      </nav>

      <div className="mt-4 grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-dim">
              {project.heroImage ? (
                <Image
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-meta">Image pending</div>
              )}
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-xl group-hover:text-forest">{project.client}</p>
                <p className="mt-1 text-sm text-ink-soft">
                  {[project.location, project.sector].filter(Boolean).join(" · ")}
                </p>
              </div>
              {project.attribution === "laura-artform" && (
                <span className="text-meta shrink-0 border border-line px-2 py-1">Laura — Artform</span>
              )}
            </div>
            <p className="mt-2 text-xs text-ink-soft">{project.services.slice(0, 3).join(" · ")}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
