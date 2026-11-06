import Image from "next/image";
import Link from "next/link";
import { ledger } from "@/content/work";
import { ArrowRight } from "./Icons";

const sizes = "(min-width: 1120px) 480px, (min-width: 768px) 45vw, calc(100vw - 48px)";

/**
 * The homepage shows the two projects that carry a case study, as pictures with one
 * line each. Everything else about them (facts, stack, live links) is one click away.
 *
 * Each tile is one link: the title carries it and stretches over the whole tile, so the
 * link's name stays short ("Kontinuum") while the picture is still clickable.
 * Kontinuum keeps its before/after: hover or focus the tile and the old site shows through.
 */
export function WorkTiles() {
  return (
    <ul className="m-0 grid list-none gap-14 p-0 md:grid-cols-2 md:gap-8">
      {ledger.map((row) => (
        <li key={row.index} className="tile group relative">
          <div className="plate plate-hover relative aspect-[16/10] overflow-hidden">
            <Image
              src={row.thumb.src}
              alt=""
              fill
              sizes={sizes}
              className="plate-img object-cover object-top"
            />
            {row.thumb.before ? (
              <>
                <Image
                  src={row.thumb.before}
                  alt=""
                  fill
                  sizes={sizes}
                  className="plate-img object-cover object-top opacity-0 transition-opacity duration-[320ms] ease-[var(--ease-out-soft)] group-focus-within:opacity-100 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="glass absolute left-3 top-3 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink opacity-0 transition-opacity duration-[200ms] group-focus-within:opacity-100 group-hover:opacity-100"
                >
                  Before
                </span>
              </>
            ) : null}
          </div>

          <div className="mt-5 md:mt-6">
            <h3 className="m-0 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <Link
                href={row.caseHref}
                className="text-[22px] font-medium leading-tight tracking-[-0.015em] text-ink no-underline after:absolute after:inset-0 after:content-[''] md:text-[24px]"
              >
                {row.title}
              </Link>
              <span className="label">
                {row.kind} · {row.year}
              </span>
            </h3>
            <p className="mt-2.5 max-w-[46ch] text-[16px] leading-relaxed text-muted">{row.short}</p>
            <p aria-hidden="true" className="more mt-4">
              Case study <ArrowRight />
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
