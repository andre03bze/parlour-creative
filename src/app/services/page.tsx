import type { Metadata } from "next";
import { Block, CtaBand, PageHead, RowList } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, brand, creative, digital, performance, experiences and project coordination: seven disciplines run as one marketing system by Parlour Creative.",
  alternates: { canonical: "/services" },
};

const services = [
  { label: "Strategy", items: ["Commercial strategy", "Positioning", "Audience", "Go-to-market", "Launch strategy"] },
  { label: "Brand", items: ["Identity", "Naming", "Brand systems", "Story", "Campaign platforms"] },
  { label: "Creative", items: ["Photography", "Film", "Drone / FPV", "Art direction", "Founder content"] },
  { label: "Digital", items: ["Websites", "Landing pages", "SEO", "AI-search visibility", "Analytics", "Conversion systems"] },
  { label: "Performance", items: ["Meta", "Google", "YouTube", "Lead generation", "CRM", "Email", "WhatsApp"] },
  { label: "Experiences", items: ["Launches", "Events", "Sales galleries", "Partnerships", "Brand activations"] },
  { label: "Project coordination", items: ["Architects", "Engineers", "Planners", "Permitting", "Building-solution specialists"] },
];

export default function ServicesPage() {
  return (
    <>
      <PageHead
        eyebrow="Services"
        title={
          <>
            One marketing <span className="accent">system,</span> not a menu of tactics.
          </>
        }
        lead="Parlour runs seven disciplines under one strategy and one accountable lead, from the commercial thinking that shapes a project to the reporting that ties it back to sales."
      />

      {services.map((service, i) => (
        <Block key={service.label} label={<><span className="text-meta mb-3 block">{String(i + 1).padStart(2, "0")}</span>{service.label}</>}>
          <RowList items={service.items} cols={2} />
        </Block>
      ))}

      <Block label="A note on coordination" dim>
        <p className="prose-column text-ink-soft">
          Project coordination runs through vetted partners. Parlour coordinates architects, engineers, planners and
          permitting; it does not hold those licences itself.
        </p>
      </Block>

      <CtaBand
        title="One senior team owns the result."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Growth Diagnostic", href: "/growth-diagnostic" }}
      />
    </>
  );
}
