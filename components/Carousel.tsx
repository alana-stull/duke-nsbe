"use client";

import { useEffect, useRef, useState } from "react";

export default function Carousel<T>({
  items,
  keyFor,
  renderItem,
  label = "item",
}: {
  items: T[];
  keyFor: (item: T, index: number) => string;
  renderItem: (item: T, helpers: { centerOn: () => void }) => React.ReactNode;
  label?: string;
}) {
  const n = items.length;
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    function updateVisible() {
      setVisible(window.innerWidth >= 768 ? 3 : 1);
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const loopable = n > visible;
  const track = loopable
    ? [...items.slice(-visible), ...items, ...items.slice(0, visible)]
    : items;

  const [index, setIndex] = useState(visible);
  const [animate, setAnimate] = useState(true);
  const skipSnapRef = useRef(false);

  useEffect(() => {
    setAnimate(false);
    setIndex(visible);
  }, [visible, n]);

  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  function go(dir: 1 | -1) {
    setAnimate(true);
    setIndex((i) => i + dir);
  }

  function centerIndex(trackIndex: number) {
    const target = trackIndex - Math.floor(visible / 2);
    if (target === index) return;
    skipSnapRef.current = true;
    setAnimate(true);
    setIndex(target);
  }

  function handleTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
    if (e.target !== e.currentTarget) return;
    if (skipSnapRef.current) {
      skipSnapRef.current = false;
      return;
    }
    if (!loopable) return;
    if (index > visible + n - 1) {
      setAnimate(false);
      setIndex(index - n);
    } else if (index < visible) {
      setAnimate(false);
      setIndex(index + n);
    }
  }

  const offset = loopable ? index : 0;
  const itemWidthPct = 100 / track.length;

  return (
    <div className="relative">
      <div className="overflow-hidden px-4 py-6">
        <div
          className="flex items-start"
          style={{
            width: `${(track.length / visible) * 100}%`,
            transform: `translateX(-${offset * itemWidthPct}%)`,
            transition: animate
              ? "transform 600ms cubic-bezier(0.22,1,0.36,1)"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {track.map((item, i) => (
            <div key={`${keyFor(item, i)}-${i}`} style={{ width: `${itemWidthPct}%` }} className="px-3">
              {renderItem(item, { centerOn: () => centerIndex(i) })}
            </div>
          ))}
        </div>
      </div>

      {loopable && (
        <>
          <button
            type="button"
            aria-label={`Previous ${label}`}
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-duke-blue/10 bg-white text-duke-blue shadow-[0_8px_24px_rgba(2,33,105,0.12)] transition-transform duration-300 hover:-translate-x-[calc(50%+2px)] hover:bg-mist"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={`Next ${label}`}
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-duke-blue/10 bg-white text-duke-blue shadow-[0_8px_24px_rgba(2,33,105,0.12)] transition-transform duration-300 hover:translate-x-[calc(50%+2px)] hover:bg-mist"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
