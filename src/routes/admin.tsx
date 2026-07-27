import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Lock, LogOut, RefreshCw, Trash2, Search, Loader2 } from "lucide-react";
import { isAdminUnlocked, lockAdmin, unlockAdmin } from "@/lib/admin";
import { isFirebaseConfigured } from "@/lib/firebase";
import {
  listEnrollments,
  removeEnrollment,
  setEnrollmentStatus,
  type Enrollment,
  type EnrollmentStatus,
} from "@/lib/enrollments";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Staff Admin | Castle Park Daycare" },
      { name: "description", content: "Private staff area for reviewing and managing Castle Park Daycare enrolment applications." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Staff Admin | Castle Park Daycare" },
      { property: "og:description", content: "Private staff area for managing enrolment applications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

const statuses: EnrollmentStatus[] = ["new", "contacted", "enrolled", "declined"];

const statusClass: Record<EnrollmentStatus, string> = {
  new: "bg-secondary text-ink",
  contacted: "bg-primary text-ink",
  enrolled: "bg-success text-ink",
  declined: "bg-muted text-ink-soft",
};

function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);

  useEffect(() => setUnlocked(isAdminUnlocked()), []);

  if (!unlocked) {
    return (
      <section className="grid min-h-[70vh] place-items-center px-4 py-16">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (unlockAdmin(password)) setUnlocked(true);
            else setWrong(true);
          }}
          className="w-full max-w-sm rounded-3xl border border-border bg-card p-8 text-center"
        >
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-muted">
            <Lock className="h-6 w-6 text-ink" />
          </span>
          <h1 className="mt-5 font-display text-xl font-extrabold text-ink">Staff access</h1>
          <p className="mt-2 text-sm text-ink-soft">
            Enter the staff password to view enrolment applications.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setWrong(false);
            }}
            placeholder="Password"
            className="mt-6 w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm outline-none focus:border-primary"
          />
          {wrong && <p className="mt-2 text-xs text-destructive">Incorrect password</p>}
          <button className="mt-4 w-full rounded-2xl bg-accent px-6 py-3.5 text-sm font-semibold text-white">
            Unlock
          </button>
        </form>
      </section>
    );
  }

  return <Dashboard onLock={() => { lockAdmin(); setUnlocked(false); }} />;
}

function Dashboard({ onLock }: { onLock: () => void }) {
  const [rows, setRows] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | EnrollmentStatus>("all");

  async function load() {
    setLoading(true);
    setError("");
    try {
      setRows(await listEnrollments());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load enrolments.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isFirebaseConfigured) void load();
    else {
      setLoading(false);
      setError("Firebase is not configured yet. Add your keys in src/lib/firebase.ts");
    }
  }, []);

  const visible = rows.filter((r) => {
    const matchesStatus = filter === "all" || r.status === filter;
    const t = q.trim().toLowerCase();
    const matchesQuery =
      !t ||
      [r.childName, r.parentName, r.email, r.phone, r.program]
        .join(" ")
        .toLowerCase()
        .includes(t);
    return matchesStatus && matchesQuery;
  });

  async function changeStatus(id: string, status: EnrollmentStatus) {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, status } : r)));
    try {
      await setEnrollmentStatus(id, status);
    } catch {
      void load();
    }
  }

  async function del(id: string) {
    if (!window.confirm("Delete this enrolment permanently?")) return;
    setRows((rs) => rs.filter((r) => r.id !== id));
    try {
      await removeEnrollment(id);
    } catch {
      void load();
    }
  }

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
              Enrolment applications
            </h1>
            <p className="mt-1 text-sm text-ink-soft">
              {rows.length} total · {rows.filter((r) => r.status === "new").length} awaiting review
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => void load()}
              className="inline-flex items-center gap-2 rounded-2xl border border-border px-4 py-2.5 text-sm font-semibold text-ink"
            >
              <RefreshCw className="h-4 w-4" /> Refresh
            </button>
            <button
              onClick={onLock}
              className="inline-flex items-center gap-2 rounded-2xl bg-muted px-4 py-2.5 text-sm font-semibold text-ink"
            >
              <LogOut className="h-4 w-4" /> Lock
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search child, parent, email…"
              className="w-full rounded-2xl border border-input bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["all", ...statuses] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${
                  filter === s ? "bg-ink text-white" : "bg-muted text-ink-soft"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <p className="mt-6 rounded-2xl bg-destructive/10 p-4 text-sm text-destructive">{error}</p>
        )}

        {loading ? (
          <div className="mt-16 flex justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-ink-soft" />
          </div>
        ) : visible.length === 0 && !error ? (
          <p className="mt-16 text-center text-sm text-ink-soft">No enrolments yet.</p>
        ) : (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {visible.map((r) => (
              <article key={r.id} className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-lg font-bold text-ink">{r.childName}</h2>
                    <p className="text-sm text-ink-soft">{r.program}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${statusClass[r.status]}`}
                  >
                    {r.status}
                  </span>
                </div>

                <dl className="mt-4 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-2">
                  <Row label="Date of birth" value={r.childDob} />
                  <Row label="Start date" value={r.startDate} />
                  <Row label="Parent" value={r.parentName} />
                  <Row label="Phone" value={r.phone} />
                  <Row label="Email" value={r.email} />
                  <Row label="Address" value={r.address} />
                  <Row label="Emergency" value={`${r.emergencyName} · ${r.emergencyPhone}`} />
                  <Row label="Submitted" value={new Date(r.createdAt).toLocaleDateString()} />
                  {r.allergies && <Row label="Allergies" value={r.allergies} />}
                  {r.notes && <Row label="Notes" value={r.notes} />}
                </dl>

                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4">
                  {statuses.map((s) => (
                    <button
                      key={s}
                      onClick={() => void changeStatus(r.id, s)}
                      disabled={r.status === s}
                      className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-ink-soft hover:bg-muted disabled:opacity-40"
                    >
                      Mark {s}
                    </button>
                  ))}
                  <button
                    onClick={() => void del(r.id)}
                    aria-label="Delete enrolment"
                    className="ml-auto grid h-9 w-9 place-items-center rounded-full text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{label}</dt>
      <dd className="text-ink">{value || "—"}</dd>
    </div>
  );
}
