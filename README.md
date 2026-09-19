# gentianvoca.vercel.app

Personal site of Gentian Voca, software developer in Mitrovicë, Kosovo.

Rebuilt from scratch in September 2026. The idea is simple: don't say the work is good, show what changed because it was built. The flagship case is the rebuild of a painter's website; the numbers on it were measured, not estimated.

## Stack

- Next.js (App Router, static generation), React, TypeScript
- Tailwind CSS v4 with CSS-first tokens (`app/globals.css`)
- Geist and Geist Mono via `next/font`
- No component, icon or animation libraries. One `use client` component (the before/after comparison) and one for the mobile menu.

## Structure

- `app/` routes: home, `/work/kontinuum`, `/work/lokalweb`, 404, sitemap, robots, Open Graph images
- `components/` small, typed, mostly server components
- `content/` the ledger and site facts; change a fact once, it changes everywhere
- `assets/` screenshots (same viewport, nothing retouched) and the portrait
- `public/` the CV, `humans.txt`

## Rules baked in

- Every claim matches the CV. Confidential work stays at the level the CV states.
- Colour lives in the screenshots; the interface is neutral.
- Exactly one translucent element on the site: the control that floats over the comparison imagery.
- Motion is opacity and small translations only; `prefers-reduced-motion` turns it off.

## Develop

```
npm install
npm run dev
npm run build && npm start
```
