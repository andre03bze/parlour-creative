import Link from "next/link";
import type { ReactNode } from "react";
import { categoryLabels, getActiveCategories, getPortfolioStats, getPublishedCaseStudies } from "@/content/case-studies";
import { stageCounts, stages } from "@/lib/method";

/**
 * The Parlour Index — a catalogue-style index of the body of work (industries, markets, the Method, projects A–Z).
 * Server component: every entry and count is derived from the published data and links into a Work filter.
 */
function Entry({ label, count, href }: { label: string; count: number; href?: string }) {
  const inner = (
    <>
      <span className="text-lg leading-tight">{label}</span>
      <span aria-hidden="true" className="mx-2 min-w-6 flex-1 -translate-y-1 border-b border-dotted border-ink/40 transition-colors duration-300 group-hover:border-solid group-hover:border-ink" />
      <span className="text-[0.75rem] font-medium tabular-nums tracking-[0.06em]">{count}</span>
    </>
  );
  const cls = "group flex items-baseline py-1.5 transition-colors duration-300 ease-link";
  return href ? <Link href={href} className={`${cls} hover:text-accent-text`}>{inner}</Link> : <div className={`${cls} text-ink-soft`}>{inner}</div>;
}

function Col({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-meta mb-3 border-b-2 border-ink pb-2 !text-ink">{title}</h3>
      {children}
    </div>
  );
}

const initial = (name: string) => name.replace(/^[^A-Za-z0-9]+/, "")[0]!.toUpperCase();

export function ParlourIndex() {
  const all = getPublishedCaseStudies();
  const cats = getActiveCategories();
  const { belize, canada, total } = getPortfolioStats();
  const sc = stageCounts();
  const az = [...all].sort((a, b) => a.client.localeCompare(b.client, "en", { ignorePunctuation: true }));
  const letters = [...new Set(az.map((p) => initial(p.client)))];

  return (
    <section aria-labelledby="index-heading" className="border-t-2 border-ink">
      <div className="container-page py-16 lg:py-28">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="index-heading" className="text-h2">Index <span className="accent">of work</span></h2>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-soft">{total} entries</p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <Col title="Industries">
            {cats.map((c) => (
              <Entry key={c} label={categoryLabels[c]} count={all.filter((p) => p.categories.includes(c)).length} href={`/work?category=${c}`} />
            ))}
          </Col>
          <Col title="Markets">
            <Entry label="Belize" count={belize} href="/work?market=Belize" />
            <Entry label="Canada" count={canada} href="/work?market=Canada" />
            <Entry label="Location not stated" count={total - belize - canada} />
            <p className="mt-4 max-w-xs text-[0.6875rem] uppercase leading-relaxed tracking-[0.1em] text-ink-soft">Based in Belize. Markets shown only where the work documents them.</p>
          </Col>
          <Col title="The Method · Site → Sales">
            {stages.map((s) => (
              <Entry key={s} label={s} count={sc[s]} href={`/work?stage=${s}`} />
            ))}
          </Col>
        </div>

        <div className="mt-20 border-t border-ink/40 pt-10">
          <h3 className="text-meta mb-8 !text-ink">Projects, A–Z</h3>
          <div className="grid gap-x-16 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {letters.map((L) => (
              <div key={L} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-2">
                <span className="text-h3 accent">{L}</span>
                <ul>
                  {az.filter((p) => initial(p.client) === L).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/work/${p.slug}`} className="group flex items-baseline py-1 transition-colors duration-300 hover:text-accent-text">
                        <span>{p.client}</span>
                        <span aria-hidden="true" className="mx-2 min-w-4 flex-1 -translate-y-1 border-b border-dotted border-ink/30" />
                        <span className="text-[0.6875rem] uppercase tracking-[0.1em] text-ink-soft">{categoryLabels[p.categories[0]!]}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
