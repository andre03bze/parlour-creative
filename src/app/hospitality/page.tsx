import type { Metadata } from "next";
import { Button, Section } from "@/components/ui";
import { getCaseStudiesByBucket } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Hotel & Resort Marketing",
  description: "Story, content and paid media that grow direct bookings for resorts and hotels.",
};

export default function HospitalityPage() {
  const projects = getCaseStudiesByBucket("hospitality");

  return (
    <>
      <Section className="pb-12 pt-16 lg:pt-20">
        <h1 className="text-display max-w-3xl">Stories guests book.</h1>
        <p className="prose-column mt-6 text-lg text-ink-soft">
          Most properties lean on booking sites and hope. Parlour builds the
          story that makes guests choose you, then the content, paid media
          and direct-booking journeys that bring them straight to you.
        </p>
      </Section>

      <Section className="bg-paper-dim">
        <h2 className="text-h3">What we do</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-3 text-ink-soft sm:grid-cols-2">
          {[
            "Brand positioning and story",
            "Photo, film and drone",
            "Social and influencer programs",
            "Paid media for direct bookings",
            "Booking-site and website journeys",
            "Email and WhatsApp marketing",
            "Campaigns for restaurants, tours, spa and events",
            "Monthly revenue reporting",
          ].map((item) => (
            <li key={item} className="border-t border-line pt-2">{item}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-h2 max-w-xl">Proof.</h2>
        {projects.length > 0 ? (
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a key={p.slug} href={`/work/${p.slug}`} className="group block border-t border-ink pt-4">
                <p className="font-display text-lg group-hover:text-forest">{p.client}</p>
                <p className="mt-1 text-sm text-ink-soft">{p.location}</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="prose-column mt-6 text-ink-soft">
            The first hospitality engagement is underway — its case study
            will publish here once there are results to show. In the
            meantime, see how the same system runs for real estate clients
            like Blue Ocean Belize.
          </p>
        )}
        <div className="mt-8">
          <Button href="/work" variant="secondary">
            See the work
          </Button>
        </div>
      </Section>

      <Section dark className="text-center">
        <h2 className="text-h2 mx-auto max-w-xl">Find out where your bookings are leaking.</h2>
        <div className="mt-8">
          <Button href="/growth-diagnostic">Find the leak</Button>
        </div>
      </Section>
    </>
  );
}
