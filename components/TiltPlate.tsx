"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import "./TiltPlate.css";

const MAX_TILT = 7; // degrees. The source component goes to ~10-20, which warps the text edges.
const TAU = 0.12; // seconds, exponential smoothing constant

/**
 * Wraps a plate so it responds to the pointer: a few degrees of tilt and a soft
 * light that follows the cursor. Adapted from React Bits <ProfileCard>.
 *
 * Only runs for fine pointers (a mouse or trackpad) and only when motion is welcome.
 * On touch and under prefers-reduced-motion the plate is completely static.
 */
export function TiltPlate({ children, className = "" }: { children: ReactNode; className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0.5, y: 0.5 });
  const currentPos = useRef({ x: 0.5, y: 0.5 });
  const raf = useRef<number | null>(null);
  const lastTs = useRef(0);

  const enabled = useCallback(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const apply = useCallback((x: number, y: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.style.setProperty("--tilt-px", `${(x * 100).toFixed(2)}%`);
    wrap.style.setProperty("--tilt-py", `${(y * 100).toFixed(2)}%`);
    wrap.style.setProperty("--tilt-ry", `${((x - 0.5) * 2 * MAX_TILT).toFixed(3)}deg`);
    wrap.style.setProperty("--tilt-rx", `${(-(y - 0.5) * 2 * MAX_TILT).toFixed(3)}deg`);
  }, []);

  const step = useCallback(
    (ts: number) => {
      if (!lastTs.current) lastTs.current = ts;
      const dt = Math.min((ts - lastTs.current) / 1000, 0.05);
      lastTs.current = ts;
      const k = 1 - Math.exp(-dt / TAU);

      currentPos.current.x += (target.current.x - currentPos.current.x) * k;
      currentPos.current.y += (target.current.y - currentPos.current.y) * k;
      apply(currentPos.current.x, currentPos.current.y);

      const moving =
        Math.abs(target.current.x - currentPos.current.x) > 0.001 ||
        Math.abs(target.current.y - currentPos.current.y) > 0.001;

      raf.current = moving ? requestAnimationFrame(step) : null;
      if (!moving) lastTs.current = 0;
    },
    [apply],
  );

  const start = useCallback(() => {
    if (raf.current != null) return;
    lastTs.current = 0;
    raf.current = requestAnimationFrame(step);
  }, [step]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const surface = surfaceRef.current;
    if (!wrap || !surface || !enabled()) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = surface.getBoundingClientRect();
      target.current = {
        x: Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1),
        y: Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1),
      };
      start();
    };
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      wrap.dataset.active = "true";
      surface.dataset.settling = "false";
      onMove(e);
    };
    const onLeave = () => {
      wrap.dataset.active = "false";
      surface.dataset.settling = "true";
      target.current = { x: 0.5, y: 0.5 };
      currentPos.current = { x: 0.5, y: 0.5 };
      if (raf.current != null) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
      apply(0.5, 0.5);
    };

    surface.addEventListener("pointerenter", onEnter);
    surface.addEventListener("pointermove", onMove);
    surface.addEventListener("pointerleave", onLeave);
    return () => {
      surface.removeEventListener("pointerenter", onEnter);
      surface.removeEventListener("pointermove", onMove);
      surface.removeEventListener("pointerleave", onLeave);
      if (raf.current != null) cancelAnimationFrame(raf.current);
      raf.current = null;
    };
  }, [apply, enabled, start]);

  return (
    <div ref={wrapRef} className={`tilt-plate ${className}`} data-active="false">
      <div ref={surfaceRef} className="tilt-plate__surface plate" data-settling="false">
        <span className="tilt-plate__sheen" aria-hidden="true" />
        <div className="tilt-plate__content">{children}</div>
      </div>
    </div>
  );
}
