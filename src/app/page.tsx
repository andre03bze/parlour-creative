import type { Metadata } from "next";
import Image from "next/image";
import { Button, Eyebrow, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { getFeaturedCaseStudy } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Parlour Creative · Real Estate & Hospitality Marketing, Belize",
  description:
    "Strategy-led brand and marketing for developers, brokerages and hotels in Belize and the Americas.",
};

const problems = [
  {
    label: "Position",
    body: "The place is valuable, but its position isn't distinctive yet. We define the buyer or guest, the market position and the reason to choose it now.",
  },
  {
    label: "Alignment",
    body: "Development, marketing and sales are telling different stories. We connect them into one direction across brand, campaigns, sales tools and the buyer's experience.",
  },
  {
    label: "Momentum",
    body: "The project is ready, but the market isn't paying attention. We build the creative platform, content and campaigns to launch with confidence.",
  },
  {
    label: "Conversion",
    body: "Attention isn't turning into qualified enquiries. We build the path from first look to lead capture, fast sales follow-up and closing.",
  },
];

const system = [
  {
    label: "Position",
    body: "Market insight, audience definition and the commercial logic that gives the property a distinct place in its market.",
  },
  {
    label: "Express",
    body: "Identity, imagery, film and the story that turn a location into a brand people believe in.",
  },
  {
    label: "Perform",
    body: "Paid media, websites, landing pages, lead capture and CRM that turn attention into qualified demand.",
  },
  {
    label: "Sell",
    body: "Sales kits, co-broker tools and weekly reporting that keep marketing tied to closed deals and direct bookings.",
  },
];

const capabilities = [
  { label: "Strategy", body: "Commercial strategy, positioning, audience, go-to-market and launch planning." },
  { label: "Brand", body: "Identity, naming, brand systems, story and campaign platforms." },
  { label: "Creative", body: "Photography, film, drone and art direction, produced in-house." },
  { label: "Digital", body: "Websites, landing pages, SEO and AI-search visibility, analytics." },
  { label: "Performance", body: "Meta, Google, lead generation, CRM, email and WhatsApp." },
  { label: "Project coordination", body: "Working with architects, engineers, planners and building-solutions partners." },
];

const howWeWork = [
  { step: "Discover", body: "Understand the business, the site and what's actually holding growth back." },
  { step: "Define", body: "Set the audience, the position and the commercial goal everything else serves." },
  { step: "Create", body: "Build the brand, story and content that carry that position into market." },
  { step: "Launch", body: "Run the campaigns, sales tools and lead capture that turn attention into enquiries." },
  { step: "Learn", body: "Report against the KPIs that matter and adjust the system, not just the ads." },
];

const waysToWork = [
  { name: "Growth Diagnostic", forText: "Find where your marketing is losing sales, in three weeks", href: "/growth-diagnostic", tag: "Start here" },
  { name: "Growth Partner", forText: "Ongoing marketing for a brokerage, development or hotel", href: "/services", tag: "Retainer" },
  { name: "Launch Partner", forText: "A new development, phase or opening", href: "/services", tag: "Retainer" },
  { name: "Project Partner", forText: "From site to sales: strategy, project coordination, brand and launch", href: "/approach", tag: "Retainer" },
  { name: "Portfolio Partner", forText: "Several projects or revenue streams under one system", href: "/services", tag: "Retainer" },
];

