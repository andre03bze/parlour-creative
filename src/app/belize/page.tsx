import type { Metadata } from "next";
import { Block, CtaBand, PageHead, ProofGrid } from "@/components/editorial";
import { getCaseStudiesByLocation } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Parlour in Belize",
  description:
    "Based in Belize and working across the Americas: real estate and hospitality marketing rooted in Belize's markets and built for international buyers and guests.",
  alternates: { canonical: "/belize" },
};

export default function BelizePage() {
  const projects = getCaseStudiesByLocation("Belize");

  return (
    <>
      <PageHead
        eyebrow="Belize · The Americas"
        image={{
          src: "/work/blue-ocean-belize/aerial-009-2000w.webp",
          alt: "Aerial view of the San Pedro coastline on Ambergris Caye, Belize, with the reef beyond",
          position: "center 70%",
        }}
        title={
          <>
            Built in Belize. Working <span className="accent">across the Americas.</span>
          </>
        }
        lead="Belize is where we prove the work every day. From here we serve developers and hospitality brands selling to North American and international buyers, from Mexico and Central America to South America."
      />

      <Block label="Where we work in Belize">
        <p className="text-lead prose-column">
          Ambergris Caye · Caye Caulker · Placencia · Hopkins · Cayo · Belize City
        </p>
      </Block>

      {projects.length > 0 && (
        <Block label="Current work in Belize">
          <ProofGrid projects={projects} />
        </Block>
      )}

      <CtaBand
        title="Bring your next place to market."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "View the work", href: "/work" }}
      />
    </>
  );
}
