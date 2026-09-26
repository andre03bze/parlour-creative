import Link from "@/i18n/client";
import { Block, CtaBand, PageHead, ProofGrid, RowList } from "@/components/editorial";
import { getCaseStudy } from "@/content/case-studies";
import { localizeCase } from "@/content/localize";
import { msg, pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { accent, rich } from "@/i18n/rich";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(
    params,
    "/founders",
    "Founder Story",
    "Personal brand and story platforms for founders, developers, hoteliers and executives, from Parlour Creative in Belize."
  );

const does = [
  "Personal positioning and story",
  "Storytelling video series",
  "LinkedIn and Instagram content in your voice",
  "Speaking and press",
  "A personal site",
].map(msg);

export default async function FoundersPage({ params }: LangParams) {
  const { lang, t } = await pageLang(params);
  const base = getCaseStudy("stephen-mater");
  const stephen = base && localizeCase(base, lang);

  return (
    <>
      <PageHead
        eyebrow={t("Founders")}
        title={rich(t, "Your story is <a>the brand.</a>", { a: accent })}
        lead={t(
          "Buyers, guests and investors choose people before they choose projects. Parlour builds founders' personal brands through story, film and a steady presence where their market is watching."
        )}
      />

      <Block label={t("What we do")}>
        <RowList cols={2} items={does.map((x) => t(x))} />
      </Block>

      {stephen && (
        <Block label={t("Proof")}>
          <ProofGrid projects={[stephen]} />
          <p className="prose-column mt-8 text-sm text-ink-soft">
            {rich(
              t,
              "(im)possible pursuit, on YouTube, started September 28, 2026. Full results are due at 60–90 days. <l>Read the case study</l>.",
              { l: (c) => <Link href={`/work/${stephen.slug}`} className="underline underline-offset-4">{c}</Link> }
            )}
          </p>
        </Block>
      )}

      <CtaBand
        title={t("Tell us your story.")}
        primary={{ label: t("Tell us your story"), href: "/contact" }}
        secondary={{ label: t("View the work"), href: "/work" }}
      />
    </>
  );
}
