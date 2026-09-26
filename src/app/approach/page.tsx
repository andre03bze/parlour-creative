import type { Metadata } from "next";
import { Block, CtaBand, PageHead, SiteToSalesPath } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Site to Sales: Our Approach",
  description:
    "From site to sales: how Parlour runs commercial strategy, project coordination, brand and performance as one system for developments, hotels and place-led brands.",
  alternates: { canonical: "/approach" },
};

const steps = [
  { step: "Discover", body: "Understand the business, the site and what's actually holding growth back." },
  { step: "Define", body: "Set the audience, the position and the commercial goal everything else serves." },
  { step: "Create", body: "Build the brand, story and content that carry that position into market." },
  { step: "Launch", body: "Run the campaigns, sales tools and lead capture that turn attention into enquiries." },
  { step: "Learn", body: "Report against the KPIs that matter and adjust the system, not just the ads." },
];

const chain = [
  { label: "Commercial strategy", body: "Who the project is for, what it should be, and how it will sell." },
  {
    label: "Project coordination",
    body: "Working with land, architects, engineers, planners, permitting and building-solutions partners to bring it to life.",
  },
  { label: "Brand, story and campaigns", body: "The identity, content and integrated campaigns." },
  { label: "Performance and sales", body: "Paid media, lead capture, CRM and sales tools." },
];

export default function ApproachPage() {
  return (
    <>
      <PageHead
        eyebrow="Site to Sales"
        image={{
          src: "/work/caves-branch-river-estates/river-band-1440w.webp",
          alt: "Wide aerial view of the Caves Branch River winding through jungle in Belize",
        }}
        title={
          <>
            We can start <span className="accent">before the first drawing.</span>
          </>
        }
        lead="Our roots are in creative advertising and design-build. So Parlour can work alongside your architects, engineers, planners and permitting team from day one, making sure the commercial strategy shapes the project, then building the brand, the experiences and the campaigns that sell it."
      />

      <div className="container-page pb-20 lg:pb-32">
        <SiteToSalesPath />
        <p className="text-meta mt-6 max-w-xl">
          Parlour coordinates architects, engineers and permitting through partners. It does not hold those licences itself.
        </p>
      </div>

      <Block label="How the work runs">
        <ul>
          {chain.map((item) => (
            <li key={item.label} className="grid gap-2 border-t border-ink/25 py-5 first:border-t-ink/60 sm:grid-cols-[14rem_1fr]">
              <p className="text-h3">{item.label}</p>
              <p className="prose-column text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="prose-column mt-10 text-ink-soft">
          From real estate to hotels, events and brand partnerships, if it&rsquo;s built around a place, we can help bring
          it to life.
        </p>
      </Block>

      <Block label={<>Clarity before <span className="accent">activity.</span></>} dim>
        <ol>
          {steps.map((item, i) => (
            <li key={item.step} className="grid gap-2 border-t border-ink/25 py-5 first:border-t-ink/60 sm:grid-cols-[4rem_14rem_1fr]">
              <span className="text-meta pt-2">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-h3">{item.step}</p>
              <p className="prose-column text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </Block>

      <CtaBand
        title="See it applied to a real project."
        primary={{ label: "Caves Branch River Estates", href: "/work/caves-branch-river-estates" }}
        secondary={{ label: "Growth Diagnostic", href: "/growth-diagnostic" }}
      />
    </>
  );
}
