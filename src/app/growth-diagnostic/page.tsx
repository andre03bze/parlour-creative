import type { Metadata } from "next";
import { Block, CtaBand, RowList } from "@/components/editorial";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Growth Diagnostic",
  description:
    "Find where your marketing is losing sales in three weeks: a Parlour Growth Diagnostic audits brand, website, ads, content, lead handling and sales hand-off, and delivers a 90-day plan. $4,500, credited to month one if you sign a retainer within 30 days.",
  alternates: { canonical: "/growth-diagnostic" },
};

const audits = [
  "Brand",
  "Website",
  "Ads",
  "Content",
  "Lead handling",
  "Sales hand-off",
  "Competitor landscape",
  "Buyer or guest profile",
];

export default function GrowthDiagnosticPage() {
  return (
    <>
      {/* Dark opening: the offer as its own editorial "division" page */}
      <section data-hero data-dark className="bg-coal text-paper">
        <div className="container-page flex min-h-[86svh] flex-col justify-end pb-14 pt-40 lg:pb-20">
          <p className="text-meta mb-6 !text-paper/70">Parlour Growth Diagnostic · Start here</p>
          <h1 className="text-display max-w-[14ch]">
            Find the <span className="accent">leak.</span>
          </h1>
          <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <p className="text-lead max-w-2xl text-paper/85">
              A three-week audit of brand, website, ads, content, lead handling and sales hand-off, benchmarked against
              your competitors and your own buyer or guest profile, delivered as a 90-day growth plan, presented live.
            </p>
            <div>
              <Button href="/contact" variant="onDark">Start a Growth Diagnostic</Button>
            </div>
          </div>
        </div>
      </section>

      <Block label="What it is">
        <p className="text-lead prose-column">
          For prospects who know marketing isn&rsquo;t working but can&rsquo;t say why. In three weeks we show you where
          attention, enquiries and sales are leaking, and what to do about it first.
        </p>
      </Block>

      <Block label="What we audit">
        <RowList items={audits} cols={2} />
      </Block>

      <Block label="What you receive">
        <RowList
          items={[
            "A competitor scan",
            "A buyer or guest profile",
            "A 90-day growth plan, presented live",
          ]}
        />
      </Block>

      <Block label="Who it's for">
        <p className="prose-column text-lg">
          Any qualified prospect who knows marketing isn&rsquo;t working but can&rsquo;t say why: a developer, brokerage
          or hotel with real budget and no one currently owning the commercial result.
        </p>
      </Block>

      <Block label="Timeline and investment" dim>
        <dl className="grid gap-10 sm:grid-cols-2">
          <div className="border-t border-ink pt-4">
            <dt className="text-meta">Timeline</dt>
            <dd className="text-h2 mt-3">3 weeks</dd>
          </div>
          <div className="border-t border-ink pt-4">
            <dt className="text-meta">Investment</dt>
            <dd className="text-h2 mt-3">$4,500 USD</dd>
            <dd className="mt-3 text-sm text-ink-soft">
              One-time, credited to month one if you sign a retainer within 30 days.
            </dd>
          </div>
        </dl>
      </Block>

      <Block label="After the diagnostic">
        <p className="prose-column text-ink-soft">
          If you want us to run the plan, the diagnostic is credited to your first month and we move into an ongoing
          engagement. Retainers start at $5,000 USD a month.
        </p>
        <div className="mt-8">
          <Button href="/services" variant="secondary">How we work with clients</Button>
        </div>
      </Block>

      <CtaBand
        title={<>Three weeks. A clear <span className="accent">answer.</span></>}
        primary={{ label: "Start a Growth Diagnostic", href: "/contact" }}
        secondary={{ label: "Book a strategy call", href: "/contact" }}
      />
    </>
  );
}
