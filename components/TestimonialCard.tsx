"use client";

import { useEffect, useRef, useState } from "react";

export default function TestimonialCard({
  name,
  major,
  quote,
  photo,
  focus,
  onExpand,
}: {
  name: string;
  major: string;
  quote: string;
  photo: string;
  focus?: string;
  onExpand?: () => void;
}) {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const expandedRef = useRef(false);
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);

  useEffect(() => {
    expandedRef.current = expanded;
  }, [expanded]);

  useEffect(() => {
    function check() {
      if (expandedRef.current) return;
      const el = quoteRef.current;
      if (!el) return;
      setTruncated(el.scrollHeight > el.clientHeight + 1);
    }
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function toggle() {
    if (!truncated) return;
    const next = !expanded;
    setExpanded(next);
    if (next) onExpand?.();
  }

  return (
    <div
      onClick={toggle}
      onKeyDown={(e) => {
        if (truncated && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          toggle();
        }
      }}
      role={truncated ? "button" : undefined}
      tabIndex={truncated ? 0 : undefined}
      aria-expanded={truncated ? expanded : undefined}
      className={`flex h-full flex-col justify-between rounded-2xl border border-duke-blue/10 bg-white/60 p-8 transition-transform duration-500 hover:scale-105 hover:shadow-[0_8px_16px_rgba(2,33,105,0.10)] ${truncated ? "cursor-pointer" : ""}`}
    >
      <div>
        <p
          ref={quoteRef}
          className={`font-display text-xl italic leading-snug text-duke-blue ${
            expanded ? "" : "line-clamp-6 min-h-[10.5rem]"
          }`}
        >
          &ldquo;{quote}&rdquo;
        </p>
        <p
          className={`mt-2 font-body text-xs font-semibold text-brass ${
            truncated ? "" : "invisible"
          }`}
        >
          {expanded ? "Show less" : "Read more"}
        </p>
      </div>
      <div className="mt-8 flex items-center gap-3 border-t border-duke-blue/10 pt-4">
        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-mist">
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo}
              alt={name}
              className={`h-full w-full object-cover ${focus === "top" ? "object-top" : "object-center"}`}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-display text-sm italic text-duke-blue/30">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <p className="font-body text-sm text-ink">{name}</p>
          <p className="line-clamp-1 font-body text-xs text-slate">{major}</p>
        </div>
      </div>
    </div>
  );
}
