/* eslint-disable @next/next/no-img-element -- Media is pre-sized and optimized locally. */

import type { Metadata } from "next";
import Link from "next/link";

import { ContactSection, DisciplineJump, SiteFooter, SiteHeader } from "../../SiteChrome";
import { portfolio } from "../../content";

export const metadata: Metadata = {
  title: "Photography & Photo Editing — Muhammad Bilal",
  description:
    "Four image studies by Muhammad Bilal: color, atmosphere, composition, and graphic treatment.",
};

export default function DesignPage() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section className="page-hero" id="top" aria-labelledby="page-title">
          <p className="page-index"><Link href="/">Muhammad Bilal</Link> <span aria-hidden="true">/</span> Design</p>
          <h1 id="page-title">Still frames with <em>intent.</em></h1>
          <p className="page-lead">Four studies from my photo-editing practice — color, atmosphere, composition, graphic treatment, each with the same hierarchy I bring to a sequence.</p>
        </section>

        <section className="section stills-section" id="stills" aria-label="Selected image work">
          <div className="stills-grid">
            {portfolio.stillProjects.map((project, index) => (
              <figure className="still-card" key={project.id}>
                <div className="still-image-wrap">
                  <img src={project.image} alt={project.alt} width={project.width} height={project.height} loading="lazy" decoding="async" />
                  <span className="still-number" aria-hidden="true">0{index + 1}</span>
                </div>
                <figcaption><span>{project.discipline}</span><h3>{project.title}</h3><p>{project.note}</p></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <DisciplineJump currentId="design" />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
