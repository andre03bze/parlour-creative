import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { HeroVideo } from "@/components/HeroVideo";
import { Logo } from "@/components/Logo";
import { SplitReveal } from "@/components/SplitReveal";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { WorkIndex } from "@/components/WorkIndex";
import { getFeaturedCaseStudy, getHomeCaseStudies, getPortfolioStats, getPublishedCaseStudies } from "@/content/case-studies";
import { MethodLens } from "@/components/MethodLens";
import { showcaseFor, stageCounts, stageNote, stages, stagesFor } from "@/lib/method";

export const metadata: Metadata = {
  title: { absolute: "Parlour Creative · Real Estate & Hospitality Marketing, Belize" },
  description:
    "Parlour Creative is a senior-led, place-led marketing and creative studio for developers, brokerages, hotels and founders in Belize and the Americas: from site to sales.",
  alternates: { canonical: "/" },
};

const proofLink = "underline decoration-1 underline-offset-[0.14em] transition-colors duration-300 ease-link hover:text-paper";

const sectors = [
  { label: "Real Estate", href: "/real-estate", line: "Developers, brokerages and agents" },
  { label: "Hospitality", href: "/hospitality", line: "Resorts, hotels and destinations" },
  { label: "Founders", href: "/founders", line: "Founder stories and personal brands" },
];

