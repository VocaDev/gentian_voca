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
import genBarber from "@/assets/lokalweb-gen-barbershop-bold.jpg";
import genClinic from "@/assets/lokalweb-gen-clinic-clean.jpg";
import genRestaurant from "@/assets/lokalweb-gen-restaurant-elegant.jpg";

const title = "LokalWeb: a website-as-a-service for Kosovo’s small businesses";
const description =
  "A five-step wizard and two Claude calls turn a business description into a website on its own subdomain, with booking. A working prototype, parked for scope. Solo side project by Gentian Voca.";

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
        index="03"
        kind="Side project, parked"
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
          { label: "Status", value: "Working prototype, parked July 2026" },
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
          caption="The landing page at 1440 pixels wide. Albanian first, because the owners are."
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
            <strong>Albanian first.</strong> The wizard, the dashboard and the generated sites speak the
            owner&rsquo;s language.
          </li>
          <li>
            <strong>A wizard harness.</strong> Fixtures of real business types run through the pipeline
            on demand, so a change in the prompts shows up as a visible difference in the output, not a
            feeling.
          </li>
        </ul>
      </CaseSection>

      <Exhibit>
        <div className="grid gap-6 md:grid-cols-3">
          <Figure
            src={genBarber}
            alt="A generated barbershop website with a bold dark hero and a booking button."
            sizes="(min-width: 1200px) 360px, 100vw"
            caption="Generated: a barbershop."
          />
          <Figure
            src={genClinic}
            alt="A generated clinic website with a clean light hero and a list of services."
            sizes="(min-width: 1200px) 360px, 100vw"
            caption="Generated: a clinic."
          />
          <Figure
            src={genRestaurant}
            alt="A generated restaurant website with a photographic hero and an elegant serif headline."
            sizes="(min-width: 1200px) 360px, 100vw"
            caption="Generated: a restaurant. Uneven in places, which is exactly the work that remains."
          />
        </div>
      </Exhibit>

      <Exhibit>
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src={dashboard}
            alt="The owner dashboard: site status, quick actions and recent bookings."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption="The owner&rsquo;s dashboard."
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
          product work on layouts and copy quality before a paying customer should see it. There are
          no customers. I parked it in July 2026.
        </p>
      </CaseSection>

      <CaseSection title="Why it is parked">
        <p>
          Work and university both became full-time in 2026, the scope kept growing, and a product
          like this needs continuous attention or it decays. I chose to park it while it still worked
          rather than let it die slowly. It is the most ambitious thing I have built alone, and the
          clearest lesson I have had in scope.
        </p>
      </CaseSection>

      <CaseSection title="What I learned">
        <ul>
          <li>Structured output is the only kind a renderer should trust.</li>
          <li>Scope is a product decision, not a technical one.</li>
          <li>A prototype that works is worth more parked than half-alive.</li>
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
