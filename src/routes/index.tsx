import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/sections/Hero";
import {
  Trust,
  About,
  Programs,
  WhyParents,
  Testimonials,
  Stats,
} from "@/components/site/sections/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Castle Park Daycare | Licensed Childcare & Early Learning" },
      { name: "description", content: "A safe, nurturing licensed daycare with play-based learning for infants to school age. Small groups, qualified educators and easy online enrolment." },
      { property: "og:title", content: "Castle Park Daycare | Licensed Childcare & Early Learning" },
      { property: "og:description", content: "Play-based learning, small groups and qualified educators. Enroll your child online in minutes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Trust />
      <About />
      <Programs />
      <WhyParents />
      <Stats />
      <Testimonials />
      <section className="border-t border-border bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-display text-2xl font-extrabold text-ink md:text-4xl">
            Ready to join the Castle Park family?
          </h2>
          <p className="mt-3 text-ink-soft">
            Complete the online enrolment form in about three minutes, or book a tour and see the
            centre for yourself.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/enroll"
              className="rounded-2xl bg-accent px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Enroll your child
            </Link>
            <Link
              to="/contact"
              className="rounded-2xl border border-border bg-background px-6 py-4 text-base font-semibold text-ink transition-colors hover:bg-background/70"
            >
              Book a tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
