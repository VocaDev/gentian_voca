"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { MenuGlyph } from "./Icons";
import { LineMenu } from "./LineMenu";

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
      <div className="glass absolute right-0 top-12 z-50 w-[15rem] rounded-lg border border-hairline px-4 py-4">
        <LineMenu items={site.nav.map((n) => ({ label: n.label, href: n.href }))} onNavigate={close} />
      </div>
    </details>
  );
}
