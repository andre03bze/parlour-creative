import type { Metadata } from "next";
import Link from "next/link";
import { Block, CtaBand, PageHead, ProofGrid, RowList } from "@/components/editorial";
import { getCaseStudy } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Founder Story",
  description:
    "Personal brand and story platforms for founders, developers, hoteliers and executives, from Parlour Creative in Belize.",
  alternates: { canonical: "/founders" },
};

export default function FoundersPage() {
  const stephen = getCaseStudy("stephen-mater");

  return (
    <>
      <PageHead
        eyebrow="Founders"
        title={
          <>
            Your story is <span className="accent">the brand.</span>
          </>
        }
        lead="Buyers, guests and investors choose people before they choose projects. Parlour builds founders' personal brands through story, film and a steady presence where their market is watching."
      />

      <Block label="What we do">
        <RowList
          cols={2}
          items={[
            "Personal positioning and story",
            "Storytelling video series",
            "LinkedIn and Instagram content in your voice",
            "Speaking and press",
            "A personal site",
          ]}
        />
      </Block>

      {stephen && (
        <Block label="Proof">
          <ProofGrid projects={[stephen]} />
          <p className="prose-column mt-8 text-sm text-ink-soft">
            (im)possible pursuit, on YouTube, started September 28, 2026. Full results are due at 60–90 days.{" "}
            <Link href={`/work/${stephen.slug}`} className="underline underline-offset-4">Read the case study</Link>.
          </p>
        </Block>
      )}

      <CtaBand
        title="Tell us your story."
        primary={{ label: "Tell us your story", href: "/contact" }}
        secondary={{ label: "View the work", href: "/work" }}
      />
    </>
  );
}
