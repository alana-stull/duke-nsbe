import Link from "next/link";
import ChapelTorchMark from "./ChapelTorchMark";

export default function Footer() {
  return (
    <footer className="mt-32 bg-duke-blue text-parchment">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <ChapelTorchMark className="mb-4 h-16 w-16 text-brass" />
          <p className="font-display text-xl italic">NSBE at Duke</p>
          <p className="mt-3 max-w-xs font-body text-sm text-parchment/70">
            Duke University&rsquo;s chapter of the National Society of Black
            Engineers, building a family of successful, culturally
            responsible Black engineers.
          </p>
        </div>

        <div>
          <p className="eyebrow text-brass-light">Chapter</p>
          <ul className="mt-4 space-y-2 font-body text-sm text-parchment/80">
            <li><Link href="/about">Who We Are</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-brass-light">Members</p>
          <ul className="mt-4 space-y-2 font-body text-sm text-parchment/80">
            <li><Link href="/opportunities">Opportunities</Link></li>
            <li><Link href="/resources">GPA Verification</Link></li>
            <li><Link href="/resources">Pay Dues</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-brass-light">Connect</p>
          <ul className="mt-4 space-y-2 font-body text-sm text-parchment/80">
            <li><a href="mailto:nsbe@duke.edu">nsbe@duke.edu</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-parchment/15 py-6 text-center font-body text-xs text-parchment/50">
        © {new Date().getFullYear()} NSBE at Duke.
      </div>
    </footer>
  );
}
