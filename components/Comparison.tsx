"use client";

import Image, { type StaticImageData } from "next/image";
import { useId, useState, type ReactNode } from "react";

export type Shot = { src: StaticImageData; alt: string };
type View = "before" | "after" | "phone";

const LABELS: Record<View, string> = { before: "Before", after: "After", phone: "Phone" };

/**
 * Before / After (/ Phone) comparison.
 * - Real radio inputs, so keyboard arrows and screen readers work without custom code.
 * - The other state stays visible as an inset on wide screens, so the change reads without a click.
 * - The floating control is the one Liquid Glass element on the site: a control over imagery.
 *   On narrow screens it sits below the image and is solid (nothing behind it to refract).
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
  const other: "before" | "after" = view === "before" ? "after" : "before";
  const shots: Record<"before" | "after", Shot> = { before, after };

  const control = (name: string, className: string) => (
    <fieldset className={`segmented ${className}`}>
      <legend className="sr-only">Choose what to show</legend>
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
        <div className="frame relative aspect-[16/10] overflow-hidden bg-surface-2">
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
              className={`object-cover object-top transition-opacity duration-[320ms] ease-[var(--ease-out-soft)] ${
                view === k ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={view !== k}
            />
          ))}

          {phone ? (
            <div
              className={`absolute inset-0 flex items-center justify-center bg-paper transition-opacity duration-[320ms] ease-[var(--ease-out-soft)] ${
                view === "phone" ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={view !== "phone"}
            >
              <div className="relative aspect-[390/844] h-[90%] overflow-hidden rounded-lg border border-hairline bg-surface-2">
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  fill
                  sizes="(min-width: 768px) 400px, 70vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          ) : null}

          {view !== "phone" ? (
            <button
              type="button"
              onClick={() => setView(other)}
              className="frame absolute bottom-4 left-4 hidden w-[27%] overflow-hidden bg-paper text-left shadow-[0_8px_24px_-12px_rgb(0_0_0/0.35)] transition-transform duration-[120ms] ease-[var(--ease-out-soft)] hover:-translate-y-0.5 md:block"
              aria-label={`Show ${LABELS[other].toLowerCase()}`}
            >
              <span className="relative block aspect-[16/10]">
                <Image
                  src={shots[other].src}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />
              </span>
              <span className="absolute left-2 top-2 rounded-sm bg-paper/90 px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink">
                {LABELS[other]}
              </span>
            </button>
          ) : null}

          {control(nameWide, "glass absolute bottom-4 left-1/2 hidden -translate-x-1/2 md:flex")}
        </div>

        {control(nameNarrow, "mt-3 flex w-fit md:hidden")}
      </div>
      <figcaption className="mt-3 text-[13px] leading-relaxed text-muted-2">{caption}</figcaption>
    </figure>
  );
}
