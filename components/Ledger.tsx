import Link from "next/link";
import { ledger, smallerThings } from "@/content/work";
import { ArrowRight, ArrowUpRight } from "./Icons";
import { SwapThumb } from "./SwapThumb";

export function Ledger() {
  return (
    <ol className="m-0 list-none p-0">
      {ledger.map((row) => (
        <li
          key={row.index}
          className="grid grid-cols-1 gap-4 border-t border-hairline py-7 md:grid-cols-[5.5rem_168px_minmax(0,1fr)_auto] md:gap-8 md:py-8"
        >
          <div className="flex items-baseline gap-3 font-mono text-[13px] text-muted-2 tnum md:block">
            <span>{row.index}</span>
            <span className="md:mt-1 md:block">{row.year}</span>
          </div>

          <div className="md:self-start">
            <SwapThumb href={row.caseHref} after={row.thumb.src} before={row.thumb.before} alt={row.thumb.alt} />
          </div>

          <div className="min-w-0">
            <h3 className="m-0 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[19px] font-medium leading-snug">
              <Link
                href={row.caseHref}
                className="text-ink underline decoration-transparent underline-offset-[3px] transition-colors duration-[120ms] hover:decoration-accent"
              >
                {row.title}
              </Link>
              <span className="label">{row.kind}</span>
            </h3>
            <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-muted">{row.change}</p>
            <p className="mt-1.5 text-[13px] text-muted-2">{row.forWhom}</p>
            {row.facts ? (
              <p className="mt-2.5 font-mono text-[12px] leading-relaxed text-muted-2 tnum">{row.facts}</p>
            ) : null}
          </div>

          <div className="flex gap-5 md:flex-col md:items-end md:gap-2 md:pt-1">
            <Link href={row.caseHref} className="proof">
              Case <ArrowRight />
            </Link>
            {row.live ? (
              <a href={row.live.href} className="proof" target="_blank" rel="noopener">
                {row.live.label} <ArrowUpRight />
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function SmallerThings() {
  return (
    <div className="border-t border-hairline pt-6 md:grid md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-8 md:pt-8">
      <h3 className="label m-0 md:pt-1">Smaller things</h3>
      <ul className="m-0 mt-4 list-none p-0 md:mt-0">
        {smallerThings.map((t) => (
          <li
            key={t.title}
            className="grid gap-1 border-t border-hairline py-4 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6"
          >
            <p className="m-0 text-[15px] leading-relaxed">
              <span className="font-medium text-ink">{t.title}</span>
              <span className="font-mono text-[12px] text-muted-2 tnum"> · {t.year}</span>
              <span className="text-muted"> · {t.line}</span>
            </p>
            {t.link ? (
              <a href={t.link.href} className="proof self-start" target="_blank" rel="noopener">
                {t.link.label} <ArrowUpRight />
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
