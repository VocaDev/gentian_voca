import Image from "next/image";
import { site } from "@/content/site";
import { ArrowDown } from "./Icons";
import { LocalTime } from "./LocalTime";
import { TiltPlate } from "./TiltPlate";
import portrait from "@/assets/portrait.jpg";

/**
 * The identity plate: portrait, museum label, availability and the two actions as one object.
 * A recruiter reads photo, name, role, city, availability, CV and email in a single glance.
 * The plate itself tilts and catches the light under a mouse; static on touch.
 */
export function IdentityPlate() {
  return (
    <TiltPlate>
      <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-x-4 gap-y-4 p-4 md:grid-cols-[160px_minmax(0,1fr)_auto] md:items-center md:gap-x-7 md:p-5">
        <Image
          src={portrait}
          alt="Portrait of Gentian Voca"
          width={160}
          height={160}
          priority
          sizes="(min-width: 768px) 160px, 88px"
          className="plate-img h-[88px] w-[88px] object-cover object-top md:h-40 md:w-40"
        />
        <div className="min-w-0 self-center">
          <p className="m-0 text-[17px] font-medium leading-snug text-ink">{site.name}</p>
          <p className="m-0 mt-1 text-[14px] leading-snug text-muted">
            Software Development &amp; Digitalisation Assistant, Petrol Company
            <span className="hidden md:inline"> · Freelance web developer</span>
          </p>
          <p className="m-0 mt-1 text-[14px] leading-snug text-muted md:hidden">Freelance web developer</p>
          <p className="label m-0 mt-3 normal-case tracking-normal">
            {site.location} · <LocalTime />
          </p>
          <p className="m-0 mt-3 flex items-start gap-2 text-[13px] leading-snug text-muted">
            <span
              aria-hidden="true"
              className="mt-[5px] h-[7px] w-[7px] shrink-0 rounded-full bg-accent shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_18%,transparent)]"
            />
            <span>
              <span className="text-ink">Open to 2027:</span> junior full-stack roles and internships · Kosovo, the
              EU or remote
            </span>
          </p>
        </div>
        <div className="col-span-2 flex flex-wrap gap-2 md:col-span-1 md:flex-col md:items-stretch">
          <a href={`mailto:${site.email}`} className="btn-primary justify-center">
            Email me
          </a>
          <a href={site.links.cv} className="btn-secondary justify-center" target="_blank" rel="noopener">
            CV (PDF) <ArrowDown />
          </a>
        </div>
      </div>
    </TiltPlate>
  );
}
