import type { Metadata } from "next";
import { Button, Eyebrow, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Growth Diagnostic",
  description: "Find where your marketing is losing sales, in three weeks. $4,500, credited to month one if you sign a retainer within 30 days.",
};

const audits = [
  "Brand",
  "Website",
  "Ads",
  "Content",
  "Lead handling",
  "Sales hand-off",
  "Competitor landscape",
  "Buyer / guest profile",
];

export default function GrowthDiagnosticPage() {
  return (
    <>
      <Section className="pb-12 pt-16 lg:pt-20">
        <Eyebrow>Start here</Eyebrow>
        <h1 className="text-display mt-4 max-w-3xl">Find where your marketing is losing sales.</h1>
        <p className="prose-column mt-6 text-lg text-ink-soft">
          A three-week audit of brand, website, ads, content, lead handling
          and sales hand-off, benchmarked against your competitors and your
          own buyer or guest profile — delivered as a 90-day growth plan,
          presented live.
        </p>
        <div className="mt-10 flex flex-wrap items-end gap-8">
          <div>
            <p className="text-meta">Price</p>
            <p className="font-display text-3xl">$4,500 USD</p>
            <p className="mt-1 text-sm text-ink-soft">One-time — credited to month one if you sign a retainer within 30 days</p>
          </div>
          <div>
            <p className="text-meta">Term</p>
            <p className="font-display text-3xl">3 weeks</p>
          </div>
        </div>
        <div className="mt-10">
          <Button href="/contact">Start a Growth Diagnostic</Button>
        </div>
      </Section>

      <Section className="bg-paper-dim">
        <h2 className="text-h3">What we audit</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
          {audits.map((item) => (
            <p key={item} className="border-t border-ink pt-3 text-sm font-medium">{item}</p>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-h3 max-w-xl">Who it&rsquo;s for</h2>
        <p className="prose-column mt-4 text-ink-soft">
          Any qualified prospect who knows marketing isn&rsquo;t working but
          can&rsquo;t say why — a developer, brokerage, or hotel with real
          budget and no one currently owning the commercial result.
        </p>
      </Section>

      <Section dark className="text-center">
        <h2 className="text-h2 mx-auto max-w-xl">Three weeks. A clear answer.</h2>
        <div className="mt-8">
          <Button href="/contact">Book a strategy call</Button>
        </div>
      </Section>
    </>
  );
}
