import type { Metadata } from "next";
import Script from "next/script";
import { Inter_Tight, Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { contact, siteUrl } from "@/lib/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Parlour Creative · Real Estate & Hospitality Marketing, Belize",
    template: "%s · Parlour Creative",
  },
  description:
    "Strategy-led brand and marketing for developers, brokerages and hotels in Belize and the Americas.",
  openGraph: {
    type: "website",
    siteName: "Parlour Creative",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Parlour Creative",
  url: siteUrl,
  email: contact.email,
  areaServed: "Belize",
  description:
    "Strategy-led brand and marketing for developers, brokerages and hotels in Belize and the Americas.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Parlour Creative",
  url: siteUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
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
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-coal-soft focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <ThemeSwitcher />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
