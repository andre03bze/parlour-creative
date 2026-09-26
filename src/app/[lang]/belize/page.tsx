import { Block, CtaBand, PageHead, ProofGrid } from "@/components/editorial";
import { getCaseStudiesByLocation } from "@/content/case-studies";
import { localizeCases } from "@/content/localize";
import { pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { accent, rich } from "@/i18n/rich";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(
    params,
    "/belize",
    "Parlour in Belize",
    "Based in Belize and working across the Americas: real estate and hospitality marketing rooted in Belize's markets and built for international buyers and guests."
  );

export default async function BelizePage({ params }: LangParams) {
  const { lang, t } = await pageLang(params);
  const projects = localizeCases(getCaseStudiesByLocation("Belize"), lang);

  return (
    <>
      <PageHead
        eyebrow={t("Belize · The Americas")}
        image={{
          src: "/work/blue-ocean-belize/aerial-009-2000w.webp",
          alt: t("Aerial view of the San Pedro coastline on Ambergris Caye, Belize, with the reef beyond"),
          position: "center 70%",
        }}
        title={rich(t, "Built in Belize. Working <a>across the Americas.</a>", { a: accent })}
        lead={t(
          "Belize is where we prove the work every day. From here we serve developers and hospitality brands selling to North American and international buyers, from Mexico and Central America to South America."
        )}
      />

      <Block label={t("Where we work in Belize")}>
        <p className="text-lead prose-column">
          Ambergris Caye · Caye Caulker · Placencia · Hopkins · Cayo · Belize City
        </p>
      </Block>

      {projects.length > 0 && (
        <Block label={t("Current work in Belize")}>
          <ProofGrid projects={projects} />
        </Block>
      )}

      <CtaBand
        title={t("Bring your next place to market.")}
        primary={{ label: t("Start a conversation"), href: "/contact" }}
        secondary={{ label: t("View the work"), href: "/work" }}
      />
    </>
  );
}
