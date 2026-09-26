import { Diagnostic } from "@/components/Diagnostic";
import { Block, CtaBand } from "@/components/editorial";
import { pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { localizeCase } from "@/content/localize";
import { showcaseFor, stageNote, stages, type Stage } from "@/lib/method";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(
    params,
    "/diagnostic",
    "Growth System Diagnostic",
    "Seven questions, one for each stage of the Parlour Method, point to where a place's growth system may be under most strain."
  );

export default async function DiagnosticPage({ params }: LangParams) {
  const { lang, t } = await pageLang(params);
  // Existing showcase project per Method stage (real portfolio imagery) fills the result's giant stage word.
  const images: Partial<Record<Stage, string>> = {};
  for (const stage of stages) {
    const p = showcaseFor(stage);
    const cover = p && localizeCase(p, lang).cover;
    if (cover) images[stage] = cover.src;
  }
  return (
    <>
      <Diagnostic images={images} />
      <Block label={t("How it reads your answers")}>
        <p className="text-lead prose-column">
          {t("The diagnostic follows the Parlour Method, from the place to the sale: Site, Strategy, Brand, Story, Experience, Distribution, Sales. Each question looks at one stage. The stages with the most friction in your answers are named, with where we'd start.")}
        </p>
        <ol className="mt-10">
          {stages.map((stage, i) => (
            <li key={stage} className="grid gap-2 border-t border-ink/25 py-4 first:border-t-ink/60 sm:grid-cols-[4rem_14rem_1fr]">
              <span className="text-meta pt-1.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-h3">{t(stage)}</p>
              <p className="prose-column text-ink-soft">{t(stageNote[stage])}</p>
            </li>
          ))}
        </ol>
      </Block>
      <CtaBand
        title={t("The diagnostic is directional. A Growth Diagnostic tests it against your market.")}
        primary={{ label: t("Start a Growth Diagnostic"), href: "/contact" }}
        secondary={{ label: t("About the Growth Diagnostic"), href: "/growth-diagnostic" }}
      />
    </>
  );
}
