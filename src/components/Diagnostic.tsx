"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui";
import { useT } from "@/i18n/client";
import { stages, type Stage } from "@/lib/method";
import s from "./Diagnostic.module.css";

const m = s as Record<string, string>;

/**
 * One question per Method stage. Answers are ordered strongest → weakest and score 0 / 1 / 2 for that stage.
 * The reading is directional and transparent: the stages with the highest scores are named, nothing is a percentage.
 */
const flow: Record<Stage, { q: string; a: [string, string, string]; gap: string; start: string }> = {
  Site: {
    q: "Is the place clearly positioned for the customer you need to attract?",
    a: ["Yes, clearly", "Somewhat", "Not yet"],
    gap: "Your answers suggest the place itself may not yet be positioned sharply for the customer you need.",
    start: "Clarify who the place is for before anything is built on top of it.",
  },
  Strategy: {
    q: "Is there a commercial strategy that connects the place to its market?",
    a: ["A clear, written strategy", "An informal one", "Not really"],
    gap: "The commercial logic between the place and its market may be more implicit than it needs to be.",
    start: "Write down the commercial logic first, then let brand and story follow it.",
  },
  Brand: {
    q: "Would a stranger understand why this place is meaningfully different?",
    a: ["Immediately", "With some explanation", "Not yet"],
    gap: "Your offer may be stronger than the distinction you are communicating.",
    start: "Clarify the commercial positioning first, then build the distribution system around it.",
  },
  Story: {
    q: "Is there a reason for someone to care before they are ready to buy?",
    a: ["A strong one", "A partial one", "Not yet"],
    gap: "There may not yet be a strong enough reason for people to care before they are ready to buy.",
    start: "Find the reason to care first, then decide where it should be told.",
  },
  Experience: {
    q: "Does what people see and visit reinforce the promise the brand makes?",
    a: ["Consistently", "In places", "Rarely"],
    gap: "What people encounter may not fully deliver the promise the brand makes.",
    start: "Audit the moments people actually encounter, then bring them in line with the promise.",
  },
  Distribution: {
    q: "Can the right people reliably find their way into the story?",
    a: ["Reliably", "Sometimes", "Rarely"],
    gap: "The story may be stronger than the path bringing the right people into it.",
    start: "Map how people currently find their way in, then close the gaps.",
  },
  Sales: {
    q: "Is there a clear path from interest to an enquiry, booking or sale?",
    a: ["A clear, tracked path", "A path with gaps", "Not really"],
    gap: "The route from interest to enquiry, booking or sale may have gaps worth examining.",
    start: "Trace the path from interest to enquiry, then remove the friction.",
  },
};

const NOTE: Record<Stage, string> = {
  Site: "The place and the project team",
  Strategy: "Commercial strategy and positioning",
  Brand: "Identity, naming, brand systems",
  Story: "Story, photography, film, content",
  Experience: "Websites, sales environments, launches",
  Distribution: "Campaigns, paid media, outreach",
  Sales: "Lead capture, CRM, sales tools",
};

