import type { Metadata } from "next";
import { Comparison } from "@/components/Comparison";
import { FactsStrip } from "@/components/FactsStrip";
import { Figure } from "@/components/Figure";
import { AnnotatedFigure } from "@/components/AnnotatedFigure";
import { MetricTable } from "@/components/MetricTable";
import { Quote } from "@/components/Quote";
import { CaseHeader, CaseNav, CaseSection, Exhibit } from "@/components/Case";
import { ArrowUpRight } from "@/components/Icons";

import beforeHome from "@/assets/kontinuum-before-home.jpg";
import afterHome from "@/assets/kontinuum-after-home.jpg";
import afterPhone from "@/assets/kontinuum-after-phone.jpg";
import beforeGallery from "@/assets/kontinuum-before-gallery.jpg";
import afterWerke from "@/assets/kontinuum-after-werke.jpg";
import afterViewer from "@/assets/kontinuum-after-viewer.jpg";
import afterWerkePhone from "@/assets/kontinuum-after-werke-phone.jpg";
import beforeEnglish from "@/assets/kontinuum-before-english.jpg";
import afterEnglish from "@/assets/kontinuum-after-english.jpg";
import adminWerke from "@/assets/kontinuum-admin-werke.jpg";
import adminEditor from "@/assets/kontinuum-admin-editor.jpg";
import conceptA from "@/assets/kontinuum-concept-a.jpg";
import conceptB from "@/assets/kontinuum-concept-b.jpg";

