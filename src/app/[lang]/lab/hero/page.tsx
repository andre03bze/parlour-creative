import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HeroLab } from "@/components/lab/HeroLab";
import { WorkIndex } from "@/components/WorkIndex";
import { getHomeCaseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Hero lab",
  robots: { index: false, follow: false },
};

export default function HeroLabPage() {
  // Prototype route: not served in production unless explicitly enabled (always noindex).
  if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_SHOW_LAB !== "1") notFound();
  return (
    <>
      <HeroLab />
      <section aria-labelledby="work-heading" className="pb-20 pt-10 lg:pb-32">
        <div className="container-page">
          <div className="mb-8 flex items-baseline justify-between gap-6">
            <h2 id="work-heading" className="text-h3">Our work</h2>
            <Link href="/work" className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] underline-offset-4 hover:underline">All work →</Link>
          </div>
          <WorkIndex projects={getHomeCaseStudies()} />
        </div>
      </section>
    </>
  );
}
