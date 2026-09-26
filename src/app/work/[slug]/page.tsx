import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { getCaseStudy, getPublishedCaseStudies } from "@/content/case-studies";

export function generateStaticParams() {
  return getPublishedCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};
  return {
    title: project.client,
    description: project.headline,
  };
}

const approachLabels = [
  ["position", "Position"],
  ["express", "Express"],
  ["perform", "Perform"],
  ["enableSales", "Enable sales"],
] as const;

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  const isHeritage = project.attribution === "laura-artform";

  return (
    <article>
      <Section className="pb-12 pt-16 lg:pt-20">
        {isHeritage && (
          <p className="text-meta mb-5 inline-block border border-line px-3 py-1">
            Laura — Artform · historical work, not Parlour
          </p>
        )}
        <h1 className="text-display max-w-4xl">{project.headline}</h1>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-y border-line py-6 sm:grid-cols-4">
          <div>
            <dt className="text-meta">Client</dt>
            <dd className="mt-1">{project.client}</dd>
          </div>
          {project.location && (
            <div>
              <dt className="text-meta">Where</dt>
              <dd className="mt-1">{project.location}</dd>
            </div>
          )}
          <div>
            <dt className="text-meta">Sector</dt>
            <dd className="mt-1">{project.sector}</dd>
          </div>
          {project.since && (
            <div>
              <dt className="text-meta">Since</dt>
              <dd className="mt-1">{project.since}</dd>
            </div>
          )}
        </dl>
      </Section>

      {project.heroImage && (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      <Section className="grid gap-16 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-meta">Services</p>
          <ul className="mt-3 space-y-1 text-sm text-ink-soft">
            {project.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <Reveal>
            <h2 className="text-h3">The challenge</h2>
            <p className="prose-column mt-4 text-ink-soft">{project.challenge}</p>
          </Reveal>

          {!isHeritage && (
            <Reveal delayMs={80} className="mt-14">
              <h2 className="text-h3">What Parlour did</h2>
              <div className="mt-6 space-y-6">
                {approachLabels.map(([key, label]) => {
                  const body = project.approach[key];
                  if (!body) return null;
                  return (
                    <div key={key} className="border-t border-line pt-5">
                      <p className="font-display text-lg">{label}</p>
                      <p className="prose-column mt-2 text-ink-soft">{body}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          )}

          {project.whatChanged.length > 0 && (
            <Reveal delayMs={120} className="mt-14">
              <h2 className="text-h3">What changed</h2>
              <ul className="prose-column mt-4 list-disc space-y-2 pl-5 text-ink-soft">
                {project.whatChanged.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          )}

          {project.metrics.length > 0 && (
            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="border-t border-ink pt-4">
                  <p className="font-display text-2xl">{m.value ?? "Pending"}</p>
                  <p className="mt-1 text-xs text-ink-soft">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {project.testimonial && (
            <blockquote className="prose-column mt-14 border-l-2 border-forest pl-6 text-xl font-display">
              &ldquo;{project.testimonial.quote}&rdquo;
              <footer className="mt-3 text-sm font-sans not-italic text-ink-soft">
                {project.testimonial.name}, {project.testimonial.title}
              </footer>
            </blockquote>
          )}

          {project.heritageGroups && (
            <div className="mt-14 space-y-10">
              {project.heritageGroups.map((group) => (
                <div key={group.subBucket} className="border-t border-line pt-6">
                  <p className="font-display text-lg">{group.subBucket}</p>
                  <p className="mt-2 text-sm text-ink-soft">{group.clients}</p>
                  <p className="mt-1 text-xs text-ink-soft">{group.work}</p>
                </div>
              ))}
            </div>
          )}

          {project.gallery.length > 0 && (
            <div className="mt-16 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden bg-paper-dim">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {project.sourceNote && (
            <p className="mt-14 text-xs text-ink-soft">{project.sourceNote}</p>
          )}

          <div className="mt-16">
            <Link href="/work" className="text-sm font-medium text-forest hover:underline">
              ← Back to Work
            </Link>
          </div>
        </div>
      </Section>
    </article>
  );
}
