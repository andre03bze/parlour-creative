import type { Metadata } from "next";
import { Button, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description: "Strategy, brand, creative, digital, performance, experiences and project coordination — run as one system.",
};

const services = [
  {
    label: "Strategy",
    items: ["Commercial strategy", "Positioning", "Audience", "Go-to-market", "Launch strategy"],
  },
  {
    label: "Brand",
    items: ["Identity", "Naming", "Brand systems", "Story", "Campaign platforms"],
  },
  {
    label: "Creative",
    items: ["Photography", "Film", "Drone / FPV", "Art direction", "Founder content"],
  },
  {
    label: "Digital",
    items: ["Websites", "Landing pages", "SEO", "AI-search visibility", "Analytics", "Conversion systems"],
  },
  {
    label: "Performance",
    items: ["Meta", "Google", "YouTube", "Lead generation", "CRM", "Email", "WhatsApp"],
  },
  {
    label: "Experiences",
    items: ["Launches", "Events", "Sales galleries", "Partnerships", "Brand activations"],
  },
  {
    label: "Project coordination",
    items: ["Architects", "Engineers", "Planners", "Permitting", "Building-solution specialists"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-12 pt-16 lg:pt-20">
        <h1 className="text-display max-w-3xl">One marketing system, not a menu of tactics.</h1>
        <p className="prose-column mt-6 text-lg text-ink-soft">
          Parlour runs seven disciplines under one strategy and one
          accountable lead — from the commercial thinking that shapes a
          project to the reporting that ties it back to sales.
        </p>
      </Section>

      <Section className="bg-paper-dim">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.label} className="border-t border-ink pt-5">
              <h2 className="font-display text-xl">{service.label}</h2>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="prose-column mt-14 text-sm text-ink-soft">
          Project coordination runs through vetted partners — Parlour
          coordinates architects, engineers, planners and permitting; it
          does not hold those licences itself.
        </p>
      </Section>

      <Section dark className="text-center">
        <h2 className="text-h2 mx-auto max-w-xl">One senior team owns the result.</h2>
        <div className="mt-8">
          <Button href="/contact">Book a strategy call</Button>
        </div>
      </Section>
    </>
  );
}
