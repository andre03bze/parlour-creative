import type { Metadata } from "next";
import { Button, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "Senior-led by design: Laura Curridor and Andre Acosta, the strategic and creative partner behind the property story.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-12 pt-16 lg:pt-20">
        <h1 className="text-display max-w-3xl">
          The strategic and creative partner behind the property story.
        </h1>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <div className="aspect-[3/4] bg-paper-dim" />
          <h2 className="text-h3 mt-6">Laura Curridor</h2>
          <p className="text-meta mt-1">Founder, CEO &amp; Chief Strategy Officer</p>
          <p className="prose-column mt-4 text-ink-soft">
            Laura is a brand and marketing strategist whose background spans
            creative advertising and design-build. She spent eight years at
            Artform, the Toronto design and communications firm, most
            recently as Director of Marketing, leading client strategy,
            integrated campaigns and business development. Artform&rsquo;s
            work includes broadcast design for CBC News, Rogers Sportsnet
            and TVO, and real estate branding and sales environments for
            Forgestone Capital and The HUB at 30 Bay. She has since held
            embedded senior marketing roles across Belize, including with
            Blue Ocean Belize, Offi Belize and STELCOR Solutions.
          </p>
          <div className="mt-4">
            <a href="/work/laura-artform" className="text-sm font-medium text-forest hover:underline">
              See Laura&rsquo;s work at Artform →
            </a>
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
      </Section>

      <Section className="bg-paper-dim">
        <h2 className="text-h3 max-w-xl">The bench.</h2>
        <p className="prose-column mt-4 text-ink-soft">
          Parlour directs a vetted team of specialists in paid media, web
          development, design and production. You get senior strategy and
          specialist depth, with one accountable lead.
        </p>
      </Section>

      <Section dark className="text-center">
        <h2 className="text-h2 mx-auto max-w-xl">Bring your next place to market.</h2>
        <div className="mt-8">
          <Button href="/contact">Book a strategy call</Button>
        </div>
      </Section>
    </>
  );
}
