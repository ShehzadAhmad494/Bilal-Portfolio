import type { Metadata } from "next";
import Link from "next/link";

import VideoCard from "../../VideoCard";
import { ContactSection, DisciplineJump, SiteFooter, SiteHeader } from "../../SiteChrome";
import { portfolio } from "../../content";

export const metadata: Metadata = {
  title: "Motion & Video Editing — Muhammad Bilal",
  description:
    "Five selected cuts by Muhammad Bilal: short film, editorial series, cinematic color, advertising, and social.",
};

export default function MotionPage() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section className="page-hero" id="top" aria-labelledby="page-title">
          <p className="page-index"><Link href="/">Muhammad Bilal</Link> <span aria-hidden="true">/</span> Motion</p>
          <h1 id="page-title">Proof in the <em>cut.</em></h1>
          <p className="page-lead">Five pieces I chose for range, not volume — short film, editorial series, color, advertising and social. Each one plays on mute; tap a card to bring the sound up.</p>
        </section>

        <section className="section work-section" id="work" aria-label="Selected motion work">
          <div className="motion-grid">
            {portfolio.motionProjects.map((project, index) => (
              <VideoCard project={project} index={index} key={project.id} />
            ))}
          </div>
          <p className="work-note">Cut for pace and continuity, then held together by one grade — from a first idea to a platform-ready delivery.</p>
        </section>

        <DisciplineJump currentId="motion" />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
