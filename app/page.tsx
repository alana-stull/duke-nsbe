import Image from "next/image";
import Link from "next/link";
import SectionAlternate from "@/components/SectionAlternate";
import SpotlightCard from "@/components/SpotlightCard";
import TestimonialCard from "@/components/TestimonialCard";
import EventCard from "@/components/EventCard";
import spotlights from "@/data/spotlights.json";
import testimonials from "@/data/testimonials.json";
import events from "@/data/events.json";

export default function Home() {
  const upcoming = events.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden text-parchment">
        <Image
          src="/images/hero-chapel.jpg"
          alt="Duke Chapel at sunset"
          fill
          priority
          className="object-cover object-[center_65%]"
        />
        <div className="absolute inset-0 bg-duke-blue-deep/70" />
        <div className="relative mx-auto flex max-w-content flex-col items-center gap-6 px-6 py-20 text-center animate-rise sm:gap-8 sm:py-28 md:py-40">
          <p className="eyebrow !font-bold text-brass-light">Duke University</p>
          <h1 className="max-w-4xl text-4xl leading-[1.2] sm:text-5xl md:text-6xl md:leading-[1.15]">
            <span className="md:block">Building the next generation of</span>
            <span className="md:hidden">{" "}</span>
            <span className="md:block">
              <span className="italic text-brass-light">Black engineers</span>{" "}
              at Duke.
            </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="rounded-pill bg-brass px-7 py-3 font-body text-sm text-duke-blue-deep transition-transform duration-300 hover:-translate-y-0.5"
            >
              Learn More
            </Link>
            <Link
              href="/events"
              className="rounded-pill border-2 border-parchment/70 bg-parchment/10 px-7 py-3 font-body text-sm font-bold text-parchment shadow-[0_4px_24px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:bg-parchment/20"
            >
              See Events
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS NSBE */}
      <SectionAlternate
        eyebrow="What Is NSBE"
        heading="Founded in 1975. Rebuilt every fall at Duke."
        body="NSBE National has connected Black engineering students to community and career since 1975. NSBE at Duke brings that mission to campus: academic community, mentorship from upperclassmen who've done the internship search before, study sessions before exams, and a direct pipeline to the corporate partners on the national NSBE partner wall. Whether you're new to campus or graduating this spring, this is your chapter."
      />

      {/* SPOTLIGHTS */}
      <section className="bg-mist/35">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-4">Student Spotlights</p>
              <h2 className="text-4xl text-duke-blue md:text-5xl">
                Members doing the work.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {spotlights.map((s) => (
              <SpotlightCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* GPA / DUES CALLOUT */}
      <SectionAlternate
        eyebrow="For Members"
        heading="GPA verification and dues, sorted."
        body="No more chasing a form in someone's inbox. Sign in with your Duke email to verify your GPA for national membership and pay your semester dues in a few minutes, from the Resources page."
        reverse
      >
        <Link
          href="/resources"
          className="mt-6 inline-block w-fit rounded-pill bg-duke-blue px-6 py-3 font-body text-sm text-parchment transition-transform duration-300 hover:-translate-y-0.5"
        >
          Go to Resources →
        </Link>
      </SectionAlternate>

      {/* TESTIMONIALS */}
      <section className="bg-mist/35">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32">
          <div className="mb-14">
            <p className="eyebrow mb-4">In Their Words</p>
            <h2 className="text-4xl text-duke-blue md:text-5xl">
              Testimonials.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="mx-auto max-w-content px-6 py-24 md:py-32">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-4">On the Calendar</p>
            <h2 className="text-4xl text-duke-blue md:text-5xl">
              Upcoming events.
            </h2>
          </div>
          <Link
            href="/events"
            className="font-body text-sm text-duke-blue underline decoration-brass underline-offset-4"
          >
            Full calendar →
          </Link>
        </div>
        <div>
          {upcoming.map((e) => (
            <EventCard key={e.title} {...e} />
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-content px-6 py-24 text-center md:py-32">
        <p className="eyebrow mb-4">Not a member yet?</p>
        <h2 className="mx-auto max-w-2xl text-4xl text-duke-blue md:text-5xl">
          Your first GBM is the only prerequisite.
        </h2>
        <Link
          href="/about"
          className="mt-8 inline-block rounded-pill bg-duke-blue px-8 py-3.5 font-body text-sm text-parchment transition-transform duration-300 hover:-translate-y-0.5 hover:bg-duke-blue-deep"
        >
          How to Join
        </Link>
      </section>
    </>
  );
}
