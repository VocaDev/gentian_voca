import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";

/** The top of a page that holds the detail the homepage leaves out. */
export function PageHeader({ title, lede }: { title: string; lede?: ReactNode }) {
  return (
    <header className="container-x pt-14 md:pt-24">
      <h1 className="display-1 m-0">{title}</h1>
      {lede ? (
        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.55] text-muted md:mt-8 md:text-[20px]">
          {lede}
        </p>
      ) : null}
    </header>
  );
}

/** Where to go when the page is done: the next page, and home. */
export function PageNext({ href, label }: { href: string; label: string }) {
  return (
    <nav aria-label="Next page" className="container-x mt-24 pb-20 md:mt-32 md:pb-28">
      <div className="flex flex-col gap-4 border-t border-hairline pt-8 md:flex-row md:items-baseline md:justify-between md:pt-10">
        <Link href={href} className="more text-[17px] md:text-[19px]">
          Next: {label} <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/" className="link text-[14px] text-muted">
          Home
        </Link>
      </div>
    </nav>
  );
}
