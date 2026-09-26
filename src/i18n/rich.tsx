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
  // Tags may nest (e.g. "<p><n>38</n> projects</p>"), so each tag's contents are parsed recursively.
  const parse = (str: string, depth = 0): ReactNode[] => {
    const out: ReactNode[] = [];
    const re = /<(\w)>([\s\S]*?)<\/\1>/g;
    let last = 0;
    let m: RegExpExecArray | null;
    let i = 0;
    while ((m = re.exec(str))) {
      if (m.index > last) out.push(str.slice(last, m.index));
      const render = tags[m[1]!];
      const inner = parse(m[2]!, depth + 1);
      out.push(<Fragment key={`${depth}-${i++}`}>{render ? render(inner) : inner}</Fragment>);
      last = m.index + m[0].length;
    }
    if (last < str.length) out.push(str.slice(last));
    return out;
  };
  return parse(src);
}

export const accent = (c: ReactNode) => <span className="accent">{c}</span>;
