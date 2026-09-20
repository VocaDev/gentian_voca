"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { Close, Expand } from "./Icons";

/**
 * A screenshot that opens large in a native <dialog>.
 * The page dims and blurs behind it (glass backdrop); the plate rises with a soft spring;
 * a glass caption bar carries the label and the close button. Esc, backdrop or the button closes.
 *
 * `bare` drops the plate styling, for images that already sit inside a plate.
 * `fill` makes the image fill a fixed-aspect cell instead of using its natural height.
 */
export function ExhibitImage({
  src,
  alt,
  label,
  sizes = "(min-width: 1200px) 1120px, 100vw",
  priority = false,
  phone = false,
  bare = false,
  fill = false,
  fit = "cover",
  className = "",
  children,
}: {
  src: StaticImageData;
  alt: string;
  label?: string;
  sizes?: string;
  priority?: boolean;
  phone?: boolean;
  bare?: boolean;
  fill?: boolean;
  fit?: "cover" | "contain";
  className?: string;
  children?: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };
  const hide = () => dialogRef.current?.close();

  const shell = bare
    ? `relative block w-full overflow-hidden text-left cursor-zoom-in ${fill ? "min-h-0" : ""} ${className}`
    : `plate plate-hover rise group relative block w-full cursor-zoom-in overflow-hidden text-left ${
        phone ? "mx-auto max-w-[340px]" : ""
      } ${className}`;

  return (
    <>
      <button type="button" onClick={show} className={shell} aria-label={`Open larger: ${alt}`}>
        <Image
          src={src}
          alt={alt}
          fill={fill || undefined}
          sizes={phone ? "340px" : sizes}
          priority={priority}
          placeholder={fill ? undefined : "blur"}
          className={
            fill
              ? `${fit === "contain" ? "object-contain" : "object-cover object-top"}`
              : "plate-img block h-auto w-full"
          }
        />
        {children}
        {bare ? null : (
          <span
            aria-hidden="true"
            className="glass absolute bottom-3 right-3 hidden h-8 w-8 items-center justify-center rounded-full text-ink opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100 group-focus-visible:opacity-100 md:flex"
          >
            <Expand />
          </span>
        )}
      </button>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) hide();
        }}
        aria-label={alt}
      >
        <div className="sheet plate relative overflow-hidden">
          {open ? (
            <Image
              src={src}
              alt={alt}
              sizes="92vw"
              className="plate-img block h-auto max-h-[84vh] w-auto max-w-[92vw] object-contain"
            />
          ) : null}
          <div className="glass absolute inset-x-3 bottom-3 flex items-center justify-between gap-4 rounded-md px-3 py-2">
            <p className="label m-0 min-w-0 truncate normal-case tracking-normal text-ink">{label ?? alt}</p>
            <button
              type="button"
              onClick={hide}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-2"
              aria-label="Close"
            >
              <Close />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
