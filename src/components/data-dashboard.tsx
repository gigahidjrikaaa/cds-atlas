import {
  pricePoints,
  priceUnstated,
  involvementCounts,
  channelCounts,
  dmuCounts,
  headlineStats,
} from "@/lib/data";
import { domainStyles } from "@/components/domain-chip";
import { Reveal } from "@/components/reveal";

/* log-scale axis: IDR 10^4.5 (≈32 K) → 10^7.4 (≈25 M) */
const LOG_MIN = 4.5;
const LOG_SPAN = 7.4 - 4.5;
const pct = (idr: number) =>
  ((Math.log10(idr) - LOG_MIN) / LOG_SPAN) * 100;

const ticks = [
  { v: 100000, label: "100 K" },
  { v: 1000000, label: "1 M" },
  { v: 10000000, label: "10 M" },
];

function Card({
  title,
  note,
  children,
  className = "",
}: {
  title: string;
  note: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-line bg-card p-6 ${className}`}>
      <h3 className="font-display text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-1 text-[13px] leading-relaxed text-ink-faint">{note}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function BarChart({
  rows,
  total,
  color = "bg-ink",
}: {
  rows: { label: string; count: number }[];
  total: number;
  color?: string;
}) {
  return (
    <ul className="space-y-3">
      {rows.map((r) => (
        <li
          key={r.label}
          className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1"
        >
          <span className="text-[13px] leading-snug text-ink-soft">
            {r.label}
          </span>
          <span className="tnum font-mono text-xs text-ink">
            {r.count}/{total}
          </span>
          <span className="col-span-2 flex h-2 overflow-hidden rounded-full bg-line-soft">
            <span
              className={`bar-fill rounded-full ${color}`}
              style={
                { "--bar-w": `${(r.count / total) * 100}%` } as React.CSSProperties
              }
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function DataDashboard() {
  return (
    <section id="data" className="scroll-mt-20 border-b border-line bg-paper-deep/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow">The data</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            By the numbers.
          </h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
            The fourteen stories, aggregated. Four views of the same table:
            what things cost, how much thought they took, where money changed
            hands, and who was actually deciding.
          </p>
        </Reveal>

        {/* headline stats */}
        <Reveal delay={80}>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
            {headlineStats.map((s) => (
              <div key={s.label} className="bg-card px-6 py-5">
                <dd className="font-display tnum text-3xl font-semibold text-accent">
                  {s.n}
                </dd>
                <dt className="mt-1 font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* price spectrum */}
        <Reveal delay={60}>
          <div className="mt-6">
            <Card
              title="The price spectrum"
              note="All 8 purchases with a stated price, on a logarithmic scale — two worlds: one under IDR 100 K, a cluster between IDR 6–21 M. The 6 stories without a stated price are excluded."
              className="overflow-x-auto"
            >
              <div className="min-w-[540px]">
                {/* axis */}
                <div className="relative ml-36 h-6 border-b border-line sm:ml-44">
                  {ticks.map((t) => (
                    <span
                      key={t.label}
                      aria-hidden
                      className="absolute bottom-0 -translate-x-1/2"
                      style={{ left: `${pct(t.v)}%` }}
                    >
                      <span className="block h-2 w-px bg-line" />
                      <span className="tnum absolute top-2.5 left-1/2 -translate-x-1/2 font-mono text-[10px] whitespace-nowrap text-ink-faint">
                        {t.label}
                      </span>
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-2.5">
                  {pricePoints.map((p) => {
                    const s = domainStyles[p.domain];
                    return (
                      <li
                        key={p.label}
                        className="grid grid-cols-[8.5rem_1fr] items-center sm:grid-cols-[11rem_1fr]"
                      >
                        <span className="pr-3 text-right text-[11.5px] leading-tight text-ink-soft">
                          {p.label}
                          <span className="tnum block font-mono text-[10px] text-ink-faint">
                            IDR {p.price}
                          </span>
                        </span>
                        <span className="relative block h-5">
                          <span
                            aria-hidden
                            className={`absolute top-1/2 h-px bg-line-soft`}
                            style={{ left: 0, right: 0 }}
                          />
                          <span
                            aria-hidden
                            className={`absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-3 ring-card ${s.dot}`}
                            style={{ left: `${pct(p.value)}%` }}
                          />
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-5 border-t border-line-soft pt-4 text-xs leading-relaxed text-ink-faint">
                  Not stated in the source table: {priceUnstated.join(" · ")}.
                </p>
              </div>
            </Card>
          </div>
        </Reveal>

        {/* three bar charts */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Reveal delay={0}>
            <Card
              title="Involvement"
              note="8 of 14 purchases demanded high involvement — effort, again, is not a function of price."
            >
              <BarChart rows={involvementCounts} total={14} color="bg-accent" />
            </Card>
          </Reveal>
          <Reveal delay={70}>
            <Card
              title="Purchase channel"
              note="Offline still dominates — but online wins where research was deepest."
            >
              <BarChart rows={channelCounts} total={14} />
            </Card>
          </Reveal>
          <Reveal delay={140}>
            <Card
              title="Who decided (DMU)"
              note="Mostly sole decision-makers — only one purchase was gifted by someone else."
            >
              <BarChart rows={dmuCounts} total={14} />
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
