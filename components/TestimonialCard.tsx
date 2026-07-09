export default function TestimonialCard({
  name,
  major,
  quote,
  photo,
}: {
  name: string;
  major: string;
  quote: string;
  photo: string;
}) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-duke-blue/10 bg-white/60 p-8 transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(2,33,105,0.08)]">
      <p className="font-display text-xl italic leading-snug text-duke-blue">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-8 flex items-center gap-3 border-t border-duke-blue/10 pt-4">
        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-mist">
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo} alt={name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-display text-sm italic text-duke-blue/30">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <p className="font-body text-sm text-ink">{name}</p>
          <p className="font-body text-xs text-slate">{major}</p>
        </div>
      </div>
    </div>
  );
}
