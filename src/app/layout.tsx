import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { contact, siteUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-forest focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