const pad = (n: number) => String(n).padStart(2, "0");
const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Diagnostic({ images }: { images: Partial<Record<Stage, string>> }) {
  const t = useT();
  const total = stages.length;
  const [step, setStep] = useState(-1); // -1 intro, 0..6 questions, total = result
  const [answers, setAnswers] = useState<Partial<Record<Stage, number>>>({});
  const [picked, setPicked] = useState<number | null>(null);
  const [leaving, setLeaving] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  useEffect(() => {
    if (moved.current) heading.current?.focus({ preventScroll: false });
  }, [step]);

  const go = (next: number) => {
    moved.current = true;
    const apply = () => {
      setStep(next);
      setPicked(null);
      setLeaving(false);
    };
    if (reduced()) return apply();
    setLeaving(true);
    window.setTimeout(apply, 260);
  };

  const choose = (stage: Stage, score: number) => {
    if (picked !== null) return;
    setPicked(score);
    setAnswers((a) => ({ ...a, [stage]: score }));
    window.setTimeout(() => go(step + 1), reduced() ? 0 : 420);
  };

  const restart = () => {
    setAnswers({});
    go(-1);
  };

  const wrap = `${leaving ? m.stageOut : m.stageIn}`;

  if (step < 0) {
    return (
      <section aria-labelledby="dx-title" className="container-page min-h-[78svh] overflow-x-clip pb-20 pt-32 lg:pt-44">
        <div className={wrap}>
          <p className="text-meta mb-6">{t("Parlour Growth Diagnostic")}</p>
          <h1 id="dx-title" ref={heading} tabIndex={-1} className="text-display max-w-[16ch] outline-none">
            <span className="block">{t("Where is your")}</span>
            <span className="block">{t("growth system")}</span>
            <span className="block accent">{t("breaking?")}</span>
          </h1>
          <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <p className="text-lead prose-column text-ink-soft">
              {t("Seven questions, one for each stage of the Parlour Method: from the place to the sale. Your answers point to where the system may be under most strain. It takes about two minutes, and nothing you choose is stored or sent.")}
            </p>
            <div>
              <button
                type="button"
                onClick={() => go(0)}
                className="group inline-flex items-center gap-3 border border-cta bg-cta px-6 py-3.5 text-xs font-medium uppercase tracking-[0.14em] text-cta-ink transition-[background-color,transform] duration-500 ease-editorial hover:bg-cta-hover active:translate-y-px"
              >
                {t("Start the diagnostic")}
                <span aria-hidden="true" className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (step >= total) {
    const ranked = stages
      .map((name, i) => ({ name, i, score: answers[name] ?? 0 }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score || a.i - b.i)
      .slice(0, 3);
    const first = ranked[0];
    const labels = ["The clearest gap", "Worth examining", "Also worth examining"];
    const image = first ? images[first.name] : undefined;
    return (
      <section aria-labelledby="dx-result" className="container-page overflow-x-clip pb-24 pt-32 lg:pb-32 lg:pt-44">
        <div className={wrap}>
          <p className="text-meta mb-6" role="status">{t("Your Parlour diagnosis")}</p>
          <h1 id="dx-result" ref={heading} tabIndex={-1} className="sr-only">{t("Your Parlour diagnosis")}</h1>
          {first ? (
            <>
              <p
                aria-hidden="true"
                className={`${m.word} text-display !text-[clamp(3rem,0.5rem+12vw,15rem)] uppercase leading-[0.9] tracking-[-0.05em]`}
                style={image ? { backgroundImage: `url(${image})` } : { color: "var(--color-ink)", WebkitTextFillColor: "var(--color-ink)" }}
              >
                {t(first.name)}
              </p>
              <ol className="mt-12 border-t-2 border-ink lg:mt-20">
                {ranked.map((r, k) => (
                  <li key={r.name} className="grid gap-3 border-b border-ink/40 py-6 sm:grid-cols-[3rem_minmax(12rem,20rem)_1fr] lg:py-8">
                    <span className="text-meta pt-1.5">{pad(k + 1)}</span>
                    <div>
                      <p className="text-meta">{t(labels[k]!)}</p>
                      <p className="text-h2 mt-1">{t(r.name)}</p>
                    </div>
                    <p className="prose-column text-lead text-ink-soft">{t(flow[r.name].gap)}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_2fr]">
                <p className="text-meta">{t("Where we'd start")}</p>
                <p className="text-statement max-w-3xl">
                  {t(flow[first.name].start)}
                  {ranked[1] && <> {t("Then look at {stage}.", { stage: t(ranked[1].name) })}</>}
                </p>
              </div>
            </>
          ) : (
            <p className="text-statement max-w-3xl">
              {t("Your answers suggest the system holds together from place to sale. A Growth Diagnostic would test that against your market and your competitors.")}
            </p>
          )}
          <p className="prose-column mt-12 text-sm text-ink-soft">
            {t("This is a directional reading of your own answers, not a measurement. Nothing you chose was stored or sent.")}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/growth-diagnostic">{t("See what we'd diagnose first")}</Button>
            <Button href="/contact" variant="secondary">{t("Start a Growth Diagnostic")}</Button>
            <button type="button" onClick={restart} className="px-2 py-3 text-xs font-medium uppercase tracking-[0.14em] underline underline-offset-4 transition-opacity hover:opacity-70">
              {t("Start again")}
            </button>
          </div>
        </div>
      </section>
    );
  }

  const stage = stages[step]!;
  const f = flow[stage];
  return (
    <section aria-labelledby="dx-q" className="container-page min-h-[78svh] overflow-x-clip pb-20 pt-28 lg:pt-40">
      <p className="sr-only" role="status" aria-live="polite">
        {t("Question {n} of {total}", { n: step + 1, total })}: {t(stage)}
      </p>
      <div className="flex items-center gap-5 text-[0.6875rem] font-medium uppercase tracking-[0.14em]">
        <span className="tabular-nums">{pad(step + 1)} / {pad(total)}</span>
        <span aria-hidden="true" className="relative h-px flex-1 bg-ink/25">
          <span className={`${m.line} absolute inset-0 bg-ink`} style={{ transform: `scaleX(${(step + 1) / total})` }} />
        </span>
        {step > 0 && (
          <button type="button" onClick={() => go(step - 1)} className="py-2 underline underline-offset-4 transition-opacity hover:opacity-70">
            {t("Back")}
          </button>
        )}
      </div>

      <div className={`relative mt-12 lg:mt-20 ${wrap}`} key={step}>
        <span aria-hidden="true" className="pointer-events-none absolute -top-6 right-0 select-none overflow-hidden text-[clamp(7rem,3rem+20vw,22rem)] font-medium leading-[0.8] tracking-[-0.06em] text-ink/[0.07]">
          <span className={m.num}>{pad(step + 1)}</span>
        </span>
        <p className="text-meta">{pad(step + 1)} · {t(stage)}</p>
        <p className="mt-2 max-w-md text-sm text-ink-soft">{t(NOTE[stage])}</p>
        <h2 id="dx-q" ref={heading} tabIndex={-1} className="text-h2 mt-8 max-w-4xl outline-none lg:mt-12">{t(f.q)}</h2>
        <div className={`${m.group} mt-10 border-t border-ink/50 lg:mt-14`} role="group" aria-labelledby="dx-q">
          {f.a.map((label, score) => (
            <button
              key={label}
              type="button"
              aria-pressed={picked === score}
              disabled={picked !== null && picked !== score}
              onClick={() => choose(stage, score)}
              className={`${m.opt} group flex min-h-[4.5rem] w-full items-baseline gap-4 border-b border-ink/50 py-4 text-left text-[clamp(1.75rem,1rem+3.2vw,3.75rem)] leading-[1.05] tracking-[-0.03em] lg:py-6`}
            >
              <span className="w-8 shrink-0 text-[0.6875rem] font-medium tracking-[0.14em] text-ink-soft">{"ABC"[score]}</span>
              <span>{t(label)}</span>
              <span aria-hidden="true" className="ml-auto hidden text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
