import { Block, CtaBand, PageHead, RowList } from "@/components/editorial";
import { msg, pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { accent, rich } from "@/i18n/rich";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(
    params,
    "/services",
    "Services",
    "Strategy, brand, creative, digital, performance, experiences and project coordination: seven disciplines run as one marketing system by Parlour Creative."
  );

const m = (...a: string[]) => a.map(msg);
const services = [
  { label: msg("Strategy"), items: m("Commercial strategy", "Positioning", "Audience", "Go-to-market", "Launch strategy") },
  { label: msg("Brand"), items: m("Identity", "Naming", "Brand systems", "Story", "Campaign platforms") },
  { label: msg("Creative"), items: m("Photography", "Film", "Drone / FPV", "Art direction", "Founder content") },
  { label: msg("Digital"), items: m("Websites", "Landing pages", "SEO", "AI-search visibility", "Analytics", "Conversion systems") },
  { label: msg("Performance"), items: m("Meta", "Google", "YouTube", "Lead generation", "CRM", "Email", "WhatsApp") },
  { label: msg("Experiences"), items: m("Launches", "Events", "Sales galleries", "Partnerships", "Brand activations") },
  { label: msg("Project coordination"), items: m("Architects", "Engineers", "Planners", "Permitting", "Building-solution specialists") },
];

export default async function ServicesPage({ params }: LangParams) {
  const { t } = await pageLang(params);
  return (
    <>
      <PageHead
        eyebrow={t("Services")}
        title={rich(t, "One marketing <a>system,</a> not a menu of tactics.", { a: accent })}
        lead={t(
          "Parlour runs seven disciplines under one strategy and one accountable lead, from the commercial thinking that shapes a project to the reporting that ties it back to sales."
        )}
      />

      {services.map((service, i) => (
        <Block key={service.label} label={<><span className="text-meta mb-3 block">{String(i + 1).padStart(2, "0")}</span>{t(service.label)}</>}>
          <RowList items={service.items.map((x) => t(x))} cols={2} />
        </Block>
      ))}

      <Block label={t("A note on coordination")} dim>
        <p className="prose-column text-ink-soft">
          {t("Project coordination runs through vetted partners. Parlour coordinates architects, engineers, planners and permitting; it does not hold those licences itself.")}
        </p>
      </Block>

      <CtaBand
        title={t("One senior team owns the result.")}
        primary={{ label: t("Start a conversation"), href: "/contact" }}
        secondary={{ label: t("Growth Diagnostic"), href: "/growth-diagnostic" }}
      />
    </>
  );
}
