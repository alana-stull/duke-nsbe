"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "Who We Are" },
  { href: "/events", label: "Events" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/resources", label: "Resources" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-all duration-300 ${
        scrolled
          ? "border-duke-blue/10 shadow-[0_2px_16px_rgba(2,33,105,0.08)]"
          : "border-transparent shadow-none"
      }`}
    >
      <div
        className={`mx-auto flex max-w-content items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-4 md:py-5" : "py-5 md:py-8"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/duke-logo.png"
            alt="Duke University"
            width={120}
            height={101}
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-7" : "h-8 md:h-9"
            }`}
          />
          <span className="font-display text-xl font-bold text-duke-blue/40">×</span>
          <Image
            src="/images/nsbe-logo.png"
            alt="NSBE"
            width={120}
            height={126}
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-7" : "h-8 md:h-9"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-body transition-all duration-300 hover:text-duke-blue ${
                  scrolled ? "text-[0.95rem]" : "text-lg"
                } ${active ? "font-bold text-duke-blue" : "text-ink"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/resources"
            className="rounded-pill bg-duke-blue px-5 py-2 font-body text-sm text-parchment transition-transform duration-300 hover:-translate-y-0.5 hover:bg-duke-blue-deep"
          >
            Member Sign In
          </Link>
        </div>

        <button
          className="-mr-2 p-2 text-duke-blue md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="font-display text-2xl">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-duke-blue/10 bg-white p-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-body text-lg hover:text-duke-blue ${
                    active ? "font-bold text-duke-blue" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/resources"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-pill bg-duke-blue px-5 py-2 text-center font-body text-sm text-parchment"
            >
              Member Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
