import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { isFirebaseConfigured } from "@/lib/firebase";
import { submitEnrollment, type EnrollmentInput } from "@/lib/enrollments";

export const Route = createFileRoute("/enroll")({
  head: () => ({
    meta: [
      { title: "Enroll Your Child | Castle Park Daycare" },
      { name: "description", content: "Complete the online enrolment form for Castle Park Daycare in three short steps. Tell us about your child, your family and your preferred start date." },
      { property: "og:title", content: "Enroll Your Child | Castle Park Daycare" },
      { property: "og:description", content: "A simple three-step online enrolment form. We reply within one business day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: EnrollPage,
});

const empty: EnrollmentInput = {
  childName: "",
  childDob: "",
  program: "",
  startDate: "",
  parentName: "",
  email: "",
  phone: "",
  address: "",
  emergencyName: "",
  emergencyPhone: "",
  allergies: "",
  notes: "",
};

const programs = [
  "Infant Care (0–18 months)",
  "Toddler Program (18 months–3 yrs)",
  "Preschool (3–4 yrs)",
  "Kindergarten Readiness (4–5 yrs)",
  "Before & After School (5–12 yrs)",
];

const steps = ["Child details", "Parent details", "Care & safety"];

function EnrollPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<EnrollmentInput>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const set = (k: keyof EnrollmentInput) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  function validate(current: number) {
    const e: Record<string, string> = {};
    const req = (k: keyof EnrollmentInput, label: string) => {
      if (!form[k].trim()) e[k] = `${label} is required`;
    };
    if (current === 0) {
      req("childName", "Child's full name");
      req("childDob", "Date of birth");
      req("program", "Program");
      req("startDate", "Preferred start date");
    }
    if (current === 1) {
      req("parentName", "Your full name");
      req("email", "Email");
      req("phone", "Phone number");
      req("address", "Home address");
      if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = "Enter a valid email address";
      if (form.phone && form.phone.replace(/\D/g, "").length < 7)
        e.phone = "Enter a valid phone number";
    }
    if (current === 2) {
      req("emergencyName", "Emergency contact name");
      req("emergencyPhone", "Emergency contact phone");
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validate(step)) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate(2)) return;
    setStatus("saving");
    try {
      await submitEnrollment(form);
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <>
        <PageHeader eyebrow="Enrolment" title="Application received" />
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-xl px-4 text-center md:px-8">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-success">
              <CheckCircle2 className="h-8 w-8 text-ink" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-extrabold text-ink">
              Thank you, {form.parentName.split(" ")[0]}!
            </h2>
            <p className="mt-3 text-ink-soft">
              We have saved {form.childName}'s enrolment request. A member of our team will
              contact you at {form.email} within one business day to confirm availability and
              book your tour.
            </p>
            <button
              onClick={() => {
                setForm(empty);
                setStep(0);
                setStatus("idle");
              }}
              className="mt-8 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-ink"
            >
              Submit another child
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Enrolment"
        title="Enroll your child in three short steps"
        description="It takes about three minutes. Everything is saved securely and reviewed by our enrolment team."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          {!isFirebaseConfigured && (
            <div className="mb-8 flex gap-3 rounded-2xl border border-secondary bg-secondary/25 p-4">
              <AlertCircle className="h-5 w-5 shrink-0 text-ink" />
              <p className="text-sm text-ink">
                <strong>Setup needed:</strong> add your Firebase project keys in{" "}
                <code className="rounded bg-white px-1.5 py-0.5">src/lib/firebase.ts</code> to
                start saving enrolments.
              </p>
            </div>
          )}

          <ol className="mb-10 grid grid-cols-3 gap-2">
            {steps.map((s, i) => (
              <li key={s}>
                <div
                  className={`h-1.5 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`}
                />
                <p
                  className={`mt-2 text-xs font-semibold md:text-sm ${
                    i <= step ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {i + 1}. {s}
                </p>
              </li>
            ))}
          </ol>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            {step === 0 && (
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Child's full name" value={form.childName} onChange={set("childName")} error={errors.childName} />
                <Field label="Date of birth" type="date" value={form.childDob} onChange={set("childDob")} error={errors.childDob} />
                <Select label="Program" value={form.program} onChange={set("program")} error={errors.program} options={programs} />
                <Field label="Preferred start date" type="date" value={form.startDate} onChange={set("startDate")} error={errors.startDate} />
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Parent / guardian full name" value={form.parentName} onChange={set("parentName")} error={errors.parentName} />
                <Field label="Email address" type="email" value={form.email} onChange={set("email")} error={errors.email} />
                <Field label="Phone number" type="tel" value={form.phone} onChange={set("phone")} error={errors.phone} />
                <Field label="Home address" value={form.address} onChange={set("address")} error={errors.address} className="md:col-span-2" />
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Emergency contact name" value={form.emergencyName} onChange={set("emergencyName")} error={errors.emergencyName} />
                <Field label="Emergency contact phone" type="tel" value={form.emergencyPhone} onChange={set("emergencyPhone")} error={errors.emergencyPhone} />
                <Textarea label="Allergies or medical needs" value={form.allergies} onChange={set("allergies")} placeholder="Peanut allergy, asthma inhaler, none…" />
                <Textarea label="Anything else we should know?" value={form.notes} onChange={set("notes")} placeholder="Nap routine, comfort item, languages spoken at home…" />
              </div>
            )}

            {status === "error" && (
              <p className="mt-6 rounded-2xl bg-destructive/10 p-4 text-sm text-destructive">
                {message}
              </p>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border px-5 py-3.5 text-sm font-semibold text-ink disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-primary/85"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={status === "saving"}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90 disabled:opacity-60"
                >
                  {status === "saving" && <Loader2 className="h-4 w-4 animate-spin" />}
                  Submit enrolment
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-primary";

function Field({
  label,
  value,
  onChange,
  type = "text",
  error,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} ${error ? "border-destructive" : ""}`}
      />
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} ${error ? "border-destructive" : ""}`}
      >
        <option value="">Select a program…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <textarea
        rows={4}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} resize-none`}
      />
    </label>
  );
}
