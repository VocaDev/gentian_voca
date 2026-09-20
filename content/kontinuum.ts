import type { StaticImageData } from "next/image";

import beforeHome from "@/assets/kontinuum-before-home.jpg";
import afterHome from "@/assets/kontinuum-after-home.jpg";
import beforeGallery from "@/assets/kontinuum-before-gallery.jpg";
import afterWerke from "@/assets/kontinuum-after-werke.jpg";
import beforeEnglish from "@/assets/kontinuum-before-english.jpg";
import afterEnglish from "@/assets/kontinuum-after-english.jpg";
import beforePhone from "@/assets/kontinuum-before-phone.jpg";
import afterPhone from "@/assets/kontinuum-after-phone.jpg";

export type Shot = { src: StaticImageData; alt: string };

export type Pair = {
  key: string;
  label: string;
  before: Shot;
  after: Shot;
  note: string;
  tall?: boolean;
};

/** Four real pairs, all captured at the same viewport: the archived old site and the live new one. */
export const kontinuumPairs: Pair[] = [
  {
    key: "home",
    label: "Home",
    note: "The homepage. A photographic texture ran behind every page, so the paintings competed with the wallpaper. Now the surround is neutral and the colour comes from the work.",
    before: {
      src: beforeHome,
      alt: "The old kontinuum.biz homepage: an orange script logo on a black bar, a photographic texture behind the page, a short welcome text and a photo of the atelier door.",
    },
    after: {
      src: afterHome,
      alt: "The new kontinuum.biz homepage: an off-white page, the Kontinuum wordmark, the serif headline Vom Kristall zum Pinselstrich, and a blue painting of quartz crystals.",
    },
  },
  {
    key: "catalogue",
    label: "Catalogue",
    note: "The gallery. It loaded all 84 images at once, 41 MB of them, with no lazy loading. The catalogue now shows 81 works at true relative scale, filterable by series, 1.5 MB for the lot.",
    before: {
      src: beforeGallery,
      alt: "The old gallery page: three large paintings per row on a textured background, under a black navigation bar with two Mineralogie menu items.",
    },
    after: {
      src: afterWerke,
      alt: "The new catalogue page: the headline 81 Arbeiten im wahren Größenverhältnis, a row of series filters, a scale bar, and paintings laid out at their relative sizes.",
    },
  },
  {
    key: "English",
    label: "English",
    note: "The English site returned “Nothing Found. Sorry, no posts matched your criteria.” Five of its pages were 404s. Every page now exists in English, with hreflang for search engines.",
    before: {
      src: beforeEnglish,
      alt: "The old English site: a page titled Nothing Found, Sorry no posts matched your criteria, with an empty sidebar.",
    },
    after: {
      src: afterEnglish,
      alt: "The new English homepage: From Crystal to Brushstroke, with the same structure as the German page.",
    },
  },
  {
    key: "phone",
    label: "Phone",
    tall: true,
    note: "On a phone the old site served the desktop layout and disabled pinch-zoom in the viewport tag, so a visitor could neither read it nor zoom in. The new one is built for the phone.",
    before: {
      src: beforePhone,
      alt: "The old kontinuum.biz homepage on a phone: an oversized orange logo, the textured background, and text running to the edges.",
    },
    after: { src: afterPhone, alt: "The new kontinuum.biz homepage on a phone." },
  },
];
