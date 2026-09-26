"use client";

import Image from "next/image";
import { useState } from "react";
import Link, { useT } from "@/i18n/client";

export interface LensStage {
  name: string;
  note: string;
  count: number;
  showcase: { slug: string; client: string; src: string; alt: string; place: string | null } | null;
  /** Projects that evidence this stage, in Work order. */
  projects: { slug: string; client: string }[];
}

/**
 * The Method: seven stages, each evidenced by real work. Choosing a stage swaps one project image and lists the
 * projects that evidence it (linking into the Work filter). Restrained: type, hairlines, one image.
 */
export function MethodLens({ stages, total }: { stages: LensStage[]; total: number }) {
  const t = useT();
  const [active, setActive] = useState(stages[0]!.name);
  const [prev, setPrev] = useState<string | null>(null);
  const select = (name: string) => {
    if (name === active) return;
    setPrev(active);
    setActive(name);
  };
  const index = stages.findIndex((x) => x.name === active);
  const current = stages.find((s) => s.name === active)!;
  const shown = current.projects.slice(0, 7);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <div>
        <ol className="border-t-2 border-ink">
          {stages.map((s, i) => {
            const on = s.name === active;
            return (
              <li key={s.name} className="border-b-2 border-ink">
                <button
                  type="button"
                  aria-pressed={on}
                  onMouseEnter={() => select(s.name)}
                  onFocus={() => select(s.name)}
                  onClick={() => select(s.name)}
                  className="flex w-full items-baseline gap-4 py-3 text-left transition-opacity duration-500 ease-link lg:py-4"
                  style={{ opacity: on ? 1 : 0.5 }}
                >
                  <span className="w-8 shrink-0 text-[0.6875rem] font-medium tracking-[0.14em] text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-index !text-[clamp(2.25rem,1rem+4.2vw,5rem)] leading-none">{t(s.name)}</span>
                  <span className="ml-auto hidden text-right text-[0.6875rem] font-medium uppercase tracking-[0.12em] sm:block">{on ? t(s.note) : ""}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <p className="prose-column mt-6 text-sm text-ink-soft" aria-live="polite">
          <span className="text-ink">{t("{count} of {total} projects", { count: current.count, total })}</span> {t("evidence {stage}:", { stage: t(current.name) })}{" "}
          {shown.map((p, i) => (
            <span key={p.slug}>
              {i > 0 && ", "}
              <Link href={`/work/${p.slug}`} className="underline underline-offset-4 transition-colors duration-300 ease-link hover:text-accent-text">{p.client}</Link>
            </span>
          ))}
          {current.projects.length > shown.length && (
            <>
              {" "}
              <Link href={`/work?stage=${current.name}`} className="whitespace-nowrap underline underline-offset-4 hover:text-accent-text">
                {t("and {n} more", { n: current.projects.length - shown.length })} →
              </Link>
            </>
          )}
        </p>
      </div>

      <figure className="lg:sticky lg:top-28 lg:self-start">
        <div className="relative aspect-[4/5] overflow-hidden bg-coal">
          {stages.map(
            (s) =>
              s.showcase && (
                <Image
                  key={s.name}
                  src={s.showcase.src}
                  alt={s.name === active ? s.showcase.alt : ""}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-[clip-path,transform] duration-[1000ms] ease-editorial motion-reduce:transition-none"
                  style={{
                    // The incoming image wipes up over the outgoing one, which settles behind it.
                    clipPath: s.name === active || s.name === prev ? "inset(0)" : "inset(100% 0 0 0)",
                    zIndex: s.name === active ? 2 : s.name === prev ? 1 : 0,
                    transform: s.name === active ? "scale(1)" : "scale(1.08)",
                  }}
                />
              )
          )}
          <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-4 z-10 block h-[clamp(3rem,2rem+5vw,6rem)] overflow-hidden text-[clamp(3rem,2rem+5vw,6rem)] font-medium leading-none tracking-[-0.05em] text-paper">
            <span
              className="block transition-transform duration-[800ms] ease-editorial motion-reduce:transition-none"
              style={{ transform: `translateY(-${index * 100}%)` }}
            >
              {stages.map((x, i) => (
                <span key={x.name} className="block h-[clamp(3rem,2rem+5vw,6rem)]">{String(i + 1).padStart(2, "0")}</span>
              ))}
            </span>
          </span>
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 h-0.5 bg-paper/25">
            <span className="block h-full origin-left bg-paper transition-transform duration-[800ms] ease-editorial motion-reduce:transition-none" style={{ transform: `scaleX(${(index + 1) / stages.length})` }} />
          </span>
        </div>
        {current.showcase && (
          <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[0.6875rem] font-medium uppercase tracking-[0.12em]">
            <span>
              {t(current.name)} · <Link href={`/work/${current.showcase.slug}`} className="underline underline-offset-4">{current.showcase.client}</Link>
            </span>
            <span className="text-ink-soft">{current.showcase.place ?? ""}</span>
          </figcaption>
        )}
      </figure>
    </div>
  );
}
