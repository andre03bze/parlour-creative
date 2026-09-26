import type { Metadata } from "next";
import { Block, CtaBand, PageHead, ProofGrid, RowList } from "@/components/editorial";
import { Button } from "@/components/ui";
import { getCaseStudiesByCategory } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Real Estate & Development Marketing",
  description:
    "Positioning, launch campaigns, paid media and sales tools for property developers, brokerages and agents in Belize and across the Americas.",
  alternates: { canonical: "/real-estate" },
};

export default function RealEstatePage() {
  const projects = getCaseStudiesByCategory("real-estate");

  return (
    <>
      <PageHead
        eyebrow="Real estate"
        image={{
          src: "/work/caves-branch-river-estates/hero-estate-1920w.webp",
          alt: "Aerial view of Caves Branch River Estates, jungle lots bordering the Caves Branch River, Belize",
        }}
        title={
          <>
            Marketing that <span className="accent">moves inventory.</span>
          </>
        }
        lead="Developers, brokerages and agents don't need more content. They need buyers who are ready to talk. Parlour builds the position, the brand and the system that finds them and hands them to your sales team."
      />

      <Block label="For developers">
        <RowList
          cols={2}
          items={[
            "Project positioning and naming",
            "Development brands",
            "Launch campaigns",
            "Websites and landing pages",
            "Paid media",
            "Brochures, signage and sales galleries",
            "Co-broker kits",
            "CRM and lead routing",
          ]}
        />
      </Block>

      <Block label="For brokerages and agents">
        <RowList
          cols={2}
          items={[
            "Brokerage brand and positioning",
            "Priority-listing campaigns",
            "Photo, video and drone",
            "Social management",
            "Paid media",
            "Lead capture and follow-up",
            "Recruiting and listing-win materials",
          ]}
        />
      </Block>

      {projects.length > 0 && (
        <Block label="Proof">
          <ProofGrid projects={projects.slice(0, 4)} />
          <div className="mt-10">
            <Button href="/work?category=real-estate" variant="secondary">All real estate work</Button>
          </div>
        </Block>
      )}

      <CtaBand
        title="Start with a Growth Diagnostic."
        primary={{ label: "Growth Diagnostic", href: "/growth-diagnostic" }}
        secondary={{ label: "View the work", href: "/work" }}
      />
    </>
  );
}
