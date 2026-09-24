import Link from "next/link";
import { team } from "@/lib/data";
import { PlayIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer id="about" className="scroll-mt-24 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">About this project</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance">
              Group Comparison Table, Part&nbsp;B
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
              This site is an interactive companion to the{" "}
              <em>Consumer Decision Survey (A–F) — Class A</em>: a group
              comparison table interviewing 14 Indonesian consumers about real
              purchases, analyzed across nine dimensions of consumer behavior.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-faint">
              All findings, quotes and metaphors are transcribed from the
              group’s source table; case CDS&nbsp;F·Giga extends case F with a
              second interviewer’s respondents.
            </p>
          </div>
          <div>
            <p className="eyebrow">The group</p>
            <ul className="mt-4 divide-y divide-line-soft border-y border-line-soft">
              {team.map((m) => (
                <li
                  key={m.role}
                  className="flex items-baseline gap-4 py-3"
                >
                  <span className="font-display w-6 text-lg font-semibold text-accent">
                    {m.role}
                  </span>
                  <span className="text-[14px] font-medium">{m.name}</span>
                  <span className="tnum ml-auto font-mono text-xs text-ink-faint">
                    {m.id}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-soft">
              Live site:{" "}
              <a
                href="https://cds-g4-atlas.vercel.app/"
                className="link-quiet tnum font-mono text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                cds-g4-atlas.vercel.app
              </a>
            </p>
            <Link
              href="/#cases"
              className="link-quiet mt-4 inline-block font-mono text-xs tracking-[0.14em] uppercase"
            >
              Back to the case index ↑
            </Link>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <p className="font-mono text-[11px] tracking-[0.14em] text-ink-faint uppercase">
            Consumer Behavior · MK3 · Week 4
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/present"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.14em] text-accent-deep uppercase transition-colors hover:text-accent"
            >
              <PlayIcon />
              Presentation mode
            </Link>
            <p className="font-mono text-[11px] tracking-[0.14em] text-ink-faint uppercase">
              Next.js · Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
