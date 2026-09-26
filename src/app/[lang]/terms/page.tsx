import { Section } from "@/components/ui";
import { pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { contact } from "@/lib/site";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(params, "/terms", "Terms of Service", "The terms that govern engagements with Parlour Creative: billing, third-party costs, revisions and guarantees.", { robots: { index: true, follow: true } });

const LAST_UPDATED = "2026-09-26";

export default async function TermsPage({ params }: LangParams) {
  const { t } = await pageLang(params);
  return (
    <Section className="pt-32 lg:pt-48">
      <div className="prose-column">
        <h1 className="text-display !text-[clamp(2.5rem,1.5rem+4vw,5rem)]">{t("Terms")}</h1>
        <p className="mt-4 text-sm text-ink-soft">{t("Last updated {date}", { date: LAST_UPDATED })}</p>

        <h2 className="text-h3 mt-10">{t("Engagements")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("Retainer engagements run on a six-month minimum, billed monthly in advance. Project engagements are billed 50% deposit, with the balance due on agreed milestones. Specific scope, deliverables and pricing for any engagement are set out in a signed proposal or agreement, which governs over this page.")}
        </p>

        <h2 className="text-h3 mt-10">{t("Third-party costs")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("Ad spend, printing, venues and other third-party costs are paid by the client directly or in advance. Where Parlour purchases them on the client’s behalf, a 15% administration fee applies.")}
        </p>

        <h2 className="text-h3 mt-10">{t("Revisions")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("Two rounds of revisions are included per deliverable; additional rounds are billed.")}
        </p>

        <h2 className="text-h3 mt-10">{t("No guarantees")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("Parlour does not control a client’s pricing, inventory or sales team, and cannot guarantee sales, bookings or enquiry volumes. Performance bonuses can be agreed on top of a base fee, but never in place of it.")}
        </p>

        <h2 className="text-h3 mt-10">{t("Contact")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("Questions about these terms:")}{" "}
          <a href={`mailto:${contact.email}`} className="text-ink hover:underline">
            {contact.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
