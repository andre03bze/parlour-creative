import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/i18n/client";
import { Button } from "@/components/ui";
import { HeroVideo } from "@/components/HeroVideo";
import { Logo } from "@/components/Logo";
import { SplitReveal } from "@/components/SplitReveal";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { WorkIndex } from "@/components/WorkIndex";
import { getFeaturedCaseStudy, getHomeCaseStudies, getPortfolioStats, getPublishedCaseStudies } from "@/content/case-studies";
import { localizeCase, localizeCases } from "@/content/localize";
import { pageLang, pageMeta, msg, type LangParams } from "@/i18n/page";
import { accent, rich } from "@/i18n/rich";
import { MethodLens } from "@/components/MethodLens";
import { showcaseFor, stageCounts, stageNote, stages, stagesFor } from "@/lib/method";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { t } = await pageLang(params);
  return {
    ...(await pageMeta(
      params,
      "/",
      "Parlour Creative · Real Estate & Hospitality Marketing, Belize",
      "Parlour Creative is a senior-led, place-led marketing and creative studio for developers, brokerages, hotels and founders in Belize and the Americas: from site to sales."
    )),
    title: { absolute: t("Parlour Creative · Real Estate & Hospitality Marketing, Belize") },
  };
}

const proofLink = "underline decoration-1 underline-offset-[0.14em] transition-colors duration-300 ease-link hover:text-paper";

const sectors = [
  { label: msg("Real Estate"), href: "/real-estate", line: msg("Developers, brokerages and agents") },
  { label: msg("Hospitality"), href: "/hospitality", line: msg("Resorts, hotels and destinations") },
  { label: msg("Founders"), href: "/founders", line: msg("Founder stories and personal brands") },
];

