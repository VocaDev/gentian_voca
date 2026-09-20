"use client";

import Image, { type StaticImageData } from "next/image";
import { useId, useState, type ReactNode } from "react";

export type Shot = { src: StaticImageData; alt: string };
type View = "before" | "after" | "phone";

const LABELS: Record<View, string> = { before: "Before", after: "After", phone: "Phone" };

/**
 * Before / After (/ Phone) comparison on a plate.
 * - Real radio inputs, so keyboard arrows and screen readers work without custom code.
 * - The ink indicator slides between options instead of jumping: continuity, not decoration.
 * - The other state stays visible as a small plate inset on wide screens.
 * - The floating switch is glass: a control over imagery. On narrow screens it sits below the image, solid.
 */
export function Comparison({
  before,
  after,
  phone,
  caption,
  priority = false,
  defaultView = "after",
  sizes = "(min-width: 1200px) 1120px, 100vw",
}: {
  before: Shot;
  after: Shot;
  phone?: Shot;
  caption: ReactNode;
  priority?: boolean;
  defaultView?: View;
  sizes?: string;
}) {
  const [view, setView] = useState<View>(defaultView);
  const nameWide = useId();
  const nameNarrow = useId();
  const views: View[] = phone ? ["before", "after", "phone"] : ["before", "after"];
  const index = views.indexOf(view);
  const other: "before" | "after" = view === "before" ? "after" : "before";
  const shots: Record<"before" | "after", Shot> = { before, after };

  const control = (name: string, className: string) => (
    <fieldset className={`segmented ${className}`}>
      <legend className="sr-only">Choose what to show</legend>
      <span
        className="seg-indicator"
        aria-hidden="true"
        style={{ width: `calc((100% - 4px) / ${views.length})`, transform: `translateX(${index * 100}%)` }}
      />
      {views.map((v) => (
        <label key={v}>
          <input
            type="radio"
            name={name}
            value={v}
            checked={view === v}
            onChange={() => setView(v)}
            className="sr-only"
          />
          {LABELS[v]}
        </label>
      ))}
    </fieldset>
  );

  return (
    <figure className="m-0">
      <div className="relative">
        <div className="plate rise relative aspect-[16/10] overflow-hidden">
          {(["before", "after"] as const).map((k) => (
            <Image
              key={k}
              src={shots[k].src}
              alt={shots[k].alt}
              fill
              sizes={sizes}
              priority={priority && k === defaultView}
              loading={k === defaultView ? undefined : "eager"}
              fetchPriority={k === defaultView ? undefined : "low"}
              className={`plate-img object-cover object-top transition-[opacity,transform] duration-[320ms] ease-[var(--ease-out-soft)] ${
                view === k ? "scale-100 opacity-100" : "scale-[1.015] opacity-0"
              }`}
              aria-hidden={view !== k}
            />
          ))}

          {phone ? (
            <div
              className={`plate-img absolute inset-0 flex items-center justify-center bg-paper transition-opacity duration-[320ms] ease-[var(--ease-out-soft)] ${
                view === "phone" ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={view !== "phone"}
            >
              <div className="plate relative aspect-[390/844] h-[88%] overflow-hidden">
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  fill
                  sizes="(min-width: 768px) 400px, 70vw"
                  className="plate-img object-cover object-top"
                />
              </div>
            </div>
          ) : null}

          {view !== "phone" ? (
            <button
              type="button"
              onClick={() => setView(other)}
              className="plate plate-hover absolute bottom-4 left-4 hidden w-[26%] overflow-hidden text-left md:block"
              aria-label={`Show ${LABELS[other].toLowerCase()}`}
            >
              <span className="relative block aspect-[16/10]">
                <Image src={shots[other].src} alt="" fill sizes="320px" className="plate-img object-cover object-top" />
              </span>
              <span className="glass absolute left-2 top-2 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink">
                {LABELS[other]}
              </span>
            </button>
          ) : null}

          {control(nameWide, "glass absolute bottom-4 left-1/2 hidden -translate-x-1/2 md:grid")}
        </div>

        {control(nameNarrow, "mt-3 w-fit bg-plate md:hidden")}
      </div>
      <figcaption className="mt-3 text-[13px] leading-relaxed text-muted-2">{caption}</figcaption>
    </figure>
  );
}
