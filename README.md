# CDS Atlas — Consumer Decision Survey, Explained

An interactive explainer for the **Consumer Decision Survey (A–F) — Class A, Part B (Group Comparison Table)**: 14 real purchase stories from Indonesian consumers, mapped across 9 dimensions of consumer behavior.

The dense source table becomes:

- **Hero** — what the survey is, with headline stats
- **Framework** — the 9 analytical "lenses" (the table's columns) explained
- **Case index** — 7 case studies (CDS A–F + CDS F·Giga) with domain chips, prices and involvement meters
- **Case detail pages** — each respondent as a "dossier": demographics, DMU roles, trigger & source, alternatives, the purchase sequence as a numbered stepper, and the post-purchase metaphor as a pull-quote
- **By the numbers** (`/#data`) — aggregated dashboard: a log-scale price spectrum of all 8 priced purchases, involvement distribution, channel mix, and DMU composition, with headline stats (median price ≈ IDR 9 M, range IDR 40 K–21 M)
- **Cross-case insights** (`/#insights`) — the 4 "what surprised our group" dimensions (Surprise / Pattern / Within-category / Across-category)
- **Beyond the table** (`/#analysis`) — six additional analysis notes: effort vs price, funding & friction, ecosystem walls, promo timing, grooming trust loops, metaphor taxonomy
- **Metaphor glossary** (`/#metaphors`) — all 13 relationship metaphors ("Personal OS Investment", "Strategic Armor", "Partner"…) with meanings
- **Full comparison table** (`/table`) — every story × every dimension in one reference table, faithful to the source layout

## Stack

- Next.js 16 (App Router, fully static — every route prerendered)
- Tailwind CSS v4
- Fonts: Fraunces (display), Instrument Sans (body), Spline Sans Mono (data labels) via `next/font`
- No client-side data fetching; content lives in `src/lib/data.ts`

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy to Vercel

**Option 1 — CLI (one-time login):**

```bash
npx vercel login
npx vercel          # preview deployment
npx vercel --prod   # production
```

**Option 2 — Git integration:**

1. Push this folder to a GitHub repository
2. In [vercel.com/new](https://vercel.com/new), import the repo — zero config needed (Next.js is auto-detected)
3. Deploy

## Editing content

All survey content is typed and centralized:

- `src/lib/data.ts` — cases, stories, framework lenses, insights, metaphors, team
- Each `Story` holds one respondent's purchase decision (involvement, DMU, trigger, alternatives, channel steps, post-purchase metaphor)
