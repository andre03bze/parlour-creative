import type { Metadata } from "next";
import { Button, Eyebrow, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Approach",
  description: "From site to sales: how Parlour runs commercial strategy, project coordination, brand and performance as one system.",
};

const steps = [
  { step: "Discover", body: "Understand the business, the site and what's actually holding growth back." },
  { step: "Define", body: "Set the audience, the position and the commercial goal everything else serves." },
  { step: "Create", body: "Build the brand, story and content that carry that position into market." },
  { step: "Launch", body: "Run the campaigns, sales tools and lead capture that turn attention into enquiries." },
  { step: "Learn", body: "Report against the KPIs that matter and adjust the system, not just the ads." },
];

export default function ApproachPage() {
  return (
    <>
      <Section className="pb-12 pt-16 lg:pt-20">
        <Eyebrow>Beyond marketing</Eyebrow>
        <h1 className="text-display mt-4 max-w-3xl">We can start before the first drawing.</h1>
        <p className="prose-column mt-6 text-lg text-ink-soft">
          Our roots are in creative advertising and design-build. So Parlour
          can work alongside your architects, engineers, planners and
          permitting team from day one, making sure the commercial strategy
          shapes the project, then building the brand, the experiences and
          the campaigns that sell it.
        </p>
        <p className="prose-column mt-4 text-sm text-ink-soft">
          Parlour coordinates architects, engineers and permitting through
          partners — it does not hold those licences itself.
        </p>
      </Section>

      <Section className="bg-paper-dim">
        <h2 className="text-h2 max-w-xl">Commercial strategy → project coordination → brand and experiences → performance and sales.</h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Commercial strategy",
              body: "Who the project is for, what it should be, and how it will sell.",
            },
            {
              label: "Project coordination",
              body: "Working with land, architects, engineers, planners, permitting and building-solutions partners to bring it to life.",
            },
            {
              label: "Brand, story and campaigns",
              body: "The identity, content and integrated campaigns.",
            },
            {
              label: "Performance and sales",
              body: "Paid media, lead capture, CRM and sales tools.",
            },
          ].map((item) => (
            <div key={item.label} className="border-t border-ink pt-5">
              <p className="font-display text-lg">{item.label}</p>
              <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="prose-column mt-14 text-ink-soft">
          From real estate to hotels, events and brand partnerships, if
          it&rsquo;s built around a place, we can help bring it to life.
        </p>
      </Section>

      <Section>
        <h2 className="text-h2 max-w-xl">Clarity before activity.</h2>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((item, i) => (
            <li key={item.step} className="border-t border-ink pt-5">
              <p className="text-meta">{`0${i + 1}`}</p>
              <p className="mt-2 font-display text-lg">{item.step}</p>
              <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section dark className="text-center">
        <h2 className="text-h2 mx-auto max-w-xl">See it applied to a real project.</h2>
        <div className="mt-8">
          <Button href="/work/caves-branch-river-estates">Read the Caves Branch case study</Button>
        </div>
      </Section>
    </>
  );
}
