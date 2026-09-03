"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { disciplines, portfolio } from "./content";

const { email, whatsapp, instagram } = portfolio.contact;

/**
 * The active theme lives on <html data-theme>, written by the pre-hydration script in
 * layout.tsx. It is read as an external store so the server response stays theme-neutral
 * (no hydration mismatch) while the client keeps the control accessible name in sync.
 */
function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function readTheme(): "light" | "dark" {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function readServerTheme(): null {
  return null;
}

const NAV_LABELS: Record<string, string> = {
  motion: "Motion",
  design: "Design",
  ai: "AI",
};

function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, readTheme, readServerTheme);

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem("bilal-theme", next);
    } catch {
      /* Storage can be unavailable (private mode); the theme still applies for this visit. */
    }
  }

  const label = theme ? `Switch to ${theme === "dark" ? "light" : "dark"} theme` : "Toggle color theme";

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={label} title={label}>
      <span className="theme-icon" aria-hidden="true"><i /><i /></span>
    </button>
  );
}

/**
 * Nav labels ship twice: the readable copy, and an aria-hidden duplicate stacked
 * directly below it inside a clipped box. Hover and keyboard focus cut from one to
 * the other — the same straight-cut language the reel uses. The swap is CSS, not
 * script, so it survives with JavaScript disabled; GSAP owns the entrances instead.
 */
function NavLabel({ children }: { children: string }) {
  return (
    <span className="nav-swap">
      <span className="nav-swap-line">{children}</span>
      <span className="nav-swap-line" aria-hidden="true">{children}</span>
    </span>
  );
}

/**
 * One header for every route. Discipline routes come from the same array the home
 * page renders, so a fourth discipline would appear in the navigation automatically.
 */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Muhammad Bilal, home">
        <span className="brand-name">Muhammad Bilal</span>
      </Link>
      <nav className="main-nav" aria-label="Primary navigation">
        {disciplines.map((discipline) => (
          <Link
            key={discipline.id}
            href={discipline.href}
            aria-current={pathname === discipline.href ? "page" : undefined}
          >
            <NavLabel>{NAV_LABELS[discipline.id] ?? discipline.title}</NavLabel>
          </Link>
        ))}
        <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}><NavLabel>About</NavLabel></Link>
      </nav>
      <div className="header-actions">
        {/* Every route ends with the same contact section, so the CTA stays in-page. */}
        <a className="header-contact" href="#contact"><NavLabel>Let&apos;s talk</NavLabel></a>
        <ThemeToggle />
      </div>
    </header>
  );
}

/** The WhatsApp glyph, drawn inline so the button costs no extra request. */
function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.24-6.16-3.48-8.4Z" />
    </svg>
  );
}

/**
 * A persistent WhatsApp entry point on every route. Deliberately not a stock green
 * circle: it is a squared coral plate in the site's own edit-suite geometry, sitting
 * clear of the header controls and, at the bottom of the page, clear of the footer —
 * the footer reserves the corner for it. Hidden from print, and it does not move
 * under `prefers-reduced-motion`.
 */
function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message Muhammad Bilal on WhatsApp at ${whatsapp.display}`}
    >
      <span className="fw-mark"><WhatsAppGlyph /></span>
      <span className="fw-label">WhatsApp</span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-rail" aria-hidden="true"><span className="footer-playhead" /></div>

        <div className="footer-grid">
          <div className="footer-identity">
            <Link className="footer-brand" href="/">Muhammad Bilal</Link>
            <p>Video Editor &amp; Graphic Designer</p>
          </div>

          <nav className="footer-column footer-nav" aria-label="Footer navigation">
            {disciplines.map((discipline) => (
              <Link key={discipline.id} href={discipline.href}>{discipline.title}</Link>
            ))}
            <Link href="/about">About</Link>
          </nav>

          <div className="footer-column footer-contact">
            <a href={whatsapp.href} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={`mailto:${email}`}>Email</a>
            <a href={instagram.href} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-base">
          <span className="footer-year" aria-hidden="true">© 2025</span>
          <a className="footer-top" href="#top">Back to top <span aria-hidden="true">&#8593;</span></a>
        </div>
      </footer>
      <FloatingWhatsApp />
    </>
  );
}

/** The closing conversion block, repeated at the end of every route. */
export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      {/* The strip is printed twice so the marquee can loop by exactly half its
          own width with no visible seam. Decorative, and it holds still under
          a reduced-motion preference because the animation never starts. */}
      <div className="contact-reel" aria-hidden="true">
        {[0, 1].map((copy) => (
          <span className="reel-run" key={copy}>
            <span>Video editing</span><span>Graphic direction</span><span>AI-assisted production</span>
          </span>
        ))}
      </div>
      <div className="contact-inner">
        <h2 id="contact-title">Have a story<br />worth <em>cutting?</em></h2>
        <div className="contact-panel">
          <p className="contact-lead">I&apos;m quickest on WhatsApp; email suits a longer brief.</p>
          <div className="contact-actions">
            <a className="button contact-cta" href={whatsapp.href} target="_blank" rel="noopener noreferrer">
              <span>Message on WhatsApp</span><span aria-hidden="true">&#8599;</span>
            </a>
            <a className="button contact-cta contact-cta-quiet" href={`mailto:${email}`}>
              <span>{email}</span><span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Cross-links so a visitor who finishes one discipline lands in the next. */
export function DisciplineJump({ currentId }: { currentId: string }) {
  const others = disciplines.filter((discipline) => discipline.id !== currentId);

  return (
    <nav className="discipline-jump" aria-label="Other disciplines">
      {others.map((discipline) => (
        <Link key={discipline.id} href={discipline.href}>
          <span className="jump-index">{discipline.number}</span>
          <span className="jump-title">{discipline.title}</span>
          <span className="jump-cue" aria-hidden="true">&#8599;</span>
        </Link>
      ))}
    </nav>
  );
}
