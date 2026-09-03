import type { Metadata } from "next";
import Link from "next/link";

import { IconArrow } from "../Icons";
import SkillBoard from "../SkillBoard";
import { ContactSection, SiteFooter, SiteHeader } from "../SiteChrome";
import { disciplines } from "../content";

export const metadata: Metadata = {
  title: "About — Muhammad Bilal",
  description:
    "Muhammad Bilal is a video editor and graphic designer. ICS completed, BSIT in progress, and a toolkit spanning Premiere Pro, Final Cut Pro, CapCut, Photoshop, Canva and current AI production tools.",
};

export default function AboutPage() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section className="page-hero" id="top" aria-labelledby="page-title">
          <p className="page-index"><Link href="/">Muhammad Bilal</Link> <span aria-hidden="true">/</span> About</p>
          <h1 id="page-title">Learning the technology.<br /><em>Practising the craft.</em></h1>
          <p className="page-lead">
            I&apos;m Muhammad Bilal — a video editor and graphic designer. I move between editing,
            design and AI-assisted production, and I keep human judgment at the centre of all three.
          </p>
        </section>

        <section className="section about-detail" aria-labelledby="practice-title">
          <h2 className="sr-only" id="practice-title">My work</h2>
          <ul className="about-rooms">
            {disciplines.map((discipline) => (
              <li key={discipline.id}>
                <span className="room-index">{discipline.number}</span>
                <div>
                  <h3>{discipline.title}</h3>
                  <p>{discipline.summary}</p>
                  <Link className="room-link" href={discipline.href}>
                    See the work <IconArrow className="icon-turn" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="section skills-section" aria-labelledby="skills-title">
          <div className="section-heading section-heading-compact">
            <p className="section-index">Toolkit</p>
            <div><h2 id="skills-title">Made with <em>these.</em></h2></div>
          </div>
          <SkillBoard />
        </section>

        <section className="section education-section" aria-labelledby="education-title">
          <div className="section-heading section-heading-compact">
            <p className="section-index">Education</p>
            <div><h2 id="education-title">Studied alongside <em>the practice.</em></h2></div>
          </div>

          {/*
            Education as a progression rather than a pair of boxes: one stage
            completed, one in progress, joined by the same playhead line the rest
            of the site uses. Only the two qualifications Muhammad Bilal confirmed
            appear here — no dates, no institutions, nothing inferred.
          */}
          <div className="education-block">
            <ol className="education-track">
              <li className="education-stop is-complete">
                <span className="stop-node" aria-hidden="true" />
                <h3>ICS</h3>
                <p className="stop-state">Completed</p>
              </li>
              <li className="education-stop is-current">
                <span className="stop-node" aria-hidden="true" />
                <h3>BSIT</h3>
                <p className="stop-state">Currently pursuing</p>
              </li>
            </ol>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
