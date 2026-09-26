import type { Metadata } from "next";
import { Block, CtaBand, PageHead, ProofGrid, RowList } from "@/components/editorial";
import { Button } from "@/components/ui";
import { getCaseStudiesByCategory } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Hotel & Resort Marketing",
  description:
    "Story, content and paid media that grow direct bookings for resorts, hotels and hospitality brands in Belize and the Americas.",
  alternates: { canonical: "/hospitality" },
};

export default function HospitalityPage() {
  const projects = getCaseStudiesByCategory("hospitality");

  return (
    <>
      <PageHead
        eyebrow="Hospitality"
        title={
          <>
            Stories <span className="accent">guests book.</span>
          </>
        }
        lead="Most properties lean on booking sites and hope. Parlour builds the story that makes guests choose you, then the content, paid media and direct-booking journeys that bring them straight to you."
      />

      <Block label="What we do">
        <RowList
          cols={2}
          items={[
            "Brand positioning and story",
            "Photo, film and drone",
            "Social and influencer programs",
            "Paid media for direct bookings",
            "Booking-site and website journeys",
            "Email and WhatsApp marketing",
            "Campaigns for restaurants, tours, spa and events",
            "Monthly revenue reporting",
          ]}
        />
      </Block>

      <Block label="Proof">
        {projects.length > 0 ? (
          <ProofGrid projects={projects} />
        ) : (
          <>
            <p className="prose-column text-ink-soft">
              The first hospitality engagement is underway. Its case study will publish here once there are results to
              show. In the meantime, see how the same system runs for real estate clients like Blue Ocean Belize.
            </p>
            <div className="mt-8">
              <Button href="/work" variant="secondary">View the work</Button>
            </div>
          </>
        )}
      </Block>

      <CtaBand
        title={<>Find out where your bookings are <span className="accent">leaking.</span></>}
        primary={{ label: "Find the leak", href: "/growth-diagnostic" }}
        secondary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}
