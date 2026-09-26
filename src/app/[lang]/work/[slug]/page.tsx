import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/i18n/client";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui";
import { HeroVideo } from "@/components/HeroVideo";
import { JsonLd } from "@/components/JsonLd";
import { MediaStack } from "@/components/MediaStack";
import { MethodTrace } from "@/components/MethodTrace";
import { ViewTransition } from "react";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/SplitReveal";
import { categoryLabels, getAdjacentCaseStudies, getCaseStudy, getPublishedCaseStudies } from "@/content/case-studies";
import { localizeCase } from "@/content/localize";
import { isLang, langs, localePath } from "@/i18n/config";
import { alternatesFor, ogLocale } from "@/i18n/meta";
import { pageLang } from "@/i18n/page";
import { siteUrl } from "@/lib/site";

const clip = (t: string, n: number) => (t.length <= n ? t : `${t.slice(0, n - 1).replace(/\s+\S*$/, "")}…`);

export function generateStaticParams() {
  return langs.flatMap((lang) => getPublishedCaseStudies().map((c) => ({ lang, slug: c.slug })));
}

type Params = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  const base = getCaseStudy(slug);
  if (!base || !isLang(lang)) return {};
  const project = localizeCase(base, lang);
  const title = project.client;
  return {
    title,
    description: clip(`${project.tagline} ${project.challenge}`, 158),
    alternates: alternatesFor(lang, `/work/${project.slug}`),
    openGraph: {
      title: `${title} · Parlour Creative`,
      description: project.tagline,
      url: localePath(lang, `/work/${project.slug}`),
      locale: ogLocale(lang),
      type: "website",
      siteName: "Parlour Creative",
      images: project.cover ? [{ url: project.cover.src, alt: project.cover.alt }] : undefined,
    },
    twitter: { card: "summary_large_image", title: `${title} · Parlour Creative`, description: project.tagline, images: project.cover ? [project.cover.src] : undefined },
  };
}

