# Muhammad Bilal Portfolio — Production Charter

## Mission

Build a cinematic, calm, entertaining, enterprise-grade portfolio that presents Muhammad Bilal as a hire-ready video editor and graphic designer. The portfolio itself must demonstrate visual judgment, pacing, hierarchy, storytelling, motion restraint, and technical polish.

## Audience and conversion goal

- Primary audience: creative directors, agencies, brands, production teams, and hiring managers.
- Primary conversion: watch selected work, understand capabilities in under 60 seconds, then contact Muhammad Bilal.
- Tone: confident and editorial; never inflated, childish, template-like, or “fresher portfolio” language.

## Confirmed content

- Name: Muhammad Bilal
- Positioning: Video Editor & Graphic Designer
- Education: ICS; currently pursuing BSIT
- Core tools: Adobe Photoshop, Adobe Premiere Pro, CapCut, Final Cut Pro, Canva
- AI workflow: Veo 2, Flow, Seedance, FLUX, and relevant Hugging Face models
- Source assets: `public/profile pic.png`, `public/photo editing/*`, `public/video editing/*`
- Videos must be presented as curated cards because several source files are low resolution.

## Product principles

1. Work first. The strongest moving-image and photo-editing samples must appear before biography or education.
2. Evidence over claims. Copy explains editorial decisions and outcomes; motion, hover, sequencing, and media presentation prove skill.
3. Cinematic, not noisy. Use controlled reveals, editorial cuts, easing, masks, subtle parallax, and timeline motifs. Avoid gratuitous 3D, constant movement, cursor gimmicks, and animation that competes with the work.
4. Enterprise credibility. Use disciplined grids, strong typographic contrast, useful project metadata, clear services, accessible interactions, and real contact paths.
5. Calm entertainment. Moments of delight should feel like an editor’s timeline or a design studio contact sheet.
6. Honest presentation. Do not invent clients, metrics, awards, job history, testimonials, or unavailable contact/social details.
7. Light and dark parity. Both themes must feel deliberately art-directed, readable, and persistent across reloads.
8. Responsive by design. Desktop, tablet, and mobile are first-class; media cards must remain legible and usable on touch.
9. Performance is part of craft. Avoid autoplaying many heavy videos, lazy-load media, supply posters, optimize originals where practical, and respect reduced-motion and reduced-data preferences.
10. Accessibility is non-negotiable. Semantic landmarks, keyboard support, visible focus, useful alt text/labels, sufficient contrast, and no essential hover-only information.

## Visual direction

- Concept: **The Quiet Cut** — a premium digital edit suite translated into an editorial portfolio.
- Palette: near-black / warm ivory foundation with a controlled electric-coral accent and cool-lilac secondary signal. No generic purple-gradient SaaS aesthetic.
- Typography: expressive editorial display face paired with a precise grotesk/mono utility face. Keep the family count small and load efficiently.
- Surfaces: film-frame crops, timecode, chapter markers, contact-sheet grids, matte borders, intentional negative space, fine grain created with CSS only.
- Motion language: cut, wipe, rack-focus, playhead, mask reveal. Motion intensity must scale down on mobile and disappear under `prefers-reduced-motion`.

## Information architecture

- Persistent header: identity, Work, Capabilities, About, contact CTA, theme toggle.
- Hero: concise role statement, availability/education signal, immediate reel/work CTA, portrait integrated as an editorial frame.
- Selected motion work: curated video cards with generated poster frames, duration/category metadata, accessible play behavior, no wall of raw filenames.
- Image work: art-directed gallery/contact sheet using all four edited photos where composition supports it.
- Capabilities: editing, design, AI-assisted production, and tools grouped by outcomes rather than a logo cloud.
- Process/value: brief-to-delivery workflow demonstrating senior working habits without claiming nonexistent employment.
- About/education: short, credible, human; ICS and current BSIT.
- Contact: direct, high-contrast closing section. Resolved on 2026-08-29: real channels supplied (email, WhatsApp, Instagram) and centralized in `app/content.ts`.

## Technical rules

- Existing stack: vinext/React 19/TypeScript/Tailwind-capable CSS and `@openai/sites-vite-plugin`; preserve the supplied package manager, lockfile, scripts, and hosting configuration.
- Superseded on 2026-08-29 by explicit user direction: the site is now four routes - a light home index plus one detail page per discipline. The original rule read: "Prefer one polished page with anchored sections over shallow multi-route pages." Each route must still be polished and deep, never a shallow stub.
- Avoid model-authored SVG illustrations. Use CSS shapes and simple text/Unicode/icon components where needed.
- Components and content data should be clear, typed, and maintainable. Do not add a large animation framework unless CSS and small React utilities cannot meet the requirement.
- Replace starter metadata, icons where appropriate, and all starter preview content. Remove unused skeleton dependencies before final validation.
- Generate media posters locally from supplied videos; do not fabricate project imagery.
- Never expose raw, extremely long source filenames in the UI.

## Four-agent order and authority

### Stage 1 — Full-stack developer

Build the complete functional foundation: semantic structure, media pipeline, responsive layout, theme persistence, interactions, content model, metadata, loading behavior, and build stability. May make reasonable editorial labels from visible content but may not invent client claims.

### Stage 2 — Enterprise visual designer

Audit and upgrade typography, art direction, composition, rhythm, palette, media crops, states, and animation language. Must remove anything that reads like a template, dashboard, beginner portfolio, or generic developer site.

### Stage 3 — Product quality reviewer

Review implementation against conversion, accessibility, performance, responsiveness, coherence, and the reference’s useful qualities. Must identify “basic/fresher-level” problems and directly implement clear fixes. Record findings and resolutions.

### Stage 4 — Senior video editor & graphic designer hiring reviewer

Review as a real hiring decision-maker. Optimize first-minute scan, reel ordering, labels, credibility, work presentation, and contact conversion. Directly implement clear improvements that increase interview likelihood without overstating experience.

## Handoff protocol

- Work strictly in the stage order above.
- Before editing, each agent must read this entire file and inspect the current implementation plus previous stage notes.
- Preserve good prior work; make targeted, evidence-based upgrades.
- At the end of a stage, update only that stage’s log below with: completed work, important decisions, known limitations, and exact next-agent priorities.
- Every agent must leave the project compiling or clearly document why it cannot.

## Definition of done

- Recognizably Muhammad Bilal’s portfolio in the first viewport.
- Selected video and image work is genuinely browsable and not buried.
- Light/dark themes both art-directed and persistent.
- Responsive at mobile, tablet, laptop, and wide desktop.
- Keyboard navigation, focus visibility, reduced motion, and readable contrast.
- No fake employers, projects, testimonials, results, or contact details.
- No starter branding, placeholder portfolio projects, broken media, raw filenames, or obvious template residue.
- Production build succeeds and the final site is published unless publishing is blocked by external access.

## Stage logs

### Stage 1 — Full-stack developer

Status: Complete.

Completed work:

- Replaced the starter skeleton with a production-oriented, semantic single-page portfolio covering hero, selected motion, image work, capabilities, working method, about/education, contact, and footer.
- Added a typed, centralized content model in `app/content.ts`; all visible claims are grounded in supplied information or the observable work, with no invented clients, metrics, employment, awards, location, or contact details.
- Audited all supplied media, found one exact duplicate of “The Long Walk,” and curated six distinct motion pieces for range rather than exposing raw filenames.
- Generated real poster frames from the supplied videos and browser-compatible H.264/AAC preview encodes under `public/media`; the HEVC source was converted for compatibility and large sources were reduced for practical delivery.
- Generated optimized WebP derivatives for the supplied portrait and all four photo-editing images while preserving the originals.
- Implemented press-to-load video cards with real posters, native controls after activation, keyboard-accessible play buttons, no autoplay wall, `preload="none"`, `playsInline`, and pause-other-video behavior.
- Implemented persistent light/dark preference with system fallback, pre-hydration theme initialization, deliberate palette variables for both themes, and a keyboard-accessible toggle.
- Added responsive layouts for wide desktop, laptop/tablet, and small mobile; semantic landmarks and anchored navigation; skip link; visible focus treatment; reduced-motion and reduced-data accommodations; lazy still-image loading; and explicit image dimensions.
- Replaced starter metadata with Muhammad Bilal-specific title, description, Open Graph/X text, author data, theme colors, and portrait-based icons. Removed starter preview components, unused starter icons, and `react-loading-skeleton`.
- Made package scripts Windows-compatible by removing POSIX-only inline environment assignments, updated the lockfile, and replaced starter rendering tests with portfolio-specific server-render checks.
- Verified the final state with a successful `npm run build`, passing server-render test, and clean ESLint run.

Important decisions:

- Visual concept foundation is “The Quiet Cut”: warm near-black/ivory, electric coral, cool lilac, Bodoni Moda + Manrope, restrained frame/timecode/timeline motifs, CSS-only grain, and no added animation framework.
- Work leads the information hierarchy. The hero identifies Muhammad Bilal and routes immediately to real work; biography and education appear after motion, stills, capabilities, and process.
- Motion cards use selected real samples and readable editorial labels. Duplicate files are not shown twice; original source files remain untouched.
- Contact data is centralized as nullable content. Because no verified email or social address was supplied, the site honestly displays a pending-contact state instead of inventing or publishing a placeholder address.

