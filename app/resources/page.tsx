"use client";

import { useState } from "react";
import MemberGate from "@/components/MemberGate";
import PageHero from "@/components/PageHero";
import gbm from "@/data/gbm.json";

function formatGbmDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// A blank or missing link renders as plain text, never as a dead <a>.
function DocLink({
  href,
  kind,
  title,
}: {
  href?: string;
  kind: string;
  title: string;
}) {
  if (!href) {
    return <span className="text-slate/60">{kind} coming soon</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${kind} (PDF) — ${title}`}
      className="text-duke-blue underline underline-offset-4 hover:text-brass"
    >
      {kind}
    </a>
  );
}

// `expands` marks the one card that reveals the GBM section below the grid.
const resources = [
  {
    title: "GPA Verification",
    body: "Submit your unofficial DukeHub transcript for national NSBE membership verification. Turnaround is about one week.",
    cta: "Start Verification",
    expands: false,
  },
  {
    title: "Pay Chapter Dues",
    body: "Semester dues cover national membership, regional conference subsidies, and chapter socials.",
    cta: "Pay Dues",
    expands: false,
  },
  {
    title: "Meeting Minutes & Docs",
    body: "GBM slide decks and notes, the chapter constitution, and committee sign-up sheets, all in one place.",
    cta: "View GBM Materials",
    expands: true,
  },
  {
    title: "Regional & National Conference Info",
    body: "Registration deadlines, travel stipend eligibility, and what to pack for your first NSBE convention.",
    cta: "See Conference Info",
    expands: false,
  },
];

const pillClass =
  "mt-6 rounded-pill bg-duke-blue px-5 py-2.5 font-body text-sm text-parchment transition-transform duration-300 hover:-translate-y-0.5";

export default function ResourcesPage() {
  const [showGbm, setShowGbm] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Member Resources"
        heading="The stuff you used to have to DM someone for."
        emphasis="Now it's all in one place."
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
                {r.expands ? (
                  <button
                    onClick={() => setShowGbm((v) => !v)}
                    aria-expanded={showGbm}
                    aria-controls="gbm"
                    className={pillClass}
                  >
                    {showGbm ? "Hide GBM Materials" : r.cta}
                  </button>
                ) : (
                  <button className={pillClass}>{r.cta}</button>
                )}
              </div>
            ))}
          </div>

          <section id="gbm" hidden={!showGbm} className="mt-20">
            <h2 className="mb-2 font-display text-2xl italic text-brass">
              GBM Slides &amp; Notes
            </h2>
            <p className="mb-8 max-w-2xl font-body text-sm text-slate">
              Missed a general body meeting? Every deck and set of notes from
              this semester, newest first.
            </p>

            <div className="flex flex-col divide-y divide-duke-blue/10">
              {gbm.map((m) => (
                <div
                  key={m.date}
                  className="flex flex-col gap-2 py-6 first:pt-0 md:flex-row md:items-center md:justify-between md:gap-8"
                >
                  <div>
                    <p className="font-display text-xl text-duke-blue">
                      {m.title}
                    </p>
                    <p className="font-body text-sm text-slate">
                      {formatGbmDate(m.date)} &middot; {m.recap}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-5 font-body text-sm">
                    <DocLink href={m.slides} kind="Slides" title={m.title} />
                    <DocLink href={m.notes} kind="Notes" title={m.title} />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-2xl font-body text-sm leading-relaxed text-slate">
              Eboard: after each GBM, export the deck as a PDF, drop it in the
              shared &ldquo;GBM Slides&rdquo; folder in Google Drive, set
              sharing to &ldquo;Anyone with the link &middot; Viewer,&rdquo; and
              copy the link. Then open data/gbm.json on GitHub, click the pencil
              icon, and add a new block at the top. Leave notes as an empty
              string if they aren&rsquo;t typed up yet &mdash; the row will say
              &ldquo;Notes coming soon&rdquo; instead of showing a dead link.
            </p>
          </section>
        </MemberGate>
      </div>
    </>
  );
}
