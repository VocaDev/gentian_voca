"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { ArrowDown } from "./Icons";
import { MobileMenu } from "./MobileMenu";

/**
 * Solid paper at the top of the page. Once content passes beneath it, it becomes glass:
 * the navigation layer floating above content, which is the one place Apple puts it.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className={`bar sticky top-0 z-40 border-b border-hairline ${scrolled ? "glass" : ""}`}
    >
      <div className="container-x flex h-14 items-center justify-between md:h-[60px]">
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
