"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLang, useT } from "@/i18n/client";
import { LANG_STORAGE_KEY, localePath, stripLang, type Lang } from "@/i18n/config";

/** Compact EN / ES control for the header. Keeps path, filters and hash; remembers an explicit choice. */
export function LanguageSwitcher() {
  const lang = useLang();
  const t = useT();
  const pathname = usePathname();
  const router = useRouter();

  const go = (to: Lang) => (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem(LANG_STORAGE_KEY, to);
    } catch {}
    if (to === lang) return;
    router.push(localePath(to, stripLang(pathname)) + window.location.search + window.location.hash);
  };
  const hrefFor = (to: Lang) => localePath(to, stripLang(pathname));

  return (
    <div className="flex items-center gap-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em]" role="group" aria-label={t("Language")}>
      {(["en", "es"] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
          <a
            href={hrefFor(l)}
            lang={l}
            hrefLang={l}
            aria-current={lang === l ? "true" : undefined}
            aria-label={l === "en" ? "English" : "Español"}
            onClick={go(l)}
            className={`px-0.5 py-2 transition-opacity duration-300 ${lang === l ? "opacity-100 underline underline-offset-[6px]" : "opacity-75 hover:opacity-100"}`}
          >
            {l}
          </a>
        </span>
      ))}
    </div>
  );
}
