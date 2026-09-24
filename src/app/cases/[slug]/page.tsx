import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCase } from "@/lib/data";
import { StoryDossier } from "@/components/story-dossier";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return { title: "Case not found" };
  return {
    title: `${c.code} — ${c.title}`,
    description: c.tagline,
  };
}

export default async function CasePage({
  params,
}: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const idx = cases.findIndex((x) => x.slug === slug);
  const prev = cases[(idx + cases.length - 1) % cases.length];
  const next = cases[(idx + 1) % cases.length];

  return (
    <article className="relative overflow-hidden">
      <div
        aria-hidden
        className="letter-outline pointer-events-none absolute -top-16 -right-4 hidden text-[20rem] lg:block"
      >
        {c.letter}
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-14 pb-20 sm:px-8 sm:pt-20">
        <Link
          href="/#cases"
          className="link-quiet font-mono text-[11px] tracking-[0.16em] text-ink-soft uppercase"
        >
          ← All cases
        </Link>

        <Reveal>
          <p className="eyebrow mt-8">
            {c.code} · Interviewer: {c.interviewer}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {c.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {c.tagline}
          </p>
        </Reveal>

        {c.sourceNote && (
          <Reveal>
            <p className="mt-5 max-w-2xl border border-dashed border-line bg-card px-4 py-3 text-xs leading-relaxed text-ink-faint">
              Note: {c.sourceNote}
            </p>
          </Reveal>
        )}

        <div className="mt-12 space-y-10 sm:space-y-12">
          {c.stories.map((story, i) => (
            <Reveal key={story.respondent} delay={i * 60}>
              <StoryDossier story={story} index={i} caseCode={c.code} />
            </Reveal>
          ))}
        </div>

        {/* prev / next */}
        <nav
          aria-label="Case pagination"
          className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2"
        >
          <Link
            href={`/cases/${prev.slug}`}
            className="group bg-card p-6 transition-colors hover:bg-paper-deep sm:p-8"
          >
            <span className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
              ← Previous case
            </span>
            <span className="font-display mt-2 block text-2xl font-semibold tracking-tight group-hover:text-accent-deep">
              {prev.code} · {prev.title}
            </span>
          </Link>
          <Link
            href={`/cases/${next.slug}`}
            className="group bg-card p-6 text-right transition-colors hover:bg-paper-deep sm:p-8"
          >
            <span className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
              Next case →
            </span>
            <span className="font-display mt-2 block text-2xl font-semibold tracking-tight group-hover:text-accent-deep">
              {next.code} · {next.title}
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
