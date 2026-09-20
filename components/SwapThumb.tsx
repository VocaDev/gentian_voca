"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * A ledger thumbnail on a plate. If a "before" image exists, hovering (or focusing) shows it:
 * the change in miniature. On touch it stays on "after"; nothing is lost.
 */
export function SwapThumb({
  href,
  after,
  before,
  alt,
}: {
  href: string;
  after: StaticImageData;
  before?: StaticImageData;
  alt: string;
}) {
  const [showBefore, setShowBefore] = useState(false);
  const on = () => before && setShowBefore(true);
  const off = () => setShowBefore(false);

  return (
    <Link
      href={href}
      aria-label={alt}
      onMouseEnter={on}
      onMouseLeave={off}
      onFocus={on}
      onBlur={off}
      className="plate plate-hover relative block aspect-[16/10] overflow-hidden"
    >
      <Image
        src={after}
        alt=""
        fill
        sizes="(min-width: 768px) 168px, 100vw"
        className={`plate-img object-cover object-top transition-opacity duration-[320ms] ease-[var(--ease-out-soft)] ${
          showBefore ? "opacity-0" : "opacity-100"
        }`}
      />
      {before ? (
        <>
          <Image
            src={before}
            alt=""
            fill
            sizes="(min-width: 768px) 168px, 100vw"
            className={`plate-img object-cover object-top transition-opacity duration-[320ms] ease-[var(--ease-out-soft)] ${
              showBefore ? "opacity-100" : "opacity-0"
            }`}
          />
          <span
            aria-hidden="true"
            className={`glass absolute left-2 top-2 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink transition-opacity duration-[200ms] ${
              showBefore ? "opacity-100" : "opacity-0"
            }`}
          >
            Before
          </span>
        </>
      ) : null}
    </Link>
  );
}
