import type { Metadata } from "next";
import { Button, Section } from "@/components/ui";
import { getCaseStudiesByBucket } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Real Estate & Development Marketing",
  description: "Positioning, launch campaigns, paid media and sales tools for developers and brokerages.",
};

export default function RealEstatePage() {
  const projects = getCaseStudiesByBucket("development-real-estate");

  return (
    <>
      <Section className="pb-12 pt-16 lg:pt-20">
        <h1 className="text-display max-w-3xl">Marketing that moves inventory.</h1>
        <p className="prose-column mt-6 text-lg text-ink-soft">
          Developers, brokerages and agents don&rsquo;t need more content.
          They need buyers who are ready to talk. Parlour builds the
          position, the brand and the system that finds them and hands them
          to your sales team.
        </p>
      </Section>

      <Section className="bg-paper-dim">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h3">For developers</h2>
            <ul className="mt-5 space-y-2 text-ink-soft">
              {[
                "Project positioning and naming",
                "Development brands",
                "Launch campaigns",
                "Websites and landing pages",
                "Paid media",
                "Brochures, signage and sales galleries",
                "Co-broker kits",
                "CRM and lead routing",
              ].map((item) => (
                <li key={item} className="border-t border-line pt-2">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h3">For brokerages and agents</h2>
            <ul className="mt-5 space-y-2 text-ink-soft">
              {[
                "Brokerage brand and positioning",
                "Priority-listing campaigns",
                "Photo, video and drone",
                "Social management",
                "Paid media",
                "Lead capture and follow-up",
                "Recruiting and listing-win materials",
              ].map((item) => (
                <li key={item} className="border-t border-line pt-2">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {projects.length > 0 && (
        <Section>
          <h2 className="text-h2 max-w-xl">Proof.</h2>
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
        <h2 className="text-h2 mx-auto max-w-xl">Start with a Growth Diagnostic.</h2>
        <div className="mt-8">
          <Button href="/growth-diagnostic">Start with a Growth Diagnostic</Button>
        </div>
      </Section>
    </>
  );
}
