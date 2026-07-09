import Image from "next/image";

export default function PageHero({
  eyebrow,
  heading,
  emphasis,
  body,
  image,
  imagePosition = "center 65%",
}: {
  eyebrow: string;
  heading: string;
  emphasis?: string;
  body?: string;
  image: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden text-parchment">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-duke-blue-deep/70" />
      <div className="relative mx-auto flex max-w-content flex-col items-center gap-6 px-6 py-20 text-center sm:gap-8 sm:py-28 md:py-40">
        <p className="eyebrow !font-bold text-brass-light">{eyebrow}</p>
        <h1 className="max-w-4xl text-3xl leading-[1.25] sm:text-5xl md:text-6xl md:leading-[1.15]">
          {heading}
        </h1>
        {emphasis && (
          <p className="font-display text-xl italic text-brass-light sm:text-2xl">
            {emphasis}
          </p>
        )}
        {body && (
          <p className="max-w-xl font-body text-base leading-relaxed text-parchment/85 sm:text-lg">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
