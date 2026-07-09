import MemberGate from "@/components/MemberGate";
import PageHero from "@/components/PageHero";

const resources = [
  {
    title: "GPA Verification",
    body: "Submit your unofficial DukeHub transcript for national NSBE membership verification. Turnaround is about one week.",
    cta: "Start Verification",
  },
  {
    title: "Pay Chapter Dues",
    body: "Semester dues cover national membership, regional conference subsidies, and chapter socials.",
    cta: "Pay Dues",
  },
  {
    title: "Meeting Minutes & Docs",
    body: "GBM minutes, the chapter constitution, and committee sign-up sheets, all in one place.",
    cta: "View Documents",
  },
  {
    title: "Regional & National Conference Info",
    body: "Registration deadlines, travel stipend eligibility, and what to pack for your first NSBE convention.",
    cta: "See Conference Info",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Member Resources"
        heading="The stuff you used to have to DM someone for."
        image="/images/hero-chapel-day.webp"
      />

      <div className="mx-auto max-w-content px-6 py-16 md:py-20">
        <MemberGate>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {resources.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-duke-blue/10 bg-white/60 p-8"
              >
                <h3 className="font-display text-xl text-duke-blue">
                  {r.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate">
                  {r.body}
                </p>
                <button className="mt-6 rounded-pill bg-duke-blue px-5 py-2.5 font-body text-sm text-parchment transition-transform duration-300 hover:-translate-y-0.5">
                  {r.cta}
                </button>
              </div>
            ))}
          </div>
        </MemberGate>
      </div>
    </>
  );
}
