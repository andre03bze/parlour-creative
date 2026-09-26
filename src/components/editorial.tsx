import Image from "next/image";
import Link from "@/i18n/client";
import type { ReactNode } from "react";
import { Button } from "@/components/ui";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { siteToSales } from "@/lib/site";
import type { CaseStudy } from "@/content/case-studies";
import type { T } from "@/i18n/t";

/**
 * Page head. With `image` it opens on a full-bleed banner (Gladstone's About / project pattern);
 * without, it is a large typographic opening. Exactly one H1.
 */
export function PageHead({
  eyebrow,
  title,
  lead,
  image,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: { src: string; alt: string; position?: string };
  children?: ReactNode;
}) {
  return (
    <>
      {image && (
        <div data-hero className="relative h-[46svh] min-h-[20rem] w-full overflow-hidden bg-coal lg:h-[56svh]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="crop-scroll object-cover"
            style={{ objectPosition: image.position ?? "center" }}
          />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />
        </div>
      )}
      <div className={`container-page pb-14 lg:pb-24 ${image ? "pt-12 lg:pt-20" : "pt-32 lg:pt-48"}`}>
        {eyebrow && <p className="text-meta mb-6">{eyebrow}</p>}
        <h1 className="text-display max-w-[16ch] lg:max-w-[18ch]">{title}</h1>
        {lead && (
          <Reveal delayMs={300}>
            <p className="text-lead prose-column mt-8 text-ink-soft lg:mt-12">{lead}</p>
          </Reveal>
        )}
        {children}
      </div>
    </>
  );
}

/** Hairline two-column block: label left, content right (Gladstone About sections). */
export function Block({
  id,
  label,
  children,
  dim = false,
}: {
  id?: string;
  label: ReactNode;
  children: ReactNode;
  dim?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-ink/60 ${dim ? "bg-paper-dim" : ""}`}>
      <div className="container-page grid gap-6 py-14 lg:grid-cols-[1fr_2fr] lg:gap-12 lg:py-24">
        <h2 className="text-h3">{label}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

/** Hairline list rows. */
export function RowList({ items, cols = 1 }: { items: ReactNode[]; cols?: 1 | 2 }) {
  return (
    <ul className={`grid gap-x-10 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item, i) => (
        <li key={i} className="border-t border-ink/25 py-3 text-lg leading-snug first:border-t-ink/60 sm:[&:nth-child(2)]:border-t-ink/60">
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Giant-title link rows — the homepage index pattern, for sectors etc. */
export function IndexRows({ items }: { items: { label: string; href: string; line?: string }[] }) {
  return (
    <ul className="border-t border-ink/70">
      {items.map((s) => (
        <li key={s.href} className="border-b border-ink/70">
          <Link href={s.href} className="group flex items-end justify-between gap-6 py-4 lg:py-5">
            <span className="text-index transition-transform duration-500 ease-editorial group-hover:translate-x-3">{s.label}</span>
            {s.line && (
              <span className="hidden pb-3 text-right text-[0.6875rem] font-medium uppercase tracking-[0.14em] sm:block">{s.line}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Proof: cover images of relevant published projects. Empty state handled by caller. */
export function ProofGrid({ projects }: { projects: CaseStudy[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
      {projects.map((p) => (
        <li key={p.slug}>
          <Link href={`/work/${p.slug}`} data-cursor="view" className="group block">
            <Reveal media>
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-dim">
                <ProjectVisual
                  project={p}
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 100vw"
                  className="transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
            <p className="text-h3 mt-4">{p.client}</p>
            <p className="mt-1 text-sm text-ink-soft">{p.tagline}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Site → Strategy → Brand → Story → Experience → Distribution → Sales. */
export function SiteToSalesPath({ t }: { t: T }) {
  return (
    <ol className="grid grid-cols-2 border-t border-ink/70 sm:grid-cols-4 lg:grid-cols-7">
      {siteToSales.map((step, i) => (
        <li
          key={step}
          className="group border-b border-ink/25 py-6 pr-4 lg:border-b-0 lg:border-r lg:border-ink/25 lg:pl-5 lg:first:pl-0 lg:last:border-r-0"
        >
          <span className="text-meta">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-h3 mt-6 block transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">{t(step)}</span>
        </li>
      ))}
    </ol>
  );
}

/** Closing dark band with one or two CTAs. */
export function CtaBand({
  title,
  primary,
  secondary,
}: {
  title: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section data-dark className="bg-coal py-24 text-paper lg:py-40">
      <div className="container-page">
        <Reveal>
          <p className="text-h2 max-w-4xl">{title}</p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={primary.href} variant="onDark">{primary.label}</Button>
          {secondary && <Button href={secondary.href} variant="onDark">{secondary.label}</Button>}
        </div>
      </div>
    </section>
  );
}