Known limitations:

- Supplied videos do not include verified caption/transcript files, so the player uses accessible native controls and descriptive card context but cannot provide accurate captions yet.
- A verified email/social contact, availability statement, location, client context, project briefs, and outcomes were not supplied and are intentionally absent.
- Stage 1 performed code/build QA only as a delegated background stage; visual browser QA belongs in the following review passes.

Exact Stage 2 priorities:

1. Inspect the running portfolio at desktop, tablet, and mobile widths in both themes; fix any visual overflow, crop, or typography issue without weakening the semantic/media foundation.
2. Push the art direction beyond the functional foundation: refine hero composition, Bodoni/Manrope sizing, grid rhythm, still-image sequencing, card proportions, and theme-specific contrast so no region reads like a template.
3. Evaluate each real poster crop and reorder/refine motion-card prominence if the opening work sequence can feel more cinematic; preserve press-to-load behavior and honest labels.
4. Upgrade the cut/wipe/playhead motion language with restrained CSS where it materially proves editing skill; preserve reduced-motion and avoid cursor gimmicks, constant movement, or gratuitous 3D.
5. Keep all content truthful and contact nullable; do not fabricate missing details while improving the closing conversion treatment.

### Stage 2 — Enterprise visual designer

Status: Complete.

Completed work:

- Re-art-directed the functional Stage 1 foundation into a more decisive editorial system: Bodoni Moda now carries the primary cinematic hierarchy, Manrope is reserved for precise production copy, and headline scale/offsets were rebuilt to feel like an art-directed title sequence rather than a generic portfolio template.
- Replaced the rounded SaaS-style navigation treatment with a compact clipped edit-suite slate, squared identity mark, production-style uppercase labels, and a custom two-state theme glyph while preserving the original semantic navigation and theme persistence.
- Re-composed the hero around a named project slate, a two-beat title (“Frames with rhythm. Stories with intent.”), an asymmetric editorial baseline, structured background grid, and a portrait treatment with take marker, focus frame, coral edge, restrained desaturation, and theme-safe contrast.
- Rebuilt selected motion into a deliberate screening sequence: one large hero cut, three equal studies, then two wider closing cards. Added screening metadata, safe-frame corner guides, scene/timecode notation, lower-left press-to-play controls, stronger frame mattes, and restrained hover/focus movement without changing the press-to-load architecture.
- Removed beginner-level pill/tag styling from craft and tool lists. Craft annotations now read as compact slash-separated production notes; capability rows use a controlled horizontal wipe and stronger serif hierarchy rather than dashboard-like chip clouds.
- Re-sequenced the still gallery composition into an asymmetric 7/4/4/6-column contact sheet with a production ruler, varied editorial crops, improved caption hierarchy, and controlled depth. All four original edited images remain present and truthfully described.
- Strengthened the working-method, about, education, and contact sections with timeline/playhead language, quieter structural grids, sharper borders, a compact color registration bar, and reduced UI-kit ornamentation.
- Added progressive scroll-linked cut/reveal motion only where supported, with a non-animated fallback. All motion remains disabled by the existing reduced-motion rule, and no additional media loading or animation dependency was introduced.
- Tuned dark and light theme tokens and section-specific contrast so the edit-suite surfaces, gallery, coral CTA, borders, captions, and focus states remain intentionally art-directed across both themes.
- Verified the upgraded implementation with a successful production build, clean ESLint run, and passing server-render test.

Important decisions:

- The primary art-direction metaphor is now an editorial screening/contact sheet, not a software dashboard: squared geometry, crop marks, scene slates, timecode, ruled captions, asymmetric white space, and one controlled coral signal do the visual storytelling.
- The supplied product-motion cut remains first because its saturated red graphic system produces the strongest immediate visual interruption and best matches the portfolio accent; “The Long Walk” follows to establish narrative range rather than allowing one visual style to dominate.
- Video posters retain close vertical crops until activation. This presents the low-resolution sources as intentional card art while the native player switches to contained playback once loaded.
- The stills section intentionally remains a darkroom-like graphite surface in both themes. Light mode changes the surrounding portfolio and its contrast tokens, while this section stays visually stable so the supplied color work is judged consistently.
- Hover effects are always paired with focus-within or non-hover structure, and essential labels remain visible without interaction.

Known limitations:

- This delegated environment has no connected browser backend, so the stage could not perform screenshot-based visual QA at exact desktop/tablet/mobile breakpoints. Code-level responsive inspection, media inspection, compilation, lint, and rendered HTML validation were completed instead.
- The quality ceiling of several source videos remains visible during playback; the presentation deliberately masks it at rest but does not misrepresent or upscale the footage.
- No verified email, social profile, captions/transcripts, client context, project briefs, or results were supplied, so the closing conversion remains an honest pending-contact state and project descriptions stay evidence-based.

Exact Stage 3 priorities:

1. Review the actual rendered page in both themes at roughly 1440, 1024, 768, 390, and 320 CSS-pixel widths if a browser becomes available; specifically challenge title wrapping, the 1–3–2 motion cadence, portrait crop, fixed-header density, and contact headline overflow.
2. Verify keyboard behavior end-to-end: skip link, anchor order, theme control, every play control, native video controls after activation, and focus visibility over dark posters and the coral contact surface.
3. Measure runtime performance and layout stability with the real media files. Preserve press-to-load, but correct any poster sizing, font loading, long-task, or cumulative-shift issue found.
4. Audit theme contrast numerically for muted/faint utility text, gallery captions, header translucency, and the contact pending state; implement targeted token corrections rather than flattening the art direction.
5. Treat unsupported scroll-timeline browsers and reduced-motion/reduced-data modes as first-class fallbacks; confirm that no content depends on reveal animation and no poster or focus state becomes obscured.
6. Remove or simplify any remaining element that reads decorative before it reads useful, but preserve the screening-room hierarchy and truthful media-first ordering.

### Stage 3 — Product quality reviewer

Status: Complete.

Completed work:

