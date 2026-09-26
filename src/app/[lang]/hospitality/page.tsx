import { Block, CtaBand, PageHead, ProofGrid, RowList } from "@/components/editorial";
import { Button } from "@/components/ui";
import { getCaseStudiesByCategory } from "@/content/case-studies";
import { localizeCases } from "@/content/localize";
import { msg, pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { accent, rich } from "@/i18n/rich";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(
    params,
    "/hospitality",
    "Hotel & Resort Marketing",
    "Story, content and paid media that grow direct bookings for resorts, hotels and hospitality brands in Belize and the Americas."
  );

const does = [
  "Brand positioning and story",
  "Photo, film and drone",
  "Social and influencer programs",
  "Paid media for direct bookings",
  "Booking-site and website journeys",
  "Email and WhatsApp marketing",
  "Campaigns for restaurants, tours, spa and events",
  "Monthly revenue reporting",
].map(msg);

export default async function HospitalityPage({ params }: LangParams) {
  const { lang, t } = await pageLang(params);
  const projects = localizeCases(getCaseStudiesByCategory("hospitality"), lang);

  return (
    <>
      <PageHead
        eyebrow={t("Hospitality")}
        title={rich(t, "Stories <a>guests book.</a>", { a: accent })}
        lead={t(
          "Most properties lean on booking sites and hope. Parlour builds the story that makes guests choose you, then the content, paid media and direct-booking journeys that bring them straight to you."
        )}
      />

      <Block label={t("What we do")}>
        <RowList cols={2} items={does.map((x) => t(x))} />
      </Block>

      <Block label={t("Proof")}>
        {projects.length > 0 ? (
          <ProofGrid projects={projects} />
        ) : (
          <>
            <p className="prose-column text-ink-soft">
              {t("The first hospitality engagement is underway. Its case study will publish here once there are results to show. In the meantime, see how the same system runs for real estate clients like Blue Ocean Belize.")}
            </p>
            <div className="mt-8">
              <Button href="/work" variant="secondary">{t("View the work")}</Button>
            </div>
          </>
        )}
      </Block>

      <CtaBand
        title={rich(t, "Find out where your bookings are <a>leaking.</a>", { a: accent })}
        primary={{ label: t("Find the leak"), href: "/growth-diagnostic" }}
        secondary={{ label: t("Start a conversation"), href: "/contact" }}
      />
    </>
  );
}
