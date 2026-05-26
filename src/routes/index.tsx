import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/sections/Hero";
import {
  Trust,
  About,
  Programs,
  Curriculum,
  WhyParents,
  Gallery,
  Timeline,
  Testimonials,
  Stats,
  FAQ,
  Enroll,
  Contact,
  Footer,
} from "@/components/site/sections/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Programs />
        <Curriculum />
        <WhyParents />
        <Gallery />
        <Timeline />
        <Testimonials />
        <Stats />
        <Enroll />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