const title = "Kontinuum: rebuilding a painter’s website";
const description =
  "How a 2015 WordPress site for a painter and mineralogist became a fast, bilingual catalogue of 81 works in two weeks. Client work: audit, concept, design, build, migration and handover.";

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
        <Comparison
          priority
          before={{
            src: beforeHome,
            alt: "The old kontinuum.biz homepage: an orange script logo on a black bar, a textured photographic background, a short welcome text and a photo of the atelier door.",
          }}
          after={{
            src: afterHome,
            alt: "The new kontinuum.biz homepage: an off-white page with the Kontinuum wordmark, a serif headline reading Vom Kristall zum Pinselstrich, and a blue painting of quartz crystals.",
          }}
          phone={{ src: afterPhone, alt: "The new kontinuum.biz homepage on a phone." }}
          caption="The homepage, before and after. Same viewport, same browser, nothing retouched."
        />
      </Exhibit>

      <CaseSection title="The client">
        <p>
          Harald Wicht, born 1956 in Nürnberg, studied mineralogy at FAU Erlangen and spent his working
          life in technical ceramics, as a process engineer on plants around the world. In 2009 he
          started painting again, self-taught, and named his atelier in Balzhausen after a term from
          crystallography: <em>Kontinuum</em>, something seamlessly connected. Eighty-one works later,
          most of them blue, he was still adding new ones in August 2026.
        </p>
        <p>
          He came to me through my father. We worked in English, and the brief on 1 September was
          short: keep his German text, add English, let people see the paintings properly, and give
          him a journal and a news page. The site went live on 15 September.
        </p>
      </CaseSection>

      <CaseSection title="The problem">
        <p>An audit of the old site on day one, all of it verified again from the archive I made of it:</p>
        <ul>
          <li>WordPress 4.4.33, a 2015 release, with the plugins of its time. Nothing had been updated since.</li>
          <li>
            The gallery page loaded all 84 images at once: 41 MB, fifteen thousand pixels tall, no lazy
            loading.
          </li>
          <li>
            Paintings were served at 1,000 pixels wide, and pinch-zoom was disabled in the viewport
            tag. On a painter&rsquo;s website.
          </li>
          <li>
            The English version returned &ldquo;Nothing Found. Sorry, no posts matched your
            criteria.&rdquo; Five of its pages were 404s.
          </li>
          <li>Fonts were loaded from Google&rsquo;s servers, a data-protection problem for a German site.</li>
          <li>
            Duplicate pages had accumulated (<span lang="de">uebermich-3, galerie-3, mineralogie</span>{" "}
            and <span lang="de">mineralogie-2</span>), and the menu offered two different Mineralogie items.
          </li>
          <li>The domain was registered to the agency, not to him.</li>
        </ul>
        <p>
          A neglected site, not an abandoned one. That distinction shaped everything: this was a
          rebuild for someone who still had things to show.
        </p>
      </CaseSection>

      <Exhibit>
        <AnnotatedFigure
          src={beforeGallery}
          alt="The old gallery page: three large paintings per row on a textured background, under a black navigation bar with two Mineralogie menu items."
          caption="The old gallery page at 1440 pixels wide, served from the archive."
          notes={[
            { x: 79, y: 5, text: "Two Mineralogie items in the menu, pointing at duplicate pages." },
            { x: 50, y: 20, text: "A photographic texture behind every page. The paintings compete with the wallpaper." },
            { x: 50, y: 60, text: "84 images in one long column, all loading at once: 41 MB before the page could scroll." },
            { x: 16, y: 87, text: "Served at 1,000 pixels wide, with pinch-zoom disabled." },
          ]}
        />
      </Exhibit>

      <CaseSection title="Constraints">
        <ul>
          <li>
            <strong>No high-resolution originals exist.</strong> The largest files anywhere on the old
            server were 2,000 to 3,000 pixels, so the museum-grade deep zoom I had planned on day one
            was dropped on day one. There was nothing to zoom into.
          </li>
          <li>
            <strong>No paid services.</strong> No database, no CMS subscription, nothing with a monthly
            bill. The only running cost is the domain.
          </li>
          <li>
            <strong>Harald must be able to add paintings and journal entries without me.</strong>
          </li>
          <li>
            <strong>German and English, both real.</strong> His German text stays, and so does the way
            he writes: short lines, almost verse, with exclamation marks.
          </li>
          <li>
            <strong>Self-hosted fonts and no trackers.</strong>
          </li>
          <li>
            <strong>Move the domain into his name</strong>, with zero downtime and every old URL
            redirected.
          </li>
        </ul>
      </CaseSection>

      <CaseSection title="Decisions, design">
        <p>
          Positioning first: this is not a mineral collector&rsquo;s site. It is a crystallographer who
          paints, and the site should read like that: precise at the top, warmer as the work takes
          over.
        </p>
        <ul>
          <li>
            <strong>A neutral surround.</strong> His palette is overwhelmingly blue, and a tinted
            background would have biased every painting. Museum vitrines are neutral for the same
            reason. The colour on the site comes from the work.
          </li>
          <li>
            <strong>Type with a division of labour.</strong> Source Serif 4 for his own writing, IBM Plex
            Sans and Plex Mono for catalogue data: number, title, year, dimensions. All self-hosted.
            The old site&rsquo;s rounded display face was wrong for a precision scientist.
          </li>
          <li>
            <strong>A real catalogue.</strong> 81 works, filterable by series (Kristall, Mohnblumen,
            Bravais-Gitter, Trepça and others), shown at true relative scale on desktop next to a
            1,000 mm scale bar, so a 135 × 95 cm canvas reads larger than a 40 × 30 cm one. A click
            opens the viewer.
          </li>
          <li>
            <strong>Built for selling later.</strong> Every work carries a status (available, sold, not
            for sale) and schema.org <span className="font-mono text-[15px]">VisualArtwork</span> markup,
            so a price and an enquiry button can be switched on without a rebuild.
          </li>
        </ul>
      </CaseSection>

      <Exhibit>
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src={conceptA}
            alt="Concept board A, Vitrine: a strict, gallery-like layout study for the Kontinuum site."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption="Concept A, Vitrine."
          />
          <Figure
            src={conceptB}
            alt="Concept board B, Atelier: a warmer layout study for the Kontinuum site with photographs of the studio."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption="Concept B, Atelier. Two boards from the first day, before the draft that became the site."
          />
        </div>
      </Exhibit>

      <CaseSection title="Decisions, engineering">
        <ul>
          <li>
            <strong>A generated static site.</strong> One HTML template and two JSON files (works,
            posts) go through a Python build script into a public folder. Render rebuilds on every
            push, in about a minute. There is no CMS to patch.
          </li>
          <li>
            <strong>An editing panel with no database.</strong> The <span lang="de">Redaktion</span> at{" "}
            <span className="font-mono text-[15px]">/admin</span> runs on a small Python server on
            Render&rsquo;s free tier and writes new works and posts as commits to the GitHub repository.
            The repository is the content, and the content is the backup.
          </li>
          <li>
            <strong>A news page that refreshes itself.</strong> A GitHub Action fetches exhibition news
            on the 1st and 21st of every month and rewrites the page.
          </li>
          <li>
            <strong>Images done properly.</strong> Every work stored as WebP with responsive sizes and
            lazy loading. The whole catalogue, scrolled to the end, transfers 1.5 MB; the first
            screen, 1.0 MB. The old gallery page transferred 41 MB before you could scroll.
          </li>
          <li>
            <strong>The domain, moved.</strong> Transferred to a new registrar with Harald as the
            registered owner, DNS pointed at Render, HTTPS automatic. SPF and DMARC set to reject, so
            nobody can send mail in his domain&rsquo;s name. Every old URL redirects.
          </li>
          <li>
            <strong>Accessibility as a gate, not a wish.</strong> Caption grey and wordmark colour
            darkened until they passed, heading levels put in order, and the image viewer takes
            focus when it opens, keeps Tab inside, and returns focus when it closes. axe-core over
            all nine pages and the viewer: 224 violations on the old site, 0 on the new one. Checked
            in Safari and on an iPhone profile.
          </li>
        </ul>
      </CaseSection>

      <Exhibit>
        <AnnotatedFigure
          src={afterWerke}
          alt="The new works catalogue: the headline 81 Arbeiten im wahren Größenverhältnis, a row of series filters, a scale bar, and small paintings laid out at their relative sizes."
          caption="The new catalogue page (Werke) at 1440 pixels wide."
          notes={[
            { x: 22, y: 30, text: "The catalogue states its own rule: 81 works, at true relative scale." },
            { x: 45, y: 61.5, text: "Filters by series: Kristall, Mohnblumen, Bravais-Gitter, Trepça and the rest." },
            { x: 20, y: 66.2, text: "A 1,000 mm scale bar, so the sizes mean something." },
            { x: 72, y: 82, text: "Lazy-loaded WebP thumbnails: 1.0 MB before you scroll, 1.5 MB for all 81." },
            { x: 88, y: 3.8, text: "German and English, both real, with hreflang for search engines." },
          ]}
        />
      </Exhibit>

      <Exhibit>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] md:gap-8">
          <Figure
            src={afterViewer}
            alt="The image viewer open on a painting, dark surround, caption with number, title and dimensions."
            sizes="(min-width: 1200px) 800px, 100vw"
            caption="The viewer. Focus moves in when it opens and back out when it closes; the keyboard works everywhere."
          />
          <Figure
            phone
            src={afterWerkePhone}
            alt="The catalogue page on a phone: the headline 81 Arbeiten, series filters, the scale bar and the first works at their relative sizes."
            caption="On a phone the relative scale still holds; the largest canvases fill the column."
          />
        </div>
      </Exhibit>

      <Exhibit>
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src={beforeEnglish}
            alt="The old English site: a page titled Nothing Found, Sorry no posts matched your criteria, with an empty sidebar."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption="Before: the English site, as visitors found it."
          />
          <Figure
            src={afterEnglish}
            alt="The new English homepage: From Crystal to Brushstroke, with the same structure as the German page."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption="After: every page in English, with the German text kept as he wrote it."
          />
        </div>
      </Exhibit>

      <Exhibit>
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src={adminWerke}
            alt="The Redaktion editing panel: a list of works with numbers, titles, series and status."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption="The Redaktion: the list of works."
          />
          <Figure
            src={adminEditor}
            alt="The Redaktion editor: a form for a new journal entry with a preview."
            sizes="(min-width: 1200px) 540px, 100vw"
            caption="The editor. Both write straight to GitHub. Harald has approved the site and has not needed the panel yet; it exists so he never has to wait for me."
          />
        </div>
      </Exhibit>

      <CaseSection title="Result">
        <MetricTable
          columns={["", "Before, 2015 site", "After, September 2026"]}
          rows={[
            { label: "Gallery page, every work loaded", before: "41.4 MB · 84 images", after: "1.5 MB · 81 works (1.0 MB before scrolling)" },
            { label: "Largest painting served", before: "1,000 px wide, zoom disabled", after: "Up to 2,166 px, in a viewer" },
            { label: "English", before: "“Nothing Found”, 5 pages 404", after: "Every page, with hreflang" },
            { label: "Accessibility, WCAG 2.1 AA (axe-core)", before: "224 violations", after: "0" },
            { label: "Fonts", before: "Loaded from Google", after: "Self-hosted" },
            { label: "Domain", before: "Registered to the agency", after: "Registered to Harald" },
            { label: "Adding a painting", before: "WordPress admin on an unpatched 2015 install", after: "A one-page panel, no database" },
            { label: "Software to keep patched", before: "WordPress and its plugins", after: "None" },
            { label: "Time", before: "—", after: "2 weeks, brief to launch" },
          ]}
          footnote="Page weights measured on 20 September 2026 with the same browser and viewport against the archived old site and the live new one. Accessibility measured on 16 September 2026 with axe-core over all nine pages and the viewer."
        />
        <div className="mt-10">
          <Quote by="Harald Wicht, client. Written reference, September 2026.">
            &ldquo;He did an excellent job! Short regarding time, focussing on my aim and reflecting my
            service to the visitors respectively customer.&rdquo;
          </Quote>
        </div>
      </CaseSection>

      <CaseSection title="How it is built">
        <ul>
          <li>HTML template + JSON → Python build → static files on Render, rebuilt on every push.</li>
          <li>Redaktion: a static admin page and a small Python server on Render&rsquo;s free tier, committing to GitHub.</li>
          <li>GitHub Actions for the news page, every 20 days.</li>
          <li>WebP variants generated by a script, responsive sizes, lazy loading.</li>
          <li>Porkbun for the domain and DNS, Render for hosting and TLS.</li>
          <li>axe-core and WebKit for checks; Google Search Console and Bing for indexing.</li>
        </ul>
      </CaseSection>

      <CaseSection title="What I would do differently">
        <ul>
          <li>
            <strong>Ask for the originals before designing the headline feature.</strong> Deep zoom died
            the day I learned the largest file was 3,000 pixels. The plan should have asked that
            question first.
          </li>
          <li>
            <strong>Give the client an account of his own on day one.</strong> Harald owns the domain, but
            hosting and repository sit in my accounts. The handover sheet explains how any developer
            can take over; a copy of the repository in his hands is the next step.
          </li>
          <li>
            <strong>Analytics and uptime monitoring.</strong> He cannot see his visitors yet.
          </li>
        </ul>
      </CaseSection>

      <CaseNav
        live={{ href: "https://kontinuum.biz", label: "kontinuum.biz" }}
        note="Code is private: it contains the client’s content."
        next={{ href: "/work/lokalweb", label: "LokalWeb" }}
      />
    </article>
  );
}
