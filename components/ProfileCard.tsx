"use client";

import Image from "next/image";
import { useEffect, useRef, type RefObject } from "react";
import { site } from "@/content/site";
import { ArrowDown } from "./Icons";
import { LocalTime } from "./LocalTime";
import portrait from "@/assets/portrait-tall.jpg";
import "./ProfileCard.css";

/*
 * The identity card. Built on React Bits <ProfileCard> (reactbits.dev), chosen on 6 Nov 2026
 * over <ReflectiveCard> in a side-by-side comparison.
 *
 *   PhoneCard: the stacked card. Photo with name and title, then four contact lines as plain
 *              text, so a screenshot of it is a business card.
 *   DeskCard:  the same material at full width under the headline. Photo left; right: the job,
 *              the degree, place and local time; email, site and the two actions along the bottom.
 *
 * No availability line and no side work on either card (6 Nov 2026): Genti is staying.
 *
 * Motion: the card tilts toward the pointer (or a dragging finger), a light follows it and the
 * photo shifts a few pixels. Under prefers-reduced-motion there is no tilt, no shift, no intro,
 * and the 3D context is torn down in CSS.
 */

const siteHost = site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const linkedinHost = site.links.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/** The React Bits spring engine: tilt, light and parallax, written as CSS variables. */
function useCardMotion(
  ref: RefObject<HTMLDivElement | null>,
  { tilt, parallax, intro }: { tilt: number; parallax: number; intro: boolean },
) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const size = { width: root.offsetWidth, height: root.offsetHeight };
    const x = { p: 0, v: 0, target: 0 };
    const y = { p: 0, v: 0, target: 0 };
    const light = { p: 0, target: 0 };
    let raf = 0;
    let last = 0;
    let slowUntil = 0;
    let touchId: number | null = null;

    const write = () => {
      const angle = reduced ? 0 : tilt;
      const reach = Math.min(1, Math.hypot(x.p, y.p));
      const style = root.style;
      style.setProperty("--pc-light-x", `${((x.p + 1) * 0.5 * size.width).toFixed(1)}px`);
      style.setProperty("--pc-light-y", `${((y.p + 1) * 0.5 * size.height).toFixed(1)}px`);
      style.setProperty("--pc-rotate-x", `${(y.p * angle).toFixed(3)}deg`);
      style.setProperty("--pc-rotate-y", `${(-x.p * angle).toFixed(3)}deg`);
      style.setProperty("--pc-shift-x", `${(x.p * (reduced ? 0 : parallax)).toFixed(2)}px`);
      style.setProperty("--pc-shift-y", `${(y.p * (reduced ? 0 : parallax)).toFixed(2)}px`);
      style.setProperty("--pc-tilt", (reach * light.p).toFixed(4));
      style.setProperty("--pc-active", light.p.toFixed(4));
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0);
      last = now;
      const slow = now < slowUntil;
      const stiffness = slow ? 24 : 120;
      const damping = slow ? 9 : 16;
      const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
      const h = dt / steps;
      for (let i = 0; i < steps; i++) {
        for (const axis of [x, y]) {
          axis.v += (stiffness * (axis.target - axis.p) - damping * axis.v) * h;
          axis.p += axis.v * h;
        }
      }
      const tau = light.target > light.p ? 0.18 : slow ? 0.9 : 0.45;
      light.p += (light.target - light.p) * (1 - Math.exp(-dt / tau));
      write();
      const moving =
        Math.abs(x.target - x.p) > 0.0005 ||
        Math.abs(y.target - y.p) > 0.0005 ||
        Math.abs(x.v) > 0.0005 ||
        Math.abs(y.v) > 0.0005 ||
        Math.abs(light.target - light.p) > 0.002;
      if (moving) {
        raf = requestAnimationFrame(frame);
      } else {
        x.p = x.target;
        y.p = y.target;
        light.p = light.target;
        write();
        raf = 0;
      }
    };

    const wake = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const aim = (nx: number, ny: number, on = true) => {
      x.target = clamp(nx, -1, 1);
      y.target = clamp(ny, -1, 1);
      light.target = on ? 1 : 0;
      slowUntil = 0;
      wake();
    };

    const aimAt = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      aim(((event.clientX - rect.left) / rect.width) * 2 - 1, ((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const release = () => aim(0, 0, false);

    const onEnter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") aimAt(event);
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "mouse" || event.pointerId === touchId) aimAt(event);
    };
    const onLeave = (event: PointerEvent) => {
      if (event.pointerType === "mouse") release();
    };
    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      touchId = event.pointerId;
      aimAt(event);
    };
    const onUp = (event: PointerEvent) => {
      if (event.pointerId !== touchId) return;
      touchId = null;
      release();
    };

    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    root.addEventListener("pointerdown", onDown);
    root.addEventListener("pointerup", onUp);
    root.addEventListener("pointercancel", onUp);

    const observer = new ResizeObserver(() => {
      size.width = root.offsetWidth;
      size.height = root.offsetHeight;
      write();
    });
    observer.observe(root);

    // The card catches the light once as it appears. Skipped when motion is unwelcome,
    // and when this copy of the card is the one hidden at the current width.
    if (intro && !reduced && root.offsetWidth > 0) {
      x.p = 0.62;
      y.p = -0.55;
      light.p = 1;
      slowUntil = performance.now() + 1400;
      write();
      wake();
    } else {
      write();
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      root.removeEventListener("pointerdown", onDown);
      root.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointercancel", onUp);
    };
  }, [ref, tilt, parallax, intro]);
}