export default function HomePage() {
  const featured = getFeaturedCaseStudy();

  return (
    <>
      {/* Top bar */}
      <div className="border-b border-line bg-paper-dim py-2 text-center text-xs tracking-wide text-ink-soft">
        Strategy-led marketing for real estate and hospitality · Belize and the Americas
      </div>

      {/* Hero */}
      <Section className="pb-16 pt-16 lg:pb-24 lg:pt-20">
        <Eyebrow>Brand and marketing for real estate and hospitality</Eyebrow>
        <h1 className="text-display mt-5 max-w-4xl">
          We turn places into brands people want to belong to.
        </h1>
        <p className="prose-column mt-6 text-lg text-ink-soft">
          Then we turn them into sales, enquiries and bookings. Parlour runs
          positioning, story, content, paid media, lead capture and CRM as one
          system, led by senior strategists in Belize.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/work">See the work</Button>
          <Button href="/contact" variant="secondary">
            Book a strategy call
          </Button>
        </div>
        <p className="text-meta mt-10">Position → Express → Perform → Sell</p>
      </Section>

      {/* Proof bar */}
      <div className="border-y border-line bg-forest text-paper">
        <div className="container-page flex flex-col gap-3 py-6 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:text-center">
          <span>Retained by Blue Ocean Belize across five coastal developments</span>
          <span className="hidden h-1 w-1 rounded-full bg-paper/50 sm:block" />
          <span>Eight years of senior agency leadership</span>
          <span className="hidden h-1 w-1 rounded-full bg-paper/50 sm:block" />
          <span>Strategy, production and performance under one roof</span>
        </div>
      </div>

      {/* Built for */}
      <Section className="py-14 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Developers, master plans and investment projects",
            "Brokerages, agents and sales teams",
            "Resorts, hotels and hospitality brands",
            "Destinations and mixed-use places",
          ].map((item) => (
            <p key={item} className="border-t border-ink pt-4 text-sm font-medium">
              {item}
            </p>
          ))}
        </div>
      </Section>

      {/* The problem */}
      <Section dark>
        <Reveal>
          <h2 className="text-h2 max-w-2xl">A great property still needs a reason to be chosen.</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {problems.map((item, i) => (
            <Reveal key={item.label} delayMs={i * 80}>
              <p className="font-display text-xl">{item.label}</p>
              <p className="mt-3 text-sm text-paper/75">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured work */}
      {featured && (
        <Section>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="text-h2 mt-4">Five developments. One marketing system.</h2>
              <p className="prose-column mt-5 text-ink-soft">
                For Blue Ocean Belize, Parlour built the portfolio story, the
                development brands, 120+ hours of production, always-on paid
                media, and the CRM and co-broker tools that carry buyers from
                first look to sale.
              </p>
              <div className="mt-8">
                <Button href={`/work/${featured.slug}`}>Read the case study</Button>
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-dim">
                {featured.heroImage ? (
                  <Image
                    src={featured.heroImage.src}
                    alt={featured.heroImage.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-meta">
                    Image pending
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      {/* One connected system */}
      <Section className="bg-paper-dim">
        <Reveal>
          <h2 className="text-h2 max-w-2xl">From place to story to revenue.</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {system.map((item, i) => (
            <Reveal key={item.label} delayMs={i * 80}>
              <p className="text-meta">{`0${i + 1}`}</p>
              <p className="mt-2 font-display text-xl">{item.label}</p>
              <p className="mt-3 text-sm text-ink-soft">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <h2 className="text-h2 max-w-xl">What Parlour runs.</h2>
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.label} className="border-t border-line pt-5">
              <p className="font-display text-lg">{item.label}</p>
              <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-xl text-lg text-ink">
          One senior team owns the result, from the first decision to the last report.
        </p>
      </Section>

      {/* Two sectors */}
      <Section dark className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-h3">Real estate</h3>
            <p className="mt-4 text-paper/75">
              For developers, brokerages and agents. We position the project,
              build the brand, and run the campaigns, websites, lead capture
              and sales tools that move inventory and win listings.
            </p>
            <div className="mt-6">
              <Button href="/real-estate" variant="onDark">
                Real estate
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-h3">Hospitality</h3>
            <p className="mt-4 text-paper/75">
              For resorts, hotels and hospitality brands. We build the story
              guests fall for, then the content, paid media and
              direct-booking journeys that fill rooms and grow restaurant,
              tour and event revenue.
            </p>
            <div className="mt-6">
              <Button href="/hospitality" variant="onDark">
                Hospitality
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* From site to sales */}
      <Section>
        <Eyebrow>Beyond marketing</Eyebrow>
        <h2 className="text-h2 mt-4 max-w-2xl">We can start before the first drawing.</h2>
        <p className="prose-column mt-5 text-ink-soft">
          Our roots are in creative advertising and design-build. So Parlour
          can work alongside your architects, engineers, planners and
          permitting team from day one, making sure the commercial strategy
          shapes the project, then building the brand, the experiences and
          the campaigns that sell it.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {["Commercial strategy", "Project coordination", "Brand and experiences", "Performance and sales"].map(
            (item) => (
              <p key={item} className="border-t border-ink pt-3 text-sm font-medium">
                {item}
              </p>
            )
          )}
        </div>
        <p className="prose-column mt-10 text-ink-soft">
          From real estate to hotels, events and brand partnerships, if it's
          built around a place, we can help bring it to life.
        </p>
        <div className="mt-8">
          <Button href="/approach" variant="secondary">
            The Site-to-Sales approach
          </Button>
        </div>
      </Section>

      {/* How we work */}
      <Section className="bg-paper-dim">
        <h2 className="text-h2 max-w-xl">Clarity before activity.</h2>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {howWeWork.map((item, i) => (
            <li key={item.step} className="border-t border-ink pt-5">
              <p className="text-meta">{`0${i + 1}`}</p>
              <p className="mt-2 font-display text-lg">{item.step}</p>
              <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Ways to work with us */}
      <Section>
        <h2 className="text-h2 max-w-xl">Ways to work with us.</h2>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {waysToWork.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex flex-col justify-between gap-2 py-6 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-display text-xl group-hover:text-forest">{item.name}</p>
                <p className="mt-1 text-sm text-ink-soft">{item.forText}</p>
              </div>
              <span className="text-meta shrink-0">{item.tag}</span>
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-soft">Retainers start at $5,000 a month.</p>
      </Section>

      {/* Leadership */}
      <Section className="bg-paper-dim">
        <h2 className="text-h2 max-w-xl">Senior-led by design.</h2>
        <p className="prose-column mt-6 text-ink-soft">
          Parlour is led by Laura, Founder, CEO &amp; Chief Strategy Officer,
          who spent eight years at Artform, most recently as Director of
          Marketing. Andre Acosta, Creative &amp; Strategy Director, leads
          creative direction and production and works alongside Laura on
          strategy. Every engagement pairs senior strategy with the
          specialist creative, digital and production talent the project
          needs, without the layers of a traditional agency.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:max-w-md">
          {["Laura Curridor", "Andre Acosta"].map((name) => (
            <div key={name} className="aspect-[3/4] bg-line/40 flex items-end p-4">
              <p className="text-meta">{name}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/about" variant="secondary">
            About Parlour
          </Button>
        </div>
      </Section>

      {/* Region */}
      <Section>
        <h2 className="text-h2 max-w-xl">Built in Belize. Working across the Americas.</h2>
        <p className="prose-column mt-6 text-ink-soft">
          Belize is where we prove the work every day. From here we serve
          developers and hospitality brands selling to North American and
          international buyers, from Mexico and Central America to South
          America.
        </p>
        <div className="mt-8">
          <Button href="/belize" variant="secondary">
            Parlour in Belize
          </Button>
        </div>
      </Section>

      {/* Final CTA */}
      <Section dark className="text-center lg:py-40">
        <h2 className="text-h2 mx-auto max-w-2xl">Bring your next place to market.</h2>
        <p className="mx-auto mt-6 max-w-xl text-paper/75">
          Tell us about the development, property or launch. Laura reviews
          every enquiry and replies within one business day.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Book a strategy call</Button>
          <Button href="https://wa.me/5016008548" variant="onDark">
            WhatsApp us
          </Button>
        </div>
      </Section>
    </>
  );
}
