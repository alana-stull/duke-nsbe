import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // --- Duke NSBE token system ---
        "duke-blue": "#022169",      // primary — backgrounds, overlays, nav
        "duke-blue-deep": "#01143f", // darkest overlay / footer
        parchment: "#F7F4EC",        // primary light background (stone/paper)
        ink: "#151A24",              // body text
        slate: "#4C5C77",            // secondary / muted text
        mist: "#DCE3F0",             // alternating section tint
        brass: "#B08D57",            // signature accent — CTAs, dividers, torch flame
        "brass-light": "#D8BD8C",
      },
      fontFamily: {
        display: ["var(--font-figtree)", "sans-serif"],
        body: ["var(--font-figtree)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        pill: "999px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        rise: "rise 0.8s cubic-bezier(0.22,1,0.36,1) both",
        flicker: "flicker 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
