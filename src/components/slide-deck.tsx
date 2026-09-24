"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  cases,
  insights,
  lenses,
  metaphors,
  groupAnalysis,
  analysisNotes,
  team,
  siteUrl,
  involvementLabel,
} from "@/lib/data";
import { DomainChip, domainStyles } from "@/components/domain-chip";

type SlideDef =
  | { kind: "title" }
  | { kind: "framework" }
  | { kind: "case"; caseIdx: number }
  | { kind: "story"; caseIdx: number; storyIdx: number }
  | { kind: "insight"; idx: number }
  | { kind: "group"; idx: number }
  | { kind: "patterns"; idx: number }
  | { kind: "metaphors" }
  | { kind: "closing" };

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const groupChunks = chunk(groupAnalysis, 2);
const patternChunks = chunk(analysisNotes, 3);

const slides: SlideDef[] = [
  { kind: "title" },
  { kind: "framework" },
  ...cases.flatMap((_, caseIdx): SlideDef[] => [
    { kind: "case", caseIdx },
    ...cases[caseIdx].stories.map(
      (_, storyIdx): SlideDef => ({ kind: "story", caseIdx, storyIdx }),
    ),
  ]),
  ...insights.map((_, idx): SlideDef => ({ kind: "insight", idx })),
  ...groupChunks.map((_, idx): SlideDef => ({ kind: "group", idx })),
  ...patternChunks.map((_, idx): SlideDef => ({ kind: "patterns", idx })),
  { kind: "metaphors" },
  { kind: "closing" },
];

function slideMeta(s: SlideDef): { label: string; section: string } {
  switch (s.kind) {
    case "title":
      return { label: "Title", section: "Intro" };
    case "framework":
      return { label: "The nine lenses", section: "Framework" };
    case "case": {
      const c = cases[s.caseIdx];
      return { label: `${c.code} — ${c.title}`, section: "Cases" };
    }
    case "story": {
      const c = cases[s.caseIdx];
      return {
        label: `${c.code} · ${c.stories[s.storyIdx].respondent}`,
        section: "Cases",
      };
    }
    case "insight":
      return { label: insights[s.idx].dimension, section: "Insights" };
    case "group":
      return { label: "Group analysis", section: "Analysis" };
    case "patterns":
      return { label: "Further patterns", section: "Analysis" };
    case "metaphors":
      return { label: "The metaphor glossary", section: "Glossary" };
    case "closing":
      return { label: "Thank you", section: "Closing" };
  }
}

/* ---------------- slide bodies ---------------- */

function TitleSlide() {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="eyebrow">Consumer Decision Survey (A–F) · Class A</p>
      <h1 className="font-display mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
        Part B — Group Comparison{" "}
        <em className="text-accent">Table</em>.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Fourteen real purchases by Indonesian consumers, mapped across nine
        dimensions of consumer behavior — from trigger to post-purchase
        metaphor.
      </p>
      <ul className="mt-10 grid max-w-3xl gap-x-8 gap-y-2 sm:grid-cols-2">
        {team.map((m) => (
          <li key={m.role} className="flex items-baseline gap-3 text-sm">
            <span className="font-display w-5 text-base font-semibold text-accent">
              {m.role}
            </span>
            <span className="font-medium">{m.name}</span>
            <span className="tnum ml-auto font-mono text-xs text-ink-faint">
              {m.id}
            </span>
          </li>
        ))}
      </ul>
      <p className="tnum mt-8 font-mono text-xs text-ink-faint">
        {siteUrl.replace("https://", "")}
      </p>
    </div>
  );
}

