import Link from "next/link";

const nav = [
  { href: "/#framework", label: "Framework" },
  { href: "/#cases", label: "Cases" },
  { href: "/#data", label: "Data" },
  { href: "/#insights", label: "Insights" },
  { href: "/#analysis", label: "Analysis" },
  { href: "/#metaphors", label: "Metaphors" },
  { href: "/#about", label: "About" },
];export function SiteHeader() {
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
        <div className="flex items-center gap-3">
          <nav aria-label="Site" className="min-w-0 overflow-x-auto">
            <ul className="flex items-center gap-1 whitespace-nowrap sm:gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block rounded-full px-2.5 py-1.5 font-mono text-[11px] tracking-[0.12em] text-ink-soft uppercase transition-colors hover:bg-paper-deep hover:text-accent-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/present"
            className="hidden shrink-0 rounded-full bg-ink px-4 py-1.5 font-mono text-[11px] tracking-[0.12em] text-paper uppercase transition-colors hover:bg-accent-deep sm:inline-block"
          >
            ▶ Present
          </Link>
        </div>
      </div>
    </header>
  );
}
