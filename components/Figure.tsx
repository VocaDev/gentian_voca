import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export function Figure({
  src,
  alt,
  caption,
  sizes = "(min-width: 1200px) 1120px, 100vw",
  priority = false,
  phone = false,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  caption?: ReactNode;
  sizes?: string;
  priority?: boolean;
  phone?: boolean;
  className?: string;
}) {
  return (
    <figure className={`m-0 ${className}`}>
      <div
        className={`frame overflow-hidden bg-surface-2 ${phone ? "mx-auto max-w-[340px] rounded-lg" : ""}`}
      >
        <Image
          src={src}
          alt={alt}
          sizes={phone ? "340px" : sizes}
          priority={priority}
          placeholder="blur"
          className="block h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[13px] leading-relaxed text-muted-2">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
