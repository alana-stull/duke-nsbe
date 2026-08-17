export default function SpotlightCard({
  name,
  highlight,
  photo,
  focus,
}: {
  name: string;
  highlight: string;
  photo: string;
  focus?: string;
}) {
  return (
    <div className="flex h-full flex-col items-center rounded-2xl border border-duke-blue/10 bg-white/60 p-8 text-center transition-transform duration-500 hover:scale-105 hover:shadow-[0_8px_16px_rgba(2,33,105,0.10)]">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-mist">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={name}
            className={`h-full w-full object-cover ${focus === "top" ? "object-top" : "object-center"}`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-3xl italic text-duke-blue/20">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <p className="mt-5 font-body text-base font-medium text-ink">{name}</p>
      <p className="mt-1 line-clamp-2 min-h-[2.75rem] font-body text-sm leading-relaxed text-brass">
        {highlight}
      </p>
    </div>
  );
}
