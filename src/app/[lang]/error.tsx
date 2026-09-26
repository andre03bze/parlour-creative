"use client";

import { PageHead } from "@/components/editorial";
import { Button } from "@/components/ui";
import { useT } from "@/i18n/client";

/** Route-level error boundary: quiet, on-brand, with a retry and a way home. */
export default function RouteError({ reset }: { error: Error; reset: () => void }) {
  const t = useT();
  return (
    <PageHead title={t("Something went wrong")} lead={t("An unexpected error occurred. You can try again, or return to the homepage.")}>
      <div className="mt-10 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center border border-cta bg-cta px-6 py-3.5 text-xs font-medium uppercase tracking-[0.14em] text-cta-ink transition-colors duration-500 hover:bg-cta-hover"
        >
          {t("Try again")}
        </button>
        <Button href="/" variant="secondary">{t("Back to home")}</Button>
      </div>
    </PageHead>
  );
}
