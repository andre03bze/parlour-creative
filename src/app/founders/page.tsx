import type { Metadata } from "next";
import { Button, Section } from "@/components/ui";
import { getCaseStudy } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Founder Story",
  description: "Personal brand and story platforms for founders, developers, hoteliers and executives.",
};

export default function FoundersPage() {
  const stephen = getCaseStudy("stephen-mater");

  return (
    <>
      <Section className="pb-12 pt-16 lg:pt-20">
        <h1 className="text-display max-w-3xl">Your story is the brand.</h1>
        <p className="prose-column mt-6 text-lg text-ink-soft">
          Buyers, guests and investors choose people before they choose
          projects. Parlour builds founders&rsquo; personal brands through
          story, film and a steady presence where their market is watching.
        </p>
      </Section>

      <Section className="bg-paper-dim">
        <h2 className="text-h3">What we do</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-3 text-ink-soft sm:grid-cols-2">
          {[
            "Personal positioning and story",
            "Storytelling video series",
            "LinkedIn and Instagram content in your voice",
            "Speaking and press",
            "A personal site",
          ].map((item) => (
            <li key={item} className="border-t border-line pt-2">{item}</li>
          ))}
        </ul>
      </Section>

      {stephen && (
        <Section>
          <h2 className="text-h2 max-w-xl">Proof.</h2>
          <a href={`/work/${stephen.slug}`} className="group mt-10 block border-t border-ink pt-5">
            <p className="font-display text-2xl group-hover:text-forest">{stephen.client}</p>
            <p className="mt-2 max-w-2xl text-ink-soft">{stephen.headline}</p>
            <p className="mt-3 text-sm text-ink-soft">
              (im)possible pursuit, on YouTube — started September 28, 2026. Full
              results due at 60–90 days.
            </p>
          </a>
        </Section>
      )}

      <Section dark className="text-center">
        <h2 className="text-h2 mx-auto max-w-xl">Tell us your story.</h2>
        <div className="mt-8">
          <Button href="/contact">Tell us your story</Button>
        </div>
      </Section>
    </>
  );
}
