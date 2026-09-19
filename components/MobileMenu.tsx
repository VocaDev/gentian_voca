"use client";

import Link from "next/link";
import { useRef } from "react";
import { site } from "@/content/site";
import { MenuGlyph } from "./Icons";

export function MobileMenu() {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (ref.current) ref.current.open = false;
  };
  return (
    <details ref={ref} className="relative md:hidden">
      <summary
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm text-ink"
        aria-label="Menu"
      >
        <MenuGlyph />
      </summary>
      <nav
        aria-label="Primary"
        className="absolute right-0 top-12 z-50 min-w-44 border border-hairline bg-paper p-2 shadow-[0_8px_24px_-12px_rgb(0_0_0/0.35)]"
      >
        <ul className="m-0 list-none p-0">
          {site.nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                onClick={close}
                className="block rounded-sm px-3 py-2.5 text-sm text-ink no-underline hover:bg-surface-2"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
