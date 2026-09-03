import type { Metadata } from "next";
import Link from "next/link";

import { ContactSection, DisciplineJump, SiteFooter, SiteHeader } from "../../SiteChrome";
import { aiTools } from "../../content";

export const metadata: Metadata = {
  title: "AI-Assisted Content Creation — Muhammad Bilal",
  description:
    "The generative tools Muhammad Bilal uses inside a human-led edit, and what each one is for — Veo 2, Flow, Seedance, FLUX and Hugging Face models.",
};

export default function AiPage() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section className="page-hero" id="top" aria-labelledby="page-title">
          <p className="page-index"><Link href="/">Muhammad Bilal</Link> <span aria-hidden="true">/</span> AI</p>
          <h1 id="page-title">Tools follow the <em>idea.</em></h1>
          <p className="page-lead">I use a handful of generative tools inside an otherwise human-led edit. Here is what each one is, and what I actually use it for.</p>
        </section>

        <section className="section ai-section" aria-label="AI tools">
          <div className="ai-grid">
            {aiTools.map((tool) => (
              <article className="ai-card" key={tool.id}>
                <span className="ai-mark" aria-hidden="true" style={{ "--tint": tool.tint } as React.CSSProperties}>{tool.mark}</span>
                <div className="ai-card-copy">
                  <p className="ai-kind">{tool.kind}</p>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="ai-note">
            Nothing in this portfolio is presented as a finished AI generation. These tools support research,
            iteration, and individual elements inside edits I assemble, time, and grade by hand.
          </p>
        </section>

        <DisciplineJump currentId="ai" />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
