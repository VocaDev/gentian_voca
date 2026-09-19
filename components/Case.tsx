import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./Icons";

export function CaseHeader({
  index,
  kind,
  year,
  title,
  subtitle,
  lede,
  meta,
}: {
  index: string;
  kind: string;
  year: string;
  title: string;
  subtitle: string;
  lede: ReactNode;
  meta: { label: string; value: ReactNode }[];
}) {
  return (
    <header className="container-x pt-10 md:pt-16">
      <p className="m-0 flex flex-wrap gap-x-3 font-mono text-[12px] uppercase tracking-wide text-muted-2">
        <span>{index}</span>
        <span aria-hidden="true">·</span>
        <span>{kind}</span>
        <span aria-hidden="true">·</span>
        <span>{year}</span>
      </p>
      <h1 className="mt-4 text-[clamp(2rem,1.4rem+2vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.015em]">
        {title}
      </h1>
      <p className="mt-2 text-[18px] text-muted md:text-[20px]">{subtitle}</p>
      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] md:gap-12">
        <p className="m-0 max-w-[58ch] text-[18px] leading-[1.55] md:text-[19px]">{lede}</p>
        <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 self-start border-t border-hairline pt-3 text-[14px] leading-snug">
          {meta.map((m) => (
            <Fragment key={m.label}>
              <dt className="text-muted-2">{m.label}</dt>
              <dd className="m-0">{m.value}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </header>
  );
}

export function CaseSection({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-x mt-14 md:mt-20 ${className}`}>
      <div className="md:grid md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-8">
        <h2 className="m-0 font-mono text-[12px] uppercase tracking-wide text-muted-2 md:pt-1.5">{title}</h2>
        <div className="prose mt-3 md:mt-0">{children}</div>
      </div>
    </section>
  );
}

export function Exhibit({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-x mt-10 md:mt-14 ${className}`}>{children}</div>;
}

export function CaseNav({
  live,
  note,
  next,
}: {
  live?: { href: string; label: string };
  note?: string;
  next: { href: string; label: string };
}) {
  return (
    <nav aria-label="Case study navigation" className="container-x mt-16 pb-16 md:mt-24 md:pb-24">
      <div className="flex flex-col gap-6 border-t border-hairline pt-6 md:flex-row md:items-start md:justify-between md:pt-8">
        <div className="flex flex-col gap-2 text-sm">
          {live ? (
            <a href={live.href} className="proof" target="_blank" rel="noopener">
              {live.label} <ArrowUpRight />
            </a>
          ) : null}
          {note ? <p className="m-0 text-[13px] text-muted-2">{note}</p> : null}
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <Link href={next.href} className="proof">
            Next: {next.label} <ArrowRight />
          </Link>
          <Link href="/#work" className="link text-muted">
            All work
          </Link>
        </div>
      </div>
    </nav>
  );
}
