import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <Section className="pt-32 lg:pt-48">
      <div className="prose-column">
        <h1 className="text-display !text-[clamp(2.5rem,1.5rem+4vw,5rem)]">Terms</h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated {new Date().toISOString().slice(0, 10)}</p>

        <h2 className="text-h3 mt-10">Engagements</h2>
        <p className="mt-4 text-ink-soft">
          Retainer engagements run on a six-month minimum, billed monthly in
          advance. Project engagements are billed 50% deposit, with the
          balance due on agreed milestones. Specific scope, deliverables and
          pricing for any engagement are set out in a signed proposal or
          agreement, which governs over this page.
        </p>

        <h2 className="text-h3 mt-10">Third-party costs</h2>
        <p className="mt-4 text-ink-soft">
          Ad spend, printing, venues and other third-party costs are paid by
          the client directly or in advance. Where Parlour purchases them on
          the client&rsquo;s behalf, a 15% administration fee applies.
        </p>

        <h2 className="text-h3 mt-10">Revisions</h2>
        <p className="mt-4 text-ink-soft">
          Two rounds of revisions are included per deliverable; additional
          rounds are billed.
        </p>

        <h2 className="text-h3 mt-10">No guarantees</h2>
        <p className="mt-4 text-ink-soft">
          Parlour does not control a client&rsquo;s pricing, inventory or
          sales team, and cannot guarantee sales, bookings or enquiry
          volumes. Performance bonuses can be agreed on top of a base fee,
          but never in place of it.
        </p>

        <h2 className="text-h3 mt-10">Contact</h2>
        <p className="mt-4 text-ink-soft">
          Questions about these terms: {" "}
          <a href={`mailto:${contact.email}`} className="text-ink hover:underline">
            {contact.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
