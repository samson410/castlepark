import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Castle } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Enroll", to: "/enroll" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary">
              <Castle className="h-5 w-5 text-ink" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-ink md:text-xl">
              Castle Park
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-muted hover:text-ink data-[status=active]:bg-muted data-[status=active]:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/enroll"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Enroll Your Child
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-muted text-ink lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background lg:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <span className="font-display text-lg font-extrabold text-ink">Menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-2xl bg-muted text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-6 pt-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-4 font-display text-2xl font-bold text-ink hover:bg-muted"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-6">
              <Link
                to="/enroll"
                onClick={() => setOpen(false)}
                className="block rounded-2xl bg-accent px-6 py-4 text-center text-base font-semibold text-white"
              >
                Enroll Your Child
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