function FrameworkSlide() {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="eyebrow">Framework</p>
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Nine lenses on one purchase.
      </h2>
      <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {[...lenses,
          {
            n: "09",
            name: "Category & Interview",
            question: "Where does the case sit?",
          },
        ].map((l) => (
          <li key={l.n} className="flex gap-3">
            <span className="tnum font-mono text-[11px] text-accent">
              {l.n}
            </span>
            <span>
              <span className="block text-sm font-semibold">{l.name}</span>
              <span className="block text-xs text-ink-soft italic">
                {l.question}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseSlide({ caseIdx }: { caseIdx: number }) {
  const c = cases[caseIdx];
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="eyebrow">
        {c.code} · Interviewer: {c.interviewer}
      </p>
      <div className="mt-4 flex items-start gap-6">
        <span
          aria-hidden
          className="font-display -mt-2 text-8xl leading-none font-semibold text-line select-none sm:text-9xl"
        >
          {c.letter}
        </span>
        <div className="min-w-0">
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
            {c.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {c.tagline}
          </p>
        </div>
      </div>
      <ul className="mt-10 space-y-3">
        {c.stories.map((s, i) => (
          <li
            key={s.respondent}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-line bg-card px-5 py-3.5"
          >
            <span className="tnum font-mono text-[10px] text-ink-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold">{s.respondent}</span>
            <span className="text-sm text-ink-soft">{s.product}</span>
            <DomainChip domain={s.domain} />
            {s.price && (
              <span className="tnum font-mono text-xs text-ink-faint">
                {s.price}
              </span>
            )}
            <span className="ml-auto hidden sm:block">
              <span className="font-mono text-[10px] tracking-[0.12em] text-ink-faint uppercase">
                {involvementLabel[s.involvement.level]} involvement
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-line pt-3">
      <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
        {label}
      </p>
      <div className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-ink-soft">
        {children}
      </div>
    </div>
  );
}

function StorySlide({
  caseIdx,
  storyIdx,
}: {
  caseIdx: number;
  storyIdx: number;
}) {
  const c = cases[caseIdx];
  const s = c.stories[storyIdx];
  const pp = s.postPurchase;
  return (
    <div className="flex h-full flex-col justify-center gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">
            {c.code} · Story {String(storyIdx + 1).padStart(2, "0")} of{" "}
            {String(c.stories.length).padStart(2, "0")}
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {s.respondent}
          </h2>
          <p className="mt-1 text-sm text-ink-faint">
            {s.profile.join(" · ")}
          </p>
        </div>
        <div className="rounded-lg border border-line bg-card px-5 py-3 text-right">
          <p className="text-sm font-semibold">{s.product}</p>
          <p className="mt-1 flex items-center justify-end gap-2">
            <DomainChip domain={s.domain} />
            {s.price && (
              <span className="tnum font-mono text-xs text-ink-faint">
                {s.price}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="grid gap-x-8 gap-y-5 md:grid-cols-3">
        <MiniField label={`Involvement — ${involvementLabel[s.involvement.level]}`}>
          <p>{s.involvement.text}</p>
        </MiniField>
        <MiniField label="Buying center (DMU)">
          <p>{s.dmu.roles}</p>
          {s.dmu.influencer && <p>Influencers: {s.dmu.influencer}</p>}
        </MiniField>
        <MiniField label="Trigger & source">
          <p>{s.trigger.need}</p>
          <p className="text-ink-faint">Source: {s.trigger.source}</p>
        </MiniField>
      </div>

      <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
        <MiniField label="Alternatives → outcome">
          <p>
            {s.alternatives.considered}{" "}
            <span className="font-medium text-ink">
              Outcome: {s.alternatives.outcome}
            </span>
          </p>
        </MiniField>
        <MiniField label={`Channel — ${s.channel.name}`}>
          <ol className="flex flex-wrap gap-1.5">
            {s.channel.steps.map((step, i) => (
              <li
                key={i}
                className="flex items-center gap-1.5 rounded-full border border-line bg-card px-2.5 py-1 text-[11px] text-ink-soft"
              >
                <span
                  aria-hidden
                  className="tnum font-mono text-[9px] text-accent"
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </MiniField>
      </div>

      <div className="flex flex-col gap-3 rounded-xl bg-ink p-5 text-paper sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] tracking-[0.16em] text-paper/50 uppercase">
            {pp.scores ? pp.scores.join(" · ") + " — " : ""}Relationship
            metaphor
          </p>
          {pp.metaphor ? (
            <p className="font-display mt-1 text-2xl font-semibold italic">
              “{pp.metaphor}”
              {pp.metaphorMeaning && (
                <span className="mt-1 block font-sans text-[13px] font-normal text-paper/70 not-italic">
                  {pp.metaphorMeaning}
                </span>
              )}
            </p>
          ) : (
            pp.gapNote && (
              <p className="mt-1 text-[13px] text-paper/70 italic">
                {pp.gapNote}
              </p>
            )
          )}
        </div>
        {pp.quote && (
          <blockquote className="shrink-0 border-l-2 border-accent pl-4 text-sm leading-relaxed italic sm:max-w-xs">
            “{pp.quote}”
          </blockquote>
        )}
      </div>
    </div>
  );
}

function InsightSlide({ idx }: { idx: number }) {
  const ins = insights[idx];
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="eyebrow">Cross-case insight {ins.n} of 04</p>
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
        {ins.dimension}
      </h2>
      <div className="mt-6 rounded-lg border border-accent/40 bg-accent/10 p-5">
        <p className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
          The surprise
        </p>
        <p className="font-display mt-1.5 text-lg leading-relaxed italic sm:text-xl">
          {ins.surprise}
        </p>
      </div>
      <div className="mt-6 grid gap-6 border-t border-line pt-6 md:grid-cols-3">
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
            Pattern
          </p>
          <ul className="mt-2 space-y-2">
            {ins.pattern.map((p) => (
              <li key={p} className="text-[13px] leading-relaxed text-ink-soft">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
            Within category
          </p>
          <ul className="mt-2 space-y-2">
            {ins.within.map((w) => (
              <li
                key={w.label}
                className="flex gap-2 text-[13px] leading-relaxed text-ink-soft"
              >
                <span
                  aria-hidden
                  className={`mt-1.5 size-1.5 shrink-0 rounded-full ${domainStyles[w.domain === "all" ? "tech" : w.domain].dot}`}
                />
                <span>
                  <strong className="font-semibold text-ink">{w.label}:</strong>{" "}
                  {w.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
            Across category
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
            {ins.across}
          </p>
        </div>
      </div>
    </div>
  );
}

function GroupSlide({ idx }: { idx: number }) {
  const notes = groupChunks[idx];
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="eyebrow">
        Group analysis · revised insights
      </p>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {notes.map((note) => (
          <article key={note.n}>
            <p className="tnum font-mono text-[11px] text-accent">{note.n}</p>
            <h3 className="font-display mt-2 text-2xl leading-snug font-semibold tracking-tight text-balance sm:text-3xl">
              {note.title}
            </h3>
            {note.body.map((para) => (
              <p
                key={para.slice(0, 32)}
                className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-[15px]"
              >
                {para}
              </p>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}

function PatternsSlide({ idx }: { idx: number }) {
  const notes = patternChunks[idx];
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="eyebrow">Further patterns — our reading</p>
      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        {notes.map((note) => (
          <article key={note.n}>
            <p className="tnum font-mono text-[11px] text-accent">{note.n}</p>
            <h3 className="font-display mt-2 text-xl leading-snug font-semibold tracking-tight text-balance">
              {note.title}
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
              {note.body[0]}
            </p>
            <p className="mt-3 flex flex-wrap gap-1.5">
              {note.seenIn.map((ref) => (
                <span
                  key={ref}
                  className="rounded-full border border-line bg-card px-2 py-0.5 font-mono text-[10px] text-ink-soft"
                >
                  {ref}
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function MetaphorsSlide() {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="eyebrow">Glossary</p>
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Thirteen purchases, thirteen metaphors.
      </h2>
      <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {metaphors.map((m) => (
          <li key={`${m.name}-${m.caseCode}`} className="flex gap-2.5">
            <span
              aria-hidden
              className={`mt-2 size-1.5 shrink-0 rounded-full ${domainStyles[m.domain].dot}`}
            />
            <span>
              <span className="font-display block text-lg leading-tight font-semibold italic">
                “{m.name}”
              </span>
              <span className="block text-xs leading-snug text-ink-soft">
                {m.meaning}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClosingSlide() {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="eyebrow">Closing</p>
      <p className="font-display mt-4 max-w-3xl text-2xl leading-snug font-medium tracking-tight text-balance sm:text-4xl">
        Buyers rarely describe products as products. Tech becomes an{" "}
        <em>investment</em>, fashion becomes <em>armor</em>, and routines
        become <em>dependencies</em> — the category shapes the relationship,
        more than the price ever does.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
        {team.map((m) => (
          <span key={m.role} className="flex items-baseline gap-2 text-sm">
            <span className="font-display font-semibold text-accent">
              {m.role}
            </span>
            {m.name}
          </span>
        ))}
      </div>
      <p className="tnum mt-8 font-mono text-xs text-ink-faint">
        {siteUrl.replace("https://", "")} — full data, cases and dashboard on
        the site.
      </p>
    </div>
  );
}

function SlideBody({ slide }: { slide: SlideDef }) {
  switch (slide.kind) {
    case "title":
      return <TitleSlide />;
    case "framework":
      return <FrameworkSlide />;
    case "case":
      return <CaseSlide caseIdx={slide.caseIdx} />;
    case "story":
      return <StorySlide caseIdx={slide.caseIdx} storyIdx={slide.storyIdx} />;
    case "insight":
      return <InsightSlide idx={slide.idx} />;
    case "group":
      return <GroupSlide idx={slide.idx} />;
    case "patterns":
      return <PatternsSlide idx={slide.idx} />;
    case "metaphors":
      return <MetaphorsSlide />;
    case "closing":
      return <ClosingSlide />;
  }
}

/* ---------------- deck chrome & navigation ---------------- */

export function SlideDeck() {
  const router = useRouter();
  const touchStartX = useRef<number | null>(null);
  const total = slides.length;

  // The URL hash is the source of truth (1-based), so every slide
  // deep-links (#7) and browser Back steps backward through the deck.
  const subscribe = useCallback((onStoreChange: () => void) => {
    window.addEventListener("hashchange", onStoreChange);
    return () => window.removeEventListener("hashchange", onStoreChange);
  }, []);
  const getSnapshot = useCallback(() => {
    const n = parseInt(window.location.hash.slice(1), 10);
    return Number.isInteger(n) && n >= 1 && n <= total ? n : 1;
  }, [total]);
  const getServerSnapshot = useCallback(() => 1, []);
  const index = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const goTo = useCallback(
    (n: number) => {
      const clamped = Math.max(1, Math.min(n, total));
      if (getSnapshot() !== clamped) {
        window.location.hash = `#${clamped}`;
      }
    },
    [getSnapshot, total],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const exit = useCallback(() => {
    router.push("/");
  }, [router]);

  const toggleFullscreen = useCallback(() => {
    try {
      if (!document.fullscreenElement) {
        void document.documentElement.requestFullscreen?.();
      } else {
        void document.exitFullscreen?.();
      }
    } catch {
      // fullscreen unavailable — ignore
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          goTo(1);
          break;
        case "End":
          e.preventDefault();
          goTo(total);
          break;
        case "Escape":
          exit();
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, exit, toggleFullscreen, total]);

  // lock page scroll while the deck is open
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const current = slides[index - 1];
  const meta = useMemo(() => slideMeta(current), [current]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-paper"
      role="region"
      aria-roledescription="presentation"
      aria-label="CDS Atlas presentation"
    >
      {/* progress bar */}
      <div className="h-1 w-full bg-line-soft">
        <div
          className="h-full bg-accent transition-[width] duration-300"
          style={{ width: `${(index / total) * 100}%` }}
        />
      </div>

      {/* top chrome */}
      <div className="flex items-center justify-between px-5 py-3 sm:px-8">
        <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
          CDS Atlas · Presentation
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen (F)"
            className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-ink-soft uppercase transition-colors hover:border-accent hover:text-accent"
          >
            ⛶ Fullscreen
          </button>
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              exit();
            }}
            aria-label="Exit presentation (Escape)"
            className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-ink-soft uppercase transition-colors hover:border-accent hover:text-accent"
          >
            ✕ Exit
          </Link>
        </div>
      </div>

      {/* slide */}
      <div
        className="min-h-0 flex-1 overflow-y-auto"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 60) (dx < 0 ? next : prev)();
          touchStartX.current = null;
        }}
      >
        <div
          key={index}
          className="slide-enter mx-auto flex h-full max-w-6xl flex-col justify-center px-5 py-6 sm:px-8"
        >
          <SlideBody slide={current} />
        </div>
      </div>

      {/* bottom chrome */}
      <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <p className="min-w-0 truncate font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
          {meta.section} — {meta.label}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <span aria-live="polite" className="sr-only">
            Slide {index} of {total}: {meta.label}
          </span>
          <span className="tnum font-mono text-xs text-ink-soft">
            {index} / {total}
          </span>
          <button
            type="button"
            onClick={prev}
            disabled={index === 1}
            aria-label="Previous slide (←)"
            className="grid size-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-line disabled:hover:text-ink"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={index === total}
            aria-label="Next slide (→)"
            className="grid size-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-line disabled:hover:text-ink"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      {/* first-slide hint */}
      {index === 1 && (
        <p className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 rounded-full border border-line bg-card px-4 py-1.5 font-mono text-[10px] tracking-[0.12em] whitespace-nowrap text-ink-faint uppercase">
          Navigate: → ← keys · swipe · F fullscreen · ESC exit
        </p>
      )}
    </div>
  );
}
