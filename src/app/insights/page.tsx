import type { Metadata } from "next";
import { Button, Section } from "@/components/ui";
import { insights } from "@/content/insights";

// No articles published yet — keep this route out of the sitemap and out
// of search results until it holds real content (see CONTENT-GAPS.md).
export const metadata: Metadata = {
  title: "Insights",
  description: "Ideas on real estate and hospitality marketing from Parlour Creative.",
  robots: { index: false, follow: true },
};

export default function InsightsPage() {
  return (
    <Section className="pt-16 lg:pt-20">
      <h1 className="text-display max-w-3xl">Insights.</h1>
      {insights.length === 0 ? (
        <div className="mt-10 max-w-xl border-t border-ink pt-8">
          <p className="text-ink-soft">
            The first pieces are in progress — on Belize real estate
            marketing, direct-booking strategy, and the site-to-sales
            approach. In the meantime, see how the thinking applies to real
            projects.
          </p>
          <div className="mt-8">
            <Button href="/work" variant="secondary">
              See the work
            </Button>
          </div>
        </div>
      ) : (
        <ul className="mt-10 divide-y divide-line border-t border-line">
          {insights.map((i) => (
            <li key={i.slug} className="py-6">
              <p className="font-display text-xl">{i.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{i.description}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
