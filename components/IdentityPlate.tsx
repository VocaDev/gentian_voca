import Image from "next/image";
import { site } from "@/content/site";
import { ArrowDown } from "./Icons";
import { LocalTime } from "./LocalTime";
import { TiltPlate } from "./TiltPlate";
import portrait from "@/assets/portrait.jpg";

const siteHost = site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * The business card: portrait, identity, availability and contact as one object.
 *
 * The rule that shapes it: someone should be able to screenshot this on a phone and
 * still have everything they need. So the email address and the site are printed as
 * text, not hidden behind a button — a screenshot of a mailto link is worth nothing.
 *
 * Composition borrowed from React Bits <ProfileCard>: portrait-led, with a contact
 * bar seated inside the bottom of the card. That bar is surface, not glass: there is
 * no imagery under it here, and glass over a flat surface is just a grey smudge.
 * The plate tilts and catches the light under a mouse; static on touch.
 */
export function IdentityPlate() {
  return (
    <TiltPlate>
      <div className="grid grid-cols-[92px_minmax(0,1fr)] gap-x-4 gap-y-4 p-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-7 md:p-6">
        <Image
          src={portrait}
          alt="Portrait of Gentian Voca"
          width={180}
          height={216}
          priority
          sizes="(min-width: 768px) 180px, 92px"
          className="plate-img h-[92px] w-[92px] object-cover object-top md:h-[216px] md:w-[180px]"
        />

        <div className="min-w-0 self-center">
          <p className="m-0 text-[19px] font-medium leading-tight tracking-[-0.01em] text-ink md:text-[22px]">
            {site.name}
          </p>
          <p className="label m-0 mt-1.5">{site.role}</p>

          <p className="m-0 mt-3 text-[13.5px] leading-snug text-muted">
            Software Development &amp; Digitalisation Assistant, Petrol Company
          </p>
          <p className="m-0 mt-0.5 text-[13.5px] leading-snug text-muted">Freelance web developer</p>

          <p className="m-0 mt-3 text-[13px] leading-snug text-muted-2">
            {site.location} · <LocalTime />
          </p>

          <p className="m-0 mt-3 flex items-start gap-2 text-[13px] leading-snug text-muted">
            <span
              aria-hidden="true"
              className="mt-[5px] h-[7px] w-[7px] shrink-0 rounded-full bg-accent shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_18%,transparent)]"
            />
            <span>
              <span className="text-ink">Open to 2027:</span> junior full-stack roles and internships · Kosovo
              or abroad
            </span>
          </p>
        </div>

        {/* The contact bar. Everything here survives a screenshot. */}
        <div className="col-span-2 -mx-4 -mb-4 mt-1 flex flex-col gap-3 border-t border-hairline bg-surface-2 px-4 py-3.5 md:-mx-6 md:-mb-6 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="min-w-0">
            <a href={`mailto:${site.email}`} className="link block truncate text-[14px] text-ink">
              {site.email}
            </a>
            <a
              href={site.url}
              className="mt-0.5 block truncate font-mono text-[12px] text-muted-2 no-underline hover:text-ink"
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
            </a>
          </div>
        </div>
      </div>
    </TiltPlate>
  );
}
