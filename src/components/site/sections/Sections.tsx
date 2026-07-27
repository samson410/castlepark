import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Users,
  Clock4,
  Baby,
  Blocks,
  BookOpen,
  GraduationCap,
  School,
  Palette,
  Music,
  Calculator,
  Beaker,
  TreePine,
  Smile,
  Lightbulb,
  Check,
  Sun,
  Apple,
  Sparkles,
  Drum,
  Bus,
  Phone,
  Mail,
  MapPin,
  Send,
  Quote,
  ChevronDown,
  Star,
  Calendar,
} from "lucide-react";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import aboutImage from "@/assets/about-classroom.jpg";
import gClassroom from "@/assets/gallery-classroom.jpg";
import gPlayground from "@/assets/gallery-playground.jpg";
import gArt from "@/assets/gallery-art.jpg";
import gReading from "@/assets/gallery-reading.jpg";
import gBlocks from "@/assets/gallery-blocks.jpg";
import gMusic from "@/assets/gallery-music.jpg";

/* -------------------------- Trust ribbon -------------------------- */
export function Trust() {
  const items = [
    { icon: ShieldCheck, label: "Licensed Facility" },
    { icon: Award, label: "Qualified Educators" },
    { icon: HeartHandshake, label: "Safe Environment" },
    { icon: Users, label: "Small Class Sizes" },
    { icon: Clock4, label: "10+ Years Experience" },
  ];
  return (
    <section className="bg-background py-10 md:py-14">
      <Stagger className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:px-8 lg:grid-cols-5">
        {items.map((it) => (
          <motion.div
            key={it.label}
            variants={itemVariants}
            className="group flex flex-col items-center gap-2 rounded-3xl bg-muted/60 p-5 text-center transition-colors hover:bg-muted"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-soft transition-transform group-hover:-translate-y-1 group-hover:rotate-6">
              <it.icon className="h-6 w-6 text-primary" strokeWidth={2.25} />
            </span>
            <p className="text-sm font-semibold text-ink">{it.label}</p>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}

/* -------------------------- About -------------------------- */
export function About() {
  const pillars = [
    { icon: ShieldCheck, title: "Safety first", text: "Secure entry, trained staff, daily checks." },
    { icon: BookOpen, title: "Joyful learning", text: "Play-based curriculum that sparks curiosity." },
    { icon: Palette, title: "Creativity", text: "Art, music and imaginative free play every day." },
    { icon: Smile, title: "Emotional growth", text: "Kindness, confidence and friendship skills." },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-mint/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-3xl bg-secondary/60" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-coral/40" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
            <img src={aboutImage} alt="Teacher reading to children" className="h-full w-full object-cover" loading="lazy" width={1024} height={1024} />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold text-ink">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> About Castle Park
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
              A second home built for{" "}
              <span className="text-accent">curious little hearts</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              Our mission is simple: nurture every child with warmth, structure and
              a sense of wonder. With small classes, beautiful spaces and a
              play-based curriculum, we help children build confidence,
              friendships and a lifelong love of learning.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={itemVariants}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-ink">{p.title}</p>
                  <p className="text-sm text-ink-soft">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Programs -------------------------- */
const programs = [
  { icon: Baby, title: "Infants", age: "6 – 18 months", color: "bg-coral/20 text-coral", desc: "Gentle care, sensory play and warm cuddles in a calm nurturing room.", benefits: ["Personal caregiver", "Sleep-friendly room", "Daily updates"] },
  { icon: Blocks, title: "Toddlers", age: "18 – 30 months", color: "bg-secondary/40 text-ink", desc: "Active discovery, language games and the very first taste of friendship.", benefits: ["Sensory stations", "Music & movement", "Potty training support"] },
  { icon: School, title: "Preschool", age: "3 – 4 years", color: "bg-primary/20 text-primary", desc: "Themed projects, early literacy and confident independence.", benefits: ["Phonics circle", "STEAM projects", "Social skills"] },
  { icon: GraduationCap, title: "Kindergarten Ready", age: "4 – 5 years", color: "bg-mint/40 text-emerald-700", desc: "Structured learning that gets your child excited for school day one.", benefits: ["Writing & math", "Reading groups", "School routines"] },
  { icon: Bus, title: "After School Care", age: "5 – 12 years", color: "bg-accent/20 text-accent", desc: "Homework help, healthy snacks and lots of free play after school.", benefits: ["Pickup service", "Homework time", "Outdoor games"] },
];

export function Programs() {
  return (
    <section id="programs" className="bg-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-sm">
            <School className="h-3.5 w-3.5 text-primary" /> Programs
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
            A program for every stage of growing up.
          </h2>
          <p className="mt-4 text-ink-soft md:text-lg">
            From first steps to school-ready superheroes — thoughtfully designed
            classrooms for every age group.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <motion.article
              key={p.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl bg-card p-6 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.15)] ring-1 ring-border/60 transition-shadow hover:shadow-[0_25px_60px_-20px_rgba(91,192,255,0.45)]"
            >
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${p.color} transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                <p.icon className="h-7 w-7" strokeWidth={2.25} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink-soft">{p.age}</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold text-ink">{p.title}</h3>
              <p className="mt-2 text-ink-soft">{p.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-ink">
                    <Check className="h-4 w-4 text-emerald-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link to="/enroll" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-ink">
                Enroll now →
              </Link>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* -------------------------- Curriculum -------------------------- */
const curriculum = [
  { icon: BookOpen, label: "Literacy", color: "from-coral to-secondary" },
  { icon: Calculator, label: "Mathematics", color: "from-primary to-mint" },
  { icon: Palette, label: "Arts & Crafts", color: "from-secondary to-coral" },
  { icon: Music, label: "Music", color: "from-mint to-primary" },
  { icon: Beaker, label: "STEM Learning", color: "from-primary to-secondary" },
  { icon: TreePine, label: "Outdoor Play", color: "from-mint to-secondary" },
  { icon: HeartHandshake, label: "Social Skills", color: "from-coral to-primary" },
  { icon: Lightbulb, label: "Creative Thinking", color: "from-secondary to-mint" },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint/30 px-4 py-1.5 text-xs font-semibold text-ink">
            <Lightbulb className="h-3.5 w-3.5" /> Curriculum
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
            Learning that feels like play.
          </h2>
          <p className="mt-4 text-ink-soft md:text-lg">
            A balanced blend of academics, creativity and movement — guided by
            educators who know how little minds grow.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {curriculum.map((c) => (
            <motion.div
              key={c.label}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-card p-6 text-center shadow-soft ring-1 ring-border/60"
            >
              <span className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl ${c.color} text-white shadow-pop transition-transform group-hover:rotate-12`}>
                <c.icon className="h-7 w-7" />
              </span>
              <p className="mt-4 font-display text-base font-bold text-ink sm:text-lg">{c.label}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* -------------------------- Why parents -------------------------- */
export function WhyParents() {
  const reasons = [
    { icon: ShieldCheck, title: "Safe & secure facility", text: "Keypad entry, CCTV and trained first-aid staff on every shift." },
    { icon: Award, title: "Experienced teachers", text: "ECE certified, background checked, deeply loved by our kids." },
    { icon: Apple, title: "Healthy environment", text: "Nut-free meals, daily fresh air and squeaky-clean spaces." },
    { icon: Smile, title: "Learning through play", text: "Curriculum that grows curiosity, not just check-boxes." },
    { icon: Users, title: "Individual attention", text: "Low ratios so every child is truly seen and heard." },
    { icon: Phone, title: "Daily communication", text: "Photos, notes and updates so you never miss a moment." },
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-sm">
            <HeartHandshake className="h-3.5 w-3.5 text-accent" /> Why parents choose us
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
            Six big reasons families stay with us.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={itemVariants}
              className="flex gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-border/40"
            >
              <motion.span
                whileHover={{ scale: 1.15, rotate: -8 }}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint/40 text-emerald-700"
              >
                <Check className="h-6 w-6" strokeWidth={3} />
              </motion.span>
              <div>
                <div className="flex items-center gap-2">
                  <r.icon className="h-5 w-5 text-primary" />
                  <p className="font-display font-bold text-ink">{r.title}</p>
                </div>
                <p className="mt-1 text-sm text-ink-soft">{r.text}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* -------------------------- Gallery -------------------------- */
const gallery = [
  { src: gClassroom, alt: "Bright sunny classroom", h: "row-span-2" },
  { src: gPlayground, alt: "Children on playground", h: "" },
  { src: gArt, alt: "Painting and art", h: "row-span-2" },
  { src: gReading, alt: "Reading corner", h: "" },
  { src: gBlocks, alt: "Block play", h: "" },
  { src: gMusic, alt: "Music time", h: "row-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-4 py-1.5 text-xs font-semibold text-ink">
            <Palette className="h-3.5 w-3.5" /> Gallery
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
            A peek inside our happy place.
          </h2>
        </Reveal>

        {/* mobile: swipe carousel */}
        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {gallery.map((g) => (
            <button
              key={g.alt}
              onClick={() => setOpen(g.src)}
              className="relative aspect-[4/5] w-[78%] shrink-0 snap-center overflow-hidden rounded-3xl shadow-soft"
            >
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>

        {/* desktop: masonry */}
        <Stagger className="mt-12 hidden auto-rows-[180px] grid-cols-3 gap-4 md:grid lg:grid-cols-4 lg:auto-rows-[200px]">
          {gallery.map((g) => (
            <motion.button
              key={g.alt}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setOpen(g.src)}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${g.h}`}
            >
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <span className="absolute inset-0 bg-ink/30 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4 backdrop-blur-md"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={open}
              alt=""
              className="max-h-[85vh] max-w-5xl rounded-3xl shadow-pop"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* -------------------------- Daily Timeline -------------------------- */
const timeline = [
  { time: "8:00", title: "Welcome & morning circle", icon: Sun, color: "bg-secondary text-ink" },
  { time: "9:30", title: "Learning activities", icon: BookOpen, color: "bg-primary text-white" },
  { time: "10:30", title: "Healthy snack time", icon: Apple, color: "bg-mint text-emerald-900" },
  { time: "11:00", title: "Outdoor play", icon: TreePine, color: "bg-emerald-400 text-white" },
  { time: "1:30", title: "Creative activities", icon: Palette, color: "bg-coral text-white" },
  { time: "3:00", title: "Story & music time", icon: Drum, color: "bg-secondary text-ink" },
  { time: "5:00", title: "Pickup & wind down", icon: HeartHandshake, color: "bg-primary text-white" },
];

export function Timeline() {
  return (
    <section className="bg-soft py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-sm">
            <Clock4 className="h-3.5 w-3.5 text-primary" /> A day at Castle Park
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
            A rhythm that feels just right.
          </h2>
        </Reveal>

        <Stagger className="relative mt-12">
          <span className="absolute left-6 top-2 bottom-2 w-0.5 rounded-full bg-border md:left-1/2" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.time}
              variants={itemVariants}
              className={`relative mb-6 flex items-start gap-4 md:mb-8 md:w-1/2 md:gap-6 ${i % 2 ? "md:ml-auto md:flex-row" : "md:flex-row-reverse md:text-right"}`}
            >
              <span className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${t.color} shadow-soft`}>
                <t.icon className="h-6 w-6" />
              </span>
              <div className="rounded-2xl bg-card p-4 shadow-soft ring-1 ring-border/50 md:p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{t.time}</p>
                <p className="mt-1 font-display text-lg font-bold text-ink">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* -------------------------- Testimonials -------------------------- */
const reviews = [
  { name: "Sarah & Daniel M.", role: "Parents of Mia, 3", text: "Castle Park feels like family. Mia runs in every morning and tells us stories every night. The teachers are pure gold.", color: "bg-secondary/30" },
  { name: "Priya K.", role: "Mom of twins, 2", text: "I was nervous to leave my twins. The team made the transition so smooth — daily photos and updates put my heart at ease.", color: "bg-mint/30" },
  { name: "Jonathan R.", role: "Dad of Leo, 4", text: "Leo started reading sight words at 4. The curriculum is playful but seriously effective. Highly recommend.", color: "bg-coral/20" },
  { name: "Aisha & Omar S.", role: "Parents of Zayn, 1", text: "The infant room is beautiful, calm and so loving. We feel deeply lucky to have found this place.", color: "bg-primary/20" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral/15 px-4 py-1.5 text-xs font-semibold text-accent">
            <Quote className="h-3.5 w-3.5" /> Loved by parents
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
            Real stories from real families.
          </h2>
        </Reveal>

        {/* mobile carousel */}
        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reviews.map((r) => (
            <ReviewCard key={r.name} r={r} className="w-[85%] shrink-0 snap-center" />
          ))}
        </div>

        {/* desktop featured carousel */}
        <div className="mt-12 hidden md:block">
          <div className="relative mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ReviewCard r={reviews[i]} large />
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-2.5 rounded-full transition-all ${idx === i ? "w-8 bg-accent" : "w-2.5 bg-border"}`}
                  aria-label={`Show review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ r, className = "", large = false }: { r: typeof reviews[number]; className?: string; large?: boolean }) {
  return (
    <div className={`rounded-3xl bg-card p-6 shadow-soft ring-1 ring-border/40 md:p-8 ${className}`}>
      <div className="flex items-center gap-1 text-secondary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className={`mt-4 font-display font-semibold text-ink ${large ? "text-2xl leading-snug md:text-3xl" : "text-lg leading-snug"}`}>
        “{r.text}”
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className={`grid h-12 w-12 place-items-center rounded-full ${r.color} font-display text-base font-extrabold text-ink`}>
          {r.name.split(" ")[0][0]}
        </span>
        <div>
          <p className="font-semibold text-ink">{r.name}</p>
          <p className="text-sm text-ink-soft">{r.role}</p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------- Stats -------------------------- */
export function Stats() {
  const stats = [
    { n: 200, label: "Happy families" },
    { n: 15, label: "Qualified educators" },
    { n: 10, label: "Years of experience" },
    { n: 5000, label: "Learning activities" },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="rounded-[2.5rem] gradient-primary p-8 text-white shadow-soft md:p-12">
          <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <motion.div key={s.label} variants={itemVariants} className="text-center">
                <p className="font-display text-4xl font-extrabold leading-none md:text-5xl">
                  <Counter to={s.n} />
                </p>
                <p className="mt-2 text-sm font-medium text-white/85 md:text-base">{s.label}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- FAQ -------------------------- */
const faqs = [
  { q: "How do I enroll my child?", a: "Start by booking a tour. After your visit, we'll send a simple online registration packet and set a start date that works for your family." },
  { q: "What are your hours and tuition?", a: "We're open Monday to Friday, 7:30am – 6:00pm. Tuition varies by age group and schedule — full pricing is shared after your tour." },
  { q: "Are meals and snacks provided?", a: "Yes. We serve nutritious, allergy-aware morning snack, lunch and afternoon snack prepared fresh on-site." },
  { q: "How do you keep children safe?", a: "Secure keypad entry, CCTV in common areas, daily health checks, certified first-aid staff and strict pickup verification." },
  { q: "What is the daily schedule like?", a: "A balance of circle time, learning activities, healthy meals, outdoor play, creative time and story/music — see our timeline above." },
  { q: "What curriculum do you follow?", a: "A play-based curriculum inspired by Montessori and Reggio principles, mapped to early learning frameworks and kindergarten readiness." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-soft py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-sm">
            <Lightbulb className="h-3.5 w-3.5 text-accent" /> Questions, answered
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
            Frequently asked questions.
          </h2>
        </Reveal>

        <Stagger className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} variants={itemVariants} className="overflow-hidden rounded-2xl bg-card ring-1 ring-border/60">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-ink md:text-lg">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-muted text-ink">
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="px-5 pb-5 text-ink-soft">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* -------------------------- Enrollment steps -------------------------- */
export function Enroll() {
  const steps = [
    { n: 1, title: "Book a tour", text: "Visit our space and meet our team.", icon: Calculator },
    { n: 2, title: "Meet our team", text: "Get to know the educators and classroom.", icon: HeartHandshake },
    { n: 3, title: "Complete registration", text: "A simple online enrollment packet.", icon: BookOpen },
    { n: 4, title: "Welcome your child", text: "Smooth first day with a gentle transition plan.", icon: Smile },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint/30 px-4 py-1.5 text-xs font-semibold text-ink">
            <Check className="h-3.5 w-3.5" /> Enrollment process
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
            From tour to first day — in four simple steps.
          </h2>
        </Reveal>

        <Stagger className="relative mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((s) => (
            <motion.div key={s.n} variants={itemVariants} className="relative rounded-3xl bg-card p-6 shadow-soft ring-1 ring-border/50">
              <span className="absolute -top-4 right-5 grid h-10 w-10 place-items-center rounded-full bg-accent font-display text-lg font-extrabold text-white shadow-pop">
                {s.n}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <p className="mt-5 font-display text-lg font-bold text-ink">{s.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{s.text}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* -------------------------- Contact -------------------------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
  };

  const info = [
    { icon: Phone, label: "Call us", value: "(416) 555-0142" },
    { icon: Mail, label: "Email", value: "hello@castleparkdaycare.ca" },
    { icon: MapPin, label: "Visit", value: "123 Castle Park Ave, Toronto, ON" },
    { icon: Clock4, label: "Hours", value: "Mon–Fri · 7:30am – 6:00pm" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-sm">
              <Calendar className="h-3.5 w-3.5 text-accent" /> Book your tour
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
              Come see Castle Park{" "}
              <span className="text-primary">for yourself.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-ink-soft md:text-lg">
              Visit our classrooms, meet our team and ask all the questions on
              your mind. Tours take 30 minutes — kids are very welcome.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
            {info.map((it) => (
              <motion.div key={it.label} variants={itemVariants} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-border/40">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <it.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{it.label}</p>
                  <p className="text-sm font-semibold text-ink">{it.value}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="relative rounded-[2rem] bg-white p-6 shadow-pop ring-1 ring-border/50 md:p-8">
            <div className="grid gap-4">
              <Field label="Parent name" name="name" type="text" placeholder="Your full name" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" placeholder="you@email.com" inputMode="email" />
                <Field label="Phone" name="phone" type="tel" placeholder="(416) 555-0123" inputMode="tel" />
              </div>
              <Field label="Child's age" name="age" type="text" placeholder="e.g. 2 years" />
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your child and what you're looking for…"
                  className="w-full rounded-2xl border border-border bg-muted/40 px-4 py-3 text-base text-ink placeholder:text-ink-soft/70 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-base font-semibold text-white shadow-pop transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                Request my tour
              </button>
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 rounded-2xl bg-mint/30 p-4 text-sm font-semibold text-emerald-800"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-mint text-emerald-900">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    Thanks! We'll be in touch within one business day.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder, inputMode }: { label: string; name: string; type: string; placeholder?: string; inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-muted/40 px-4 py-3 text-base text-ink placeholder:text-ink-soft/70 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/20"
      />
    </div>
  );
}

/* -------------------------- Footer -------------------------- */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-primary">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-xl font-extrabold">Castle Park</span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Premium licensed daycare where little minds grow, explore and shine.
            </p>
          </div>

          <FooterCol
            title="Quick links"
            items={[
              { label: "Home", to: "/" },
              { label: "About us", to: "/about" },
              { label: "Programs", to: "/programs" },
              { label: "Enroll", to: "/enroll" },
              { label: "Contact", to: "/contact" },
            ]}
          />
          <FooterCol
            title="Families"
            items={[
              { label: "Start enrolment", to: "/enroll" },
              { label: "Book a tour", to: "/contact" },
              { label: "Our curriculum", to: "/programs" },
              { label: "Our team", to: "/about" },
              { label: "Staff login", to: "/admin" },
            ]}
          />

          <div>
            <p className="font-display text-base font-bold">Stay in the loop</p>
            <p className="mt-2 text-sm text-white/70">Monthly tips, events and open-house invites.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15">
              <input type="email" required placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none" />
              <button className="bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent/90">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Castle Park Daycare. All rights reserved.</p>
          <p>Made with <span className="text-accent">♥</span> for happy little learners.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <p className="font-display text-base font-bold">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="transition-colors hover:text-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
