import Link from "@/i18n/client";
import { getT } from "@/i18n/t";
import type { Lang } from "@/i18n/config";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { contact, footerNav, footerTagline, sectorNav } from "@/lib/site";

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = getT(lang);
  return (
    <footer data-dark className="bg-coal text-paper">
      {/* Growth Diagnostic promo — the Gladstone "sub-brand" banner slot */}
      <Link
        href="/growth-diagnostic"
        className="group block border-b border-paper/15 py-16 transition-colors hover:bg-coal-soft lg:py-24"
      >
        <div className="container-page flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-paper/75">{t("Parlour Growth Diagnostic")}</p>
            <p className="text-display mt-4">{t("Find the leak.")}</p>
          </div>
          <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.14em]">
            {t("Three weeks. One plan.")}
            <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
          </p>
        </div>
      </Link>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <Logo className="h-9 w-auto" title="Parlour Creative" />
          <p className="mt-4 max-w-xs text-sm text-paper/70">
            {t("Strategy-led brand and marketing for real estate, hospitality and founders. Based in Belize, serving the Americas.")}
          </p>
        </div>

        <div className="text-sm">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-paper/75">Belize</p>
          <p className="mt-3 text-paper/85">{t("Serving the Americas")}</p>
          <a href={`mailto:${contact.email}`} className="mt-3 block py-1 hover:underline">{contact.email}</a>
          <a href={contact.whatsappHref} className="block py-1 hover:underline">{contact.whatsapp} · WhatsApp</a>
          <SocialLinks t={t} className="-ml-3 mt-2" />
        </div>

        <nav aria-label={t("Footer")} className="text-sm">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-paper/75">{t("Explore")}</p>
          <ul className="mt-3 space-y-1.5">
            {footerNav.filter((i) => !["/privacy", "/terms"].includes(i.href)).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/85 hover:text-paper hover:underline">{t(item.label)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t("Sectors")} className="text-sm">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-paper/75">{t("Sectors")}</p>
          <ul className="mt-3 space-y-1.5">
            {sectorNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/85 hover:text-paper hover:underline">{t(item.label)}</Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-paper/70">{t(footerTagline)}</p>
        </nav>
      </div>

      <div className="border-t border-paper/15">
        <div className="container-page flex flex-col gap-2 py-6 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Parlour Creative</p>
          <p className="flex gap-6">
            <Link href="/privacy" className="hover:text-paper">{t("Privacy")}</Link>
            <Link href="/terms" className="hover:text-paper">{t("Terms")}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
