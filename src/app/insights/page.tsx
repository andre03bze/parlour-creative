import type { Metadata } from "next";
import { Block, PageHead } from "@/components/editorial";
import { Button } from "@/components/ui";
import Link from "next/link";
import { insights } from "@/content/insights";

// No articles published yet — keep this route out of the sitemap and out
// of search results until it holds real content (see CONTENT-GAPS.md).
export const metadata: Metadata = {
  title: "Insights",
  description: "Ideas on real estate and hospitality marketing from Parlour Creative.",
  alternates: { canonical: "/insights" },
  robots: { index: insights.length > 0, follow: true },
};

export default function InsightsPage() {
  return (
    <>
      <PageHead eyebrow="Insights" title={<>Thinking, <span className="accent">applied.</span></>} />
      {insights.length === 0 ? (
        <Block label="Coming soon">
          <p className="prose-column text-lg text-ink-soft">
            The first pieces are in progress: Belize real estate marketing, direct-booking strategy, and the
            site-to-sales approach. In the meantime, see how the thinking applies to real projects.
          </p>
          <div className="mt-8">
            <Button href="/work" variant="secondary">View the work</Button>
          </div>
        </Block>
      ) : (
        <div className="container-page border-t border-ink/70 pb-28">
          <ul>
            {insights.map((i) => (
              <li key={i.slug} className="border-b border-ink/70">
                <Link href={`/insights/${i.slug}`} className="group grid gap-2 py-6 lg:grid-cols-[10rem_1fr] lg:py-8">
                  <span className="text-meta pt-3">{i.publishedAt}</span>
                  <span>
                    <span className="text-h2 block transition-transform duration-500 ease-editorial group-hover:translate-x-2">{i.title}</span>
                    <span className="prose-column mt-3 block text-ink-soft">{i.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
