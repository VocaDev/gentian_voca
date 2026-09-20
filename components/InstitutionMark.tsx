"use client";

import { useState } from "react";

/**
 * The mark beside a school or course.
 *
 * Drop a file at `public/logos/<name>.png` (or .svg) and it appears automatically.
 * If the file is missing or fails to load, a monogram tile is shown instead, so the
 * row never renders a broken image.
 */
export function InstitutionMark({
  src,
  name,
  monogram,
}: {
  src?: string;
  name: string;
  monogram: string;
}) {
  const [failed, setFailed] = useState(false);
  const showLogo = Boolean(src) && !failed;

  if (showLogo) {
    return (
      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-md border border-hairline bg-white p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${name} logo`}
          width={44}
          height={44}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-hairline bg-surface-2 font-mono text-[13px] tracking-tight text-muted-2"
    >
      {monogram}
    </span>
  );
}
