import { Block, PageHead } from "@/components/editorial";
import { Button } from "@/components/ui";
import Link from "@/i18n/client";
import { insights } from "@/content/insights";
import { pageLang, pageMeta, type LangParams } from "@/i18n/page";
import { accent, rich } from "@/i18n/rich";

// No articles published yet — keep this route out of the sitemap and out
// of search results until it holds real content (see CONTENT-GAPS.md).
export const generateMetadata = ({ params }: LangParams) =>
  pageMeta(params, "/insights", "Insights", "Ideas on real estate and hospitality marketing from Parlour Creative.", {
    robots: { index: insights.length > 0, follow: true },
  });

export default async function InsightsPage({ params }: LangParams) {
  const { lang, t } = await pageLang(params);
  return (
    <>
      <PageHead eyebrow={t("Insights")} title={rich(t, "Thinking, <a>applied.</a>", { a: accent })} />
      {insights.length === 0 ? (
        <Block label={t("Coming soon")}>
          <p className="prose-column text-lg text-ink-soft">
            {t("The first pieces are in progress: Belize real estate marketing, direct-booking strategy, and the site-to-sales approach. In the meantime, see how the thinking applies to real projects.")}
          </p>
          <div className="mt-8">
            <Button href="/work" variant="secondary">{t("View the work")}</Button>
          </div>
        </Block>
      ) : (
        <div className="container-page border-t border-ink/70 pb-28">
          <ul>
            {insights.map((i) => {
              const c = lang === "es" && i.es ? i.es : i;
              return (
                <li key={i.slug} className="border-b border-ink/70">
                  <Link href={`/insights/${i.slug}`} className="group grid gap-2 py-6 lg:grid-cols-[10rem_1fr] lg:py-8">
                    <span className="text-meta pt-3">{i.publishedAt}</span>
                    <span>
                      <span className="text-h2 block transition-transform duration-500 ease-editorial group-hover:translate-x-2">{c.title}</span>
                      <span className="prose-column mt-3 block text-ink-soft">{c.description}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
