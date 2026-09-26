import { Button, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="pt-24 text-center lg:pt-32">
      <p className="text-meta">404</p>
      <h1 className="text-h2 mt-4">This page doesn&rsquo;t exist.</h1>
      <p className="prose-column mx-auto mt-4 text-ink-soft">
        The page you&rsquo;re looking for may have moved. Try the work, or
        get in touch.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/work">See the work</Button>
        <Button href="/contact" variant="secondary">Contact</Button>
      </div>
    </Section>
  );
}