export default function HomePage() {
  const projects = getHomeCaseStudies();
  const all = getPublishedCaseStudies();
  const total = all.length;
  const stats = getPortfolioStats();
  const counts = stageCounts();
  const lens = stages.map((name) => {
    const sp = showcaseFor(name);
    return {
      name,
      note: stageNote[name],
      count: counts[name],
      showcase: sp?.cover ? { slug: sp.slug, client: sp.client, src: sp.cover.src, alt: sp.cover.alt, place: sp.place } : null,
      projects: all.filter((c) => stagesFor(c).includes(name)).map((c) => ({ slug: c.slug, client: c.client })),
    };
  });
  const featured = getFeaturedCaseStudy();

  return (
    <>
      {/* 1 — Identity: full-bleed film with the giant wordmark (small header logo stays hidden until scroll) */}
      <section data-hero aria-label="Parlour Creative" className="relative h-[100svh] min-h-[34rem] w-full overflow-hidden bg-coal text-white">
        <Image
          src="/work/blue-ocean-belize/hero-poster-2200w.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <HeroVideo
          src="/work/blue-ocean-belize/hero-loop.mp4"
          poster="/work/blue-ocean-belize/hero-poster-2200w.webp"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
        <div className="container-page absolute inset-x-0 bottom-0 pb-3 lg:pb-5">
          <div className="mb-4 flex items-end justify-between gap-6 text-[0.6875rem] font-medium uppercase tracking-[0.14em] lg:mb-6">
            <span className="text-white/85">Place-led marketing &amp; creative studio</span>
            {featured && (
              <Link href={`/work/${featured.slug}`} className="group flex items-center gap-3 text-right">
                <span>
                  <span className="hidden sm:inline">Now showing: </span>
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
      <section aria-label="About Parlour" className="pb-16 pt-14 lg:pb-28 lg:pt-24">
        <div className="container-page">
          <h1 className="text-h2 max-w-5xl">
            <SplitReveal
              parts={[
                "We turn",
                { text: "places", mark: true },
                "into",
                { text: "brands", mark: true },
                "people want to",
                { text: "belong to.", accent: true },
              ]}
            />
          </h1>
          <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-[1fr_1fr]">
            <span aria-hidden="true" />
            <Reveal delayMs={500}>
              <p className="prose-column text-lead">
                And into sales, enquiries and bookings. Parlour is the senior-led marketing partner for real estate,
                hospitality and founder brands: positioning, story, content, paid media, lead capture and CRM, run as
                one system. Based in Belize, serving the Americas.
              </p>
              <div className="mt-8">
                <Button href="/work" variant="secondary">View the work</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — Work: the index, straight after the film */}
      <section aria-labelledby="work-heading" className="pb-20 lg:pb-32">
        <div className="container-page">
          <div className="mb-8 flex items-baseline justify-between gap-6">
            <h2 id="work-heading" className="text-h3">Our work</h2>
            <Link href="/work" className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] underline-offset-4 hover:underline">
              All work →
            </Link>
          </div>
          <WorkIndex projects={projects} />
        </div>
      </section>

      {/* 3 — Ticker */}
      <div className="bg-accent text-accent-ink">
        <Marquee items={["Position", "Express", "Perform", "Sell", "Constructed intelligence", "Human measure"]} />
      </div>

      {/* 4 — Proof + capability */}
      <section data-dark aria-labelledby="proof-heading" className="bg-coal pb-24 pt-20 text-paper lg:pb-40 lg:pt-32">
        <div className="container-page">
          <Reveal>
            <h2 id="proof-heading" className="text-statement max-w-4xl">
              One team owns the result: positioning, story, content, paid media, lead capture and CRM, run as a single
              system.
            </h2>
          </Reveal>
          <Reveal delayMs={150} className="mt-16 lg:mt-24">
            <p className="text-h2 max-w-4xl">
              <Link href="/work" className={proofLink}><span className="accent">{stats.total}</span> projects</Link> across{" "}
              <Link href="/work" className={proofLink}><span className="accent">{stats.industries}</span> industries</Link>.
            </p>
            <p className="text-statement mt-5 max-w-4xl text-paper/75">
              Based in <Link href="/work?market=Belize" className={proofLink}>Belize</Link>. Experience across international markets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5 — Site to Sales */}
      <section aria-labelledby="s2s-heading" className="py-20 lg:py-32">
        <div className="container-page">
          <p className="text-meta">The Parlour system</p>
          <h2 id="s2s-heading" className="text-h2 mt-4 max-w-4xl">
            From site to <span className="accent">sales.</span>
          </h2>
          <div className="mt-14">
            <MethodLens stages={lens} total={total} />
          </div>
          <p className="prose-column mt-10 text-ink-soft">
            We shape the commercial strategy, coordinate the project team, build the brand and story, and run the
            content, paid media, lead capture, CRM and experiences that sell it.
          </p>
          <div className="mt-8">
            <Button href="/approach" variant="secondary">The approach</Button>
          </div>
        </div>
      </section>

      {/* 6 — Sectors (index-style rows) */}
      <section aria-labelledby="sectors-heading" className="pb-20 lg:pb-32">
        <div className="container-page">
          <h2 id="sectors-heading" className="text-h3 mb-8">Where we work</h2>
          <ul className="border-t border-ink/70">
            {sectors.map((s) => (
              <li key={s.href} className="border-b border-ink/70">
                <Link href={s.href} className="group flex items-end justify-between gap-6 py-4 lg:py-5">
                  <span className="text-index transition-transform duration-500 ease-editorial group-hover:translate-x-3">{s.label}</span>
                  <span className="hidden pb-3 text-[0.6875rem] font-medium uppercase tracking-[0.14em] sm:block">{s.line}</span>
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
            <p className="text-meta">Parlour Growth Diagnostic</p>
            <h2 id="gd-heading" className="text-display mt-4">
              Find the <span className="accent">leak.</span>
            </h2>
          </div>
          <div>
            <p className="text-lead">
              Three weeks to see exactly where your marketing is losing sales, and a 90-day plan to fix it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/growth-diagnostic">Growth Diagnostic</Button>
              <Button href="/contact" variant="secondary">Start a conversation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — People + region */}
      <section aria-labelledby="people-heading" className="py-20 lg:py-32">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <h2 id="people-heading" className="text-statement">
            Senior-led by design. Built in Belize, working across the Americas.
          </h2>
          <div>
            <p className="prose-column text-ink-soft">
              Parlour is led by Laura Curridor, Founder, CEO &amp; Chief Strategy Officer, and Andre Acosta, Creative
              &amp; Strategy Director. Every engagement pairs senior strategy with the specialist creative, digital and
              production talent the project needs, without the layers of a traditional agency.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about" variant="secondary">About Parlour</Button>
              <Button href="/belize" variant="secondary">Parlour in Belize</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
