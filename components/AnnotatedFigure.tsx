import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { ExhibitImage } from "./ExhibitImage";

export type Note = { x: number; y: number; text: string };

export function AnnotatedFigure({
  src,
  alt,
  caption,
  label,
  notes,
  sizes = "(min-width: 1200px) 740px, 100vw",
}: {
  src: StaticImageData;
  alt: string;
  caption?: ReactNode;
  label?: string;
  notes: Note[];
  sizes?: string;
}) {
  return (
    <figure className="m-0 grid gap-5 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-8">
      <div>
        <ExhibitImage src={src} alt={alt} label={label} sizes={sizes}>
          {notes.map((n, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="absolute flex h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink font-mono text-[11px] font-medium text-paper shadow-[0_0_0_2px_var(--color-plate)]"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              {i + 1}
            </span>
          ))}
        </ExhibitImage>
        {caption ? (
          <figcaption className="mt-3 text-[13px] leading-relaxed text-muted-2">{caption}</figcaption>
        ) : null}
      </div>
      <ol className="m-0 list-none p-0 text-[15px] leading-relaxed">
        {notes.map((n, i) => (
          <li
            key={i}
            className="flex gap-3 border-t border-hairline py-3 first:border-t-0 first:pt-0 md:first:border-t md:first:pt-3"
          >
            <span className="mt-[3px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[11px] text-paper">
              {i + 1}
            </span>
            <span className="text-muted">{n.text}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
