# Muhammad Bilal — Portfolio

A four-route portfolio site for Muhammad Bilal, video editor and graphic
designer. Built on [vinext](https://github.com/cloudflare/vinext) (Next-style
App Router on Vite/RSC) with React 19, TypeScript, and hand-written CSS.

## Prerequisites

- Node.js `>=22.13.0`

## Commands

```bash
npm install        # install dependencies
npm run dev        # local development server
npm run build      # production build
npm start          # serve the production build (use --port to change the port)
npm test           # build, then run the rendered-HTML checks
npm run lint       # ESLint
```

`npm test` runs `npm run build` first, then `node --test tests/rendered-html.test.mjs`.
All scripts are Windows-compatible (no inline POSIX environment assignments).

## Routes

| Route           | File                        | Contents |
| --------------- | --------------------------- | -------- |
| `/`             | `app/page.tsx` → `app/Portfolio.tsx` | Light index: hero, three discipline cards, short About, contact close. Deliberately carries no work grids and no video — a test enforces this. |
| `/work/motion`  | `app/work/motion/page.tsx`  | Five curated cuts as press-to-load video cards, plus the brief-to-delivery method. |
| `/work/design`  | `app/work/design/page.tsx`  | Four image studies on the graphite contact sheet, plus the image-editing approach. |
| `/work/ai`      | `app/work/ai/page.tsx`      | The real AI tool stack and how generative tools sit inside a human-led edit. No fabricated samples. |

## Structure

```
app/
  layout.tsx      root document, fonts, metadata, pre-hydration theme script
  page.tsx        home route
  Portfolio.tsx   home page composition
  SiteChrome.tsx  shared client chrome: header, footer, contact, theme toggle, jump
  VideoCard.tsx   client press-to-load video player
  content.ts      all typed content: portfolio, disciplines, aiWorkflow, aiStack
  globals.css     the entire stylesheet, in dated cascade blocks
  work/{motion,design,ai}/page.tsx
public/media/     encoded video, poster frames, WebP stills, share card
tests/            rendered-HTML assertions run by `npm test`
```

`app/globals.css` is appended in clearly commented stage blocks. New rules belong
in the last block so earlier work keeps its cascade position.

## Content rules

Everything visible is grounded in supplied material. Do not add clients, metrics,
availability statements, testimonials, awards, frame rates, timecodes, or
delivery specs — several of these are asserted against by `npm test`.

- **Contact email** is the single switch: set `portfolio.contact.email` in
  `app/content.ts` to a real, verified address and the pending notice is replaced
  by a styled `mailto:` CTA. It is `null` until a verified address exists.
- **Share card**: the three `og:image` / `twitter:image` tags in `app/layout.tsx`
  are relative. Make them absolute once a production domain is known; a test
  asserts the string `localhost` never appears in the response.

## Themes and media

- Light/dark preference is stored in `localStorage` under `bilal-theme` and
  applied by an inline script in `app/layout.tsx` before hydration.
- Palette contract: `--accent` for large display type and non-text UI,
  `--accent-text` for small text and glyphs, `--field` for coral surfaces that
  carry ivory type. Any new color must be contrast-measured before it ships.
- Videos use `preload="none"` with a real poster and no `src` until the visitor
  presses play; only one plays at a time.

## Deployment

The project ships as a static-plus-server vinext build.

```bash
npm run build     # output written to dist/
npm start         # run the production server locally to verify
```

`vite.config.ts` uses `@openai/sites-vite-plugin` and `@cloudflare/vite-plugin`,
so the build is deployable to the OpenAI Sites host or to Cloudflare Workers via
`wrangler` (a `wrangler.jsonc` is not committed; add one only if deploying to
Workers directly). `.openai/hosting.json` declares the optional Sites bindings.

## Optional starter scaffolding

`db/`, `drizzle/`, `drizzle.config.ts`, `examples/`, `worker/` and
`app/chatgpt-auth.ts` are unused starter scaffolding kept from the template. They
are not imported by the site. `npx tsc --noEmit` reports three pre-existing
Cloudflare Worker type errors in `db/index.ts` and `worker/index.ts`; they do not
affect `npm run build`, `npm test` or `npm run lint`. Removing those directories
and the `drizzle-orm`/`drizzle-kit` dependencies would clear them.
