"use client";

import { PageHead } from "@/components/editorial";
import { Button } from "@/components/ui";
import { useT } from "@/i18n/client";
import { accent, rich } from "@/i18n/rich";

export function NotFoundBody() {
  const t = useT();
  return (
    <PageHead
      eyebrow="404"
      title={rich(t, "This page <a>doesn’t exist.</a>", { a: accent })}
      lead={t("The page you're looking for may have moved. Try the work, or get in touch.")}
    >
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/">{t("Back to home")}</Button>
        <Button href="/work" variant="secondary">{t("View the work")}</Button>
      </div>
    </PageHead>
  );
}
