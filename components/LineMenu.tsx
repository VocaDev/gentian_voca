"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import "./LineMenu.css";

const FALLOFF = (p: number) => p * p * (3 - 2 * p);

export type LineMenuItem = { label: string; href: string };

/**
 * Adapted from React Bits <LineSidebar>. The look is theirs: index, marker line,
 * and a label that slides and warms toward the accent as the pointer nears it.
 * The behaviour is ours: every item is a real link, so keyboard and screen readers
 * work, and the proximity loop never runs under prefers-reduced-motion.
 */
export function LineMenu({
  items,
  onNavigate,
  proximityRadius = 70,
  smoothing = 110,
}: {
  items: LineMenuItem[];
  onNavigate?: () => void;
  proximityRadius?: number;
  smoothing?: number;
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const targets = useRef<number[]>([]);
  const current = useRef<number[]>([]);
  const raf = useRef<number | null>(null);
  const last = useRef(0);

  const frame = useCallback((now: number) => {
    const dt = Math.min((now - last.current) / 1000, 0.05);
    last.current = now;
    const k = 1 - Math.exp(-dt / (Math.max(smoothing, 1) / 1000));

    let moving = false;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const target = targets.current[i] || 0;
      const cur = current.current[i] || 0;
      const next = cur + (target - cur) * k;
      const settled = Math.abs(target - next) < 0.0015;
      const value = settled ? target : next;
      current.current[i] = value;
      el.style.setProperty("--effect", value.toFixed(4));
      if (!settled) moving = true;
    });

    raf.current = moving ? requestAnimationFrame(frame) : null;
  }, [smoothing]);

  const start = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (raf.current != null) cancelAnimationFrame(raf.current);
    last.current = performance.now();
    raf.current = requestAnimationFrame(frame);
  }, [frame]);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLUListElement>) => {
      if (e.pointerType !== "mouse") return;
      const list = listRef.current;
      if (!list) return;
      const pointerY = e.clientY - list.getBoundingClientRect().top;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const center = el.offsetTop + el.offsetHeight / 2;
        targets.current[i] = FALLOFF(Math.max(0, 1 - Math.abs(pointerY - center) / proximityRadius));
      });
      start();
    },
    [proximityRadius, start],
  );

  const onPointerLeave = useCallback(() => {
    targets.current = targets.current.map(() => 0);
    start();
  }, [start]);

  useEffect(
    () => () => {
      if (raf.current != null) cancelAnimationFrame(raf.current);
      raf.current = null;
    },
    [],
  );

  return (
    <nav className="line-menu" aria-label="Primary">
      <ul ref={listRef} className="line-menu__list" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
        {items.map((item, index) => (
          <li
            key={item.href}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="line-menu__item"
          >
            <span className="line-menu__marker" aria-hidden="true" />
            <Link href={item.href} className="line-menu__link" onClick={onNavigate}>
              <span className="line-menu__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
