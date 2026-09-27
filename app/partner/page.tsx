import PageHero from "@/components/PageHero";

// Leave blank and the page shows a "coming soon" state instead of a dead link.
const PACKET_URL = "/docs/duke-nsbe-partnership-packet-2026-2027.pdf";

const tiers = [
  {
    name: "Gold",
    price: "$3,000",
    body: "Premium tier with maximum benefits and visibility, including an exclusive corporate event of your choosing.",
  },
  {
    name: "Silver",
    price: "$2,000",
    body: "High-impact tier supporting core conference initiatives, with an invitation to a corporate Q&A panel at a GBM.",
  },
  {
    name: "Bronze",
    price: "$750",
    body: "Essential tier helping students attend key workshops, with full access to the Duke NSBE Resume Book.",
  },
  {
    name: "Chapter Patron",
    price: "$500",
    body: "Custom support for specific chapter needs, like catering a GBM or funding conference travel.",
  },
];

const benefits = [
  {
    title: "Duke NSBE Resume Book",
    body: "Bronze sponsors and up get full access to our resume book, organized by major and class, to source candidates for internships, co-ops, and full-time roles.",
  },
  {
    title: "Corporate Q&A and events",
    body: "Silver sponsors join a moderated Q&A at one of our General Body Meetings. Gold sponsors get a full 1.5-hour event of their choosing, with full creative control.",
  },
  {
    title: "Brand visibility",
    body: "Every tier includes your company logo on chapter apparel and the Duke NSBE website, plus access to our member email list and a post in our newsletter.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        heading="Invest in Duke's next generation of Black engineers."
        body="NSBE at Duke partners with companies who want direct access to a community of driven, well-supported engineering talent. Our partnership packet covers sponsorship tiers, benefits, and how to get started."
        emphasis="105 members strong across Pratt and Trinity."
        image="/images/nsbe-story.jpg"
        imagePosition="center"
      />

      <div className="mx-auto max-w-content px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-duke-blue/10 bg-white/60 p-8 text-center md:p-12">
          <p className="eyebrow mb-4">Partnership Packet</p>
          <h2 className="mx-auto max-w-xl font-display text-2xl text-duke-blue md:text-3xl">
            Sponsorship tiers, benefits, and how to get involved.
          </h2>
          {PACKET_URL ? (
            <a
              href={PACKET_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-pill bg-duke-blue px-8 py-3.5 font-body text-sm text-parchment transition-transform duration-300 hover:-translate-y-0.5 hover:bg-duke-blue-deep"
            >
              View the Partnership Packet →
            </a>
          ) : (
            <p className="mt-6 font-body text-sm text-slate/70">
              Partnership packet coming soon.
            </p>
          )}
        </div>

        <div className="mt-20">
          <p className="eyebrow mb-4">Sponsorship Tiers</p>
          <h2 className="max-w-2xl font-display text-3xl text-duke-blue md:text-4xl">
            All sponsorship funding supports getting our students to NSBE's national conference.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-duke-blue/10 bg-white/60 p-8"
              >
                <p className="eyebrow text-brass">{t.name}</p>
                <p className="mt-2 font-display text-3xl text-duke-blue">{t.price}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-duke-blue/10 bg-white/60 p-8"
            >
              <h3 className="font-display text-xl text-duke-blue">{b.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate">
                {b.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-body text-sm text-slate">
            Questions, or ready to talk partnership?
          </p>
          <a
            href="mailto:nsbe@duke.edu"
            className="mt-2 inline-block font-body text-sm text-duke-blue underline decoration-brass underline-offset-4"
          >
            nsbe@duke.edu
          </a>
        </div>
      </div>
    </>
  );
}
