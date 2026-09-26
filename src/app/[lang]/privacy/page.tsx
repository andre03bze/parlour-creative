import { Section } from "@/components/ui";
import { pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { contact } from "@/lib/site";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(params, "/privacy", "Privacy Policy", "What information Parlour Creative collects through this site, how it is used, and what is stored in your browser.", { robots: { index: true, follow: true } });

const LAST_UPDATED = "2026-09-26";

export default async function PrivacyPage({ params }: LangParams) {
  const { t } = await pageLang(params);
  return (
    <Section className="pt-32 lg:pt-48">
      <div className="prose-column">
        <h1 className="text-display !text-[clamp(2.5rem,1.5rem+4vw,5rem)]">{t("Privacy Policy")}</h1>
        <p className="mt-4 text-sm text-ink-soft">{t("Last updated {date}", { date: LAST_UPDATED })}</p>

        <h2 className="text-h3 mt-10">{t("What we collect")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("When you submit the contact or Growth Diagnostic form on this site, we collect the information you provide — name, company, email, phone/WhatsApp number, and any project details you share. We use it only to respond to your enquiry.")}
        </p>

        <h2 className="text-h3 mt-10">{t("Analytics")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("This site does not currently use analytics, advertising pixels or tracking cookies. If we add them, we will update this page and ask for your consent first where the law requires it.")}
        </p>

        <h2 className="text-h3 mt-10">{t("Storage in your browser")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("The site stores your language choice and, if you use the palette preview, your palette choice in your browser’s local storage, so the site remembers them. This data stays on your device and is not sent to us. We do not set cookies.")}
        </p>

        <h2 className="text-h3 mt-10">{t("Third-party content")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("Some case studies include films hosted on YouTube or Vimeo. Nothing from those services loads until you press play; once you do, they may collect data under their own policies.")}
        </p>

        <h2 className="text-h3 mt-10">{t("How we use your information")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("We use the information you provide solely to respond to your enquiry, discuss a potential engagement, and, if we work together, to deliver that work. We do not sell your information.")}
        </p>

        <h2 className="text-h3 mt-10">{t("Contact")}</h2>
        <p className="mt-4 text-ink-soft">
          {t("Questions about this policy or your data:")}{" "}
          <a href={`mailto:${contact.email}`} className="text-ink hover:underline">
            {contact.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
