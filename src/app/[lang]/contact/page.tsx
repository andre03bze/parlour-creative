import { ContactForm } from "@/components/ContactForm";
import { PageHead } from "@/components/editorial";
import { pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { accent, rich } from "@/i18n/rich";
import { contact } from "@/lib/site";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(
    params,
    "/contact",
    "Contact",
    "Start a conversation with Parlour Creative: tell us about the development, property, hotel or founder story. Based in Belize, serving the Americas."
  );

export default async function ContactPage({ params }: LangParams) {
  const { t } = await pageLang(params);
  return (
    <>
      <PageHead eyebrow={t("Contact")} title={rich(t, "Start a <a>conversation.</a>", { a: accent })} />
      <div className="container-page grid gap-16 border-t border-ink/60 pb-28 pt-14 lg:grid-cols-[1fr_1.6fr] lg:gap-24 lg:pb-40 lg:pt-20">
        <div className="space-y-10">
          <p className="text-lead prose-column">
            {t("Tell us about the development, property, hotel or story. Laura reviews every enquiry and replies within one business day.")}
          </p>
          <div>
            <p className="text-meta">{t("Prefer to talk?")}</p>
            <a href={contact.whatsappHref} className="mt-2 block text-2xl underline-offset-4 hover:underline">
              WhatsApp {contact.whatsapp}
            </a>
            <a href={`mailto:${contact.email}`} className="block text-2xl underline-offset-4 hover:underline">
              {contact.email}
            </a>
          </div>
          <div>
            <p className="text-meta">{t("Based in")}</p>
            <p className="mt-2 text-lg">{t("Belize, serving the Americas")}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
