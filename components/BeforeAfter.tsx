"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { Pair, Shot } from "@/content/kontinuum";
import { Close, Expand } from "./Icons";

/**
 * Before and After as one object you turn over.
 *
 * Adapted from the React Bits <FlipCard> idea, rebuilt on CSS 3D so the site keeps its
 * no-animation-library rule: rotor + two faces + backface-visibility, sprung with the
 * shared linear() easing. Click, drag, or Enter/Space turns it; a flick carries through.
 *
 * It opens on AFTER, never on BEFORE: the finished work is the thing a visitor who never
 * interacts must still see. The switcher below chooses which part of the site is compared.
 * Under prefers-reduced-motion the 3D is dropped entirely and the faces simply swap.
 */

const SLOP = 5;

export function BeforeAfter({
  pairs,
  caption,
  priority = false,
}: {
  pairs: Pair[];
  caption?: React.ReactNode;
  priority?: boolean;
}) {
  const [key, setKey] = useState(pairs[0].key);
  const [flipped, setFlipped] = useState(false);
  const [turn, setTurn] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [zoom, setZoom] = useState<Shot | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const grip = useRef<{ id: number; x: number; base: number; moved: boolean } | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const name = useId();

  const pair = pairs.find((p) => p.key === key) ?? pairs[0];
  const index = pairs.findIndex((p) => p.key === pair.key);
  const tall = Boolean(pair.tall);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduced(mq.matches);
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);

  const settle = useCallback((deg: number) => {
    const snapped = Math.round(deg / 180) * 180;
    setTurn(snapped);
    setFlipped(Math.abs(snapped / 180) % 2 === 1);
  }, []);

  const flip = useCallback(() => settle(turn + 180), [settle, turn]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (reduced || e.button !== 0 || grip.current) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    grip.current = { id: e.pointerId, x: e.clientX, base: turn, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const g = grip.current;
    if (!g || g.id !== e.pointerId) return;
    const dx = e.clientX - g.x;
    if (!g.moved) {
      if (Math.abs(dx) < SLOP) return;
      g.moved = true;
      setDragging(true);
    }
    const width = cardRef.current?.clientWidth || 1;
    setTurn(g.base + (dx / width) * 180);
  };

  const release = (e: React.PointerEvent, cancelled: boolean) => {
    const g = grip.current;
    if (!g || g.id !== e.pointerId) return;
    grip.current = null;
    setDragging(false);
    if (!g.moved) {
      if (!cancelled) flip();
      return;
    }
    settle(cancelled ? g.base : turn);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    if (!e.repeat) (reduced ? setFlipped((f) => !f) : flip());
  };

  const openZoom = (shot: Shot) => {
    setZoom(shot);
    dialogRef.current?.showModal();
  };

  const face = (side: "before" | "after", isPriority: boolean) => {
    const shot = pair[side];
    const isBefore = side === "before";
    return (
      <div className={`flip__face bg-plate ${isBefore && !reduced ? "flip__face--back" : ""} flex h-full w-full flex-col`}>
        <div className="flex shrink-0 items-center justify-between gap-3 px-3 py-2 md:px-4">
          <span className="label">{isBefore ? "Before" : "After"}</span>
          <span className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-muted-2 tnum">{isBefore ? "2015" : "2026"}</span>
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                openZoom(shot);
              }}
              aria-label={`Open larger: ${shot.alt}`}
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-2 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <Expand />
            </button>
          </span>
        </div>
        <div className={`relative grow border-t border-hairline ${tall ? "bg-paper" : ""}`}>
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(min-width: 768px) 1120px, 100vw"
            priority={isPriority}
            draggable={false}
            className={tall ? "object-contain" : "object-cover object-top"}
          />
        </div>
      </div>
    );
  };

  return (
    <figure className="m-0">
      <div
        ref={cardRef}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`Kontinuum, ${pair.label}: showing ${flipped ? "the 2015 site" : "the 2026 rebuild"}. Turn the card.`}
        data-grab={reduced ? undefined : "true"}
        data-dragging={dragging ? "true" : "false"}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => release(e, false)}
        onPointerCancel={(e) => release(e, true)}
        onKeyDown={onKeyDown}
        onClick={() => {
          if (reduced) setFlipped((f) => !f);
        }}
        onDragStart={(e) => e.preventDefault()}
        className={`flip plate rise relative block w-full select-none overflow-hidden transition-[max-width,aspect-ratio] duration-[420ms] ease-[var(--ease-spring)] ${
          tall ? "mx-auto md:max-w-[560px]" : ""
        }`}
        style={{ aspectRatio: tall ? "4 / 5" : "16 / 10" }}
      >
        <div
          className="flip__rotor h-full w-full"
          style={reduced ? undefined : ({ "--turn": `${turn}deg` } as React.CSSProperties)}
        >
          {reduced ? (
            face(flipped ? "before" : "after", priority)
          ) : (
            <>
              {face("after", priority)}
              {face("before", false)}
            </>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <fieldset className="segmented w-full bg-plate md:w-auto">
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
        <p className="label m-0 normal-case tracking-normal text-muted-2">
          {reduced ? "Tap the card to see 2015." : "Drag or click the card to see 2015."}
        </p>
      </div>

      <figcaption className="mt-4 max-w-[76ch] text-[14px] leading-relaxed text-muted">
        {pair.note}
        {caption ? <span className="mt-1.5 block text-[13px] text-muted-2">{caption}</span> : null}
      </figcaption>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setZoom(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        aria-label={zoom?.alt}
      >
        <div className="sheet plate relative overflow-hidden">
          {zoom ? (
            <Image
              src={zoom.src}
              alt={zoom.alt}
              sizes="92vw"
              className="plate-img block h-auto max-h-[84vh] w-auto max-w-[92vw] object-contain"
            />
          ) : null}
          <div className="glass absolute inset-x-3 bottom-3 flex items-center justify-between gap-4 rounded-md px-3 py-2">
            <p className="label m-0 min-w-0 truncate normal-case tracking-normal text-ink">{zoom?.alt}</p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-2"
              aria-label="Close"
            >
              <Close />
            </button>
          </div>
        </div>
      </dialog>
    </figure>
  );
}
