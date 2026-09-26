import Link from "next/link";
import { contact, footerNav, footerTagline, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-forest-deep text-paper">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-24">
        <div>
          <p className="font-display text-2xl">Parlour</p>
          <p className="mt-4 max-w-sm text-sm text-paper/70">
            Strategy-led brand and marketing for real estate and hospitality.
            Based in Belize, serving ambitious businesses across the Americas.
          </p>
          <div className="mt-6 space-y-1 text-sm">
            <a href={`mailto:${contact.email}`} className="block hover:underline">
              {contact.email}
            </a>
            <a href={contact.whatsappHref} className="block hover:underline">
              {contact.whatsapp} (WhatsApp)
            </a>
          </div>
          {socialLinks.length > 0 && (
            <div className="mt-6 flex gap-4 text-sm">
              {socialLinks.map((s) => (
                <a key={s.href} href={s.href} className="hover:underline">
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-paper/80 hover:text-paper">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-paper/70 lg:text-right">
          <p>{footerTagline}</p>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Parlour Creative. All rights reserved.</p>
          <p>Belize · Serving the Americas</p>
        </div>
      </div>
    </footer>
  );
}
