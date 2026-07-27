import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Programs, Curriculum, Timeline } from "@/components/site/sections/Sections";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Curriculum | Castle Park Daycare" },
      { name: "description", content: "Infant, toddler, preschool, kindergarten-readiness and before/after school programs with a play-based curriculum and low child-to-educator ratios." },
      { property: "og:title", content: "Programs & Curriculum | Castle Park Daycare" },
      { property: "og:description", content: "Age-appropriate programs from infants to school age, built on play-based learning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="The right program for every age and stage"
        description="Small groups, qualified educators and a daily rhythm that balances play, learning, rest and outdoor time."
      />
      <Programs />
      <Curriculum />
      <Timeline />
      <section className="bg-muted py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-display text-2xl font-extrabold text-ink md:text-4xl">
            Found the right fit?
          </h2>
          <p className="mt-3 text-ink-soft">
            Spaces are limited each term. Submit an enrolment request and we will call you within one business day.
          </p>
          <Link
            to="/enroll"
            className="mt-6 inline-flex rounded-2xl bg-accent px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Start enrolment
          </Link>
        </div>
      </section>
    </>
  );
}
