import { Fragment, type ReactNode } from "react";
import type { T } from "./t";

/**
 * Translate a string that contains inline markup, e.g. t("Start a <a>conversation.</a>").
 * Tags are single letters; `tags` maps each to a renderer. Keeps word order free for the translator.
 */
export function rich(
  t: T,
  text: string,
  tags: Record<string, (children: ReactNode) => ReactNode>,
  vars?: Record<string, string | number>
): ReactNode {
  const src = t(text, vars);
  const out: ReactNode[] = [];
  const re = /<(\w)>([\s\S]*?)<\/\1>/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(src))) {
    if (m.index > last) out.push(src.slice(last, m.index));
    const render = tags[m[1]!];
    out.push(<Fragment key={i++}>{render ? render(m[2]) : m[2]}</Fragment>);
    last = m.index + m[0].length;
  }
  if (last < src.length) out.push(src.slice(last));
  return out;
}

export const accent = (c: ReactNode) => <span className="accent">{c}</span>;
