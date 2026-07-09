import Image from "next/image";

export default function PageHero({
  eyebrow,
  heading,
  body,
  image,
  imagePosition = "center 65%",
}: {
  eyebrow: string;
  heading: string;
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
      <div className="relative mx-auto flex max-w-content flex-col items-center gap-8 px-6 py-28 text-center md:py-40">
        <p className="eyebrow !font-bold text-brass-light">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl leading-[1.15] md:text-6xl">
          {heading}
        </h1>
        {body && (
          <p className="max-w-xl font-body text-lg leading-relaxed text-parchment/85">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
