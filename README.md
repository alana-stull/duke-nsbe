# NSBE at Duke — Chapter Website

## Design system

- **Duke Blue** `#022169` — backgrounds, overlays, primary buttons
- **Parchment** `#F7F4EC` — main background
- **Brass** `#B08D57` — accent, signature color for CTAs and the torch mark
- **Fraunces** (display) + **Source Serif 4** (body) — no sans-serif anywhere, per the brief
- Signature mark: `components/ChapelTorchMark.tsx`, a line-drawing that fuses the Duke Chapel spire with the NSBE torch. Used in the hero watermark and the footer.

Content that changes often — eboard, events, opportunities, spotlights, GBM slides — lives in plain JSON files under `/data`, so anyone on eboard can edit it in GitHub's web editor without touching component code.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Posting GBM slides and notes

After each general body meeting:

1. Export the deck as a PDF and drop it in the shared **GBM Slides** folder in Google Drive. Same for the notes doc.
2. Right-click each file → **Share** → set General access to **Anyone with the link · Viewer** → **Copy link**. Skip this and members hit a "request access" screen instead of the slides.
3. Open `data/gbm.json` on GitHub, click the pencil icon, and add a new block at the **top** of the list — the page renders in file order, newest first:

```json
{
  "title": "GBM 4: Industry Panel",
  "date": "2026-10-15",
  "recap": "Panelists from three corporate partners on first-year expectations.",
  "slides": "https://drive.google.com/file/d/.../view",
  "notes": ""
}
```

4. Commit. The site rebuilds and deploys on its own.

Notes not typed up yet? Use `"notes": ""` — the page shows "Notes coming soon" instead of a dead link. Same for `"slides"`. A missing field behaves the same as an empty one, so nothing breaks either way, but keeping all five on every entry makes the file easier to copy-paste from.

The one thing that *will* break the site is invalid JSON — a trailing comma after the last `}`, a missing quote, or curly “smart quotes” pasted in from a doc. GitHub's web editor won't warn you. If the deploy fails after an edit, that's almost always why.

## Wiring up real Duke email sign-in

Right now, `components/MemberGate.tsx` is a **visual placeholder** that accepts any `@duke.edu`-looking address so the eboard can see how gated pages behave. It is not real authentication. Before launch:

1. Install NextAuth: `npm install next-auth`
2. Add an Email (magic link) provider in `app/api/auth/[...nextauth]/route.ts`, restricted to addresses ending in `@duke.edu` via the `signIn` callback.
3. Swap `MemberGate`'s local state for NextAuth's `useSession()`, and gate `/opportunities` and `/resources` server-side too (not just client-side) once real credentials are involved, so the data itself isn't fetchable by signed-out visitors.
4. Duke's IT department may also offer Shibboleth/SSO for student orgs — worth one email to them before building a NetID-restricted email flow from scratch, since it removes the "did you check @duke.edu" question entirely.

## Structure

```
app/
  page.tsx              home
  about/page.tsx         who we are / how to join
  eboard/page.tsx         officer grid
  events/page.tsx         full calendar, grouped by month
  opportunities/page.tsx  member-gated postings
  resources/page.tsx      GPA verification, dues, GBM slides & notes — member-gated
components/               shared UI (Nav, Footer, cards, section layout)
data/                     JSON content — edit these, not the components
```

## Content still needed from the eboard

- Real officer names, roles, majors, and headshots → `data/eboard.json`
- Real event calendar → `data/events.json`
- Real student spotlight quotes + photos → `data/spotlights.json`
- Real GBM decks and notes → `data/gbm.json` (placeholder Drive links right now)
- A chapter email inbox for the footer / opportunities submissions
- Instagram and LinkedIn URLs (currently placeholders in `components/Footer.tsx`)