- Audited theme contrast numerically rather than by eye: 49 real foreground/background pairs were computed from the CSS token values (relative luminance plus WCAG 2.x contrast ratio, alpha-composited where colours are translucent). 25 pairs failed. After the token corrections, a re-run of the same audit over 56 pairs passes 56/56 at AA thresholds (4.5:1 body/small text, 3:1 large text and non-text UI).
- Introduced two new colour tokens instead of flattening the art direction: `--field` (a deeper coral used only as the surface behind ivory type — the contact section) and `--accent-text` (a coral safe for small text and glyphs in light theme). `--accent` itself is untouched, so the electric coral still carries headline `em`s, rules, the accent bar and focus rings.
- Corrected `--faint`, `--header` translucency, the gallery ruler, the still-number chip and the whole contact surface; verified each against every background it can actually sit on (page background, `--surface`, the featured card's `color-mix` background, the gallery, the coral field, and the header composited over the brightest and darkest things that scroll under it).
- Repaired keyboard behaviour end to end by tracing markup and CSS: the skip-link target is now focusable, focus moves onto the native video controls when the play button unmounts, focus rings are visible on the coral field, and the theme control now announces and shows its state.
- Fixed WCAG 2.2 target-size failures — nav links, the header CTA, the hero text link, the scroll cue and footer links were the height of their 10–11px text.
- Restored the contact CTA on tablet and phone (it was hidden below 820px while decorative nav links survived), and moved the nav trimming to a width where it is actually needed.
- Added a tablet breakpoint for the contact sheet: between 620 and 900px the 12-column stagger left each still roughly 215px wide, which is too small to judge colour work on. It now runs 2-up with a reduced stagger and a stacked caption.
- Removed fabricated technical metadata from the UI (an invented in-point timecode, a "24 FPS" rail and a "/ 24" frame-rate suffix on every card — the sources are 30fps), and removed the availability claim from the contact band, which also contradicted the honest pending-contact state directly below it.
- Published the real intrinsic dimensions of every still (all four were declared 1800x1800; the files are 1350x1800 and 1232x1800), typed as required `width`/`height` fields on `StillProject`.
- Added print/paginated fallback rules. Scroll-driven reveals never advance in a paginated context, so the work, stills and capabilities would have committed to paper at `opacity: 0.15`.
- Trimmed cost and dead code: two `backdrop-filter` layers sitting behind near-opaque plates, `text-rendering: optimizeLegibility`, an ill-matched "Arial Narrow" fallback, the unused `--accent-soft` token, dead `.portrait-caption` rules, an `aria-label` on a `role=generic` div, and a `role="status"` live region on text that never changes.
- Expanded `tests/rendered-html.test.mjs` from 1 test to 6, locking the things a later stage could silently regress: all six motion pieces and four stills render; skip link, focusable main, nav, header, footer and every section anchor exist; all six videos are `preload="none"` with a poster and no `src` until activation; all four stills are lazy, dimensioned and have real alt text; the portrait is eager and prioritised; and no mailto, availability claim, client/testimonial/award language, invented metric or raw source filename appears anywhere in the response.
- Verified with `npm run build` (success), `npm test` (6/6 pass) and `npm run lint` (clean).

Findings and resolutions:

1. Finding: white-on-coral in the contact section measured 2.82:1 (dark) and 4.03:1 (light) for the headline, 2.29:1 / 3.11:1 for body copy and 2.07:1 / 2.71:1 for the section index — a severe failure on the single most conversion-critical section. Resolution: added `--field` (`#b34b34` dark, `#bb432c` light) as the contact surface and made all type on it solid ivory. Headline and body now measure 5.29:1 / 5.31:1; the near-black `em` measures 3.42:1 / 3.40:1 against the large-text threshold.
2. Finding: `--faint` — used by every section index, card kicker, craft note, hero slate and process/education label — measured 4.04:1 dark and 3.08:1 light on the page background, and 3.81:1 / 2.74:1 on `--surface`. Resolution: `#77736c` to `#8b867e` (dark) and `#8d877e` to `#68635c` (light); now 4.97:1 or better on every surface it appears on, and still clearly quieter than `--muted`.
3. Finding: white on `--accent` failed for the primary hero CTA (2.82:1 / 4.03:1) and for the skip link, which is accessibility furniture. Resolution: both now use near-black ink on coral (6.85:1 / 4.79:1), which is also a stronger editorial treatment than white-on-coral.
4. Finding: the header's translucency let nav text fall to 3.64:1 (light theme over the gallery) and 4.16:1 (dark theme over a bright still) as content scrolled under it. Resolution: raised `--header` opacity to 0.9 / 0.92, keeping the backdrop blur. Worst measured case is now 4.51:1.
5. Finding: `--accent` as small text — the capability numbers, the `/` separators in craft and tool lists, and the eyebrow bullet — measured 3.48:1 in light theme. Resolution: routed those three usages to a new `--accent-text` (`#a53b27` light, unchanged coral in dark): 5.58:1 on the page background, 4.97:1 on `--surface`.
6. Finding: the global focus ring is `var(--accent)` and the contact section's background was `var(--accent)`, so focus there measured exactly 1.00:1 — invisible. Resolution: `.contact-section :focus-visible` now uses an ivory ring (5.29:1 / 5.31:1 against the new field).
7. Finding: pressing a play control unmounted the button, dropping keyboard focus to the top of the document. Resolution: on activation focus moves to the video element, which is focusable and keyboard-operable once native controls appear.
8. Finding: the skip link pointed at a `<main>` that could not receive focus. Resolution: `tabIndex={-1}` on `#main-content`, with an outline suppression so it never draws a ring.
9. Finding: the theme toggle had one fixed glyph and one fixed label, so its state was imperceptible both visually and to assistive tech. Resolution: the filled dot now tracks `data-theme` in CSS, and the accessible name is derived from the live theme via `useSyncExternalStore` on `<html data-theme>` — chosen over `useState` plus `useEffect` so the server response stays theme-neutral (no hydration mismatch) and so no `setState` runs inside an effect.
10. Finding: nav links, the header CTA, the hero text link, the scroll cue and footer links had roughly 13px-tall hit areas, below the WCAG 2.2 minimum of 24x24 CSS px. Resolution: minimum heights of 28-44px with the underline indicator re-anchored so the visual treatment is unchanged.
11. Finding: below 820px the contact CTA was hidden while three nav links remained — the primary conversion path disappeared on the most common device class. Resolution: the CTA now survives to 320px; the About link is the one that drops, and only below 400px.
12. Finding: the stills contact sheet held its 12-column stagger down to 620px, producing roughly 215px-wide cards at 768px. Resolution: a 900px breakpoint takes it to 2-up with a reduced stagger and a stacked caption (roughly 334px at 768px).
13. Finding: `html { scroll-padding-top: 7rem }` and `.section { scroll-margin-top: 4rem }` stacked, so every in-page anchor landed 176px down (152px on mobile — a quarter of a phone viewport). Resolution: removed the redundant `scroll-margin-top` and raised mobile `scroll-padding-top` so the fixed header is cleared by a consistent margin.
14. Finding: several Stage 2 base rules appear after the Stage 1 mobile media queries and silently clobbered them — most visibly `.hero-facts div { min-height: 66px }` re-imposing a 66px floor on the mobile single-column list. Resolution: corrections are collected in one clearly-marked Stage 3 block appended at the end of `globals.css`, so they win the cascade deliberately rather than by accident.
15. Finding: at viewports of roughly 1600px and up the contact headline's `clamp(4.7rem, 9vw, 10rem)` overran its grid column and forced a ragged third line. Resolution: capped at `clamp(4.2rem, 8.4vw, 8.6rem)` with `line-height: 0.82`, plus a mobile-specific size so the headline stays inside its measure at 320px.
16. Finding: the contact-sheet ruler was one text node of non-breaking spaces, clipped mid-character on mobile by `white-space: nowrap; overflow: hidden`. Resolution: rebuilt as three real spans that distribute, with the last hidden on narrow widths — the same pattern the screening label already used.
17. Finding: the UI asserted technical facts that are not true — an "IN 00:00:01:00" in-point, a "24 FPS" portrait rail, and "/ 24" appended to every card duration, while five of the six delivered videos are 30fps. Resolution: replaced with truthful, non-numeric slate copy.
18. Finding: the contact band read "AVAILABLE FOR CREATIVE CONVERSATIONS" — an availability claim that was never supplied and that contradicted the pending-contact state immediately below it. Resolution: the band now lists the three disciplines the capabilities section already evidences. A regression test asserts no availability language returns.
19. Finding: all four stills declared `width="1800" height="1800"`; the delivered files are 1350x1800 and 1232x1800. Resolution: real dimensions added to the content model as required fields and rendered from there.
20. Finding: posters are cropped to 9:14 card art, but every source video is 9:16, so activated playback sat between pillarbox bars. Resolution: `.motion-frame:has(video[controls])` adopts 9:16 so the real work fills the frame. The change is user-initiated (outside the CLS window) and browsers without `:has()` simply keep the previous behaviour.
21. Finding: no paginated fallback existed for the `animation-timeline: view()` reveals, so printing or PDF-ing the page would have committed the work, stills and capabilities at `opacity: 0.15`. Resolution: a `@media print` block that disables the reveals, hides fixed chrome, preserves the art-directed colour with `print-color-adjust: exact`, and avoids breaking inside cards.
22. Finding: `backdrop-filter: blur()` ran on six play buttons and four still-number chips whose plates are 62-84% opaque — compositing cost for no visible effect. Resolution: removed both; the still chip's plate was darkened to 0.62 alpha, which also lifts it from 2.89:1 to 5.69:1 over a bright frame.
23. Finding: `text-rendering: optimizeLegibility` on `body` and a `"Arial Narrow"` first fallback for Manrope — the first is a known rendering-cost hazard, the second is a poor metric match that would swap badly. Resolution: both removed; the `next/font` adjusted fallback still applies.
24. Finding: dead code and dead ARIA — the unused `--accent-soft` token, `.portrait-caption` rules for a removed element, an `aria-label` on a `role=generic` div (ignored by assistive tech; the portrait `img` already has real alt text), and `role="status"` on text that never updates. Resolution: all removed.
25. Finding (no change needed, recorded for completeness): `--signal` measures 4.36:1 in light theme, but every usage was traced and it is only ever a blur, a gradient stop and a drop-shadow tint — never text. The value is therefore correct as art direction and was left alone.
26. Finding (no change needed beyond one removal): the portrait carried five stacked overlays with "01" repeated three times. Resolution: only the internal concept-name caption ("THE QUIET CUT · 01") was removed — it named a design concept rather than telling a hiring manager anything. The take marker, rails and focus corners survive, so Stage 2's composition is preserved.

Important decisions:

- Contrast was fixed by adding tokens, not by desaturating existing ones. The brief was explicit that the art direction must not be flattened, so the electric coral survives everywhere it is legible and a deeper coral was introduced only for the one surface where ivory type sits on top of it.
- All Stage 3 CSS corrections live in a single commented block appended to `globals.css` rather than being threaded through the Stage 1 and Stage 2 sections. The file already has overlapping cascade layers; a fourth, explicitly-last layer is auditable and reversible, and every rule in it carries a comment naming the problem it solves.
- Truthfulness was treated as a product-quality defect, not just an editorial one. Invented frame rates and timecodes are exactly the "fresher-level" detail a senior reviewer notices, and the availability claim actively contradicted the site's own contact state.
- Regression tests were extended rather than left as a smoke test, so the no-fabrication rules and the press-to-load media contract are now enforced by `npm test` for every later stage.
- Video re-encoding was deliberately not attempted. The sources are the work; the largest still (`palm-study.webp`, 402 KB) was also left at full quality because it is lazy-loaded and degrading a designer's own image to save bytes is the wrong trade.

Known limitations:

- There is still no connected browser backend, so nothing here was verified by screenshot. The responsive work is code-level analysis: every media query, `clamp()`, grid template and overflow risk was traced by hand at 1440, 1280, 1100, 1024, 900, 820, 768, 620, 390 and 320 CSS px in both themes, and cascade order was resolved by source position and specificity. Headline wrapping in particular was assessed with analytical Bodoni Moda text-metric estimates, not measured layout — the contact and hero headline sizes were capped with margin to absorb that uncertainty, but the exact wrap points remain unverified.
- Runtime performance was reasoned about structurally (compositing layers, `backdrop-filter` count, poster and font strategy, explicit media dimensions, press-to-load) but not measured. No Lighthouse run, no real LCP/CLS/INP numbers, no long-task profile.
- Contrast figures assume the token colours composite exactly as written. The fixed grain overlay uses `mix-blend-mode: soft-light` at 0.16 opacity, which will perturb measured on-screen values very slightly in either direction; every corrected pair was therefore left with headroom above the threshold rather than landing on it.
- `npx tsc --noEmit` reports three pre-existing errors in the untouched starter files `db/index.ts` and `worker/index.ts` (missing Cloudflare Worker ambient types: `cloudflare:workers`, `Fetcher`, `D1Database`). They predate this stage, are unrelated to the portfolio, and do not affect `npm run build`, `npm test` or `npm run lint`, all of which pass. If the starter database scaffolding is genuinely unused, removing `db/`, `drizzle/`, `examples/` and the `drizzle-orm`/`drizzle-kit` dependencies would clear them.
- Captions and transcripts for the videos are still unavailable, so the accessible story for the motion work remains native controls plus descriptive card context.

Exact Stage 4 priorities:

1. Judge the reel order as a hiring decision-maker. The current sequence is one large featured cut, three equal studies, then two wider closers, and it is driven entirely by array order in `portfolio.motionProjects` (`app/content.ts`) plus the `featured` flag; the closing pair is `.motion-card-5` / `.motion-card-6`. Reorder the array if a different first cut wins the first ten seconds — no CSS change is needed for a reorder.
2. Re-read every motion card title and description against what actually plays. The titles ("Product Motion Study", "The Long Walk", "48 Laws — Visual Series", "Heritage in Motion", "Documentary Rhythm", "The Grind, Reframed") are Stage 1 editorial inventions derived from the footage, not client names. Confirm each is accurate and that the description tells a hiring manager the format, the intent and Bilal's actual contribution.
3. Decide whether the three-item `craft` notes on each card ("Product rhythm / Kinetic type / Sound-led cuts") read as senior craft vocabulary or as filler, and rewrite or drop them as a set rather than one at a time.
4. Own the contact conversion. `portfolio.contact.email` is the single switch: set it to a real, user-supplied address and the pending chip is replaced by a fully styled and already contrast-checked mailto CTA. Do not invent one. If no address is forthcoming, decide whether the pending state should say more about how to reach him, and keep the wording free of availability claims — a test enforces this.
5. Judge `hero-facts` ("Selected cuts 06 / Image studies 04 / Education ICS → BSIT"). Counts this small can read as either honest inventory or as thin. Decide, and if they stay, decide whether education belongs in the first viewport at all.
6. Judge whether the "Working method" section earns its position in a first-minute scan, or whether it should be shortened or moved below About so the work-to-contact path is tighter.
7. Review the four stills as a portfolio selection, not just as a layout. If one should be cut or resequenced, note that `.still-card-1` through `.still-card-4` carry position-specific grid placements and aspect ratios in `globals.css` that must move with the content.
8. Any new colour must be measured before it ships. The palette contract is now: `--accent` for large display type and non-text UI only; `--accent-text` for small text and glyphs; `--field` for a coral surface with ivory type on it. Do not put white on `--accent`, and do not put small text in `--accent` in light theme.
9. Run `npm run build`, `npm test` and `npm run lint` before declaring done. The six render tests lock landmarks, press-to-load media, dimensioned images and the no-fabrication rules; if one fails, the copy or markup change is the thing to reconsider, not the test.
10. Do not reintroduce fabricated production metadata. Frame rates, timecodes, delivery specs, client names, availability and result figures were all removed or were never present, and none of them can be restored without real information from Muhammad Bilal.

### Stage 4 — Hiring reviewer

Status: Complete.

Completed work:

- Watched every delivered cut frame by frame (ffmpeg filmstrips of all six site encodes plus all eleven supplied sources) instead of judging the reel from posters, and probed every source for real resolution, frame rate and duration. Two of the six cards turned out to be unshippable and were withdrawn; one strong source that had never been curated was brought in.
- Withdrew **“Heritage in Motion”**. The whole piece — including its own baked-in “MY HOSTEL” title card — is rotated 90° inside a pillarboxed 360×640 frame. The rotation is in Muhammad Bilal’s original export, not in the Stage 1 encode (verified against the untouched source), so the card asked a hiring manager to tilt their head for thirty seconds. Cropping the rotated region yields a 640×290 landscape strip, which cannot fill a 9:16 card. Media deleted from `public/media`.
- Withdrew **“Documentary Rhythm”**. The piece is a mock investigative reel captioned “PAKISTAN’S BIGGEST CORRUPTIONISTS EXPOSED” under a fabricated *New York Times* credit; it names apparently real individuals and roles (“…, ADVOCTAE AT HIGH COURT BWP” — the typo is on screen) over what is plainly a stock photograph of a well-known public figure; and a third party’s personal Gmail address is legible in a raw JSON dump that stays on screen for most of the runtime. It also has no editing rhythm to show — it is one static paper-texture layout letterboxed inside a vertical frame. Poster and encode deleted so the content is not left reachable at a guessable public URL.
- Added **“Harvest Light”**, cut from `chawal final.mp4` — one of only three genuinely HD sources (1080×1920) and previously unused. It is the strongest colour work in the collection: a warm harvest pass and a cooler flared pass on the same field, with message overlays carrying the only dialogue. Encoded to 720×1280 H.264/AAC with the existing pipeline’s settings, plus a poster frame at 00:12.
- Re-encoded **“The Long Walk”** from its 1080×1920 source. It was being delivered at 480×854 — sub-SD — which was the softest thing on the page relative to its source, and it is now the featured card. Now 720×1280 (10.8 MB, 63 s, light denoise plus a 1500k cap so the size stays proportionate), and its poster was re-cut from a weak opening frame (a man asleep on a charpai) to the film’s signature image at 00:48.
- Re-ordered the reel as a hiring sequence rather than an archive order: `01 The Long Walk` (featured) → `02 48 Laws — Visual Series` → `03 Harvest Light` → `04 Bore & Solar — Ad Cut` → `05 Hours vs. The Algorithm`. Narrative → graphic series → colour → commercial → social, so each card is the widest available jump in register from the one before it.
- Rewrote every card title, category and description against what actually plays, and rewrote the `craft` notes as a set (see decisions).
- Cropped the phone-camera watermark off the **“Palm / Print”** still. The delivered file carried a baked-in “Note 12 Pro” device stamp and “25mm f/1.89 1/100s ISO100” EXIF strip inside a template border, and the caption described that border as “a publication-style frame”. The still is now the photograph only (1350×1800, matching the other three), with a caption that describes the treatment that is actually his.
- Replaced the hero inventory counts (“Selected cuts 06 / Image studies 04”) with capability facts, rewrote the hero intro, tightened the working-method copy, moved Working method below About, and renumbered the section indices.
- Rewrote the closing paragraph so the contact section stops apologising for itself. The pending chip’s wording is unchanged (a render test locks it) and `portfolio.contact.email` is still `null`; the content model now carries an explicit comment naming it as the single switch.
- Added a share-card image (`/media/og-cover.jpg`, 1200×630, a real frame from Harvest Light). A forwarded portfolio link previewed as an empty card before. The tags are written by hand in `layout.tsx` rather than through `metadata.openGraph.images`, because that path absolutises against `metadataBase` and — with no production domain known — was emitting `http://localhost:3000/media/og-cover.jpg` into the shipped HTML. A test now asserts the relative path is present and that the string `localhost` appears nowhere in the response.
- Updated `tests/rendered-html.test.mjs` for the new inventory (five cuts, new titles, five play buttons), added a negative assertion so the two withdrawn pieces cannot silently return, and added the share-card/localhost assertions. Still six tests; every Stage 3 no-fabrication assertion is untouched.
- Normalised copy spelling to the site’s existing American convention (`color`, not `colour`) after the rewrite introduced both.
- Verified with `npm run build` (success), `npm test` (6/6 pass) and `npm run lint` (clean).

Important decisions:

- **Verdict on priority 1 — reel order: changed.** The old opener was the bore-drilling advert, kept first by Stage 2 because its saturated red matched the site accent. That is a designer’s reason, not a hiring manager’s. The first card has to answer “can he cut?”, and only *The Long Walk* answers it: a titled short film with a sustained follow shot, real continuity across corridors, courtyards, streets and open road, and one warm grade holding them together. The advert now sits at 04 where it proves commercial capability instead of setting the register.
- **Verdict on priority 2 — titles and descriptions: all rewritten.** Every description now states format, intent and what Bilal actually did to the material. “Product Motion Study” was the least accurate label on the page — the piece is a bore-drilling and solar-installation service advert, and calling it a motion study hid the more impressive fact that he can build an ad. It is now “Bore & Solar — Ad Cut”, which names what is on screen without asserting who commissioned it. “The Grind, Reframed” became “Hours vs. The Algorithm”, which is literally the joke the piece tells. “The Long Walk” is kept exactly as it is because the film titles itself on screen — it is the one real title in the set.
- **Verdict on priority 3 — craft notes: kept as a pattern, rewritten as a set.** “Product rhythm / Kinetic type / Sound-led cuts” were mood words that would survive being shuffled between cards, which is the definition of filler. Every entry is now a checkable technique tied to something visible in that specific piece — “Continuity assembly”, “Sound-off readability”, “Two-look grade”, “Read-at-speed typography”. The three-item shape is kept because Stage 2 designed the slash-separated production-note styling around it and it reads as a working editor’s shorthand.
- **Verdict on priority 4 — contact: structure improved, `email` still `null`.** No verified address exists anywhere in the repo or charter, and inventing one would be the single most damaging thing this stage could do. What was fixable was the tone: “connect with Muhammad Bilal when verified contact details are added” asked the reader to do nothing and apologised while doing it. The section now states the disciplines and says the direct enquiry address is published here as soon as it is verified. The chip text is unchanged because a render test locks it, and the content model carries a comment making the one-line switch obvious to whoever gets the real address.
- **Verdict on priority 5 — `hero-facts`: replaced.** “Selected cuts 06 / Image studies 04” read as inventory, and small inventory invites the thought “is that all?” — a problem that got worse, not better, when curation took the reel to five. The row is now `Format · Vertical short-form`, `Range · Film · Ad · Social`, `Study · ICS → BSIT`. Education stays in the first viewport but moves to third position: it is one of only two verified credibility facts about him, and burying it would be over-correction, but it is not the hook.
- **Verdict on priority 6 — Working method: kept, shortened, moved.** It does not belong in a first-minute scan, but it was never in one — it sits at section 04, well past the first minute. The real problem was that it delayed the human beat. It now runs *after* About and immediately before Contact, so the last thing a hiring manager reads before the CTA is how working with him would go, and each step was tightened to a single sharp line.
- **Verdict on priority 7 — stills: all four kept, one repaired.** As a set of four they cover colour, graphic treatment, tone and atmosphere, which is exactly the range the section claims; none of them is the weak link the reel had. The single defect was that “Palm / Print” shipped a phone-camera watermark and EXIF strip, and the caption presented that template border as a design decision. Cropping to the photograph removes an announcement that the work was shot on a mid-range phone and removes a false claim about a designed frame. The still count is unchanged, so the position-specific `.still-card-1`…`.still-card-4` grid placements and aspect ratios in `globals.css` needed no movement; the new crop (1350×1800) is also closer to `.still-card-2`’s `4/5` box than the old 1232×1800 was, so it crops less.
- **Verdict on priority 8 — new colour: none introduced.** No token was added, changed or removed, and nothing new was placed on `--accent`. The palette contract is intact: `--accent` still carries display type and non-text UI, `--accent-text` still carries small text and glyphs, `--field` is still the only coral surface with ivory type on it. No contrast measurement was required because nothing measurable changed.
- **Verdict on priority 9 — verification: all three commands run, all three green.** Reported honestly below.
- **Verdict on priority 10 — fabricated metadata: none reintroduced.** No frame rate, timecode, delivery spec, client, availability or result figure appears anywhere in the new copy. Two numbers do appear — “00:15” and “01:03” — and both were read off the actual encodes with `ffprobe`.
- Editing the render test’s title list was a considered exception to “fix your copy, not the test”. That assertion is a content inventory, not a no-fabrication rule; the no-fabrication assertions were left exactly as Stage 3 wrote them. The alternative — keeping a card that names real people as corruptionists under a fabricated newspaper credit with a stranger’s email legible on screen — is not a copy problem that copy can fix. A negative assertion now guards the withdrawal in the other direction.
- Five strong pieces beat six with two embarrassments. A portfolio is judged by its weakest item, and both withdrawn cards were the kind of thing a reviewer remembers instead of the work.
- The `.motion-card-5` closer is now placed (`grid-column: 4 / span 6`) rather than paired, so the five-card grid has no hole at wide widths; below 1100px the existing `.motion-card { span 6 }` rule takes over and the four non-featured cards fall into two clean rows. Dead `.motion-card-6` selectors were removed rather than left behind.

Known limitations:

- Still no connected browser backend, so nothing here was verified by screenshot. The new grid placement, the reordered sections and the longer `hero-facts` values were traced through the cascade by hand at the same widths Stage 3 used. `hero-facts` in particular now carries values up to 19 characters where it previously carried “06” — the columns are roughly 190px with a right-aligned serif `dd`, so one wrap is expected and the 66px `min-height` absorbs it, but the exact wrap point is unverified.
- The two withdrawn pieces are gone from `public/media` but their sources remain untouched under `public/video editing`, as the charter requires. If the hostel piece is ever re-exported the right way up, it is a legitimate candidate again; the documentary piece should not be published in any form until the private email address is removed from the frame and the fabricated newspaper credit is dropped.
- `The Long Walk` is now a 10.8 MB press-to-load asset (up from 7.9 MB). That is a deliberate trade: it is the featured piece, the source is genuinely 1080×1920, and shipping the flagship at 480p was costing more credibility than 3 MB costs bandwidth. It still never loads until a visitor presses play.
- The share-card image URL is relative. Crawlers that resolve relative `og:image` against the page URL (Slack, Facebook) will render it; ones that demand an absolute URL may not. This cannot be fixed without a real production domain — see manager priority 6.
- No verified email, phone, social profile, location, availability statement, client context, brief, result figure, caption or transcript has been supplied at any point, so the contact section remains an honest pending state and every description stays grounded in what is visible on screen.
- The three pre-existing `npx tsc --noEmit` errors in the untouched starter files `db/index.ts` and `worker/index.ts` are unchanged from Stage 3 and still do not affect build, test or lint.

Exact manager-verification priorities:

1. Run `npm run build`, `npm test` and `npm run lint` from `p:\Bilal Portfolio`. Expect a successful build, 6/6 tests passing, and a clean lint. If the reel inventory is ever changed again, `tests/rendered-html.test.mjs` holds the title list, the video count (5), the play-button count (5) and a negative assertion naming the two withdrawn pieces.
2. Open the page and confirm the reel order is The Long Walk (large, featured) → 48 Laws → Harvest Light → Bore & Solar → Hours vs. The Algorithm, and that the fifth card sits centred rather than leaving a gap at ≥1101px, pairs with the fourth between 821 and 1100px, and stacks below 820px.
3. Confirm `public/media` contains no `campus-story.*` or `documentary-study.*` file and that neither “Heritage in Motion” nor “Documentary Rhythm” appears anywhere in the rendered page. These were withdrawn for content reasons, not layout reasons, and must not be restored without Muhammad Bilal re-exporting the source material.
4. Press play on every card. Expect five videos, `preload="none"`, a real poster on each, no `src` until activation, focus landing on the native controls, and other videos pausing. The Long Walk should now play noticeably sharper than before — it is 720×1280, not 480×854.
5. Check the “Palm / Print” still shows the photograph only, with no “Note 12 Pro” stamp and no “25mm f/1.89 1/100s ISO100” strip, and that its caption describes the duotone treatment rather than a frame.
6. `portfolio.contact.email` in `app/content.ts` is still `null` by design. If and only if Muhammad Bilal supplies a real, verified address, set it there — nothing else needs to change — and at the same time make the three share-card `<meta>` tags in `app/layout.tsx` absolute against the real production domain. Do not invent either value.
7. Verify the section running order and indices read 01 Selected motion, 02 Image practice, 03 Capabilities, 04 About, 05 Working method, 06 Contact, and that the `#about` anchor in the header still lands on the About section.
8. Re-run the no-fabrication read-through by eye as well as by test: no client, testimonial, award, availability, location, metric, frame rate, timecode or delivery spec anywhere, and no raw source filename. The rendered page should also contain the string `localhost` zero times.
9. Confirm nothing in the palette moved: no token was added or edited this stage, so Stage 3’s 56/56 contrast pass still stands. If a later change introduces a colour, it must be measured before it ships.
10. If a browser becomes available, the two highest-value unverified items are the `hero-facts` row (three values, longest 19 characters, right-aligned serif in roughly 190px columns — check for an ugly wrap at 1024–1280px) and the featured card’s poster crop at 9:14, since the new Long Walk frame places the subject’s head low in the frame.

### Stage 5 — Multi-page restructure (user-directed)

Status: Complete.

Direction given: split the public resources across three skill pages, let each page present that skill's content in detail, and keep the home page beautiful but light so it no longer carries all the content. This overrides the original technical rule preferring a single anchored page.

Completed work:

- Split the site into four routes: `/` (index), `/work/motion`, `/work/design`, `/work/ai`. The three disciplines map exactly onto the three confirmed capabilities already in `app/content.ts` — no new skill was invented to fill a third page, and `public/design posting` is empty so it could not become one.
- Added a typed `disciplines` array and an `aiWorkflow` array to `app/content.ts`. Navigation, the home cards and the cross-links all read from `disciplines`, so a fourth discipline would appear in the header automatically.
- Extracted the shared chrome into `app/SiteChrome.tsx` (`SiteHeader`, `SiteFooter`, `ContactSection`, `ThemeToggle`, `DisciplineJump`) and the player into `app/VideoCard.tsx`. The chrome is the only client component in the header path; the four route components are server components.
- Rebuilt the home page as an index: hero, a three-card discipline grid, the short about block, and the contact close. The motion grid, the stills contact sheet, the capability list and the working-method track all left the home page.
- `/work/motion` carries the five curated cuts with the press-to-load architecture unchanged, plus the brief-to-delivery method that used to sit on the home page.
- `/work/design` carries the four image studies on the existing graphite contact sheet, plus a four-step approach written from the observable treatment of those images.
- `/work/ai` has no fabricated samples. It presents the real tool list as a stack, the four-step method for how generative tools sit inside a human edit, and an explicit note that nothing in the portfolio is presented as a finished AI generation. A test asserts that note is present and that the route embeds no video.
- Internal navigation uses `next/link`; in-page anchors stay plain anchors. The header marks the current route with `aria-current="page"`, styled by pinning the existing underline rule open.
- New CSS lives in a single commented "Stage 5" block appended after the Stage 3 corrections, so the cascade order of the earlier work is untouched. It follows the Stage 3 palette contract: `--accent` for display type and non-text UI, `--accent-text` for small text and glyphs.
- Test suite reworked from one route to four: the home page is asserted to be an index (no `<video>`, no motion or stills grid, links to all three routes), each discipline route is asserted to carry its own material, and the landmark, no-fabrication and pre-hydration-theme checks now run across every route.

Important decisions:

- The third page is AI-assisted production, not a design-posting page: `public/design posting` contains no files, and a page cannot be built from assets that do not exist.
- The AI cover on the home page is set in type from the real tool names. The charter forbids model-authored illustration and the truthfulness rule forbids invented samples, so type was the only honest cover.
- Prose stayed in the route components while structured, repeated data (disciplines, workflow steps) went into `app/content.ts`, matching how Stage 1 split content from layout.
- The contact section is repeated at the end of every route rather than living only on the home page, so no route is a dead end for the primary conversion.

Known limitations:

- Still no browser backend, so the new layouts were verified by code-level breakpoint analysis (1440 / 1000 / 700 / 420 CSS px) and by rendered-HTML assertions, not by screenshot.
- The AI route is method-only. It will stay the thinnest of the three until Muhammad Bilal supplies work he is willing to present as AI-assisted.
- Route-level share images were not added: each route inherits the single `og-cover.jpg` from the layout, and per-route Open Graph images cannot be absolutised without a production domain.

Exact manager-verification priorities:

1. Confirm all four routes render, that the header marks the current route, and that navigating between them preserves the stored theme.
2. Confirm the home page still carries no work grids and that every discipline card links to a route that actually shows that discipline's material.
3. Re-check the Stage 3 contrast contract against the new tokens in use on the Stage 5 block: `--faint` on `.discipline-meta` and `.page-facts dt`, `--accent-text` on `.discipline-typeset` and the stack indices.
4. Confirm keyboard order and focus visibility on the new discipline cards, the page-index breadcrumb link and the cross-discipline jump.
5. Verify against the Definition of done, treating the multi-route structure as the user-directed replacement for the single-page rule.

### Stage 6 — Contact integration and motion pass (user-directed)

Status: Complete.

Direction given: publish the real contact channels with a WhatsApp template, and fix a blunt design critique — the hero portrait overflowing its section, an unaligned and unanimated hero column, a navbar with no hover behaviour, plain disciplines/about/education/footer treatments, and an overall feel that did not read as a video editor's or designer's portfolio. GSAP was explicitly permitted by name.

Completed work:

- Published the verified contact channels supplied by Muhammad Bilal on 2026-08-29: `silentpixelstudio@gmail.com`, WhatsApp `+92 325 0049637`, and Instagram `@silentpixelstudio`. All three live in one typed object in `app/content.ts`; the header, contact close, footer and floating button read from it.
- The WhatsApp link is stored in E.164 form without the plus (`923250049637`) because that is the only shape `wa.me` accepts, and carries a URL-encoded opener so the visitor lands in a started thread rather than an empty one.
- The Instagram URL is stored clean. The share link the owner pasted carried an `igsi` tracking token identifying one share session; republishing it to every visitor would have been wrong, so it is stripped, and a test now fails if it ever reappears.
- Replaced the pending-contact state with a real conversion block on every route: WhatsApp primary CTA, email CTA, and a channel list. Removed the dead `ContactAction` branch, the `.contact-pending` chip and its `.status-dot` glyph, including the three grouped media-query selectors that still named them.
- Added a persistent floating WhatsApp entry point on every route: a squared coral plate in the site's own edit-suite geometry rather than a stock green bubble, with an accessible name carrying the number, a 48px minimum target, a label that expands on hover and focus, no movement under reduced motion, and hidden in print. The footer reserves its corner so the two never overlap.
- Rebuilt the footer from a single centred line into a working closing block: identity, a discipline navigation column, a direct-contact column carrying all three channels, a scroll-scrubbed playhead rail, and a base row with a back-to-top control.
- Added `app/Choreography.tsx`: a GSAP + ScrollTrigger layer mounted once from the root layout, covering header entry, a staged hero title sequence, masked section-heading reveals, discipline cards cutting in with covers racking into focus, scroll-scrubbed playheads, the education progression, and the contact close.
- Fixed the hero overflow: the 4/5.35 portrait inside a centred `100svh` hero grew taller than the hero on short viewports and spilled into the section below. It is now capped against the viewport with the crop absorbing the difference, and released from the cap below 700px where the layout stacks.
- Gave the hero copy one vertical grid with a single left edge, replacing the stack of unrelated margins that made the column read as unaligned.
- Navigation labels now ship twice inside a clipped box and cut from one to the other on hover and keyboard focus — a CSS swap, so it survives with JavaScript disabled.
- Removed the staggered top margins on the discipline cards. Once the three covers stopped sharing a shape the offsets read as a misalignment rather than as rhythm, so the cards now sit on one baseline with one cover ratio.
- Added the about marks (the three disciplines restated as a working summary, no new claim) and rebuilt education as a two-stop progression — ICS completed, BSIT current — joined by the same playhead line the rest of the site uses, running horizontally on desktop and vertically on mobile.
- Wired the AI discipline cover to `/media/ai-suite.webp`, converted from the PNG the owner supplied, and switched the motion discipline cover to `/media/product-motion.webp` (Bore & Solar — Ad Cut) as requested.
- Test suite reworked to 9 tests: the two obsolete contact assertions were replaced with assertions that the real email, `wa.me` link and Instagram URL appear on every route and that the tracking token never does. The source-filename leak assertion was narrowed to filename shapes, because the studio name is now legitimately on the page as the handle and the email address.

Important decisions:

- **GSAP was added as a dependency (`gsap` 3.15.0, exact).** This overrides the charter's technical rule against a large animation framework; the owner requested it by name. It is dynamically imported so it stays out of the first-paint path, and only the core plus ScrollTrigger are pulled in.
- The animation layer follows one hard rule: the server-rendered page is already the finished page. Every element ships visible in CSS and all start states are written by GSAP at runtime, so a failed, slow, blocked or disabled script cannot leave content stuck invisible. The entire timeline is registered inside a `matchMedia("(prefers-reduced-motion: no-preference)")` scope, so it does not build at all under a reduced-motion preference and reverts if the preference flips mid-visit.
- The old CSS keyframe entrances on `.hero-copy` and `.portrait-stage` were retired rather than kept, because they would have run a second competing animation over the same elements.
- The contact block keeps ink-on-ivory and ivory-on-`--field` only. Nothing white sits on `--accent`, and focus rings inside the coral field are ivory, preserving the Stage 3 palette contract.
- Contact detail is centralised, not repeated: one object drives four different surfaces, so a change of number or handle is a one-line edit.

Known limitations:

- Still no browser backend: the new layouts and the choreography were verified by code-level breakpoint analysis, rendered-HTML assertions and live `curl` against the production server, not by screenshot or by watching the animation run.
- The GSAP timeline is not covered by automated tests; the tests assert only that the content it animates is present in the server response.
- Route-level share images are still not per-route, and the three share-card meta tags stay relative until a production domain exists.

Outstanding, blocked on Muhammad Bilal:

1. A production domain, to absolutise the share-card meta tags in `app/layout.tsx`.
2. A correctly rotated re-export of the hostel video, if it is to return to the reel.
3. Captions or transcripts for the motion work.
4. Anything he wants to present as AI-assisted work, which would give the AI route real samples instead of method only.

### Stage 7 — Masthead rebuild, About route, and skills board (user-directed)

Status: Complete.

Direction given: rebuild the hero completely and make it professional and enterprise-level, fix the left column alignment, add a hover treatment to the portrait; make Bore & Solar the primary reel piece and mute the videos; fix the alignment and animation of the section above the videos; move About onto its own route because the home section was too text-heavy, and present the skills there as a draggable board.

Completed work:

- Rebuilt the hero from scratch as `.masthead`, under new class names so none of the earlier hero rules reach it. One grid, one left edge: slate, role, title, lead and actions all start on the same column, and the earlier asymmetric indent — which read as a mistake rather than as art direction — is gone.
- Added a full-width stat rail under both hero columns (disciplines, selected cuts, image studies, format, study). Every figure is a count of what is already on the site; none of them is a claim.
- The background structure is now a single faint vertical rule marking the portrait column, replacing the stack of horizontal rules that competed with the display type.
- The portrait became `.portrait-plate`, a link to the reel, so its hover treatment is attached to something that does work and fires on keyboard focus as well: the image racks from desaturated to full colour and scales slightly, a single light sweep passes across the frame, a safe-area guide pulls in, the coral offset shadow tightens, and an "Open the reel" cue rises in the caption. All of it is disabled or stilled under `prefers-reduced-motion`.
- The plate frame is capped against the viewport, which is what stops the portrait from overflowing the hero on short screens, and the cap is released below 900px where the layout stacks.
- Made **Bore & Solar — Ad Cut** the primary piece: it now leads `motionProjects` and carries the `featured` flag, and The Long Walk follows. This reverses the Stage 4 hiring-reviewer ordering at the owner's explicit request.
- Every video now ships `muted`. The native controls still expose volume, so a viewer can bring the sound up; the reel simply no longer starts loud.
- Added the `/about` route: biography, a three-room practice summary linking to each discipline, the draggable toolkit, and the education progression moved off the home page. The home page keeps only the opening statement, three craft marks, and a link through.
- Navigation now points at `/about` as a route in both the header and the footer, and marks it as the current page.
- Built `app/SkillBoard.tsx`: ten tool chips on a board, draggable with pointer capture, clamped so a chip can never leave the frame, with a reset control that is disabled until something has actually moved.
- Removed 97 dead rules and trimmed 9 selector lists left behind by the hero rebuild, plus the two obsolete entrance keyframes. Brace balance verified at zero.
- Tests extended to 10: the About route joined the shared-chrome, contact and no-fabrication sweeps, and a new test asserts the biography, both qualifications, all ten tools, and that all ten chips server-render.

Important decisions:

- The skills board is an enhancement, never the only way to read the toolkit. The chips are real list items with visible labels in the server response, so a visitor with no pointer, no JavaScript or a screen reader gets the same information. Each chip is a `<button>`, not a `<div>` with a tabindex, which makes it natively focusable and gives the arrow-key nudging a legitimate host — dragging alone would have been a mouse-only feature.
- No proficiency levels, years, or ratings appear on the board. None were supplied, and inventing a "90% Photoshop" bar is exactly the fresher-portfolio signal the charter rules out.
- The reel reordering was made in `content.ts` array order only. No CSS knows which piece is first, so the ordering stays a content decision.
- `muted` also silenced the `jsx-a11y/media-has-caption` rule, so its disable comment was removed rather than left as a dead directive.
- The hero was renamed rather than overridden. Redefining the old selectors would have left both rule sets fighting in the cascade; new names plus a deletion pass leaves exactly one hero in the stylesheet.

Known limitations:

- Still no browser backend: the masthead, the hover treatment and the board were verified by code-level breakpoint analysis, rendered-HTML assertions and live `curl` against the production server — not by screenshot, and not by watching the drag interaction run.
- The board's arrangement is per-visit. It is not persisted, because nothing about a rearranged toolkit is worth storing.
- Muting is the default state, not a lock. A viewer can still unmute through the native controls, which is the correct behaviour for work where sound is part of the craft.

Outstanding, blocked on Muhammad Bilal:

1. A production domain, to absolutise the share-card meta tags in `app/layout.tsx`.
2. A correctly rotated re-export of the hostel video, if it is to return to the reel.
3. Captions or transcripts for the motion work.
4. Anything he wants to present as AI-assisted work, which would give the AI route real samples instead of method only.

### Stage 8 — Masthead v2, icon set, and the tiled skills board (user-directed)

Status: Complete.

Direction given, as a design critique: the hero was too much empty space and too much plain text, with no sense that a designer made it; there were no icons anywhere; the GSAP motion was not being felt; and the skills should look and behave like a modern, icon-led, animated board rather than plain chips.

Completed work:

- Diagnosed the hero honestly before rebuilding. The GSAP chunks were in the client bundle and the timeline was running — the problem was that every animation was a sub-second entrance that finished before it registered, and the layout gave a small portrait a very wide empty column to sit in.
- Rebuilt the masthead on three rows: a slate bar, two real columns, and a filmstrip. The portrait column is now wide enough to carry an image, which is what removed the dead zone the old 66% rule created.
- Added a filmstrip of the five real poster frames from the reel, each linking into the work. It is the fastest way to say "an editor made this" without autoplaying anything, and it gives the hero a second visual layer under the type.
- Added a running timecode to the slate, counting at 24fps. It renders `00:00:00:00` on the server so there is no hydration mismatch, and it never starts under `prefers-reduced-motion` — a digit changing 24 times a second is precisely what that preference exists to stop.
- Replaced the five-column stat rail with three inline counts. Once the filmstrip arrived the rail was more text than the hero could carry.
- Added `app/Icons.tsx`: a small geometric interface set — play, arrow, timeline, frame, spark, playhead, mail — drawn inline, inheriting `currentColor`, and decorative by default so the label beside each one carries the meaning. These are interface marks, not illustrations, and no brand artwork is reproduced.
- Motion is now felt rather than glimpsed: the title cuts in word by word out of per-word masks, the filmstrip deals in and then drifts against the scroll, the portrait drifts inside its own frame, the skills board deals in like a hand of cards, and the contact strip runs as a marquee (printed twice so it loops by exactly half its width with no seam).
- Rebuilt the skill chips as branded tiles: a coloured round mark carrying the tool's two-letter abbreviation, a resting tilt so the board reads as scattered rather than gridded, and a hover that straightens and lifts the chip. Dragging still works, and picking a chip up drops its tilt to zero.
- Swept 13 more dead rules left by the previous masthead.

Important decisions:

- The tile marks are two-letter abbreviations in each tool's recognised colour, not copied logos. Reproducing Adobe, Google or Hugging Face artwork would mean shipping brand assets this project has no licence to, and the charter already rules out model-authored illustration. The abbreviations give the same instant recognition honestly.
- No proficiency bars or percentages were added to the board, for the same reason as Stage 7: none were supplied, and invented skill levels are a fresher-portfolio signal.
- The marquee is the one piece of continuous movement on the site. It is confined to a decorative, `aria-hidden` strip in the contact section, and like everything else it does not start under a reduced-motion preference.
- The filmstrip uses `loading="lazy"` posters that already exist. No new media was generated, and the home page still embeds no video — the test asserting that still passes.

Known limitations:

- Still no browser backend, so the redesigned hero, the filmstrip drift and the board's deal-in were verified by rendered-HTML assertions and live `curl` against the production server, not by watching them run.
- The timecode counts time on the page, which is a deliberate flourish rather than information. It carries `aria-hidden`.

Outstanding, blocked on Muhammad Bilal:

1. A production domain, to absolutise the share-card meta tags in `app/layout.tsx`.
2. A correctly rotated re-export of the hostel video, if it is to return to the reel.
3. Captions or transcripts for the motion work.
4. Anything he wants to present as AI-assisted work, which would give the AI route real samples instead of method only.

### Stage 9 — Minimal redesign, folder navigation, and autoplay reel (user-directed)

Status: Complete.

Direction given, as a design critique: no boxed logo, only the name; the hero was too crowded with grid lines and text, addressed the visitor in the third person, and its portrait was small, misaligned and overflowed on short screens, with a boring hover; drop the horizontal filmstrip after the hero entirely; replace the disciplines grid with three folder-style cards that peek real thumbnails, the AI folder opening a page that explains each generative tool in the first person — what it is and what it is used for; every work page should use a grid that adapts to its content; the motion page should autoplay every video muted with only an unmute control and no fullscreen button; and the about, contact and footer sections needed real improvement toward an overall minimalist, not-text-heavy site.

Completed work:

- Removed the boxed "MB" mark from the header. The brand is now the name alone, set in the display face.
- Rebuilt the hero a third time, this time deliberately spare: one kicker line, a two-word masked title, one short first-person lead, one primary CTA, a single clean portrait, and a minimal scroll cue. The slate bar, running timecode, background grid lines, five-column stat rail, and the "Take 01" / rail-caption ornaments around the portrait are all gone.
- Deleted `app/Timecode.tsx` outright — it had no place in the trimmed hero.
- Added a genuine pointer-tilt on the portrait as the hero's "soul": the whole hero surface tracks the cursor and smoothly tilts the portrait frame in 3D via `gsap.quickTo`, scoped to `(hover: hover) and (pointer: fine)` so touch devices never see it, and always eased back to rest on pointer-leave so it cannot get stuck mid-tilt. It sits alongside — not in place of — the mask-reveal/cut-in vocabulary used everywhere else.
- Removed the reel filmstrip after the hero entirely, per direct instruction.
- Replaced the disciplines grid with three folder cards (`app/FolderCard.tsx`): each is a small manila-folder shape with one to three real poster/still thumbnails fanned out above it and lifting further on hover. The AI folder has only one real asset (`ai-suite.webp`) and is laid out to look intentional with one image rather than padded with anything invented.
- Rewrote the AI route around `aiTools`, a new content array of five first-person paragraphs — one per tool — each stating what the tool is and what it is actually used for (research, iteration, elements), replacing the old label-only `aiStack` and the separate four-step `aiWorkflow` track.
- Rebuilt `VideoCard.tsx`: no more press-to-load. Every card autoplays muted via `IntersectionObserver` while in view and pauses out of view; the only visible control is a round mute/unmute button. Native `controls` were dropped entirely, which is what removes any fullscreen affordance — `disablePictureInPicture` and a `controlsList` are also set as defence in depth. Under `prefers-reduced-motion: reduce` nothing autoplays; the frame itself is a keyboard-operable play/pause toggle instead, so the work stays reachable rather than becoming silent and inert.
- Converted the motion, design and AI grids to adaptive `repeat(auto-fit/auto-fill, minmax(...))` layouts. The stills grid dropped its fixed per-index 12-column placement (`.still-card-1..4`) for the same adaptive pattern.
- Trimmed text across the board: the motion page's four-step "working method" and the design page's four-step "approach" became single sentences; the about page dropped its long second paragraph and the per-item education notes; the contact panel dropped its duplicate channel list (WhatsApp/Instagram now live once, in the footer); the footer dropped its education line and the "END OF SEQUENCE" flourish in favour of a plain "© 2025".
- Converted hero, about-statement, and contact copy to the first person throughout; video descriptions in `content.ts` now read as Muhammad Bilal's own account of each cut.
- Swept 202 dead rules and 28 trimmed selector lists left by the masthead/discipline-grid/filmstrip removals across two passes (top-level and inside `@media` blocks), and removed 5 media queries that had gone fully empty. `globals.css` is 3926 → roughly 3170 lines.
- Test suite rewritten for the new architecture: no more preload/press-to-load assertions; new assertions require every video to be `muted`+`loop` with a real `src` and no `controls`, exactly 5 `mute-toggle` buttons and 0 `play-button`s, the new folder titles, 5 AI tool cards with first-person phrasing, and that no boxed logo mark is ever rendered.

Important decisions:

- The folder's peek thumbnails are always real, existing poster or still images — never a fourth or fifth image invented to fill out a folder with fewer than three. The layout is built to look intentional at one, two or three.
- Muted autoplay was implemented with an `IntersectionObserver`, not `autoplay` fired unconditionally, so only cards actually in view are decoding video at any moment — a reasonable middle ground between "autoplay everything" and not wasting bandwidth on off-screen cards.
- The reduced-motion fallback is a real, accessible click/keyboard toggle on the frame, not a second visible button — the request was for exactly one visible control (mute), and the frame's own clickability satisfies "give a way to start it" without adding a second button chrome.
- No brand artwork was reproduced for any AI tool. The About-page skill tiles keep their existing two-letter marks in each tool's recognised colour; the new AI-route cards reuse the same convention rather than inventing logos.
- The pointer-tilt is the one deliberate exception to the "no cursor gimmicks" line in the charter's motion language — introduced because the owner explicitly asked for "soul/dynamics" on the hero image, is scoped tightly (fine pointer + hover-capable only), and always returns to rest.

Known limitations:

- Still no browser backend: the new hero, folder hover states, autoplay-in-view behaviour and the pointer-tilt were verified by rendered-HTML assertions, static CSS/JS review, and live `curl` against the production server — not by watching them run.
- Autoplaying muted video, even gated by `IntersectionObserver`, still costs real bandwidth on a slow connection; no additional data-saver gate (e.g. `prefers-reduced-data`) was added beyond what already existed sitewide, since the owner's instruction was explicit about autoplaying every video.
- The AI tool descriptions are Muhammad Bilal's own account of how each tool is used, phrased in the first person exactly as asked; they are not verified against any specific finished piece, consistent with the site's existing rule that nothing here is presented as a finished AI generation.

Outstanding, blocked on Muhammad Bilal:

1. A production domain, to absolutise the share-card meta tags in `app/layout.tsx`.
2. A correctly rotated re-export of the hostel video, if it is to return to the reel.
3. Captions or transcripts for the motion work.
4. Real AI-assisted samples, if he wants the AI folder to show output rather than method.

### Manager verification

Status: Complete — ship-ready pending Muhammad Bilal's real information.

Verified:

- `npm run build` succeeds; `npm test` passes 8/8; `npm run lint` is clean. Re-run after every change in this pass.
- Production server started (`npx vinext start`) and all four routes fetched with curl: `/`, `/work/motion`, `/work/design`, `/work/ai` each return **200** with full rendered content; `/work/nope` correctly returns 404. Server log shows no runtime error on any route. Server stopped afterwards.
- Every `href` and media `src` in all four responses was extracted and checked. No dead link: `#top`, `#main-content`, `#contact`, `#about`, `#disciplines` all resolve to real ids on the routes that emit them, and all 15 referenced files exist in `public/media`.
- Route titles, `og:*` tags and the relative share-card path render as intended; the string `localhost` appears nowhere.
- Stage 5 CSS re-read in full against both themes. Every token it uses (`--line`, `--line-strong`, `--surface`, `--surface-raised`, `--faint`, `--muted`, `--text`, `--accent`, `--accent-text`, `--ink`, `--paper`) is defined in dark and light. Palette contract intact: `--accent` only on borders/rules, `--accent-text` on the small stack and jump indices and the discipline meta, no white on `--accent`, `--field` unchanged.
- Breakpoints traced at 1440 / 1000 / 700 / 390 CSS px by reading the media queries: discipline grid 3 → 2 (AI card full-width, 16/7 cover) → 1 (4/3 cover); `.discipline-jump` 2 → 1 col; `.page-facts` stacks under 420px; `.page-hero h1` drops its 16ch cap under 700px; `.ai-stack` auto-fits from 5 columns to 1.
- Home page is still an index: no `<video>`, no motion or stills grid (test-enforced).

Fixed:

- **Orphaned CSS removed.** The capabilities section left the home page in Stage 5 but its styling stayed: `.capabilities-section`, `.capability-list`, `.capability-row` (and every descendant, hover, reveal, print and reduced-motion variant) plus `.section-heading-inverse` were spread across 35 locations in six cascade blocks. All removed; `globals.css` went from 2940 to ~2805 lines with balanced braces and no empty rules left behind.
- **Dead content model removed.** `Capability` and `portfolio.capabilities` were no longer read by any component — the `disciplines` array superseded them. Removed.
- **Header CTA no longer leaves the page.** "Let's talk" was `/#contact`, so a visitor on a discipline route was thrown back to the home page. Every route ends with the same `ContactSection`, so it is now a plain in-page `#contact` anchor. "About" stays `/#about` because only the home page has that section.
- **`ThemeToggle` un-exported** — it was a leftover public export from the `SiteChrome.tsx` extraction, used only inside that file.
- **AI route thickened honestly.** The stack was five bare tool names. Each entry now carries what the tool factually *is* (`Veo 2 — text-to-video generation`, `Flow — AI filmmaking workspace`, `Seedance — video generation`, `FLUX — image generation`, `Hugging Face models — open model library`), from a new typed `aiStack` in `app/content.ts`. These describe the tools, not Bilal's output; no sample, commission or result was invented, and the scope note stays.
- **README replaced.** It was still the untouched `vinext-starter` README. It now documents the four routes, the file structure, run/build/test/lint/start commands, the deployment path, the content and palette rules, the two switches that need real data, and the unused starter scaffolding.

Still blocked on real information from Muhammad Bilal:

- **Verified email.** `portfolio.contact.email` is still `null` by design; the closing section shows the honest pending notice. Setting that one field turns it into a styled `mailto:` CTA — nothing else changes.
- **Production domain.** The three share-card `<meta>` tags in `app/layout.tsx` are relative and cannot be absolutised without one; per-route Open Graph images are blocked on the same thing.
- **Corrected hostel re-export.** The withdrawn piece is rotated 90° in Bilal's own export. A right-way-up re-export makes it a legitimate sixth card. (The withdrawn documentary piece should not return in any form.)
- **Captions/transcripts.** None supplied, so the five cuts still rely on native controls plus descriptive card copy.
- Also absent and correctly not invented: availability, location, clients, briefs, results, testimonials, awards.

Not addressed (deliberate):

- `db/`, `drizzle/`, `examples/`, `worker/` and `app/chatgpt-auth.ts` are unused starter scaffolding and still produce the same three pre-existing `npx tsc --noEmit` errors. They do not affect build, test or lint; removal is a clean-up decision for the owner, now documented in the README.
- No browser backend exists in this environment, so responsive and contrast work remains code-level analysis plus rendered-HTML verification, as in every prior stage.

Ship-readiness verdict: **ready to ship.** All four routes build, serve and render correctly, the site is free of dead links, dead CSS and dead content model, and the only outstanding items are facts that must come from Muhammad Bilal — none of which block publishing.
