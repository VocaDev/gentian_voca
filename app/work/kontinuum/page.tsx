import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { kontinuumPairs } from "@/content/kontinuum";
import { FactsStrip } from "@/components/FactsStrip";
import { Figure } from "@/components/Figure";
import { MetricTable } from "@/components/MetricTable";
import { Quote } from "@/components/Quote";
import { CaseHeader, CaseNav, CaseSection, Exhibit } from "@/components/Case";
import { ArrowUpRight } from "@/components/Icons";

import afterViewer from "@/assets/kontinuum-after-viewer.jpg";
import adminEditor from "@/assets/kontinuum-admin-editor.jpg";

const title = "Kontinuum: rebuilding a painter’s website";
const description =
  "A 2015 WordPress site for a painter and mineralogist, rebuilt in two weeks as a fast, bilingual catalogue of 81 works he can edit himself. What the old site did wrong, and what I did about it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/kontinuum" },
  openGraph: { title, description, url: "/work/kontinuum", type: "article" },
  twitter: { title, description },
};

export default function KontinuumCase() {
  return (
    <article>
      <CaseHeader
        index="01"
        kind="Client, paid"
        year="September 2026"
        title="Kontinuum"
        subtitle="An atelier website rebuilt for a painter and mineralogist"
        lede={
          <>
            Harald Wicht is a mineralogist who paints. His website was built for neither: a 2015
            WordPress theme with an orange script logo, a gallery page that loaded 84 images at once,
            and an English version that said &ldquo;Nothing Found&rdquo;.
          </>
        }
        meta={[
          { label: "Role", value: "Audit, concept, design, build, migration, handover" },
          { label: "Client", value: "Harald Wicht, Atelier Kontinuum, Balzhausen, Germany" },
          { label: "Timeline", value: "Brief 1 September 2026, live 15 September 2026" },
          { label: "Stack", value: "HTML · CSS · JavaScript · Python · GitHub Actions · Render" },
          {
            label: "Live",
            value: (
              <a href="https://kontinuum.biz" className="proof" target="_blank" rel="noopener">
                kontinuum.biz <ArrowUpRight />
              </a>
            ),
          },
        ]}
      />

      <Exhibit>
        <FactsStrip
          facts={[
            { value: "2 weeks", label: "from brief to launch" },
            { value: "41 → 1.5 MB", label: "gallery page, every work loaded" },
            { value: "224 → 0", label: "WCAG 2.1 AA violations, axe-core" },
            { value: "81 works", label: "catalogued, filterable, zoomable, DE + EN" },
          ]}
        />
      </Exhibit>

      <Exhibit>
        <BeforeAfter
          priority
          pairs={kontinuumPairs}
          caption="Four comparisons, all captured at the same viewport: the archived 2015 site and the live one. The arrow opens either state full size."
        />
      </Exhibit>

      <CaseSection title="What was wrong">
        <ul>
          <li>WordPress 4.4.33, a 2015 release, with the plugins of its time. Nothing updated since.</li>
          <li>The gallery loaded all 84 images at once: 41 MB, no lazy loading.</li>
          <li>
            Paintings were served at 1,000 pixels wide, and pinch-zoom was disabled in the viewport
            tag. On a painter&rsquo;s website.
          </li>
          <li>The English site returned &ldquo;Nothing Found&rdquo;. Five of its pages were 404s.</li>
          <li>Fonts came from Google&rsquo;s servers, a data-protection problem for a German site.</li>
          <li>Duplicate pages had piled up, and the menu offered two different Mineralogie items.</li>
          <li>The domain was registered to the agency, not to him.</li>
        </ul>
      </CaseSection>

      <CaseSection title="What I did">
        <ul>
          <li>
            <strong>Set the positioning first.</strong> Not a mineral collector&rsquo;s site: a
            crystallographer who paints. The surround went neutral so the colour comes from the work
            instead of from a background texture.
          </li>
          <li>
            <strong>Built a real catalogue.</strong> 81 works at true relative scale beside a 1,000 mm
            scale bar, filterable by series, each opening in a viewer that takes focus, traps Tab and
            hands it back on close.
          </li>
          <li>
            <strong>Gave the type a job.</strong> Source Serif 4 for his own writing, IBM Plex for
            catalogue data. Self-hosted, so nothing is fetched from Google.
          </li>
          <li>
            <strong>Made it static.</strong> One template and two JSON files go through a Python build
            on every push. No database, no CMS to patch, no monthly bill.
          </li>
          <li>
            <strong>Gave him the keys.</strong> The editing panel commits to GitHub rather than writing
            to a database, so he can add works and journal entries himself and the repository is always
            a complete backup.
          </li>
          <li>
            <strong>Fixed the images.</strong> WebP, responsive sizes, lazy loading. The full catalogue
            now transfers 1.5 MB instead of 41.
          </li>
          <li>
            <strong>Moved the domain into his name</strong> with zero downtime, redirected every old
            URL, and set SPF and DMARC to reject so nobody can send mail as him.
          </li>
          <li>
            <strong>Treated accessibility as a release gate.</strong> axe-core across all nine pages and
            the viewer: 224 violations down to 0, checked again in Safari and on an iPhone.
          </li>
          <li>
            <strong>Dropped my own headline feature.</strong> I had planned museum-grade deep zoom until
            I found the largest originals were 3,000 pixels. There was nothing to zoom into, so it went.
          </li>
        </ul>
      </CaseSection>

      <Exhibit>
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src={afterViewer}
            alt="The image viewer open on a painting, dark surround, caption with number, title and dimensions."
            sizes="(min-width: 1200px) 540px, 100vw"
            label="The image viewer on kontinuum.biz"
            caption="The viewer. Keyboard throughout, focus returned on close."
          />
          <Figure
            src={adminEditor}
            alt="The Redaktion editor: a form for a new journal entry with a preview."
            sizes="(min-width: 1200px) 540px, 100vw"
            label="The Redaktion editing panel"
            caption="The editing panel. It writes to GitHub, so he never has to wait for me."
          />
        </div>
      </Exhibit>

      <CaseSection title="Result">
        <MetricTable
          columns={["", "Before, 2015 site", "After, September 2026"]}
          rows={[
            { label: "Gallery page, every work loaded", before: "41.4 MB · 84 images", after: "1.5 MB · 81 works" },
            { label: "Largest painting served", before: "1,000 px, zoom disabled", after: "Up to 2,166 px, in a viewer" },
            { label: "English", before: "“Nothing Found”, 5 pages 404", after: "Every page, with hreflang" },
            { label: "Accessibility, WCAG 2.1 AA (axe-core)", before: "224 violations", after: "0" },
            { label: "Software to keep patched", before: "WordPress and its plugins", after: "None" },
            { label: "Domain", before: "Registered to the agency", after: "Registered to Harald" },
          ]}
          footnote="Page weights measured on 20 September 2026 in the same browser and viewport, against the archived old site and the live new one. Accessibility measured on 16 September 2026 with axe-core."
        />
        <div className="mt-10">
          <Quote by="Harald Wicht, client. Written reference, September 2026.">
            &ldquo;He did an excellent job! Short regarding time, focussing on my aim and reflecting my
            service to the visitors respectively customer.&rdquo;
          </Quote>
        </div>
      </CaseSection>

      <CaseNav
        live={{ href: "https://kontinuum.biz", label: "kontinuum.biz" }}
        note="Code is private: it contains the client’s content."
        next={{ href: "/work/lokalweb", label: "LokalWeb" }}
      />
    </article>
  );
}
