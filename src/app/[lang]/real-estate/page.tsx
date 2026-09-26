import { Block, CtaBand, PageHead, ProofGrid, RowList } from "@/components/editorial";
import { Button } from "@/components/ui";
import { getCaseStudiesByCategory } from "@/content/case-studies";
import { localizeCases } from "@/content/localize";
import { msg, pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { accent, rich } from "@/i18n/rich";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(
    params,
    "/real-estate",
    "Real Estate & Development Marketing",
    "Positioning, launch campaigns, paid media and sales tools for property developers, brokerages and agents in Belize and across the Americas."
  );

const developers = [
  "Project positioning and naming",
  "Development brands",
  "Launch campaigns",
  "Websites and landing pages",
  "Paid media",
  "Brochures, signage and sales galleries",
  "Co-broker kits",
  "CRM and lead routing",
].map(msg);

const brokers = [
  "Brokerage brand and positioning",
  "Priority-listing campaigns",
  "Photo, video and drone",
  "Social management",
  "Paid media",
  "Lead capture and follow-up",
  "Recruiting and listing-win materials",
].map(msg);

export default async function RealEstatePage({ params }: LangParams) {
  const { lang, t } = await pageLang(params);
  const projects = localizeCases(getCaseStudiesByCategory("real-estate"), lang);

  return (
    <>
      <PageHead
        eyebrow={t("Real estate")}
        image={{
          src: "/work/caves-branch-river-estates/hero-estate-1920w.webp",
          alt: t("Aerial view of Caves Branch River Estates, jungle lots bordering the Caves Branch River, Belize"),
        }}
        title={rich(t, "Marketing that <a>moves inventory.</a>", { a: accent })}
        lead={t(
          "Developers, brokerages and agents don't need more content. They need buyers who are ready to talk. Parlour builds the position, the brand and the system that finds them and hands them to your sales team."
        )}
      />

      <Block label={t("For developers")}>
        <RowList cols={2} items={developers.map((x) => t(x))} />
      </Block>

      <Block label={t("For brokerages and agents")}>
        <RowList cols={2} items={brokers.map((x) => t(x))} />
      </Block>

      {projects.length > 0 && (
        <Block label={t("Proof")}>
          <ProofGrid projects={projects.slice(0, 4)} />
          <div className="mt-10">
            <Button href="/work?category=real-estate" variant="secondary">{t("All real estate work")}</Button>
          </div>
        </Block>
      )}

      <CtaBand
        title={t("Start with a Growth Diagnostic.")}
        primary={{ label: t("Growth Diagnostic"), href: "/growth-diagnostic" }}
        secondary={{ label: t("View the work"), href: "/work" }}
      />
    </>
  );
}
