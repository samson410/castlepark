import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { About, WhyParents, Timeline, Stats, Gallery } from "@/components/site/sections/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Castle Park Daycare | Our Story, Team & Values" },
      { name: "description", content: "Meet the licensed educators behind Castle Park Daycare. Learn about our values, safety standards, daily routine and warm, play-based approach." },
      { property: "og:title", content: "About Castle Park Daycare" },
      { property: "og:description", content: "Licensed educators, a safe secure centre and a warm play-based approach to early learning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A second home where children feel safe and seen"
        description="Castle Park Daycare has been caring for local families for over a decade with licensed educators, small groups and a curriculum built around play."
      />
      <About />
      <WhyParents />
      <Timeline />
      <Stats />
      <Gallery />
    </>
  );
}
