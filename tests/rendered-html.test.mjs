import assert from "node:assert/strict";
import test from "node:test";

const ROUTES = {
  home: "/",
  about: "/about",
  motion: "/work/motion",
  design: "/work/design",
  ai: "/work/ai",
};

async function render(path) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

const cache = new Map();
async function html(path = ROUTES.home) {
  if (!cache.has(path)) {
    const response = await render(path);
    assert.equal(response.status, 200, `route did not render: ${path}`);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    cache.set(path, await response.text());
  }
  return cache.get(path);
}

test("server-renders Muhammad Bilal's portfolio", async () => {
  const page = await html();

  assert.match(page, /<title>Muhammad Bilal/);
  assert.match(page, /Video Editor &amp; Graphic Designer/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview|Your site is taking shape/i);

  // A forwarded link has to preview real work, and must never advertise a dev
  // host: framework metadata absolutises share images against `metadataBase`,
  // which resolves to http://localhost:3000 while no production domain is known.
  assert.match(page, /<meta property="og:image" content="\/media\/og-cover\.jpg"/);
  assert.doesNotMatch(page, /localhost/i);
});

test("the home page is a quiet index, not a wall of media", async () => {
  const page = await html();

  // The home page carries three folders, not the discipline grids themselves.
  // If a video or a still grid reappears here, it has started carrying work again.
  assert.doesNotMatch(page, /<video/, "home page must not embed video");
  assert.doesNotMatch(page, /class="motion-grid"|class="stills-grid"/);

  // Stage 9: no boxed logo mark, only the name.
  assert.doesNotMatch(page, /class="brand-mark"/, "the header must carry no logo mark, only the name");

  for (const title of ["Motion &amp; Video Editing", "Photography &amp; Photo Editing", "AI-Assisted Content Creation"]) {
    assert.ok(page.includes(title), `missing folder: ${title}`);
  }
  assert.equal((page.match(/class="folder-card /g) ?? page.match(/folder-card folder-card-/g) ?? []).length >= 3, true, "all three folders must render");

  for (const href of ["/work/motion", "/work/design", "/work/ai", "/about"]) {
    assert.ok(page.includes(`href="${href}"`), `home page does not link to ${href}`);
  }

  // The portrait is the likely LCP element and must be eager + prioritised.
  assert.match(page, /<img src="\/media\/muhammad-bilal\.webp"[^>]*fetchpriority="high"/i);
});

test("the motion route autoplays muted with a single mute control per card", async () => {
  const page = await html(ROUTES.motion);

  // Stage 4 curated the reel from six cuts to five: the hostel piece shipped
  // sideways in its own export, and the documentary piece carried a third
  // party's private email address and a fabricated newspaper credit on screen.
  for (const title of [
    "The Long Walk",
    "48 Laws — Visual Series",
    "Harvest Light",
    "Bore &amp; Solar — Ad Cut",
    "Hours vs. The Algorithm",
  ]) {
    assert.ok(page.includes(title), `missing motion project: ${title}`);
  }

  for (const title of ["Heritage in Motion", "Documentary Rhythm"]) {
    assert.ok(!page.includes(title), `withdrawn motion project came back: ${title}`);
  }

  const videos = page.match(/<video[^>]*>/g) ?? [];
  assert.equal(videos.length, 5);
  for (const video of videos) {
    assert.match(video, /\bmuted\b/, "videos must start muted");
    assert.match(video, /\bloop\b/, "videos must loop");
    assert.match(video, /poster="\/media\//, "videos must ship a real poster");
    assert.match(video, /\bsrc="\/media\//, "videos autoplay from a real source, no press-to-load step");
    // No native controls at all: that is what removes any fullscreen affordance.
    assert.doesNotMatch(video, /\bcontrols\b/, "videos must not expose native controls or a fullscreen button");
  }

  // Exactly one control per card: the mute toggle. No separate play button.
  assert.equal((page.match(/class="mute-toggle"/g) ?? []).length, 5);
  assert.doesNotMatch(page, /class="play-button"/, "the press-to-load play button was removed with autoplay");
});

test("the design route carries every still in an adaptive grid", async () => {
  const page = await html(ROUTES.design);

  for (const title of ["Signal / Dusk", "Palm / Print", "Blue Hour", "Weather / Street"]) {
    assert.ok(page.includes(title), `missing still study: ${title}`);
  }

  const stills = page.match(/<img[^>]*loading="lazy"[^>]*>/g) ?? [];
  assert.equal(stills.length, 4);
  for (const img of stills) {
    assert.match(img, /width="\d+" height="\d+"/, "still images need intrinsic size");
    assert.match(img, /alt="[^"]{10,}"/, "still images need descriptive alt text");
  }
});

test("the AI route explains each tool in the first person and claims no sample", async () => {
  const page = await html(ROUTES.ai);

  for (const tool of ["Veo 2", "Flow", "Seedance", "FLUX", "Hugging Face"]) {
    assert.ok(page.includes(tool), `missing AI tool: ${tool}`);
  }
  assert.equal((page.match(/class="ai-card"/g) ?? []).length, 5, "all five tool cards must render");
  assert.match(page, /I use it|I use Veo|I use Seedance|I pull specific ones/, "tool descriptions must be first person");
  assert.match(page, /Nothing in this portfolio is presented as a finished AI generation/);
  // No fabricated media may be introduced to fill this page out.
  assert.doesNotMatch(page, /<video/);
});

test("the about route carries the biography, education and toolkit", async () => {
  const page = await html(ROUTES.about);

  assert.match(page, /Currently pursuing/);
  assert.ok(page.includes("ICS"), "education progression is missing ICS");
  assert.ok(page.includes("BSIT"), "education progression is missing BSIT");

  for (const tool of [
    "Premiere Pro",
    "Final Cut Pro",
    "CapCut",
    "Photoshop",
    "Canva",
    "Veo 2",
    "Flow",
    "Seedance",
    "FLUX",
    "Hugging Face",
  ]) {
    assert.ok(page.includes(tool), `toolkit is missing: ${tool}`);
  }

  // The board is an enhancement: the chips must be real, readable list items in
  // the server response, not something only a pointer can reach.
  assert.match(page, /class="skill-board[^"]*"/);
  assert.ok((page.match(/class="skill-chip/g) ?? []).length === 10, "all ten chips must server-render");
});

test("landmarks, chrome and keyboard entry points exist on every route", async () => {
  for (const [name, path] of Object.entries(ROUTES)) {
    const page = await html(path);

    assert.match(page, /class="skip-link" href="#main-content"/, name);
    // The skip-link target has to be focusable or the jump does not move focus.
    assert.match(page, /<main id="main-content" tabindex="-1">/, name);
    assert.match(page, /<nav [^>]*aria-label="Primary navigation"/, name);
    assert.match(page, /<header class="site-header">/, name);
    assert.match(page, /<footer class="site-footer">/, name);
    assert.match(page, /class="theme-toggle"[^>]*aria-label="/, name);
    assert.ok(page.includes('id="contact"'), `${name} is missing the contact close`);
    assert.ok(page.includes('id="top"'), `${name} is missing the back-to-top target`);
  }
});

test("the real contact channels are reachable from every route", async () => {
  for (const [name, path] of Object.entries(ROUTES)) {
    const page = await html(path);

    // Supplied directly by Muhammad Bilal on 2026-08-29. These replaced the
    // pending-contact state, so the site must now actually carry them.
    assert.ok(page.includes("mailto:silentpixelstudio@gmail.com"), `${name} is missing the email CTA`);
    assert.ok(page.includes("https://wa.me/923250049637"), `${name} is missing the WhatsApp link`);
    assert.ok(page.includes("https://www.instagram.com/silentpixelstudio"), `${name} is missing Instagram`);
    // The owner pasted a share link carrying a per-visitor tracking token; it
    // must never be republished to every other visitor.
    assert.doesNotMatch(page, /igsi=/i, `${name} leaks the Instagram share token`);
    // The pending state is gone and must not come back now that a real address exists.
    assert.doesNotMatch(page, /Verified contact details coming soon/, name);
  }
});

test("no fabricated availability or client claims on any route", async () => {
  for (const [name, path] of Object.entries(ROUTES)) {
    const page = await html(path);

    assert.doesNotMatch(page, /available for|currently available|open to work|hire me now/i, name);
    assert.doesNotMatch(page, /\b(?:clients?|testimonial|award-winning|years of experience)\b/i, name);
    assert.doesNotMatch(page, /\d+\+\s*(?:clients|projects|brands)/i, name);
    // Source filenames must never leak into the UI. The studio name alone is no
    // longer a leak signal — it is the real Instagram handle and part of the
    // email address — so this matches the filename shapes instead.
    assert.doesNotMatch(page, /By @SilentPixelStudio|\(MP4\)|chawal|shop-ad|29-11-2025/i, name);
  }
});

test("theme preference is applied before hydration", async () => {
  for (const path of Object.values(ROUTES)) {
    const page = await html(path);

    assert.match(page, /localStorage\.getItem\('bilal-theme'\)/);
    assert.match(page, /prefers-color-scheme: light/);
    assert.match(page, /documentElement\.dataset\.theme/);
  }
});
