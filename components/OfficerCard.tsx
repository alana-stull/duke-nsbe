export default function OfficerCard({
  name,
  role,
  major,
  photo,
}: {
  name: string;
  role: string;
  major: string;
  photo: string;
}) {
  return (
    <div className="group">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-mist">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-5xl italic text-duke-blue/20">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <p className="mt-4 font-display text-lg font-semibold text-duke-blue">{name}</p>
      <p className="font-body text-sm text-brass">{role}</p>
      <p className="font-body text-sm text-slate">{major}</p>
    </div>
  );
}
