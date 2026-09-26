"use client";

import { usePathname, useRouter, useSearchParams, type ReadonlyURLSearchParams } from "next/navigation";
import { useMemo } from "react";
import Link, { useT } from "@/i18n/client";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { WorkIndex } from "@/components/WorkIndex";
import { stages, stagesFor } from "@/lib/method";
import { categoryLabels, projectLine, type CaseStudy, type Category, type Market } from "@/content/case-studies";

/**
 * Work page filtering. Two restrained axes, both multi-label aware and deep-linkable (?category=&market=&view=):
 *  - Category chips (with live counts; a project can sit in up to three categories)
 *  - a quiet Market toggle (Belize / Canada) — the current commercial focus versus documented international experience
 * plus the Thumbnail / List toggle. Chips scroll horizontally on small screens instead of wrapping into a wall.
 */
interface Props {
  projects: CaseStudy[];
  categories: Category[];
  markets: Market[];
}

/** Reads the URL filters. useSearchParams opts out of static rendering, hence the server-rendered default below. */
export function WorkBrowser(props: Props) {
  return <WorkBrowserView {...props} params={useSearchParams()} />;
}

/** Suspense fallback: the unfiltered view rendered on the server, so the grid is in the first HTML (no late pop-in / layout shift). */
export function WorkBrowserStatic(props: Props) {
  return <WorkBrowserView {...props} params={new URLSearchParams()} />;
}

function WorkBrowserView({ projects, categories, markets, params }: Props & { params: URLSearchParams | ReadonlyURLSearchParams }) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useT();

  const category = categories.find((c) => c === params.get("category")) ?? "all";
  const market = markets.find((m) => m === params.get("market")) ?? "all";
  const stage = stages.find((x) => x === params.get("stage"));
  const view = params.get("view") === "list" ? "list" : "thumbnail";

  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value === "all" || (key === "view" && value === "thumbnail")) next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const base = useMemo(() => (stage ? projects.filter((p) => stagesFor(p).includes(stage)) : projects), [stage, projects]);
  const inMarket = useMemo(() => (market === "all" ? base : base.filter((p) => p.market === market)), [market, base]);
  const shown = useMemo(
    () => (category === "all" ? inMarket : inMarket.filter((p) => p.categories.includes(category))),
    [category, inMarket]
  );
  const count = (c: Category) => inMarket.filter((p) => p.categories.includes(c)).length;

  const chip = (active: boolean, disabled = false) =>
    `shrink-0 whitespace-nowrap border px-3.5 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ease-link ${
      active ? "border-ink bg-ink text-paper" : disabled ? "border-ink/20 text-ink-soft/60" : "border-ink/40 hover:border-ink"
    }`;
  const quiet = (active: boolean) =>
    `underline-offset-4 transition-colors duration-300 ease-link ${active ? "underline" : "text-ink-soft hover:text-ink"}`;

  return (
    <div>
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-3 text-sm">{t("Industry")}</p>
          <div
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label={t("Filter work by industry")}
          >
            <button type="button" className={chip(category === "all")} aria-pressed={category === "all"} onClick={() => set("category", "all")}>
              {t("All")} <span className="ml-1 opacity-75">{inMarket.length}</span>
            </button>
            {categories.map((c) => {
              const n = count(c);
              return (
                <button
                  key={c}
                  type="button"
                  className={chip(category === c, n === 0)}
                  aria-pressed={category === c}
                  disabled={n === 0}
                  onClick={() => set("category", c)}
                >
                  {t(categoryLabels[c])} <span className="ml-1 opacity-75">{n}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-sm">
          {stage && (
            <button type="button" onClick={() => set("stage", "all")} className="underline underline-offset-4 transition-colors duration-300 ease-link hover:text-accent-text">
              {t("Method")} · {t(stage)} ×
            </button>
          )}
          {markets.length > 1 ? (
            <div className="flex items-center gap-4" role="group" aria-label={t("Filter work by market")}>
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-soft">{t("Market")}</span>
              <button type="button" aria-pressed={market === "all"} className={quiet(market === "all")} onClick={() => set("market", "all")}>
                {t("All")}
              </button>
              {markets.map((m) => (
                <button key={m} type="button" aria-pressed={market === m} className={quiet(market === m)} onClick={() => set("market", m)}>
                  {t(m)} <span className="opacity-75">{base.filter((p) => p.market === m).length}</span>
                </button>
              ))}
            </div>
          ) : (
            <span />
          )}
          <div className="flex gap-4" role="group" aria-label={t("View")}>
            {(["thumbnail", "list"] as const).map((v) => (
              <button key={v} type="button" aria-pressed={view === v} onClick={() => set("view", v)} className={`capitalize ${quiet(view === v)}`}>
                {t(v === "thumbnail" ? "Thumbnail" : "List")}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {t("{n} projects shown", { n: shown.length })}
      </p>

      <div className="mt-10 min-h-[40vh]">
        {shown.length === 0 ? (
          <p className="text-ink-soft">{t("No projects match this combination yet.")}</p>
        ) : view === "list" ? (
          <div key={`${category}-${market}-list`} className="filter-in">
            <WorkIndex projects={shown} />
          </div>
        ) : (
          <ul key={`${category}-${market}`} className="filter-in grid gap-x-6 gap-y-16 sm:grid-cols-2">
            {shown.map((p, i) => (
              <li key={p.slug} className={i % 2 === 1 ? "sm:mt-24" : ""}>
                <Link href={`/work/${p.slug}`} data-cursor="view" className="group block">
                  <Reveal media eager={i === 0}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-paper-dim">
                      <ProjectVisual
                        project={p}
                        sizes="(min-width: 640px) 48vw, 100vw"
                        priority={i < 2}
                        className="transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.04]"
                      />
                    </div>
                  </Reveal>
                  <h2 className="text-h3 mt-4">{p.client}</h2>
                  <p className="mt-1 text-sm text-ink-soft">{projectLine(p)}</p>
                  <p className="mt-3 text-[0.625rem] font-medium uppercase leading-relaxed tracking-[0.12em] text-ink-soft">
                    {p.disciplines.slice(0, 6).join(" / ")}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
