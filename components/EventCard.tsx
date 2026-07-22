function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.toLocaleDateString("en-US", { day: "numeric" }),
  };
}

export default function EventCard({
  title,
  date,
  time,
  location,
  category,
  description,
  membersOnly,
  signedIn = false,
}: {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  membersOnly: boolean;
  signedIn?: boolean;
}) {
  const { month, day } = formatDate(date);
  const locked = membersOnly && !signedIn;

  return (
    <div className="flex items-center gap-4 border-b border-duke-blue/10 py-8 first:pt-0 sm:gap-6">
      <div className="flex w-12 shrink-0 flex-col items-center sm:w-16">
        <span className="font-body text-xs tracking-wide text-slate">{month}</span>
        <span className="font-display text-3xl font-bold text-duke-blue sm:text-4xl">{day}</span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-display text-lg text-duke-blue sm:text-xl">{title}</p>
          <span className="eyebrow rounded-pill border border-brass/40 px-3 py-1 text-[0.65rem]">
            {category}
          </span>
          {membersOnly && (
            <span className="eyebrow rounded-pill bg-mist px-3 py-1 text-[0.65rem] !text-duke-blue">
              Members Only
            </span>
          )}
        </div>
        <p className="mt-1 font-body text-sm text-slate">
          {time} &middot; {location}
        </p>
        <p className="mt-3 max-w-xl font-body text-[0.95rem] leading-relaxed text-ink">
          {locked
            ? "Sign in with your Duke NetID email to see full event details."
            : description}
        </p>
      </div>
    </div>
  );
}
