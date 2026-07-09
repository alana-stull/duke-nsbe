"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import EventCard from "@/components/EventCard";
import events from "@/data/events.json";

const categories = ["All", ...Array.from(new Set(events.map((e) => e.category)))];

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? events : events.filter((e) => e.category === filter)),
    [filter]
  );

  const byMonth = filtered.reduce<Record<string, typeof events>>((acc, e) => {
    const month = new Date(e.date + "T00:00:00").toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    acc[month] = acc[month] ? [...acc[month], e] : [e];
    return acc;
  }, {});

  return (
    <>
      <PageHero
        eyebrow="Calendar"
        heading="Everything on the chapter calendar."
        body="General body meetings are open to everyone. Some workshops and prep sessions are reserved for current members. Sign in to see full details."
        image="/images/hero-chapel-sunrise.jpg"
      />

      <div className="mx-auto max-w-content px-6 py-16 md:py-20">
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-pill border px-4 py-2 font-body text-sm transition-colors duration-300 ${
                filter === c
                  ? "border-duke-blue bg-duke-blue text-parchment"
                  : "border-duke-blue/20 text-duke-blue hover:bg-mist"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12">
          {Object.entries(byMonth).map(([month, list]) => (
            <div key={month} className="mb-16">
              <h2 className="mb-2 font-display text-2xl italic text-brass">
                {month}
              </h2>
              <div>
                {list.map((e) => (
                  <EventCard key={e.title} {...e} />
                ))}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="font-body text-sm text-slate">
              No events in this category right now.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
