import MemberGate from "@/components/MemberGate";
import PageHero from "@/components/PageHero";
import opportunities from "@/data/opportunities.json";

function formatDeadline(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        heading="Internships, co-ops, and scholarships."
        image="/images/nsbe-story.jpg"
        imagePosition="center"
      />
      <div className="mx-auto max-w-content px-6 py-16 md:py-20">
        <p className="mx-auto mb-10 max-w-2xl text-center font-body text-sm text-slate">
          Every listing came from a corporate partner, an eboard member, or a
          fellow student who wanted the chapter to know first.
        </p>
        <MemberGate>
          <div className="flex flex-col divide-y divide-duke-blue/10">
            {opportunities.map((o) => (
              <a
                key={o.title}
                href={o.link}
                className="group flex flex-col gap-1 py-6 first:pt-0 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-display text-xl text-duke-blue group-hover:text-brass">
                    {o.title}
                  </p>
                  <p className="font-body text-sm text-slate">
                    {o.org} &middot; {o.type} &middot; posted by {o.postedBy}
                  </p>
                </div>
                <p className="eyebrow text-slate">
                  Deadline {formatDeadline(o.deadline)}
                </p>
              </a>
            ))}
          </div>
          <p className="mt-12 font-body text-sm text-slate">
            Have something to share? Email nsbe@duke.edu and an eboard member
            will post it.
          </p>
        </MemberGate>
      </div>
    </>
  );
}
