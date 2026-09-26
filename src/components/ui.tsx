import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-meta">{children}</p>;
}

export function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary" | "onDark";
  children: ReactNode;
}) {
  const base =
    "group inline-flex items-center gap-3 border px-6 py-3.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-500 ease-editorial";
  const styles = {
    primary: "border-cta bg-cta text-cta-ink hover:bg-cta-hover hover:border-cta-hover",
    secondary: "border-ink text-ink hover:bg-ink hover:text-paper",
    onDark: "border-paper/50 text-paper hover:bg-paper hover:text-ink",
  } as const;

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
      <span aria-hidden="true" className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">→</span>
    </Link>
  );
}

/** Page top: clears the fixed header, carries the page's single H1. */
export function PageIntro({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-page pb-14 pt-32 lg:pb-20 lg:pt-44 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  dark = false,
  as: As = "section",
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  as?: "section" | "div";
}) {
  return (
    <As data-dark={dark || undefined} className={`py-20 lg:py-32 ${dark ? "bg-coal text-paper" : ""} ${className}`}>
      <div className="container-page">{children}</div>
    </As>
  );
}
