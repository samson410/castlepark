import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact, FAQ } from "@/components/site/sections/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Tour | Castle Park Daycare" },
      { name: "description", content: "Visit Castle Park Daycare, ask a question or book a guided tour. Call us, email us or send a message and we will reply within one business day." },
      { property: "og:title", content: "Contact & Book a Tour | Castle Park Daycare" },
      { property: "og:description", content: "Book a guided tour or send us a message — we reply within one business day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Come see us in person"
        description="Tours run Monday to Friday. Ask us anything — ratios, meals, fees, subsidies or your child's first day."
      />
      <Contact />
      <FAQ />
    </>
  );
}
