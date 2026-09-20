import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="container-x py-24 md:py-36">
      <p className="m-0 font-mono text-[13px] text-muted-2">404</p>
      <h1 className="mt-3 max-w-[24ch] text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.015em]">
        Nothing here. Which is itself information.
      </h1>
      <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.6] text-muted">
        The page moved, or never existed. The work did.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/#work" className="btn-primary">
          See the work <ArrowRight className="h-3.5 w-3.5 opacity-80" />
        </Link>
        <a href="/cv.pdf" className="btn-secondary" target="_blank" rel="noopener">
          CV <ArrowDown />
          <span className="sr-only"> (PDF)</span>
        </a>
      </div>
    </div>
  );
}
