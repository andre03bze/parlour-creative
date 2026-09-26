import { stages, stagesFor } from "@/lib/method";
import type { CaseStudy } from "@/content/case-studies";
import type { T } from "@/i18n/t";

/**
 * Method trace — the seven stages set as one quiet line under a project's disciplines.
 * Stages the project evidences read in ink; the rest recede. No boxes, bars or ticks.
 */
export function MethodTrace({ project, t, className = "" }: { project: CaseStudy; t: T; className?: string }) {
  const hit = new Set(stagesFor(project));
  return (
    <p className={`text-[0.625rem] font-medium uppercase leading-relaxed tracking-[0.14em] ${className}`} aria-label={`${t("Method stages evidenced")}: ${[...hit].map((s) => t(s)).join(", ")}`}>
      {stages.map((s, i) => (
        <span key={s}>
          {i > 0 && (
            <span aria-hidden="true" className="text-ink/65">
              {" / "}
            </span>
          )}
          <span className={hit.has(s) ? "text-ink" : "text-ink/65"}>{t(s)}</span>
        </span>
      ))}
    </p>
  );
}
