import SectionAlternate from "@/components/SectionAlternate";
import PageHero from "@/components/PageHero";
import OfficerCard from "@/components/OfficerCard";
import Link from "next/link";
import eboard from "@/data/eboard.json";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        heading="Meet the Duke NSBE Chapter"
        body="To increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community."
        image="/images/hero-chapel-day.webp"
      />

      <SectionAlternate
        eyebrow="Why It Matters"
        heading="A room where you don't have to explain yourself."
        body="Engineering at a school like Duke can be isolating. NSBE exists so that no member has to navigate a problem set, an internship search, or a hard semester without people who've been through it. Meetings, study halls, and mentorship pairings are built around that."
      />

      <section className="bg-mist/35">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32">
          <p className="eyebrow mb-4">2026–2027</p>
          <h2 className="max-w-2xl text-4xl leading-[1.1] text-duke-blue md:text-5xl">
            The Executive Board.
          </h2>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-slate">
            Twelve students who run this chapter alongside a full course load.
            Reach out to any of them directly, or email the chapter and
            we&rsquo;ll route it.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4">
            {eboard.map((o, i) => (
              <OfficerCard key={`${o.role}-${i}`} {...o} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-content px-6 py-24 text-center md:py-32">
          <p className="eyebrow mb-4">How to Join</p>
          <h2 className="mx-auto max-w-2xl text-4xl text-duke-blue md:text-5xl">
            Show up. That&rsquo;s it.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-slate">
            Come to a general body meeting. They&rsquo;re open to everyone, no
            invitation needed. From there, national membership is a short
            online registration plus GPA verification, which you can complete
            right here once you&rsquo;re signed in.
          </p>
          <Link
            href="/events"
            className="mt-8 inline-block rounded-pill bg-duke-blue px-8 py-3.5 font-body text-sm text-parchment transition-transform duration-300 hover:-translate-y-0.5 hover:bg-duke-blue-deep"
          >
            See the Next GBM →
          </Link>
        </div>
      </section>
    </>
  );
}
