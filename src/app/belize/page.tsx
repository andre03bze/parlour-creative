import type { Metadata } from "next";
import { Button, Section } from "@/components/ui";
import { getCaseStudiesByBucket } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Parlour in Belize",
  description: "Based in Belize, working across the Americas — real estate and hospitality marketing rooted in Belize's markets.",
};

export default function BelizePage() {
  const projects = getCaseStudiesByBucket("development-real-estate");

  return (
    <>
      <Section className="pb-12 pt-16 lg:pt-20">
        <h1 className="text-display max-w-3xl">Built in Belize. Working across the Americas.</h1>
        <p className="prose-column mt-6 text-lg text-ink-soft">
          Belize is where we prove the work every day. From here we serve
          developers and hospitality brands selling to North American and
          international buyers, from Mexico and Central America to South
          America.
        </p>
      </Section>

      <Section className="bg-paper-dim">
        <h2 className="text-h3">Where we work in Belize</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Ambergris Caye · Caye Caulker · Placencia · Hopkins · Cayo · Belize City
        </p>
      </Section>

      {projects.length > 0 && (
        <Section>
          <h2 className="text-h2 max-w-xl">Current work in Belize.</h2>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a key={p.slug} href={`/work/${p.slug}`} className="group block border-t border-ink pt-4">
                <p className="font-display text-lg group-hover:text-forest">{p.client}</p>
                <p className="mt-1 text-sm text-ink-soft">{p.location}</p>
              </a>
            ))}
          </div>
        </Section>
      )}

      <Section dark className="text-center">
        <h2 className="text-h2 mx-auto max-w-xl">Bring your next place to market.</h2>
        <div className="mt-8">
          <Button href="/contact">Book a strategy call</Button>
        </div>
      </Section>
    </>
  );
}
