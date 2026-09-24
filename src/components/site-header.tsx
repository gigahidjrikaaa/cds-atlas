import Link from "next/link";
import { PlayIcon } from "@/components/icons";

const nav = [
  { href: "/#framework", label: "Framework" },
  { href: "/#cases", label: "Cases" },
  { href: "/#data", label: "Data" },
  { href: "/#insights", label: "Insights" },
  { href: "/#analysis", label: "Analysis" },
  { href: "/#metaphors", label: "Metaphors" },
  { href: "/#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="group flex items-baseline gap-2 whitespace-nowrap"
        >
          <span className="font-display text-xl leading-none font-semibold tracking-tight">
            CDS&nbsp;Atlas
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint uppercase transition-colors group-hover:text-accent">
            A–F · Class A
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label="Site" className="min-w-0 overflow-x-auto">
            <ul className="flex items-center gap-4 whitespace-nowrap sm:gap-5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-[11px] tracking-[0.12em] text-ink-soft uppercase underline-offset-4 decoration-line transition-colors hover:text-accent-deep hover:decoration-accent hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/present"
            className="hidden shrink-0 items-center gap-1.5 border border-ink bg-ink px-4 py-1.5 font-mono text-[11px] tracking-[0.12em] text-paper uppercase transition-colors hover:bg-accent-deep hover:border-accent-deep sm:inline-flex"
          >
            <PlayIcon className="text-accent" />
            Present
          </Link>
        </div>
      </div>
    </header>
  );
}