const approachLabels = [
  ["position", "Position"],
  ["express", "Express"],
  ["perform", "Perform"],
  ["enableSales", "Enable sales"],
] as const;

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const { lang, t } = await pageLang(params);
  const base = getCaseStudy(slug);
  if (!base) notFound();
  const project = localizeCase(base, lang);

  const adjSrc = getAdjacentCaseStudies(project.slug);
  const adjacent = adjSrc && { prev: localizeCase(adjSrc.prev, lang), next: localizeCase(adjSrc.next, lang) };
  const knownMetrics = project.metrics.filter((m) => m.value);

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Parlour Creative", item: `${siteUrl}${localePath(lang, "/")}` },
            { "@type": "ListItem", position: 2, name: t("Work"), item: `${siteUrl}${localePath(lang, "/work")}` },
            { "@type": "ListItem", position: 3, name: project.client, item: `${siteUrl}${localePath(lang, `/work/${project.slug}`)}` },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.client,
          description: project.tagline,
          url: `${siteUrl}${localePath(lang, `/work/${project.slug}`)}`,
          inLanguage: lang,
          image: project.cover ? `${siteUrl}${project.cover.src}` : undefined,
          creator: { "@type": "Organization", name: "Parlour Creative", url: siteUrl },
        }}
      />

      {/* Banner */}
      <div
        data-hero
        className={`relative w-full overflow-hidden bg-coal ${
          project.heroVideo || project.cover ? "h-[72svh] min-h-[28rem] lg:h-[86svh]" : "h-[40svh] min-h-[18rem] lg:h-[46svh]"
        }`}
      >
        {/* Shared element: the previous project's "Next" image morphs into this hero (falls back to a plain page change). */}
        <ViewTransition name={`hero-${project.slug}`} share="hero-morph">
          <div className="absolute inset-0">
          {project.heroVideo ? (
            <>
              <Image src={project.heroVideo.poster} alt="" fill priority fetchPriority="high" sizes="100vw" className="object-cover" />
              <HeroVideo src={project.heroVideo.src} poster={project.heroVideo.poster} className="absolute inset-0 h-full w-full object-cover" />
            </>
          ) : project.cover ? (
            <Image src={project.cover.src} alt={project.cover.alt} fill priority sizes="100vw" className="object-cover" />
          ) : (
            <div className="flex h-full items-end p-6 text-paper lg:p-10">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-paper/70">{t("Hero media slot · pending")}</p>
            </div>
          )}
          </div>
        </ViewTransition>
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />
      </div>

      {/* Title / meta */}
      <div className="container-page grid gap-10 pb-16 pt-14 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-24">
        <div>
          <h1 className="text-display">
            <SplitReveal parts={[project.client]} staggerMs={90} />
          </h1>
          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 sm:max-w-md">
            <div>
              <dt className="text-meta">{t("Client")}</dt>
              <dd className="mt-1 text-sm">{project.client}</dd>
            </div>
            <div>
              <dt className="text-meta">{t("Sector")}</dt>
              <dd className="mt-1 text-sm">{project.sector}</dd>
            </div>
            {project.location && (
              <div>
                <dt className="text-meta">{t("Where")}</dt>
                <dd className="mt-1 text-sm">{project.location}</dd>
              </div>
            )}
            {project.since && (
              <div>
                <dt className="text-meta">{t("Since")}</dt>
                <dd className="mt-1 text-sm">{project.since}</dd>
              </div>
            )}
          </dl>
        </div>
        <div className="lg:pt-3">
          <p className="text-lead">{project.tagline}</p>
          <p className="mt-6 text-[0.6875rem] font-medium uppercase leading-relaxed tracking-[0.12em]">
            {project.disciplines.map((d, i) => (
              <span key={d}>
                {i > 0 && " / "}
                {d}
              </span>
            ))}
          </p>
          <MethodTrace project={project} t={t} className="mt-3" />
          <p className="prose-column mt-10 text-ink-soft">{project.challenge}</p>
        </div>
      </div>

      {/* Film */}
      {project.video && (
        <div className="container-page mb-6 lg:mb-10">
          <VideoEmbed video={project.video} />
        </div>
      )}

      {/* Media sequence */}
      {project.sequence.length > 0 ? (
        <MediaStack blocks={project.sequence} />
      ) : (
        !project.video && (
          <div className="container-page">
            <div className="flex aspect-[16/7] items-end border border-dashed border-ink/30 p-6">
              <p className="text-meta">{t("Project imagery to be added")}</p>
            </div>
          </div>
        )
      )}

      {/* Editorial record */}
      <div className="container-page grid gap-16 py-24 lg:grid-cols-[1fr_1.6fr] lg:py-40">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-meta">{t("Parlour’s role")}</p>
          <ul className="mt-4 space-y-1.5">
            {project.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          {project.credits && project.credits.length > 0 && (
            <>
              <p className="text-meta mt-10">{t("Credits")}</p>
              <dl className="mt-2 space-y-2">
                {project.credits.map((c) => (
                  <div key={c.role}>
                    <dt className="text-sm text-ink-soft">{c.role}</dt>
                    <dd>{c.name}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}
          <p className="text-meta mt-10">{t("Industry")}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.categories.map((c) => (
              <li key={c}>
                <Link
                  href={`/work?category=${c}`}
                  className="inline-block border border-ink/40 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ease-link hover:border-ink hover:bg-ink hover:text-paper"
                >
                  {t(categoryLabels[c])}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-statement">{project.headline}</p>

          {approachLabels.some(([key]) => project.approach[key]) && (
            <div className="mt-16">
              {approachLabels.map(([key, label], i) => {
                const body = project.approach[key];
                if (!body) return null;
                return (
                  <Reveal key={key} delayMs={i * 60}>
                    <div className="grid gap-3 border-t border-ink/60 py-6 sm:grid-cols-[9rem_1fr]">
                      <p className="text-meta">{t(label)}</p>
                      <p className="prose-column">{body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}

          {project.story && project.story.length > 0 && (
            <div className="mt-12 space-y-6">
              {project.story.map((para, i) => (
                <Reveal key={i} delayMs={i * 60}>
                  <p className="prose-column text-lg">{para}</p>
                </Reveal>
              ))}
            </div>
          )}

          {project.whatChanged.length > 0 && (
            <Reveal className="mt-16">
              <p className="text-meta">{t("What changed")}</p>
              <ul className="prose-column mt-4 space-y-3 text-lg">
                {project.whatChanged.map((item) => (
                  <li key={item} className="border-t border-ink/25 pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {project.metrics.length > 0 && (
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="border-t border-ink pt-4">
                  <p className={m.value ? "text-h3" : "text-xs font-medium uppercase tracking-[0.12em] text-ink-soft"}>
                    {m.value ?? t("Figure pending")}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">{m.label}</p>
                </div>
              ))}
            </div>
          )}
          {project.metrics.length > 0 && knownMetrics.length === 0 && (
            <p className="text-meta mt-4">{t("Verified results are added as the client approves them.")}</p>
          )}

          {project.testimonial && (
            <blockquote className="mt-16 border-l border-ink pl-6 text-statement">
              &ldquo;{project.testimonial.quote}&rdquo;
              <footer className="mt-4 font-sans text-sm text-ink-soft">
                {project.testimonial.name}, {project.testimonial.title}
              </footer>
            </blockquote>
          )}


          {project.sourceNote && <p className="text-meta mt-16 max-w-md">{project.sourceNote}</p>}
        </div>
      </div>

      {/* Previous / next */}
      {adjacent && (
        <nav aria-label={t("More work")} className="border-t border-ink/60">
          <div className="container-page grid sm:grid-cols-2">
            {[
              { label: t("Previous"), p: adjacent.prev, next: false },
              { label: t("Next"), p: adjacent.next, next: true },
            ].map(({ label, p, next }, i) => (
              <Link
                key={label}
                href={`/work/${p.slug}`}
                className={`group py-10 lg:py-16 ${i === 1 ? "sm:border-l sm:border-ink/60 sm:pl-10 sm:text-right" : "sm:pr-10"}`}
              >
                <p className="text-meta">{t(label)}</p>
                <p className="text-h2 mt-3 transition-transform duration-500 ease-editorial group-hover:translate-x-2">
                  {p.client}
                </p>
                {next && p.cover && (
                  <ViewTransition name={`hero-${p.slug}`} share="hero-morph">
                    <div className="relative mt-6 aspect-[16/9] overflow-hidden bg-coal">
                      <Image
                        src={p.cover.src}
                        alt={p.cover.alt}
                        fill
                        sizes="(min-width: 640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.03]"
                      />
                    </div>
                  </ViewTransition>
                )}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <div data-dark className="bg-coal py-20 text-center text-paper lg:py-32">
        <div className="container-page">
          <p className="text-h2 mx-auto max-w-3xl">{t("Bring your next place to market.")}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="onDark">{t("Start a conversation")}</Button>
            <Button href="/growth-diagnostic" variant="onDark">{t("Growth Diagnostic")}</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
