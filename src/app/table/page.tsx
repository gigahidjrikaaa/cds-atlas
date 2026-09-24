import type { Metadata } from "next";
import Link from "next/link";
import { cases, involvementLabel } from "@/lib/data";
import { DomainChip } from "@/components/domain-chip";

export const metadata: Metadata = {
  title: "The full comparison table",
  description:
    "All 14 purchase stories from the Consumer Decision Survey (A–F) in one reference table — demographics, involvement, DMU, triggers, alternatives, channels and metaphors.",
};

export default function TablePage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
      <Link
        href="/#cases"
        className="link-quiet font-mono text-[11px] tracking-[0.16em] text-ink-soft uppercase"
      >
        ← Back to the survey
      </Link>
      <p className="eyebrow mt-8">Reference</p>
      <h1 className="font-display mt-3 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
        The full comparison table.
      </h1>
      <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
        Every story from all seven cases, side by side — the same data as the
        case pages, in the raw shape of the source table. Scroll horizontally
        to see every dimension.
      </p>

      <div className="mt-10 overflow-x-auto rounded-xl border border-line bg-card">
        <table className="w-full min-w-[1240px] border-collapse text-left">
          <caption className="sr-only">
            Consumer Decision Survey — all 14 purchase stories across nine
            dimensions
          </caption>
          <thead>
            <tr className="border-b border-line bg-paper-deep">
              {[
                "Case",
                "Respondent",
                "Product & price",
                "Involvement",
                "Buying center (DMU)",
                "Trigger & source",
                "Alternatives → outcome",
                "Channel & sequence",
                "Post-purchase & metaphor",
              ].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-4 py-3.5 align-bottom font-mono text-[10px] leading-snug tracking-[0.14em] text-ink-soft uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cases.flatMap((c) =>
              c.stories.map((s, i) => (
                <tr
                  key={`${c.slug}-${s.respondent}`}
                  className="border-b border-line-soft align-top last:border-b-0 even:bg-paper/60"
                >
                  <td className="px-4 py-4">
                    {i === 0 && (
                      <Link
                        href={`/cases/${c.slug}`}
                        className="font-display text-lg font-semibold whitespace-nowrap hover:text-accent-deep"
                      >
                        {c.code}
                      </Link>
                    )}
                  </td>
                  <td className="max-w-[11rem] px-4 py-4">
                    <span className="text-[13px] font-semibold">
                      {s.respondent}
                    </span>
                    <span className="mt-1 block text-[11px] leading-snug text-ink-faint">
                      {s.profile.join(" · ")}
                    </span>
                  </td>
                  <td className="max-w-[11rem] px-4 py-4">
                    <span className="text-[13px] font-medium">
                      {s.product}
                    </span>
                    <span className="mt-1.5 block">
                      <DomainChip domain={s.domain} />
                    </span>
                    {s.price && (
                      <span className="tnum mt-1.5 block font-mono text-[11px] text-ink-faint">
                        {s.price}
                      </span>
                    )}
                  </td>
                  <td className="max-w-[10rem] px-4 py-4 text-[12.5px] leading-relaxed text-ink-soft">
                    <span className="font-mono text-[10px] tracking-[0.1em] text-accent uppercase">
                      {involvementLabel[s.involvement.level]}
                    </span>
                    <span className="mt-1 block">{s.involvement.text}</span>
                  </td>
                  <td className="max-w-[13rem] px-4 py-4 text-[12.5px] leading-relaxed text-ink-soft">
                    {s.dmu.roles}
                    {s.dmu.influencer && (
                      <span className="mt-1 block">
                        <em className="text-[11px] not-italic">
                          Influencers: {s.dmu.influencer}
                        </em>
                      </span>
                    )}
                  </td>
                  <td className="max-w-[13rem] px-4 py-4 text-[12.5px] leading-relaxed text-ink-soft">
                    <span className="block">{s.trigger.need}</span>
                    <span className="mt-1 block text-ink-faint">
                      Source: {s.trigger.source}
                    </span>
                  </td>
                  <td className="max-w-[13rem] px-4 py-4 text-[12.5px] leading-relaxed text-ink-soft">
                    {s.alternatives.considered}
                    <span className="mt-1 block font-medium">
                      Outcome: {s.alternatives.outcome}
                    </span>
                  </td>
                  <td className="max-w-[12rem] px-4 py-4 text-[12.5px] leading-relaxed text-ink-soft">
                    <span className="font-medium">{s.channel.name}</span>
                    <span className="mt-1 block text-ink-faint">
                      {s.channel.steps.join(" → ")}
                    </span>
                  </td>
                  <td className="max-w-[13rem] px-4 py-4 text-[12.5px] leading-relaxed text-ink-soft">
                    {s.postPurchase.satisfaction}
                    {s.postPurchase.scores && (
                      <span className="mt-1 block font-mono text-[11px] text-accent-deep">
                        {s.postPurchase.scores.join(" · ")}
                      </span>
                    )}
                    {s.postPurchase.metaphor ? (
                      <span className="mt-1.5 block font-display text-[15px] font-semibold italic">
                        “{s.postPurchase.metaphor}”
                        {s.postPurchase.metaphorMeaning && (
                          <span className="mt-0.5 block font-sans text-[11.5px] font-normal text-ink-faint not-italic">
                            {s.postPurchase.metaphorMeaning}
                          </span>
                        )}
                      </span>
                    ) : (
                      s.postPurchase.gapNote && (
                        <span className="mt-1 block text-[11px] text-ink-faint italic">
                          {s.postPurchase.gapNote}
                        </span>
                      )
                    )}
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink-faint">
        Transcribed from the group’s source document (Part B — Group Comparison
        Table, Consumer Decision Survey A–F, Class A). Clara’s post-purchase
        detail was not captured in the source; CDS F pairs respondents with
        products by the table’s own numbering.
      </p>
    </div>
  );
}
