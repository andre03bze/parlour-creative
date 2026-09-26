import { Block, CtaBand, PageHead, SiteToSalesPath } from "@/components/editorial";
import { msg, pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { accent, rich } from "@/i18n/rich";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(
    params,
    "/approach",
    "Site to Sales: Our Approach",
    "From site to sales: how Parlour runs commercial strategy, project coordination, brand and performance as one system for developments, hotels and place-led brands."
  );

const steps = [
  { step: msg("Discover"), body: msg("Understand the business, the site and what's actually holding growth back.") },
  { step: msg("Define"), body: msg("Set the audience, the position and the commercial goal everything else serves.") },
  { step: msg("Create"), body: msg("Build the brand, story and content that carry that position into market.") },
  { step: msg("Launch"), body: msg("Run the campaigns, sales tools and lead capture that turn attention into enquiries.") },
  { step: msg("Learn"), body: msg("Report against the KPIs that matter and adjust the system, not just the ads.") },
];

const chain = [
  { label: msg("Commercial strategy"), body: msg("Who the project is for, what it should be, and how it will sell.") },
  {
    label: msg("Project coordination"),
    body: msg("Working with land, architects, engineers, planners, permitting and building-solutions partners to bring it to life."),
  },
  { label: msg("Brand, story and campaigns"), body: msg("The identity, content and integrated campaigns.") },
  { label: msg("Performance and sales"), body: msg("Paid media, lead capture, CRM and sales tools.") },
];

export default async function ApproachPage({ params }: LangParams) {
  const { t } = await pageLang(params);
  return (
    <>
      <PageHead
        eyebrow={t("Site to Sales")}
        image={{
          src: "/work/caves-branch-river-estates/river-band-1440w.webp",
          alt: t("Wide aerial view of the Caves Branch River winding through jungle in Belize"),
        }}
        title={rich(t, "We can start <a>before the first drawing.</a>", { a: accent })}
        lead={t(
          "Our roots are in creative advertising and design-build. So Parlour can work alongside your architects, engineers, planners and permitting team from day one, making sure the commercial strategy shapes the project, then building the brand, the experiences and the campaigns that sell it."
        )}
      />

      <div className="container-page pb-20 lg:pb-32">
        <SiteToSalesPath t={t} />
        <p className="text-meta mt-6 max-w-xl">
          {t("Parlour coordinates architects, engineers and permitting through partners. It does not hold those licences itself.")}
        </p>
      </div>

      <Block label={t("How the work runs")}>
        <ul>
          {chain.map((item) => (
            <li key={item.label} className="grid gap-2 border-t border-ink/25 py-5 first:border-t-ink/60 sm:grid-cols-[14rem_1fr]">
              <p className="text-h3">{t(item.label)}</p>
              <p className="prose-column text-ink-soft">{t(item.body)}</p>
            </li>
          ))}
        </ul>
        <p className="prose-column mt-10 text-ink-soft">
          {t("From real estate to hotels, events and brand partnerships, if it’s built around a place, we can help bring it to life.")}
        </p>
      </Block>

      <Block label={rich(t, "Clarity before <a>activity.</a>", { a: accent })} dim>
        <ol>
          {steps.map((item, i) => (
            <li key={item.step} className="grid gap-2 border-t border-ink/25 py-5 first:border-t-ink/60 sm:grid-cols-[4rem_14rem_1fr]">
              <span className="text-meta pt-2">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-h3">{t(item.step)}</p>
              <p className="prose-column text-ink-soft">{t(item.body)}</p>
            </li>
          ))}
        </ol>
      </Block>

      <CtaBand
        title={t("See it applied to a real project.")}
        primary={{ label: "Caves Branch River Estates", href: "/work/caves-branch-river-estates" }}
        secondary={{ label: t("Growth Diagnostic"), href: "/growth-diagnostic" }}
      />
    </>
  );
}
