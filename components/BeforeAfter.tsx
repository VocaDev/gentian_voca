"use client";

import { useId, useState, type ReactNode } from "react";
import type { Pair } from "@/content/kontinuum";
import { ExhibitImage } from "./ExhibitImage";

/**
 * Before and After, side by side, on one plate.
 * Both states are visible at once: the change reads without a click, which is the whole point.
 * Each half carries a museum label above it, so nothing is covered by chrome.
 * The glass switcher floats over the pair and changes which part of the site is being compared;
 * the plate opens up for the phone comparison instead of shrinking the evidence.
 * Either half opens full size in the lightbox.
 */
export function BeforeAfter({
  pairs,
  caption,
  priority = false,
}: {
  pairs: Pair[];
  caption?: ReactNode;
  priority?: boolean;
}) {
  const [key, setKey] = useState(pairs[0].key);
  const pair = pairs.find((p) => p.key === key) ?? pairs[0];
  const index = pairs.findIndex((p) => p.key === pair.key);
  const nameWide = useId();
  const nameNarrow = useId();
  const tall = Boolean(pair.tall);

  const control = (name: string, className: string) => (
    <fieldset className={`segmented ${className}`}>
      <legend className="sr-only">Choose which part of the site to compare</legend>
      <span
        className="seg-indicator"
        aria-hidden="true"
        style={{ width: `calc((100% - 4px) / ${pairs.length})`, transform: `translateX(${index * 100}%)` }}
      />
      {pairs.map((p) => (
        <label key={p.key}>
          <input
            type="radio"
            name={name}
            value={p.key}
            checked={p.key === pair.key}
            onChange={() => setKey(p.key)}
            className="sr-only"
          />
          {p.label}
        </label>
      ))}
    </fieldset>
  );

  const panel = (side: "before" | "after", isPriority: boolean) => {
    const shot = pair[side];
    const isBefore = side === "before";
    return (
      <div className="flex min-w-0 flex-col bg-plate">
        <div className="flex items-baseline justify-between gap-3 px-3 py-2 md:px-4">
          <span className="label">{isBefore ? "Before" : "After"}</span>
          <span className="font-mono text-[11px] text-muted-2 tnum">{isBefore ? "2015" : "2026"}</span>
        </div>
        <ExhibitImage
          bare
          fill
          fit={tall ? "contain" : "cover"}
          src={shot.src}
          alt={shot.alt}
          label={`${isBefore ? "Before" : "After"} · ${pair.label} · kontinuum.biz, ${
            isBefore ? "2015 site" : "September 2026"
          }`}
          priority={isPriority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`border-t border-hairline ${tall ? "grow bg-paper" : "aspect-[16/10]"}`}
        />
      </div>
    );
  };

  return (
    <figure className="m-0">
      <div className="relative">
        <div
          className={`plate rise relative grid gap-px overflow-hidden bg-hairline transition-[aspect-ratio] duration-[320ms] ease-[var(--ease-spring)] ${
            tall ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2"
          }`}
          style={{ aspectRatio: tall ? "3 / 2" : undefined }}
        >
          {panel("before", false)}
          {panel("after", priority)}
          {control(nameWide, "glass absolute bottom-4 left-1/2 hidden -translate-x-1/2 md:grid")}
        </div>
        {control(nameNarrow, "mt-3 w-full bg-plate md:hidden")}
      </div>
      <figcaption className="mt-4 max-w-[76ch] text-[14px] leading-relaxed text-muted">
        {pair.note}
        {caption ? <span className="mt-1.5 block text-[13px] text-muted-2">{caption}</span> : null}
      </figcaption>
    </figure>
  );
}