function Layers() {
  return (
    <>
      <span className="profile-card__glare" aria-hidden="true" />
      <span className="profile-card__shade" aria-hidden="true" />
      <span className="profile-card__rim" aria-hidden="true" />
    </>
  );
}

/** Phones: the card a visitor can screenshot and keep. */
export function PhoneCard() {
  const ref = useRef<HTMLDivElement>(null);
  useCardMotion(ref, { tilt: 12, parallax: 8, intro: true });
  const line = "block truncate leading-6 no-underline underline-offset-[3px] hover:underline";

  return (
    <div ref={ref} className="profile-card profile-card--phone">
      <div className="profile-card__body">
        <div className="profile-card__tile">
          <div className="profile-card__photo">
            <Image
              src={portrait}
              alt="Portrait of Gentian Voca"
              fill
              loading="eager"
              sizes="(min-width: 768px) 1px, calc(100vw - 52px)"
              draggable={false}
              className="object-cover object-bottom"
            />
          </div>
          <span className="profile-card__scrim" aria-hidden="true" />
          <div className="profile-card__info">
            <p className="profile-card__name">{site.name}</p>
            <p className="profile-card__title">
              {site.role} · {site.location}
            </p>
          </div>
          <span className="profile-card__tile-rim" aria-hidden="true" />
        </div>

        <div className="profile-card__custom">
          <ul className="m-0 list-none p-0 pt-1 text-[14px]">
            <li>
              <a className={line} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className={`${line} tnum`} href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
            <li>
              <a className={line} href={site.url}>
                {siteHost}
              </a>
            </li>
            <li>
              <a className={line} href={site.links.linkedin} target="_blank" rel="me noopener">
                {linkedinHost}
              </a>
            </li>
          </ul>
        </div>

        <Layers />
      </div>
    </div>
  );
}

/** Tablet and desktop: the same card at full width under the headline. */
export function DeskCard() {
  const ref = useRef<HTMLDivElement>(null);
  // A wide card needs far less tilt than a phone-sized one before its far edge distorts.
  useCardMotion(ref, { tilt: 4, parallax: 6, intro: true });

  return (
    <div ref={ref} className="profile-card profile-card--wide">
      <div className="profile-card__body">
        <div className="profile-card__tile">
          <div className="profile-card__photo">
            {/* Lazy: on phones this card is display: none, so the image is never fetched there. */}
            <Image
              src={portrait}
              alt="Portrait of Gentian Voca"
              fill
              loading="lazy"
              sizes="276px"
              draggable={false}
              className="object-cover object-bottom"
            />
          </div>
          <span className="profile-card__scrim" aria-hidden="true" />
          <div className="profile-card__info">
            <p className="profile-card__name">{site.name}</p>
            <p className="profile-card__title">{site.role}</p>
          </div>
          <span className="profile-card__tile-rim" aria-hidden="true" />
        </div>

        <div className="profile-card__custom profile-card__record">
          <div>
            <p className="profile-card__ink m-0 text-[19px] font-medium leading-snug tracking-[-0.01em]">
              Software Development &amp; Digitalisation Assistant, Petrol Company
            </p>
            <p className="profile-card__muted m-0 mt-1.5 text-[16px] leading-snug">
              Third-year Computer Science &amp; Engineering, UMIB
            </p>
            <p className="profile-card__muted m-0 mt-5 text-[14px] leading-snug">
              {site.location} · <LocalTime />
            </p>
          </div>

          <div className="profile-card__lines mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-3 pt-4">
            <div className="min-w-0">
              <a
                href={`mailto:${site.email}`}
                className="profile-card__ink block truncate text-[15px] leading-6 no-underline underline-offset-[3px] hover:underline"
              >
                {site.email}
              </a>
              <a
                href={site.url}
                className="profile-card__muted block truncate font-mono text-[12px] leading-6 no-underline hover:underline"
              >
                {siteHost}
              </a>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <a href={`mailto:${site.email}`} className="btn-primary justify-center">
                Email me
              </a>
              <a href={site.links.cv} className="btn-secondary justify-center" target="_blank" rel="noopener">
                CV <ArrowDown />
                <span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>

        <Layers />
      </div>
    </div>
  );
}
