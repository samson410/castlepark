import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Star, Heart, Sun, Cloud } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden gradient-sky pt-24 pb-16 md:pt-32 md:pb-24">
      {/* floating decorations */}
      <FloatingShapes />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-ink backdrop-blur-md ring-1 ring-white/60"
          >
            <Sparkles className="h-3.5 w-3.5 text-coral" />
            Licensed • Trusted by 200+ families
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-balance font-display text-[36px] font-extrabold leading-[1.05] text-ink sm:text-5xl md:text-6xl lg:text-[68px]"
          >
            Where little minds{" "}
            <span className="relative inline-block">
              <span className="relative z-10">grow, explore</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="absolute inset-x-0 bottom-1 -z-0 h-3 origin-left rounded-full bg-secondary/80 md:h-4"
              />
            </span>{" "}
            & shine.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-soft sm:text-lg lg:mx-0"
          >
            Safe, nurturing and inspiring childcare designed to help every child
            learn, play and thrive — from first steps to kindergarten ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-base font-semibold text-white shadow-pop transition-all hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(255,138,101,0.65)] active:translate-y-0"
            >
              <Calendar className="h-5 w-5" />
              Book a Tour
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/80 px-6 py-4 text-base font-semibold text-ink backdrop-blur-md ring-1 ring-white/70 transition-all hover:bg-white"
            >
              Explore Programs
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
          >
            <div className="flex -space-x-3">
              {["#FFD93D", "#FF8A65", "#6EE7B7", "#5BC0FF"].map((c, i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-white"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="text-left text-sm">
              <div className="flex items-center gap-0.5 text-secondary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-ink-soft">Loved by 200+ local families</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[5/6] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white p-2 shadow-[0_30px_80px_-20px_rgba(91,192,255,0.55)] sm:max-w-lg lg:max-w-none">
            <img
              src={heroImage}
              alt="Happy children learning and playing at Castle Park Daycare"
              className="h-full w-full rounded-[2rem] object-cover"
              width={1024}
              height={1280}
            />
          </div>

          {/* floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-10 hidden rounded-2xl bg-white p-3 shadow-soft sm:flex sm:items-center sm:gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint/40">
              <Heart className="h-5 w-5 text-coral" fill="currentColor" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">Caring teachers</p>
              <p className="text-xs text-ink-soft">Small class ratios</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-3 bottom-12 hidden rounded-2xl bg-white p-3 shadow-soft sm:flex sm:items-center sm:gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/40">
              <Star className="h-5 w-5 text-secondary" fill="currentColor" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">Licensed & safe</p>
              <p className="text-xs text-ink-soft">Province approved</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] top-24 text-white/70"
      >
        <Cloud className="h-16 w-16 fill-white/80" strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-32 text-secondary"
      >
        <Sun className="h-14 w-14" />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-[14%] text-coral hidden md:block"
      >
        <Star className="h-10 w-10 fill-current" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[18%] bottom-16 hidden md:block"
      >
        <span className="block h-12 w-12 rounded-full bg-mint/70 blob-mask" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[40%] top-10 hidden lg:block"
      >
        <span className="block h-8 w-8 rounded-full bg-secondary/70" />
      </motion.div>
    </div>
  );
}