export default async function HomePage({ params }: LangParams) {
  const { lang, t } = await pageLang(params);
  const projects = localizeCases(getHomeCaseStudies(), lang);
  const all = getPublishedCaseStudies();
  const total = all.length;
  const stats = getPortfolioStats();
  const counts = stageCounts();
  const lens = stages.map((name) => {
    const sp = showcaseFor(name);
    const spl = sp && localizeCase(sp, lang);
    return {
      name,
      note: stageNote[name],
      count: counts[name],
      showcase: spl?.cover ? { slug: spl.slug, client: spl.client, src: spl.cover.src, alt: spl.cover.alt, place: spl.place } : null,
      projects: all.filter((c) => stagesFor(c).includes(name)).map((c) => ({ slug: c.slug, client: c.client })),
    };
  });
  const featuredEn = getFeaturedCaseStudy();
  const featured = featuredEn && localizeCase(featuredEn, lang);

  return (
    <>
      {/* 1 — Identity: full-bleed film with the giant wordmark (small header logo stays hidden until scroll) */}
      <section data-hero aria-label="Parlour Creative" className="relative h-[100svh] min-h-[34rem] w-full overflow-hidden bg-coal text-white">
        <Image
          src="/hero/hero-poster.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <HeroVideo
          src="/hero/hero.mp4"
          poster="/hero/hero-poster.webp"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
        <div className="container-page absolute inset-x-0 bottom-0 pb-3 lg:pb-5">
          <div className="mb-4 flex items-end justify-between gap-6 text-[0.6875rem] font-medium uppercase tracking-[0.14em] lg:mb-6">
            <span className="text-white/85">{t("Place-led marketing & creative studio")}</span>
            {featured && (
              <Link href={`/work/${featured.slug}`} className="group flex items-center gap-3 text-right">
                <span>
                  <span className="hidden sm:inline">{t("Now showing")}: </span>
                  {featured.client}
                </span>
                <span aria-hidden="true" className="inline-block transition-transform duration-500 ease-link group-hover:translate-x-1.5">→</span>
              </Link>
            )}
          </div>
          <span className="logo-rise">
            <Logo className="block h-auto w-full" title="Parlour Creative" />
          </span>
        </div>
      </section>

      {/* 1b — Identity statement (the page's H1) */}
      <section aria-label={t("About Parlour")} className="pb-16 pt-14 lg:pb-28 lg:pt-24">
        <div className="container-page">
          <h1 className="text-h2 max-w-5xl">
            <SplitReveal
              parts={[
                t("We turn"),
                { text: t("places"), mark: true },
                t("into"),
                { text: t("brands"), mark: true },
                t("people want to"),
                { text: t("belong to."), accent: true },
              ]}
            />
          </h1>
          <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-[1fr_1fr]">
            <span aria-hidden="true" />
            <Reveal delayMs={500}>
              <p className="prose-column text-lead">
                {t("And into sales, enquiries and bookings. Parlour is the senior-led marketing partner for real estate, hospitality and founder brands: positioning, story, content, paid media, lead capture and CRM, run as one system. Based in Belize, serving the Americas.")}
              </p>
              <div className="mt-8">
                <Button href="/work" variant="secondary">{t("View the work")}</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — Work: the index, straight after the film */}
      <section aria-labelledby="work-heading" className="pb-20 lg:pb-32">
        <div className="container-page">
          <div className="mb-8 flex items-baseline justify-between gap-6">
            <h2 id="work-heading" className="text-h3">{t("Our work")}</h2>
            <Link href="/work" className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] underline-offset-4 hover:underline">
              {t("All work")} →
            </Link>
          </div>
          <WorkIndex projects={projects} />
        </div>
      </section>

      {/* 3 — Ticker */}
      <div className="bg-accent text-accent-ink">
        <Marquee items={["Position", "Express", "Perform", "Sell", "Constructed intelligence", "Human measure"].map((x) => t(x))} />
      </div>

      {/* 4 — Proof + capability */}
      <section data-dark aria-labelledby="proof-heading" className="bg-coal pb-24 pt-20 text-paper lg:pb-40 lg:pt-32">
        <div className="container-page">
          <Reveal>
            <h2 id="proof-heading" className="text-statement max-w-4xl">
              {t("One team owns the result: positioning, story, content, paid media, lead capture and CRM, run as a single system.")}
            </h2>
          </Reveal>
          <Reveal delayMs={150} className="mt-16 lg:mt-24">
            <p className="text-h2 max-w-4xl">
              {rich(
                t,
                "<p><n>{total}</n> projects</p> across <i><n>{industries}</n> industries</i>.",
                {
                  p: (c) => <Link href="/work" className={proofLink}>{c}</Link>,
                  i: (c) => <Link href="/work" className={proofLink}>{c}</Link>,
                  n: accent,
                },
                { total: stats.total, industries: stats.industries }
              )}
            </p>
            <p className="text-statement mt-5 max-w-4xl text-paper/75">
              {rich(t, "Based in <b>Belize</b>. Experience across international markets.", {
                b: (c) => <Link href="/work?market=Belize" className={proofLink}>{c}</Link>,
              })}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5 — Site to Sales */}
      <section aria-labelledby="s2s-heading" className="py-20 lg:py-32">
        <div className="container-page">
          <p className="text-meta">{t("The Parlour system")}</p>
          <h2 id="s2s-heading" className="text-h2 mt-4 max-w-4xl">
            {rich(t, "From site to <a>sales.</a>", { a: accent })}
          </h2>
          <div className="mt-14">
            <MethodLens stages={lens} total={total} />
          </div>
          <p className="prose-column mt-10 text-ink-soft">
            {t("We shape the commercial strategy, coordinate the project team, build the brand and story, and run the content, paid media, lead capture, CRM and experiences that sell it.")}
          </p>
          <div className="mt-8">
            <Button href="/approach" variant="secondary">{t("The approach")}</Button>
          </div>
        </div>
      </section>

      {/* 6 — Sectors (index-style rows) */}
      <section aria-labelledby="sectors-heading" className="pb-20 lg:pb-32">
        <div className="container-page">
          <h2 id="sectors-heading" className="text-h3 mb-8">{t("Where we work")}</h2>
          <ul className="border-t border-ink/70">
            {sectors.map((s) => (
              <li key={s.href} className="border-b border-ink/70">
                <Link href={s.href} className="group flex items-end justify-between gap-6 py-4 lg:py-5">
                  <span className="text-index transition-transform duration-500 ease-editorial group-hover:translate-x-3">{t(s.label)}</span>
                  <span className="hidden pb-3 text-[0.6875rem] font-medium uppercase tracking-[0.14em] sm:block">{t(s.line)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 — Growth Diagnostic */}
      <section aria-labelledby="gd-heading" className="bg-tint py-24 lg:py-40">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-meta">{t("Parlour Growth Diagnostic")}</p>
            <h2 id="gd-heading" className="text-display mt-4">
              {rich(t, "Find the <a>leak.</a>", { a: accent })}
            </h2>
          </div>
          <div>
            <p className="text-lead">
              {t("Three weeks to see exactly where your marketing is losing sales, and a 90-day plan to fix it.")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/growth-diagnostic">{t("Growth Diagnostic")}</Button>
              <Button href="/contact" variant="secondary">{t("Start a conversation")}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — People + region */}
      <section aria-labelledby="people-heading" className="py-20 lg:py-32">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <h2 id="people-heading" className="text-statement">
            {t("Senior-led by design. Built in Belize, working across the Americas.")}
          </h2>
          <div>
            <p className="prose-column text-ink-soft">
              {t("Parlour is led by Laura Curridor, Founder, CEO & Chief Strategy Officer, and Andre Acosta, Creative & Strategy Director. Every engagement pairs senior strategy with the specialist creative, digital and production talent the project needs, without the layers of a traditional agency.")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about" variant="secondary">{t("About Parlour")}</Button>
              <Button href="/belize" variant="secondary">{t("Parlour in Belize")}</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
