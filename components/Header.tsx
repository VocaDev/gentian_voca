import Link from "next/link";
import { site } from "@/content/site";
import { ArrowDown } from "./Icons";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper">
      <div className="container-x flex h-14 items-center justify-between md:h-16">
        <Link href="/" className="text-[15px] font-medium tracking-[-0.01em] text-ink no-underline">
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {site.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-muted no-underline transition-colors duration-[120ms] hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <a href={site.links.cv} className="btn-primary" target="_blank" rel="noopener">
            CV
            <span className="sr-only"> (PDF, opens in a new tab)</span>
            <ArrowDown className="h-3.5 w-3.5 opacity-80" />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
