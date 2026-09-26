import { notFound } from "next/navigation";

/** Unknown paths render the localised not-found page inside the language layout. */
export default function CatchAll() {
  notFound();
}
