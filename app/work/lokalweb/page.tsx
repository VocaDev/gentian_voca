import type { Metadata } from "next";
import { FactsStrip } from "@/components/FactsStrip";
import { Figure } from "@/components/Figure";
import { CaseHeader, CaseNav, CaseSection, Exhibit } from "@/components/Case";
import { ArrowUpRight } from "@/components/Icons";

import landing from "@/assets/lokalweb-landing.jpg";
import wizardServices from "@/assets/lokalweb-wizard-step2-services.jpg";
import wizardArchetype from "@/assets/lokalweb-wizard-step4-archetype.jpg";
import dashboard from "@/assets/lokalweb-dashboard-overview.jpg";
import bookings from "@/assets/lokalweb-bookings.jpg";
import siteHero from "@/assets/lokalweb-site-hero.jpg";
import siteServices from "@/assets/lokalweb-site-services.jpg";

const title = "LokalWeb: a website-as-a-service for Kosovo’s small businesses";
const description =
  "A five-step wizard and two Claude calls turn a business description into a website on its own subdomain, with booking. A working prototype, built solo by Gentian Voca.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/lokalweb" },
  openGraph: { title, description, url: "/work/lokalweb", type: "article" },
  twitter: { title, description },
};

export default function LokalWebCase() {
  return (
    <article>
      <CaseHeader
        index="02"
        kind="Side project"
        year="2025 – 2026"
        title="LokalWeb"
        subtitle="A website-as-a-service for Kosovo’s small businesses"
        lede={
          <>
            Most small businesses in Kosovo exist only on Instagram or TikTok. The opening hours are in
            a story that expired last week. LokalWeb asks the owner five questions in Albanian and
            gives the business a website on its own subdomain, with a booking calendar if it needs
            one.
          </>
        }
        meta={[
          { label: "Role", value: "Solo: product, design, full-stack" },
          { label: "Status", value: "Working prototype, built solo" },
          { label: "Stack", value: "Next.js, TypeScript, Supabase, Claude API, Vercel" },
          {
            label: "Live",
            value: (
              <a href="https://lokal-web-one.vercel.app" className="proof" target="_blank" rel="noopener">
                Landing page <ArrowUpRight />
              </a>
            ),
          },
        ]}
      />

      <Exhibit>
        <FactsStrip
          facts={[
            { value: "5 steps", label: "from business description to website" },
            { value: "2 model calls", label: "a brand brief, then the theme" },
            { value: "1 subdomain", label: "per business, resolved in middleware" },
            { value: "18 migrations", label: "Supabase schema with row-level security" },
          ]}
        />
      </Exhibit>

      <Exhibit>
        <Figure
          priority
          src={landing}
          alt="The LokalWeb landing page: a headline in Albanian, industry cards and a call to build a site."
          caption="The landing page at 1440 pixels wide. The marketing page speaks English; the wizard behind it speaks Albanian."
        />
      </Exhibit>

      <CaseSection title="The problem">
        <p>
          Barbershops, restaurants, clinics, salons: most of Kosovo&rsquo;s small businesses have an
          Instagram page and no website. Hours, services and prices live in posts and stories, and a
          customer who wants to book sends a message and waits. A proper website costs a designer, a
          developer and a few weeks; most owners have none of the three.
        </p>
        <p>
          LokalWeb began as my second-year software engineering project at UMIB and kept growing
          into a product: a business describes itself in plain words, and a few minutes later it has
          a website on its own subdomain, in Albanian, with a booking system if the business takes
          appointments.
        </p>
      </CaseSection>

      <CaseSection title="The flow">
        <ol>
          <li>Industry, city, and the one thing that makes the business different.</li>
          <li>A description in the owner&rsquo;s words, and the services with price and duration.</li>
          <li>A layout for each section, or &ldquo;let the AI decide&rdquo; per section.</li>
          <li>A visual archetype: eight presets, custom colours, or AI.</li>
          <li>Tone and language. Then <em>Generate</em>.</li>
        </ol>
      </CaseSection>

      <Exhibit>
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-8">
          <Figure
            src={wizardServices}
            alt="Wizard step two: the business description and a list of services with price and duration, in Albanian."
            sizes="(min-width: 1200px) 440px, 100vw"
            caption="Step two: services with price and duration."
          />
          <Figure
            src={wizardArchetype}
            alt="Wizard step four: a grid of eight visual archetype presets with colour swatches."
            sizes="(min-width: 1200px) 660px, 100vw"
            caption="Step four: eight visual archetypes, custom colours, or let the model choose."
          />
        </div>
      </Exhibit>

      <CaseSection title="Decisions">
        <ul>
          <li>
            <strong>Two calls, not one.</strong> First a brand brief (Claude Haiku, temperature 0.3, a
            strict JSON schema: positioning, three defining traits, target customer, voice, cultural
            anchor). Then theme and content generation (Claude Sonnet) working from that brief.
            Separating strategy from execution made the output more consistent and much cheaper to
            iterate on.
          </li>
          <li>
            <strong>Structured output only.</strong> The renderer composes sections from typed JSON
            payloads. No free text from a model reaches the page unparsed.
          </li>
          <li>
            <strong>A tenant per subdomain.</strong> Next.js middleware reads the host header and
            rewrites a business subdomain to its tenant routes; the main domain serves the wizard and
            the dashboard.
          </li>
          <li>
            <strong>Supabase Auth with row-level security.</strong> Businesses, profiles, services,
            bookings. Eighteen migrations, including one called{" "}
            <span className="font-mono text-[15px]">rls_tightening</span>, which is the honest name for
            a day spent fixing my own policies.
          </li>
          <li>
            <strong>Booking as the upsell.</strong> Timezone-aware slot generation, a uniqueness
            constraint against double bookings, WhatsApp confirmations. Walk-in businesses get a
            contact call-to-action instead.
          </li>
          <li>
            <strong>Albanian where the owner types.</strong> The wizard is written in Albanian, with
            examples in the way people actually describe their shops. The generated site follows the
            language chosen in step five. The dashboard is still a mix of Albanian and English, which
            is on the list.
          </li>
          <li>
            <strong>A wizard harness.</strong> Fixtures of real business types run through the pipeline
            on demand, so a change in the prompts shows up as a visible difference in the output, not a
            feeling.
          </li>
        </ul>
      </CaseSection>

      <Exhibit>
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src={siteHero}
            alt="A generated website for a test car dealership, Voca Autosallon: a dark hero with the Albanian headline E di çka po blen and a contact button."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption={
              <>
                A generated site for a test business, a car dealership. The headline, &ldquo;E di
                çka po blen&rdquo; (you know what you are buying), was written by the model from the
                wizard input.
              </>
            }
          />
          <Figure
            src={siteServices}
            alt="The same generated site, section Pse Te Ne: five cards describing SUVs, sedans, wagons, coupés and a kilometre guarantee, in Albanian."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption="The same site, further down. Structured sections composed from the brief. The clipped logo in the header of the first screenshot is the product's own bug, not the screenshot's. Uneven in places, which is exactly the work that remains."
          />
        </div>
      </Exhibit>

      <Exhibit>
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src={dashboard}
            alt="The owner dashboard: site status, quick actions and recent bookings."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption="The owner&rsquo;s dashboard, on a test business."
          />
          <Figure
            src={bookings}
            alt="The bookings view: a list of appointments with time, customer and service."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption="Bookings, with WhatsApp confirmations on the way out."
          />
        </div>
      </Exhibit>

      <CaseSection title="Where it stands">
        <p>
          The core flow works end to end: a barber can describe the shop and get a site on a subdomain
          with services and a booking calendar. The generated output is uneven, and it needs real
          product work on layouts and copy before a paying customer should see it.
        </p>
        <p>
          Work and university both became full-time in 2026 and the scope kept growing, so active
          development is on hold. It is the most ambitious thing I have built alone, and the clearest
          lesson in scope I have had.
        </p>
      </CaseSection>

      <CaseSection title="What I learned">
        <ul>
          <li>Structured output is the only kind a renderer should trust.</li>
          <li>Scope is a product decision, not a technical one.</li>
          <li>Stopping while it still works beats letting it decay.</li>
        </ul>
      </CaseSection>

      <CaseNav
        live={{ href: "https://lokal-web-one.vercel.app", label: "Landing page" }}
        note="Code is private. Ask me for a walkthrough."
        next={{ href: "/work/kontinuum", label: "Kontinuum" }}
      />
    </article>
  );
}
