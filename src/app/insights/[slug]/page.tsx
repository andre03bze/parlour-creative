import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, PageHead } from "@/components/editorial";
import { JsonLd } from "@/components/JsonLd";
import { insights } from "@/content/insights";
import { siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  // Next requires at least one param for a statically-checked route; an empty list means "no articles yet".
  return insights.length ? insights.map((i) => ({ slug: i.slug })) : [{ slug: "__none__" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((i) => i.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.description, publishedTime: article.publishedAt },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find((i) => i.slug === slug);
  if (!article) notFound();

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          datePublished: article.publishedAt,
          description: article.description,
          author: { "@type": "Organization", name: "Parlour Creative" },
          mainEntityOfPage: `${siteUrl}/insights/${article.slug}`,
        }}
      />
      <PageHead eyebrow={article.publishedAt} title={article.title} lead={article.description} />
      <div className="container-page border-t border-ink/60 pb-24 pt-12 lg:pb-40 lg:pt-20">
        <div className="prose-column space-y-6 text-lg">
          {article.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
      <CtaBand title="Bring your next place to market." primary={{ label: "Start a conversation", href: "/contact" }} />
    </article>
  );
}
