import Link from "next/link";
import {
  cases,
  insights,
  lenses,
  metaphors,
  domainLabels,
  analysisNotes,
  groupAnalysis,
} from "@/lib/data";
import { domainStyles } from "@/components/domain-chip";
import { InvolvementMeter } from "@/components/involvement-meter";
import { Reveal } from "@/components/reveal";
import { DataDashboard } from "@/components/data-dashboard";
import { ArrowRightIcon, PlayIcon } from "@/components/icons";

const stats = [
  { n: "7", label: "Case studies" },
  { n: "14", label: "Purchase stories" },
  { n: "9", label: "Analytical dimensions" },
  { n: "4", label: "Cross-case surprises" },
];

const marqueeItems = metaphors.map((m) => ({
  name: m.name,
  domain: m.domain,
}));

function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
          {lede}
        </p>
      )}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="letter-outline pointer-events-none absolute -top-10 -right-6 hidden text-[22rem] lg:block"
        >
          A–F
        </div>
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
          <Reveal>
            <p className="eyebrow">
              Consumer Decision Survey · Class A · Part B
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-5 max-w-3xl text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
              Fourteen real purchases, read like{" "}
              <em className="text-accent">stories</em>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              The group interviewed 14 Indonesian consumers about their latest
              purchases — from a IDR&nbsp;35,000 hair-color touch-up to a{" "}
              <span className="tnum">IDR&nbsp;21&nbsp;M</span> smartphone — and
              mapped every decision across nine dimensions of consumer
              behavior. This site makes the table readable: browse the seven
              case studies, follow each purchase step by step, and see what
              surprised us when the cases were compared.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/#cases"
                className="inline-flex items-center gap-2.5 border border-ink bg-ink px-6 py-3 font-mono text-xs tracking-[0.14em] text-paper uppercase transition-colors hover:border-accent-deep hover:bg-accent-deep"
              >
                Explore the cases
                <ArrowRightIcon className="text-accent" />
              </Link>
              <Link
                href="/#insights"
                className="font-mono text-xs tracking-[0.14em] text-ink-soft uppercase underline-offset-4 decoration-line transition-colors hover:text-accent-deep hover:decoration-accent hover:underline"
              >
                What surprised us
              </Link>
              <Link
                href="/present"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-accent-deep uppercase transition-colors hover:text-accent"
              >
                <PlayIcon className="text-accent" />
                Open presentation mode
              </Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-14 grid grid-cols-2 border-y border-line sm:grid-cols-4">
              {stats.map((s, i) => {
                const cellBorders = [
                  "border-r border-b sm:border-b-0",
                  "border-b sm:border-r sm:border-b-0",
                  "border-r",
                  "",
                ][i];
                return (
                  <div
                    key={s.label}
                    className={`border-line px-2 py-5 sm:px-6 ${cellBorders}`}
                  >
                    <dd className="font-display tnum text-4xl font-semibold text-accent">
                      {s.n}
                    </dd>
                    <dt className="mt-1 font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
                      {s.label}
                    </dt>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ============ METAPHOR MARQUEE ============ */}
      <div
        aria-hidden
        className="marquee overflow-hidden border-b border-line bg-paper-deep py-3.5"
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeItems.map((m, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="flex items-center gap-3 pr-10"
                >
                  <span
                    className={`size-1.5 ${domainStyles[m.domain].dot}`}
                  />
                  <span className="font-display text-lg whitespace-nowrap italic">
                    {m.name}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ FRAMEWORK ============ */}
      <section
        id="framework"
        className="scroll-mt-20 border-b border-line"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHead
            eyebrow="The framework"
            title="Nine lenses on one purchase."
            lede="Every interview in the survey is broken down with the same analytical structure — the nine columns of the comparison table. Read them once, and every case page becomes a story you already know how to read."
          />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {lenses.map((lens, i) => (
              <Reveal key={lens.n} delay={(i % 4) * 70} className="h-full">
                <div className="flex h-full flex-col bg-paper p-6">
                  <p className="tnum font-mono text-[11px] text-accent">
                    {lens.n}
                  </p>
                  <h3 className="font-display mt-2 text-xl leading-snug font-semibold tracking-tight">
                    {lens.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium text-accent-deep italic">
                    {lens.question}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {lens.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={210} className="h-full">
              <div className="flex h-full flex-col bg-ink p-6 text-paper">
                <p className="tnum font-mono text-[11px] text-paper/60">
                  09
                </p>
                <h3 className="font-display mt-2 text-xl leading-snug font-semibold tracking-tight">
                  Category & Interview
                </h3>
                <p className="mt-1 text-[13px] font-medium text-paper/70 italic">
                  Where does this case sit?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  The grouping column: each case (CDS&nbsp;A–F) carries its own
                  interviewer, respondents and product domain — Tech, Fashion,
                  Personal Care, Beauty, Consumables, or Sports gear.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CASES INDEX ============ */}
      <section id="cases" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHead
            eyebrow="The cases"
            title="Seven case studies. Start anywhere."
            lede="Each case pairs two respondents with two purchase stories. Open one to see every dimension side by side — demographics, DMU, triggers, channel sequence and the post-purchase metaphor."
          />
          <Reveal delay={120}>
            <p className="mt-4">
              <Link
                href="/table"
                className="link-quiet font-mono text-xs tracking-[0.14em] text-ink-soft uppercase"
              >
                Prefer the raw view? Open the full comparison table →
              </Link>
            </p>
          </Reveal>
          <div className="mt-12 border-t border-line">
            {cases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 40}>
                <Link
                  href={`/cases/${c.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-6 transition-colors hover:bg-paper-deep/60 sm:grid-cols-[auto_1fr_auto_auto] sm:gap-8 sm:py-7"
                >
                  <span
                    aria-hidden
                    className="font-display w-14 text-center text-5xl font-semibold text-line transition-colors group-hover:text-accent sm:w-20 sm:text-6xl"
                  >
                    {c.letter}
                  </span>
                  <span className="min-w-0">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
                      {c.code} · {c.interviewer}
                    </span>
                    <span className="font-display mt-1 block text-2xl font-semibold tracking-tight text-balance group-hover:text-accent-deep sm:text-3xl">
                      {c.title}
                    </span>
                    <span className="mt-2 hidden max-w-xl text-sm leading-relaxed text-ink-soft md:block">
                      {c.tagline}
                    </span>
                    <span className="mt-3 flex flex-wrap gap-1.5">
                      {c.stories.map((s) => (
                        <span
                          key={s.respondent + s.product}
                          className="inline-flex items-center gap-1.5 border border-line bg-card px-2.5 py-1 text-[11px] text-ink-soft"
                        >
                          <span
                            aria-hidden
                            className={`size-1.5 ${domainStyles[s.domain].dot}`}
                          />
                          {s.product}
                          {s.price && (
                            <span className="tnum font-mono text-[10px] text-ink-faint">
                              · {s.price}
                            </span>
                          )}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="hidden flex-col items-end gap-2 sm:flex">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
                      Involvement
                    </span>
                    <span className="flex flex-col gap-1.5">
                      {c.stories.map((s) => (
                        <InvolvementMeter
                          key={s.respondent}
                          level={s.involvement.level}
                          compact
                        />
                      ))}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="pr-1 text-ink-faint transition-all group-hover:translate-x-1 group-hover:text-accent"
                  >
                    <ArrowRightIcon size={18} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DATA DASHBOARD ============ */}
      <DataDashboard />

      {/* ============ INSIGHTS ============ */}
      <section
        id="insights"
        className="scroll-mt-20 border-b border-line bg-ink text-paper"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
              Cross-case analysis
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
              What surprised our group.
            </h2>
            <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-paper/70">
              Reading fourteen stories side by side surfaced four patterns
              nobody expected going in — from cold, spreadsheet-like reasons
              behind luxury buys, to gifts that erase purchase friction
              entirely.
            </p>
          </Reveal>

          <div className="mt-14 border-t-2 border-accent">
            {insights.map((ins, i) => (
              <Reveal key={ins.n} delay={i * 50}>
                <article className="border-b border-paper/15 py-10 first:pt-12 last:pb-0 sm:py-12">
                  <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
                    <div>
                      <p className="tnum font-mono text-[11px] text-accent">
                        {ins.n}
                      </p>
                      <h3 className="font-display mt-2 text-2xl leading-snug font-semibold tracking-tight text-balance sm:text-3xl">
                        {ins.dimension}
                      </h3>
                    </div>
                    <div className="border-l-2 border-accent bg-accent/10 p-5">
                      <p className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                        The surprise
                      </p>
                      <p className="font-display mt-2 text-lg leading-relaxed italic">
                        {ins.surprise}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-8 border-t border-paper/15 pt-8 md:grid-cols-3">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.16em] text-paper/50 uppercase">
                        Pattern across interviews
                      </p>
                      <ul className="mt-3 space-y-3">
                        {ins.pattern.map((p) => (
                          <li
                            key={p}
                            className="text-sm leading-relaxed text-paper/75"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.16em] text-paper/50 uppercase">
                        Within-category behavior
                      </p>
                      <ul className="mt-3 space-y-3">
                        {ins.within.map((w) => (
                          <li
                            key={w.label}
                            className="flex gap-2.5 text-sm leading-relaxed text-paper/75"
                          >
                            <span
                              aria-hidden
                              className={`mt-1.5 size-1.5 shrink-0 ${domainStyles[w.domain === "all" ? "tech" : w.domain].dot}`}
                            />
                            <span>
                              <strong className="font-semibold text-paper">
                                {w.label}:
                              </strong>{" "}
                              {w.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.16em] text-paper/50 uppercase">
                        Across-category behavior
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-paper/75">
                        {ins.across}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GROUP ANALYSIS ============ */}
      <section id="analysis" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHead
            eyebrow="Group analysis · revised insights"
            title="What the group concluded."
            lede="Reading the fourteen stories as one dataset, the group revised its initial understanding of consumer involvement. Eight conclusions — on similarities, involvement, surprising cases, motivations, life stages, and how channels shape satisfaction."
          />
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
            {groupAnalysis.map((note, i) => (
              <Reveal key={note.n} delay={(i % 2) * 70} className="h-full">
                <article className="h-full bg-paper p-6 sm:p-8">
                  <p className="tnum font-mono text-[11px] text-accent">
                    {note.n}
                  </p>
                  <h3 className="font-display mt-2 text-2xl leading-snug font-semibold tracking-tight text-balance">
                    {note.title}
                  </h3>
                  {note.body.map((para) => (
                    <p
                      key={para.slice(0, 32)}
                      className="mt-3 text-sm leading-relaxed text-ink-soft"
                    >
                      {para}
                    </p>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BEYOND THE TABLE ============ */}
      <section className="border-b border-line bg-paper-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHead
            eyebrow="Further patterns"
            title="Beyond the table — our reading."
            lede="Six more patterns emerge when the stories are cross-examined — about effort, money, ecosystems, timing, trust, and the words people use for the things they own."
          />
          <div className="mt-12 border-t border-line">
            {analysisNotes.map((note, i) => (
              <Reveal key={note.n} delay={i * 40}>
                <article className="grid gap-x-10 gap-y-3 border-b border-line py-7 sm:grid-cols-[auto_1fr_1.5fr]">
                  <p className="tnum font-display text-3xl font-semibold text-line sm:text-4xl">
                    {note.n}
                  </p>
                  <div>
                    <h3 className="font-display text-xl leading-snug font-semibold tracking-tight text-balance sm:text-2xl">
                      {note.title}
                    </h3>
                    <p className="mt-3 flex flex-wrap items-center gap-1.5">
                      <span className="mr-1 font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
                        Seen in
                      </span>
                      {note.seenIn.map((ref) => (
                        <span
                          key={ref}
                          className="border border-line bg-card px-2 py-0.5 font-mono text-[10px] text-ink-soft"
                        >
                          {ref}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    {note.body.map((para) => (
                      <p
                        key={para.slice(0, 32)}
                        className="mt-2 text-sm leading-relaxed text-ink-soft first:mt-0"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ METAPHORS ============ */}
      <section id="metaphors" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHead
            eyebrow="The glossary"
            title="Thirteen purchases, thirteen metaphors."
            lede="The survey’s most memorable column: when asked about the product, every buyer reached for a metaphor. Together they form a vocabulary of how Indonesians relate to the things they own — Investment, Armor, Dependency, Best Friend, Partner."
          />
          <ol className="mt-12 border-t border-line">
            {metaphors.map((m, i) => (
              <Reveal key={`${m.name}-${m.caseCode}`} delay={i * 30}>
                <li className="group grid gap-x-8 gap-y-1 border-b border-line py-6 transition-colors hover:bg-paper-deep/50 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline">
                  <span className="tnum font-mono text-[11px] text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <blockquote className="font-display text-2xl leading-tight font-semibold tracking-tight text-balance italic transition-colors group-hover:text-accent-deep sm:text-3xl">
                      “{m.name}”
                    </blockquote>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-soft">
                      {m.meaning}
                    </p>
                  </div>
                  <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase sm:justify-self-end sm:text-right">
                    <span
                      aria-hidden
                      className={`size-1.5 ${domainStyles[m.domain].dot}`}
                    />
                    {domainLabels[m.domain]} · {m.caseCode}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <div className="mt-14 border-y-2 border-ink bg-paper-deep px-2 py-10 text-center sm:px-8">
              <p
                aria-hidden
                className="font-display text-6xl leading-none font-semibold text-accent"
              >
                “
              </p>
              <p className="font-display mx-auto mt-2 max-w-3xl text-2xl leading-snug font-medium tracking-tight text-balance sm:text-[1.7rem]">
                Buyers rarely describe products as products. Tech becomes an{" "}
                <em>investment</em>, fashion becomes <em>armor</em>, and
                routines become <em>dependencies</em> — the category shapes the
                relationship, more than the price ever does.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ DOMAIN LEGEND ============ */}
      <section className="border-t border-line bg-paper-deep">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-5 py-6 sm:px-8">
          <span className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
            Domains
          </span>
          {(Object.keys(domainLabels) as Array<keyof typeof domainLabels>).map(
            (d) => (
              <span
                key={d}
                className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] text-ink-soft uppercase"
              >
                <span
                  aria-hidden
                  className={`size-1.5 ${domainStyles[d].dot}`}
                />
                {domainLabels[d]}
              </span>
            ),
          )}
        </div>
      </section>
    </>
  );
}
