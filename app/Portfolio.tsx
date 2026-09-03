/* eslint-disable @next/next/no-img-element -- Media is pre-sized and optimized locally. */

import Link from "next/link";

import FolderCard from "./FolderCard";
import { IconArrow } from "./Icons";
import { ContactSection, SiteFooter, SiteHeader } from "./SiteChrome";
import { disciplines, portfolio } from "./content";

/** Splits a line into per-word masks so the title can cut in word by word. */
function MaskedLine({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <span className={accent ? "mast-line mast-line-accent" : "mast-line"}>
      {text.split(" ").map((word, index) => (
        <span className="word" key={`${word}-${index}`}>
          <span className="word-in">{word}</span>
        </span>
      ))}
    </span>
  );
}

/**
 * The home page is deliberately quiet: a single-viewport introduction in the
 * first person, three folders, one short line pointing at the About route, and
 * the contact close. Every piece of actual work lives on the folder it belongs
 * to — nothing is duplicated here.
 */
export default function Portfolio() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Video editor · Graphic designer</p>

              <h1 id="hero-title">
                <MaskedLine text="I cut frames" />
                <MaskedLine text="with rhythm." accent />
              </h1>

              <p className="hero-lead">
                Short film, ads and social work — I cut it for pace, then finish it with the
                type and colour that carry it.
              </p>

              <Link className="button button-primary" href="/work/motion">
                View the reel <IconArrow className="icon-turn" />
              </Link>
            </div>

            {/*
              A single, clean portrait. It doubles as the entry point to the reel, and
              the pointer-tilt is applied by Choreography.tsx — disabled on touch and
              under prefers-reduced-motion.
            */}
            <Link className="portrait-plate" href="/work/motion" aria-label="Muhammad Bilal — open the selected reel">
              <span className="plate-frame">
                <img
                  src={portfolio.person.portrait}
                  alt="Muhammad Bilal in a dark suit and white shirt"
                  width="900"
                  height="1124"
                  fetchPriority="high"
                />
              </span>
            </Link>
          </div>

          <a className="hero-cue" href="#folders" aria-label="Scroll to my work">
            <span />
          </a>
        </section>

        <section className="section folders-section" id="folders" aria-labelledby="folders-title">
          <h2 className="sr-only" id="folders-title">My work</h2>
          <div className="folder-grid">
            {disciplines.map((discipline) => (
              <FolderCard discipline={discipline} key={discipline.id} />
            ))}
          </div>
        </section>

        {/* The home page carries only the opening line. The full about lives on its own route. */}
        <section className="section about-teaser" id="about" aria-labelledby="about-title">
          <p className="about-statement" id="about-title">
            I&apos;m Muhammad Bilal — a video editor and graphic designer. I make ideas clear,
            cinematic, and worth watching.
          </p>
          <Link className="text-link" href="/about">
            More about me <IconArrow className="icon-turn" />
          </Link>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
