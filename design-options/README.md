# Portfolio redesign — design options (19 Sep 2026)

Open any file directly in a browser. Self-contained: Google Fonts, one animation library from a CDN, images in `img/`.

## Current direction: `option-c-portfolio.html`

Built from Genti's feedback on A and B:

- **A portfolio, not a freelance sales page.** No services, no process, no pricing, no "tell me about your project" form. Sections: hero → work → skills → experience & education → about + now → contact.
- **Option B's layout and visuals kept** (numbered work index, oversized grotesk, image frames that unclip on scroll, before/after toggle, count-up numbers). Option A (light, serif) dropped: read too close to the cousin's site.
- **No "Under NDA" card.** The Petrol Company project shows a typographic tile ("30. retail stations · daily use") and one quiet line inside its details: internal systems, no screenshots, happy to walk through the architecture.
- **"More info" expanders** on the project rows. Kontinuum's holds the numbers (81 works, 4.0→0.9 MB, 224→0 WCAG, zero downtime), three extra screens, and Harald's quote. Rows stay compact until opened.
- **Three muted themes**, switchable bottom-right (mockup only; pick one and it gets baked in):
  - **Graphite**: neutral near-black, warm bone text, sand accent `#BFA98A`.
  - **Slate**: cool graphite matching the navy in the portrait, dusty steel accent `#8FA9C6`.
  - **Moss**: green-grey, sage accent `#9DB79E`.
  No neon, no saturated accents, no gradients. Grain at 5%.
- Real screenshots for all five projects are now in `img/` (LokalWeb and Islam Companion fetched 19 Sep 10:03).

## Earlier options (kept for reference)

| | `option-a-atelier.html` | `option-b-signal.html` |
|---|---|---|
| Verdict | Too close to rinorzeqiri.vercel.app; light editorial direction rejected | Layout and visuals liked; vermilion-on-black colours rejected; NDA card rejected |

## Still to do before the real build

- Export the CV PDF and wire the "Download CV" buttons.
- Choose a theme.
- Decide whether the Enit's concept stays (it's labelled "concept, not in commercial use").
- Port to the Next.js repo (`gentian_voca`), replacing the March 2026 site that is currently live.

## Rules baked in

- Every claim matches the CV V3 and LinkedIn: title "Software Development & Digitalisation Assistant", MVP Award 2025, Enit's 2025, no French.
- Petrol Company uses only the NDA-approved wording. No system names, no screens, no numbers beyond "30 retail stations".
- Motion follows Emil Kowalski's rules: transform/opacity only, strong ease-out curves, press feedback, hover gated to fine pointers, reduced-motion respected, staggers ≤ 80 ms. The expander animates layout on purpose (accordion exception).

## Sources consulted

Josh Comeau "Building an effective dev portfolio" · Viktor Shmatko "Trust signals" · Contra 2025 freelancer portfolio guide · dev.to "junior dev portfolio in the age of AI" · sitesplaced.com 2026 portfolio ranking · Typewolf Google Fonts 2026 · GSAP 3.13 release notes · motion.dev docs · caniuse `animation-timeline` · Emil Kowalski `skills` (emil-design-eng, animate, apple-design) · dickwu `apple-design-skill` · rinorzeqiri.vercel.app (as a taste reference).
