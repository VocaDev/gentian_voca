import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { ExhibitImage } from "./ExhibitImage";

export function Figure({
  src,
  alt,
  caption,
  label,
  sizes = "(min-width: 1200px) 1120px, 100vw",
  priority = false,
  phone = false,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  caption?: ReactNode;
  label?: string;
  sizes?: string;
  priority?: boolean;
  phone?: boolean;
  className?: string;
}) {
  return (
    <figure className={`m-0 ${className}`}>
      <ExhibitImage src={src} alt={alt} label={label} sizes={sizes} priority={priority} phone={phone} />
      {caption ? (
        <figcaption className="mt-3 text-[13px] leading-relaxed text-muted-2">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
