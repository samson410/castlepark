export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-muted">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center md:px-8 md:py-20">
        {eyebrow && (
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-soft md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
