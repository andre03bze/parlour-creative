import { Suspense } from "react";
import { PageIntro } from "@/components/ui";
import { WorkBrowser } from "@/components/WorkBrowser";
import { ParlourIndex } from "@/components/ParlourIndex";
import { getActiveCategories, getActiveMarkets, getPortfolioStats, getPublishedCaseStudies } from "@/content/case-studies";
import { localizeCases } from "@/content/localize";
import { JsonLd } from "@/components/JsonLd";
import { localePath } from "@/i18n/config";
import { pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { siteUrl } from "@/lib/site";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(
    params,
    "/work",
    "Work",
    "Selected work from Parlour Creative across real estate, broadcast and media, food and beverage, fashion and retail, from Toronto studios to Belize coastlines.",
    { openGraph: { title: "Work · Parlour Creative", url: "/work" } }
  );

export default async function WorkPage({ params }: LangParams) {
  const { lang, t } = await pageLang(params);
  const projects = localizeCases(getPublishedCaseStudies(), lang);
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
            { "@type": "ListItem", position: 1, name: "Parlour Creative", item: `${siteUrl}${localePath(lang, "/")}` },
            { "@type": "ListItem", position: 2, name: t("Work"), item: `${siteUrl}${localePath(lang, "/work")}` },
          ],
        }}
      />
      <PageIntro>
        <h1 className="text-statement max-w-5xl">
          {t("Places, brands and the marketing that sells them. Every project starts with a commercial objective, and ends with proof.")}
        </h1>
        <p className="text-lead mt-8 max-w-3xl text-ink-soft">
          {t("{total} projects across {industries} industries. Based in Belize. Experience across international markets.", {
            total: stats.total,
            industries: stats.industries,
          })}
        </p>
      </PageIntro>
      <div className="container-page pb-28 lg:pb-40">
        <Suspense fallback={null}>
          <WorkBrowser projects={projects} categories={categories} markets={markets} />
        </Suspense>
      </div>
      <ParlourIndex t={t} />
    </>
  );
}
