import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior-led by design: Laura Curridor and Andre Acosta, the strategic and creative partners behind Parlour Creative, based in Belize and serving the Americas.",
  alternates: { canonical: "/about" },
};

const anchors = [
  ["About us", "#about"],
  ["Philosophy", "#philosophy"],
  ["People", "#people"],
  ["The bench", "#bench"],
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Banner (Gladstone: team photograph — swap for a team photo when headshots arrive) */}
      <div data-hero className="relative h-[52svh] min-h-[22rem] w-full overflow-hidden bg-coal">
        <Image
          src="/work/blue-ocean-belize/aerial-006-2000w.webp"
          alt="Aerial view of a lagoon and island shoreline in Belize"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />
      </div>

      <div className="container-page pb-10 pt-14 lg:pb-16 lg:pt-20">
        <h1 className="text-statement max-w-5xl">
          Parlour is a senior-led studio of{" "}
          <mark className="bg-ink/10 px-1 text-ink">strategists</mark>,{" "}
          <mark className="bg-ink/10 px-1 text-ink">storytellers</mark> and{" "}
          <mark className="bg-ink/10 px-1 text-ink">marketers</mark>, based in Belize and working across the Americas.
        </h1>
        <nav aria-label="On this page" className="mt-12 flex flex-wrap gap-2">
          {anchors.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-ink/40 px-3.5 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <section id="about" className="scroll-mt-24 border-t border-ink/60">
        <div className="container-page grid gap-6 py-14 lg:grid-cols-[1fr_2fr] lg:py-24">
          <h2 className="text-h3">About us</h2>
          <p className="text-lead prose-column">
            The strategic and creative partner behind the property story. We shape the commercial strategy, coordinate
            the project team, build the brand and story, and run the content, paid media, lead capture, CRM and
            experiences that sell it, from Belize, for developers, hospitality owners and brands across the Americas.
          </p>
        </div>
      </section>

      <section id="philosophy" className="scroll-mt-24 border-t border-ink/60">
        <div className="container-page grid gap-6 py-14 lg:grid-cols-[1fr_2fr] lg:py-24">
          <h2 className="text-h3">Philosophy</h2>
          <div>
            <p className="text-lead prose-column">
              Clarity before activity. <span className="accent">Constructed intelligence. Human measure.</span>
            </p>
            <p className="prose-column mt-6 text-ink-soft">
              Every project starts with a commercial objective (more qualified enquiries, faster sales, more direct
              bookings) and the marketing is built backwards from it. Senior people stay close to the work, from the
              first decision to the last report, without the layers of a traditional agency.
            </p>
          </div>
        </div>
      </section>

      <section id="people" className="scroll-mt-24 border-t border-ink/60">
        <div className="container-page py-14 lg:py-24">
          <h2 className="text-h3">People</h2>
          <div className="mt-12 grid gap-16 lg:grid-cols-2">
        <div>
          <div className="aspect-[3/4] bg-paper-dim" />
          <h2 className="text-h3 mt-6">Laura Curridor</h2>
          <p className="text-meta mt-1">Founder, CEO &amp; Chief Strategy Officer</p>
          <p className="prose-column mt-4 text-ink-soft">
            Laura is a brand and marketing strategist whose background spans
            creative advertising and design-build. She spent eight years in
            Toronto leading client strategy, integrated campaigns and business
            development, rising to Director of Marketing. That body of work
            includes broadcast design for CBC News, Sportsnet and TVO, and
            brand and sales environments for Forgestone Capital and The HUB at
            30 Bay. She has since held embedded senior marketing roles across
            Belize, including with Blue Ocean Belize, Offi Belize and STELCOR
            Solutions.
          </p>
          <div className="mt-4">
            <Link href="/work" className="text-sm font-medium text-ink hover:underline">
              See the full body of work →
            </Link>
          </div>
        </div>

        <div>
          <div className="aspect-[3/4] bg-paper-dim" />
          <h2 className="text-h3 mt-6">Andre Acosta</h2>
          <p className="text-meta mt-1">Creative &amp; Strategy Director</p>
          <p className="prose-column mt-4 text-ink-soft">
            Andre turns strategy into the work people see: the films,
            photography, campaigns and content that carry a project&rsquo;s
            story. He leads Parlour&rsquo;s creative direction and production
            and shapes strategy alongside Laura, so the idea and the
            execution never drift apart. Andre is the founder of Tide and
            Co, his creative and production company, and led production for
            Blue Ocean Belize&rsquo;s portfolio, including 120+ production
            hours and 14 videos in a single period.
          </p>
        </div>
          </div>
        </div>
      </section>

      <section id="bench" className="scroll-mt-24 border-t border-ink/60">
        <div className="container-page grid gap-6 py-14 lg:grid-cols-[1fr_2fr] lg:py-24">
          <h2 className="text-h3">The bench</h2>
          <p className="prose-column text-ink-soft">
            Parlour directs a vetted team of specialists in paid media, web development, design and production. You get
            senior strategy and specialist depth, with one accountable lead.
          </p>
        </div>
      </section>

      <Section dark className="text-center">
        <h2 className="text-h2 mx-auto max-w-3xl">Bring your next place to market.</h2>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="onDark">Start a conversation</Button>
          <Button href="/work" variant="onDark">View the work</Button>
        </div>
      </Section>
    </>
  );
}
