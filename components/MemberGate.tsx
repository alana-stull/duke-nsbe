"use client";

import { useState } from "react";

/**
 * PLACEHOLDER AUTH GATE
 * -----------------------------------------------------------------
 * This is a visual stand-in so the eboard can see how gated content
 * looks and behaves. It is NOT real authentication: anyone can type
 * any email here to "unlock" the section in this demo.
 *
 * Before launch, replace this with a real session check, e.g.
 * NextAuth's `useSession()`, after wiring up an Email/Magic-Link
 * provider restricted to addresses ending in @duke.edu.
 * See README.md → "Wiring up real Duke email sign-in".
 * -----------------------------------------------------------------
 */
export default function MemberGate({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.toLowerCase().endsWith("@duke.edu")) {
      setError("Use your @duke.edu email to continue.");
      return;
    }
    setError("");
    setSignedIn(true);
  }

  if (signedIn) return <>{children}</>;

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-duke-blue/10 bg-white/70 p-10 text-center">
      <p className="eyebrow mb-3">Members Only</p>
      <h3 className="font-display text-2xl text-duke-blue">
        Sign in with your Duke email
      </h3>
      <p className="mt-2 font-body text-sm text-slate">
        This section is reserved for current NSBE at Duke members.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder="netid@duke.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-pill border border-duke-blue/20 bg-parchment px-5 py-3 font-body text-sm text-ink outline-none focus:border-brass"
        />
        {error && <p className="font-body text-xs text-red-700">{error}</p>}
        <button
          type="submit"
          className="rounded-pill bg-duke-blue px-5 py-3 font-body text-sm text-parchment transition-transform duration-300 hover:-translate-y-0.5 hover:bg-duke-blue-deep"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
