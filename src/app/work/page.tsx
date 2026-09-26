import type { Metadata } from "next";
import { Suspense } from "react";
import { PageIntro } from "@/components/ui";
import { WorkBrowser } from "@/components/WorkBrowser";
import { ParlourIndex } from "@/components/ParlourIndex";
import { getActiveCategories, getActiveMarkets, getPortfolioStats, getPublishedCaseStudies } from "@/content/case-studies";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Parlour Creative across real estate, broadcast and media, food and beverage, fashion and retail, from Toronto studios to Belize coastlines.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Work · Parlour Creative", url: "/work" },
};

export default function WorkPage() {
  const projects = getPublishedCaseStudies();
  const categories = getActiveCategories();
  const markets = getActiveMarkets();
  const stats = getPortfolioStats();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Parlour Creative", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/work` },
          ],
        }}
      />
      <PageIntro>
        <h1 className="text-statement max-w-5xl">
          Places, brands and the marketing that sells them. Every project starts with a commercial objective, and ends
          with proof.
        </h1>
        <p className="text-lead mt-8 max-w-3xl text-ink-soft">
          {stats.total} projects across {stats.industries} industries. Based in Belize. Experience across international markets.
        </p>
      </PageIntro>
      <div className="container-page pb-28 lg:pb-40">
        <Suspense fallback={null}>
          <WorkBrowser projects={projects} categories={categories} markets={markets} />
        </Suspense>
      </div>
      <ParlourIndex />
    </>
  );
}
