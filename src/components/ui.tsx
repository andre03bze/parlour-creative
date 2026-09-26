import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-meta text-forest">{children}</p>;
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
    "inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 ease-standard";
  const styles = {
    primary: "bg-forest text-paper hover:bg-forest-deep",
    secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
    onDark: "border border-paper/40 text-paper hover:bg-paper hover:text-ink",
  } as const;

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
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
    <As
      className={`py-20 lg:py-32 ${dark ? "bg-forest-deep text-paper" : ""} ${className}`}
    >
      <div className="container-page">{children}</div>
    </As>
  );
}
