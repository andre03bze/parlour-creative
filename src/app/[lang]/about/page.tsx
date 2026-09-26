import Image from "next/image";
import Link from "@/i18n/client";
import { Button, Section } from "@/components/ui";
import { msg, pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { accent, rich } from "@/i18n/rich";

export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(
    params,
    "/about",
    "About",
    "Senior-led by design: Laura Curridor and Andre Acosta, the strategic and creative partners behind Parlour Creative, based in Belize and serving the Americas."
  );

const anchors = [
  [msg("About us"), "#about"],
  [msg("Philosophy"), "#philosophy"],
  [msg("People"), "#people"],
  [msg("The bench"), "#bench"],
] as const;

export default async function AboutPage({ params }: LangParams) {
  const { t } = await pageLang(params);
  const mark = (c: React.ReactNode) => <mark className="bg-ink/10 px-1 text-ink">{c}</mark>;
  return (
    <>
      {/* Banner (Gladstone: team photograph — swap for a team photo when headshots arrive) */}
      <div data-hero className="relative h-[52svh] min-h-[22rem] w-full overflow-hidden bg-coal">
        <Image
          src="/work/blue-ocean-belize/aerial-006-2000w.webp"
          alt={t("Aerial view of a lagoon and island shoreline in Belize")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />
      </div>

      <div className="container-page pb-10 pt-14 lg:pb-16 lg:pt-20">
        <h1 className="text-statement max-w-5xl">
          {rich(t, "Parlour is a senior-led studio of <m>strategists</m>, <m>storytellers</m> and <m>marketers</m>, based in Belize and working across the Americas.", { m: mark })}
        </h1>
        <nav aria-label={t("On this page")} className="mt-12 flex flex-wrap gap-2">
          {anchors.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-ink/40 px-3.5 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              {t(label)}
            </a>
          ))}
        </nav>
      </div>

      <section id="about" className="scroll-mt-24 border-t border-ink/60">
        <div className="container-page grid gap-6 py-14 lg:grid-cols-[1fr_2fr] lg:py-24">
          <h2 className="text-h3">{t("About us")}</h2>
          <p className="text-lead prose-column">
            {t("The strategic and creative partner behind the property story. We shape the commercial strategy, coordinate the project team, build the brand and story, and run the content, paid media, lead capture, CRM and experiences that sell it, from Belize, for developers, hospitality owners and brands across the Americas.")}
          </p>
        </div>
      </section>

      <section id="philosophy" className="scroll-mt-24 border-t border-ink/60">
        <div className="container-page grid gap-6 py-14 lg:grid-cols-[1fr_2fr] lg:py-24">
          <h2 className="text-h3">{t("Philosophy")}</h2>
          <div>
            <p className="text-lead prose-column">
              {rich(t, "Clarity before activity. <a>Constructed intelligence. Human measure.</a>", { a: accent })}
            </p>
            <p className="prose-column mt-6 text-ink-soft">
              {t("Every project starts with a commercial objective (more qualified enquiries, faster sales, more direct bookings) and the marketing is built backwards from it. Senior people stay close to the work, from the first decision to the last report, without the layers of a traditional agency.")}
            </p>
          </div>
        </div>
      </section>

      <section id="people" className="scroll-mt-24 border-t border-ink/60">
        <div className="container-page py-14 lg:py-24">
          <h2 className="text-h3">{t("People")}</h2>
          <div className="mt-12 grid gap-16 lg:grid-cols-2">
            <div>
              <div className="aspect-[3/4] bg-paper-dim" />
              <h2 className="text-h3 mt-6">Laura Curridor</h2>
              <p className="text-meta mt-1">{t("Founder, CEO & Chief Strategy Officer")}</p>
              <p className="prose-column mt-4 text-ink-soft">
                {t("Laura is a brand and marketing strategist whose background spans creative advertising and design-build. She spent eight years in Toronto leading client strategy, integrated campaigns and business development, rising to Director of Marketing. That body of work includes broadcast design for CBC News, Sportsnet and TVO, and brand and sales environments for Forgestone Capital and The HUB at 30 Bay. She has since held embedded senior marketing roles across Belize, including with Blue Ocean Belize, Offi Belize and STELCOR Solutions.")}
              </p>
              <div className="mt-4">
                <Link href="/work" className="text-sm font-medium text-ink hover:underline">
                  {t("See the full body of work")} →
                </Link>
              </div>
            </div>

            <div>
              <div className="aspect-[3/4] bg-paper-dim" />
              <h2 className="text-h3 mt-6">Andre Acosta</h2>
              <p className="text-meta mt-1">{t("Creative & Strategy Director")}</p>
              <p className="prose-column mt-4 text-ink-soft">
                {t("Andre turns strategy into the work people see: the films, photography, campaigns and content that carry a project’s story. He leads Parlour’s creative direction and production and shapes strategy alongside Laura, so the idea and the execution never drift apart. Andre is the founder of Tide and Co, his creative and production company, and led production for Blue Ocean Belize’s portfolio, including 120+ production hours and 14 videos in a single period.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="bench" className="scroll-mt-24 border-t border-ink/60">
        <div className="container-page grid gap-6 py-14 lg:grid-cols-[1fr_2fr] lg:py-24">
          <h2 className="text-h3">{t("The bench")}</h2>
          <p className="prose-column text-ink-soft">
            {t("Parlour directs a vetted team of specialists in paid media, web development, design and production. You get senior strategy and specialist depth, with one accountable lead.")}
          </p>
        </div>
      </section>

      <Section dark className="text-center">
        <h2 className="text-h2 mx-auto max-w-3xl">{t("Bring your next place to market.")}</h2>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="onDark">{t("Start a conversation")}</Button>
          <Button href="/work" variant="onDark">{t("View the work")}</Button>
        </div>
      </Section>
    </>
  );
}
