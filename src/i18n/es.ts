import { esUi } from "./es/ui";
import { esPages } from "./es/pages";
import { esMeta } from "./es/meta";
import { esContent } from "./es/content";

/** Client-side subset: only strings rendered by client components. English pages ship none of it. */
export const esClient: Record<string, string> = esUi;
/** Full server-side dictionary. English source text is the key. */
export const es: Record<string, string> = { ...esContent, ...esMeta, ...esPages, ...esUi };
