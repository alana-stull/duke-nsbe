export default function SpotlightCard({
  name,
  highlight,
  photo,
}: {
  name: string;
  highlight: string;
  photo: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-duke-blue/10 bg-white/60 p-8 text-center transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(2,33,105,0.08)]">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-mist">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-3xl italic text-duke-blue/20">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <p className="mt-5 font-body text-base font-medium text-ink">{name}</p>
      <p className="mt-1 font-body text-sm text-brass">{highlight}</p>
    </div>
  );
}
