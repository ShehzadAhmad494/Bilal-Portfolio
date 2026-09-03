"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll and entrance choreography, driven by GSAP + ScrollTrigger.
 *
 * Three rules govern everything in this file, in this order:
 *
 * 1. The server-rendered page is already the finished page. Every element ships
 *    visible in CSS; nothing here is allowed to be the reason a paragraph exists.
 *    Start states are written by GSAP at runtime only (`gsap.from` / `fromTo`), so
 *    if this chunk never loads, never parses, or is switched off, the page reads.
 * 2. Under `prefers-reduced-motion: reduce` GSAP does not run at all. The whole
 *    timeline is registered inside `matchMedia("(prefers-reduced-motion: no-preference)")`,
 *    which both refuses to build it and reverts it if the preference flips mid-visit.
 * 3. The vocabulary is an editor's: cuts, wipes, mask reveals, and a playhead
 *    scrubbed by scroll — plus one deliberate exception, a pointer-tilt on the
 *    hero portrait, scoped to devices with a precise pointer and reverted on leave.
 *
 * Mounted once from the root layout; `usePathname` rebuilds it on client navigation.
 */
export default function Choreography() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    // Dynamic import keeps GSAP out of the first paint path: it is choreography,
    // not content, so it may arrive late. Only the core and ScrollTrigger are
    // pulled in — none of the rest of the plugin set.
    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const has = (selector: string) => document.querySelector(selector) !== null;
        const all = (selector: string) => gsap.utils.toArray<HTMLElement>(selector);

        /** A mask reveal: the element wipes up from behind its own bottom edge. */
        const CUT_IN = {
          clipPath: "inset(0% 0% 100% 0%)",
          yPercent: 14,
          opacity: 0,
          duration: 0.9,
          ease: "expo.out",
        } as const;

        /* --- Header: the chrome drops in before anything else moves. --------- */
        if (has(".site-header")) {
          gsap.from(".site-header", {
            yPercent: -140,
            opacity: 0,
            duration: 0.8,
            ease: "expo.out",
          });
        }

        /* --- Home hero: a short title sequence -------------------------------- */
        if (has(".hero-copy")) {
          const intro = gsap.timeline({ defaults: { ease: "expo.out" } });

          intro
            .from(".hero-kicker", { opacity: 0, y: -10, duration: 0.6 }, 0)
            // Each word rides up out of its own mask, the way a title card builds.
            .from(".hero h1 .word-in", { yPercent: 115, opacity: 0, stagger: 0.045, duration: 0.85 }, 0.1)
            .from(".hero-lead", { opacity: 0, y: 22, duration: 0.8 }, 0.45)
            .from(".hero-copy .button", { opacity: 0, y: 18, duration: 0.7 }, 0.6);

          if (has(".plate-frame")) {
            intro
              .fromTo(
                ".plate-frame",
                { clipPath: "inset(100% 0% 0% 0%)" },
                { clipPath: "inset(0% 0% 0% 0%)", duration: 1.05, ease: "expo.out" },
                0.15,
              )
              .from(".plate-frame img", { scale: 1.18, filter: "blur(16px)", duration: 1.3 }, 0.15);
          }
        }

        /*
          The hero portrait's "soul": a subtle pointer-tilt that tracks the cursor
          across the whole hero, not just the image — the tilt reads as the page
          responding to the visitor, not as a toy on one element. Scoped to devices
          that actually have a precise pointer, smoothed with quickTo, and always
          returned to rest on leave so it can never get stuck mid-tilt.
        */
        const hero = document.querySelector<HTMLElement>(".hero");
        const plate = document.querySelector<HTMLElement>(".plate-frame");
        if (hero && plate && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          const setRotateX = gsap.quickTo(plate, "rotateX", { duration: 0.6, ease: "power3.out" });
          const setRotateY = gsap.quickTo(plate, "rotateY", { duration: 0.6, ease: "power3.out" });
          gsap.set(plate, { transformPerspective: 900 });

          const onMove = (event: PointerEvent) => {
            const bounds = hero.getBoundingClientRect();
            const px = (event.clientX - bounds.left) / bounds.width - 0.5;
            const py = (event.clientY - bounds.top) / bounds.height - 0.5;
            setRotateY(px * 10);
            setRotateX(py * -8);
          };
          const onLeave = () => {
            setRotateX(0);
            setRotateY(0);
          };

          hero.addEventListener("pointermove", onMove);
          hero.addEventListener("pointerleave", onLeave);
          ScrollTrigger.addEventListener("refresh", onLeave);
        }

        /* --- Folders: the three cards cut in, one peek image racks into focus - */
        if (has(".folder-grid")) {
          gsap.from(".folder-card", {
            ...CUT_IN,
            duration: 1,
            stagger: 0.14,
            scrollTrigger: { trigger: ".folder-grid", start: "top 82%", once: true },
          });

          all(".peek-item img").forEach((image, index) => {
            gsap.from(image, {
              scale: 1.16,
              filter: "blur(10px)",
              duration: 1,
              delay: index * 0.05,
              ease: "expo.out",
              scrollTrigger: { trigger: image.closest(".folder-card"), start: "top 85%", once: true },
            });
          });
        }

        /* --- The skills board deals in like a hand of cards ------------------- */
        if (has(".skill-board")) {
          gsap.from(".skill-slot", {
            scale: 0.86,
            opacity: 0,
            rotate: -6,
            stagger: 0.06,
            duration: 0.7,
            ease: "back.out(1.6)",
            scrollTrigger: { trigger: ".skill-board", start: "top 82%", once: true },
          });
        }

        /* --- AI tool cards ----------------------------------------------------- */
        if (has(".ai-grid")) {
          gsap.from(".ai-card", {
            ...CUT_IN,
            duration: 0.9,
            stagger: 0.1,
            scrollTrigger: { trigger: ".ai-grid", start: "top 85%", once: true },
          });
        }

        /* --- Motion and stills grids -------------------------------------------- */
        if (has(".motion-grid")) {
          gsap.from(".motion-card", {
            ...CUT_IN,
            duration: 0.9,
            stagger: 0.08,
            scrollTrigger: { trigger: ".motion-grid", start: "top 85%", once: true },
          });
        }
        if (has(".stills-grid")) {
          gsap.from(".still-card", {
            ...CUT_IN,
            duration: 0.9,
            stagger: 0.08,
            scrollTrigger: { trigger: ".stills-grid", start: "top 85%", once: true },
          });
        }

        /* --- The contact strip runs, the way a leader runs on a deck --------- */
        if (has(".contact-reel")) {
          gsap.to(".contact-reel", {
            xPercent: -50,
            duration: 26,
            ease: "none",
            repeat: -1,
          });
        }

        /* --- Section headings: masked line reveal on entry ------------------- */
        all(".section-heading, .page-hero").forEach((block) => {
          const lines = block.querySelectorAll(".section-index, .page-index, h1, h2, p");
          if (!lines.length) return;
          gsap.from(lines, {
            ...CUT_IN,
            stagger: 0.09,
            scrollTrigger: { trigger: block, start: "top 85%", once: true },
          });
        });

        /* --- About rooms + education progression ------------------------------ */
        if (has(".about-rooms")) {
          gsap.from(".about-rooms li", {
            ...CUT_IN,
            duration: 0.9,
            stagger: 0.1,
            scrollTrigger: { trigger: ".about-rooms", start: "top 85%", once: true },
          });
        }

        if (has(".education-track")) {
          gsap.from(".education-stop", {
            ...CUT_IN,
            duration: 0.9,
            stagger: 0.16,
            scrollTrigger: { trigger: ".education-track", start: "top 85%", once: true },
          });
        }

        /* --- Contact close and footer --------------------------------------- */
        if (has(".contact-panel")) {
          gsap.from(".contact-section h2", {
            ...CUT_IN,
            duration: 1,
            scrollTrigger: { trigger: ".contact-section", start: "top 78%", once: true },
          });
          gsap.from(".contact-panel > *", {
            opacity: 0,
            y: 22,
            duration: 0.8,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: { trigger: ".contact-panel", start: "top 90%", once: true },
          });
        }

        if (has(".site-footer")) {
          gsap.fromTo(
            ".footer-playhead",
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".site-footer",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 0.3,
              },
            },
          );
          gsap.from(".footer-identity, .footer-column, .footer-base > *", {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.08,
            ease: "expo.out",
            scrollTrigger: { trigger: ".site-footer", start: "top 94%", once: true },
          });
        }

        /* --- Detail routes: the cross-link block ----------------------------- */
        if (has(".discipline-jump")) {
          gsap.from(".discipline-jump a", {
            ...CUT_IN,
            duration: 0.8,
            stagger: 0.12,
            scrollTrigger: { trigger: ".discipline-jump", start: "top 90%", once: true },
          });
        }

        // Fonts and lazy media change layout after first paint; recompute once settled.
        const refresh = () => ScrollTrigger.refresh();
        if (document.fonts) void document.fonts.ready.then(refresh);
        window.addEventListener("load", refresh);
        return () => window.removeEventListener("load", refresh);
      });

      cleanup = () => mm.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
