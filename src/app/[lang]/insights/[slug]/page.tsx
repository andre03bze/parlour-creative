import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, PageHead } from "@/components/editorial";
import { JsonLd } from "@/components/JsonLd";
import { insights } from "@/content/insights";
import { isLang, langs, localePath, type Lang } from "@/i18n/config";
import { ogLocale } from "@/i18n/meta";
import { pageLang } from "@/i18n/page";
import { siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  // Next requires at least one param for a statically-checked route; an empty list means "no articles yet".
  const slugs = insights.length ? insights.map((i) => i.slug) : ["__none__"];
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

const pick = (lang: Lang, a: (typeof insights)[number]) => (lang === "es" && a.es ? a.es : a);

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = insights.find((i) => i.slug === slug);
  if (!article || !isLang(lang)) return {};
  const c = pick(lang, article);
  const path = `/insights/${article.slug}`;
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: localePath(lang, path),
      languages: article.es ? { en: path, es: localePath("es", path), "x-default": path } : undefined,
    },
    openGraph: { type: "article", locale: ogLocale(lang), title: c.title, description: c.description, publishedTime: article.publishedAt },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { slug } = await params;
  const { lang, t } = await pageLang(params);
  const article = insights.find((i) => i.slug === slug);
  if (!article) notFound();
  const c = pick(lang, article);

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: c.title,
          datePublished: article.publishedAt,
          description: c.description,
          inLanguage: lang,
          author: { "@type": "Organization", name: "Parlour Creative" },
          mainEntityOfPage: `${siteUrl}${localePath(lang, `/insights/${article.slug}`)}`,
        }}
      />
      <PageHead eyebrow={article.publishedAt} title={c.title} lead={c.description} />
      <div className="container-page border-t border-ink/60 pb-24 pt-12 lg:pb-40 lg:pt-20">
        <div className="prose-column space-y-6 text-lg">
          {c.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
      <CtaBand title={t("Bring your next place to market.")} primary={{ label: t("Start a conversation"), href: "/contact" }} />
    </article>
  );
}
