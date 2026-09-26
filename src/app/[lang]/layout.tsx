import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Inter_Tight, Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { Cursor } from "@/components/Cursor";
import { ScrollRail } from "@/components/ScrollRail";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LangProvider } from "@/i18n/client";
import { LanguageSuggestion } from "@/components/LanguageSuggestion";
import { isLang, langs, type Lang } from "@/i18n/config";
import { ogImage, ogLocale } from "@/i18n/meta";
import { esClient } from "@/i18n/es";
import { getT } from "@/i18n/t";
import { allowIndexing, contact, siteUrl } from "@/lib/site";
import "../globals.css";

// Existing Parlour identity: Neue Haas Unica / Helvetica Neue (Adobe font, not licensed for
// self-hosting here) → closest open-licence match Inter Tight, tight-tracked. Newsreader is the
// site's existing accent serif. See DESIGN-SYSTEM.md.
const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans-brand",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getT(lang);
  return {
    metadataBase: new URL(siteUrl),
    ...(allowIndexing ? {} : { robots: { index: false, follow: false } }),
    title: {
      default: t("Parlour Creative · Real Estate & Hospitality Marketing, Belize"),
      template: "%s · Parlour Creative",
    },
    description: t("Strategy-led brand and marketing for developers, brokerages and hotels in Belize and the Americas."),
    openGraph: {
      type: "website",
      siteName: "Parlour Creative",
      locale: ogLocale(lang),
      images: [{ ...ogImage, alt: t(ogImage.alt) }],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage.url],
    },
    icons: {
      icon: "/favicon.svg",
    },
  };
}

// Palette review tool: visible in development, or in production only when explicitly enabled.
const paletteReview = process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_PALETTES === "1";

const organizationSchema = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Parlour Creative",
  url: siteUrl,
  email: contact.email,
  areaServed: "Belize",
  description: getT(lang)("Strategy-led brand and marketing for developers, brokerages and hotels in Belize and the Americas."),
  inLanguage: lang,
});

const websiteSchema = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Parlour Creative",
  url: siteUrl,
  inLanguage: lang,
});

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getT(lang);
  return (
    <html
      lang={lang}
      className={`no-js ${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {"(function(){try{var q=new URLSearchParams(location.search).get('theme');var t=q||localStorage.getItem('parlourTheme');if(t&&/^(a|b|c)$/.test(t)){document.documentElement.dataset.theme=t;localStorage.setItem('parlourTheme',t)}else if(q==='current'){localStorage.removeItem('parlourTheme')}}catch(e){}})()"}
        </Script>
        <Script id="js-enabled" strategy="beforeInteractive">
          {"document.documentElement.classList.remove('no-js')"}
        </Script>
        <LangProvider lang={lang} dict={lang === "es" ? esClient : null}>
        <JsonLd data={organizationSchema(lang)} />
        <JsonLd data={websiteSchema(lang)} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-coal-soft focus:px-4 focus:py-2 focus:text-paper"
        >
          {t("Skip to content")}
        </a>
        <SmoothScroll />
        {paletteReview && <ThemeSwitcher />}
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">{children}</main>
        <SiteFooter lang={lang} />
        <ScrollRail />
        <Cursor />
        <LanguageSuggestion />
        </LangProvider>
      </body>
    </html>
  );
}
