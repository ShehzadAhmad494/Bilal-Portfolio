export type MotionProject = {
  id: string;
  title: string;
  category: string;
  duration: string;
  year: string;
  description: string;
  craft: readonly string[];
  video: string;
  poster: string;
  featured?: boolean;
};

export type StillProject = {
  id: string;
  title: string;
  discipline: string;
  image: string;
  /** Intrinsic pixel size of the delivered WebP, so the browser reserves the right box. */
  width: number;
  height: number;
  alt: string;
  note: string;
};

/**
 * WhatsApp opener. Written from the visitor's side and kept deliberately neutral:
 * it names where they came from and asks about a project, and it puts no words in
 * their mouth about budget, timeline, or the kind of work they want.
 */
const WHATSAPP_MESSAGE =
  "Hi Muhammad Bilal, I came across your portfolio and I would like to talk to you about a project.";

/** Pakistani mobile 0325 0049637 in international form, as wa.me requires. */
const WHATSAPP_NUMBER = "923250049637";

export const portfolio = {
  person: {
    name: "Muhammad Bilal",
    role: "Video Editor & Graphic Designer",
    education: "ICS · Currently pursuing BSIT",
    portrait: "/media/muhammad-bilal.webp",
  },
  /**
   * The verified contact channels, supplied directly by Muhammad Bilal. This is
   * the single place they are edited: the header CTA, the closing contact block,
   * the footer and the floating WhatsApp button all read from here. Nothing in
   * this object may be guessed — a wrong address on a hiring page is worse than
   * no address at all.
   *
   * The WhatsApp number is stored in international E.164 form without the plus,
   * which is the only shape `wa.me` accepts; `display` is the human form of the
   * same number. The Instagram URL is stored clean: the share link the owner
   * pasted carried an `igsi` tracking parameter, which is stripped here so the
   * site never republishes one visitor's share token to every other visitor.
   */
  contact: {
    email: "silentpixelstudio@gmail.com",
    whatsapp: {
      /** E.164 without the leading plus — the wa.me path segment. */
      number: WHATSAPP_NUMBER,
      display: "+92 325 0049637",
      /** Prefilled, URL-encoded opener so the visitor lands in a started thread. */
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      message: WHATSAPP_MESSAGE,
    },
    instagram: {
      handle: "@silentpixelstudio",
      href: "https://www.instagram.com/silentpixelstudio",
    },
  },
  /**
   * Reel order is a hiring decision, not an archive order: strongest proof of
   * editing first, then the widest jump in register on each following card.
   * Written in first person — this is Muhammad Bilal's own account of each cut,
   * not a third-party description. Labels describe the piece; none of them is a
   * client or a commission claim.
   */
  motionProjects: [
    {
      id: "product-motion",
      title: "Bore & Solar — Ad Cut",
      category: "Advertising",
      duration: "00:20",
      year: "2025",
      description:
        "I cut this twenty-second vertical service ad around a hard red-and-black graphic system — cut-out machinery plates, star-burst wipes, one claim per beat — so the whole offer reads with the sound off.",
      craft: ["Sound-off readability", "Cut-out compositing", "Two-color system"],
      video: "/media/product-motion.mp4",
      poster: "/media/product-motion.webp",
      featured: true,
    },
    {
      id: "narrative-short",
      title: "The Long Walk",
      category: "Short film",
      duration: "01:03",
      year: "2025",
      description:
        "A one-minute short built on a single idea: a man wakes, steps outside, and keeps walking. I cut for continuity across corridors, courtyards, streets and open road, and held it together with one warm grade.",
      craft: ["Continuity assembly", "Single-look grade", "Sustained follow framing"],
      video: "/media/narrative-short.mp4",
      poster: "/media/narrative-short.webp",
    },
    {
      id: "power-series",
      title: "48 Laws — Visual Series",
      category: "Editorial series",
      duration: "01:00",
      year: "2025",
      description:
        "I condensed forty-eight chapters into sixty seconds. Flat red staging, silhouette illustration and a repeating chapter frame carry the structure, so each law lands as its own image.",
      craft: ["Chapter system", "Flat graphic staging", "Read-at-speed typography"],
      video: "/media/power-series.mp4",
      poster: "/media/power-series.webp",
    },
    {
      id: "field-study",
      title: "Harvest Light",
      category: "Cinematic short",
      duration: "00:15",
      year: "2025",
      description:
        "Fifteen seconds where color does the storytelling. I graded a warm harvest pass and a cooler flared pass on the same field, cut so the shift in grade reads as a shift in time.",
      craft: ["Two-look grade", "Static-frame blocking", "On-screen dialogue"],
      video: "/media/field-study.mp4",
      poster: "/media/field-study.webp",
    },
    {
      id: "social-cut",
      title: "Hours vs. The Algorithm",
      category: "Social edit",
      duration: "00:23",
      year: "2025",
      description:
        "A platform-native joke with a turn. I stacked title cards to escalate an editor's week, landed the punchline on the feed, and held one type system across every card.",
      craft: ["Title-card pacing", "Set-up and turn", "Single type system"],
      video: "/media/social-cut.mp4",
      poster: "/media/social-cut.webp",
    },
  ] satisfies readonly MotionProject[],
  stillProjects: [
    {
      id: "signal-lines",
      title: "Signal / Dusk",
      discipline: "Color study 01",
      image: "/media/signal-lines.webp",
      width: 1350,
      height: 1800,
      alt: "Electricity pylon and converging power lines against a blue and lilac dusk sky",
      note: "Chromatic tension and converging geometry.",
    },
    {
      id: "palm-study",
      title: "Palm / Print",
      discipline: "Graphic study 02",
      image: "/media/palm-study.webp",
      width: 1350,
      height: 1800,
      alt: "High contrast palm tree silhouette against a pale cream sky, printed with heavy grain",
      note: "Duotone silhouette pushed to two values and grained.",
    },
    {
      id: "blue-hour",
      title: "Blue Hour",
      discipline: "Tone study 03",
      image: "/media/blue-hour.webp",
      width: 1350,
      height: 1800,
      alt: "Silhouetted seated figure on a rooftop at sunset beneath a large blue sky",
      note: "Negative space used to hold a quiet human moment.",
    },
    {
      id: "street-frame",
      title: "Weather / Street",
      discipline: "Atmosphere study 04",
      image: "/media/street-frame.webp",
      width: 1350,
      height: 1800,
      alt: "Moody overcast street with layered buildings, cables, towers, and birds",
      note: "Layered depth and restrained cool-toned grading.",
    },
  ] satisfies readonly StillProject[],
} as const;

/**
 * Stage 9: the three folders on the home page. Each is a shallow, honest peek at
 * the discipline route it opens — a stack of real thumbnails, not a claim in
 * itself. `peek` holds 1–3 images; the AI folder has only one real asset, and the
 * folder card is built to look right with fewer thumbnails rather than padded
 * out with anything invented.
 */
export type Discipline = {
  id: string;
  number: string;
  href: string;
  title: string;
  /** A short, first-person line — the folder's own caption, not a sales pitch. */
  tagline: string;
  /** A slightly longer first-person account, used on the About route. */
  summary: string;
  meta: string;
  peek: readonly { src: string; alt: string }[];
};

export const disciplines = [
  {
    id: "motion",
    number: "01",
    href: "/work/motion",
    title: "Motion & Video Editing",
    tagline: "I cut for pace and continuity.",
    summary: "I cut short film, advertising and social work for pace and continuity, then hold it together with one grade.",
    meta: "05 selected cuts",
    peek: [
      { src: "/media/product-motion.webp", alt: "Frame from the Bore & Solar ad cut" },
      { src: "/media/narrative-short.webp", alt: "Frame from The Long Walk" },
      { src: "/media/power-series.webp", alt: "Frame from the 48 Laws visual series" },
    ],
  },
  {
    id: "design",
    number: "02",
    href: "/work/design",
    title: "Photography & Photo Editing",
    tagline: "I grade before I garnish.",
    summary: "I treat color, atmosphere and composition in stills with the same hierarchy I bring to a sequence.",
    meta: "04 image studies",
    peek: [
      { src: "/media/signal-lines.webp", alt: "Electricity pylon and converging power lines at dusk" },
      { src: "/media/palm-study.webp", alt: "High contrast palm tree silhouette" },
      { src: "/media/blue-hour.webp", alt: "Silhouetted seated figure at blue hour" },
    ],
  },
  {
    id: "ai",
    number: "03",
    href: "/work/ai",
    title: "AI-Assisted Content Creation",
    tagline: "I keep the tools on a leash.",
    summary: "I use a handful of generative tools for research, iteration and elements — the cut, the timing and the final call stay mine.",
    meta: "05 tools in rotation",
    peek: [
      { src: "/media/ai-suite.webp", alt: "Illustration of an AI-assisted editing suite" },
    ],
  },
] satisfies readonly Discipline[];

/**
 * The confirmed AI/generative tools, each with one first-person paragraph
 * covering what the tool is and what Muhammad Bilal actually uses it for. These
 * describe a working method, not finished output: no piece on this site is
 * presented as a finished AI generation, and no sample is claimed on its behalf.
 */
export type AiTool = {
  id: string;
  name: string;
  mark: string;
  tint: string;
  kind: string;
  description: string;
};

export const aiTools = [
  {
    id: "veo",
    name: "Veo 2",
    mark: "V2",
    tint: "#3d6fd4",
    kind: "Text-to-video generation",
    description:
      "Veo 2 turns a written prompt into short video clips. I use it to generate quick motion references and background plates I can cut into a sequence before committing to a full shoot or a heavier generation.",
  },
  {
    id: "flow",
    name: "Flow",
    mark: "Fl",
    tint: "#4a5568",
    kind: "AI filmmaking workspace",
    description:
      "Flow is Google's AI filmmaking workspace, built around Veo. I use it to storyboard a shot and iterate on framing and camera movement before I generate or film the real thing.",
  },
  {
    id: "seedance",
    name: "Seedance",
    mark: "Sd",
    tint: "#b0472f",
    kind: "Video generation",
    description:
      "Seedance generates short video clips from a prompt. I use it for generative inserts and texture shots — the kind of coverage that would be impractical to film for a quick edit.",
  },
  {
    id: "flux",
    name: "FLUX",
    mark: "Fx",
    tint: "#3b3b41",
    kind: "Image generation",
    description:
      "FLUX generates high-fidelity images from a prompt. I use it for concept frames, textures and graphic elements that I composite into a design rather than publish on their own.",
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    mark: "HF",
    tint: "#c58a00",
    kind: "Open model library",
    description:
      "Hugging Face is an open library of AI models. I pull specific ones from it for smaller jobs inside a larger edit — upscaling, background removal, style transfer — rather than for a full generation.",
  },
] satisfies readonly AiTool[];

/**
 * The toolkit board on the About route. Every entry is a tool Muhammad Bilal
 * confirmed he works in — nothing here is inferred from the files, and no
 * proficiency level is claimed, because none was supplied.
 *
 * `x` and `y` are percentages of the board, used only as the resting layout the
 * board opens with and returns to when reset. They carry no meaning: the chips
 * are draggable, so any arrangement is valid.
 */
export type Skill = {
  id: string;
  label: string;
  /** Two-letter mark shown on the tile. Not a logo: no brand artwork is copied. */
  mark: string;
  /** The colour the tool is generally recognised by, used only for its tile. */
  tint: string;
  group: "edit" | "design" | "ai";
  x: number;
  y: number;
  /** Resting rotation, so the board reads as scattered rather than gridded. */
  tilt: number;
};

export const skills = [
  { id: "premiere", label: "Premiere Pro", mark: "Pr", tint: "#9a8cff", group: "edit", x: 4, y: 10, tilt: -6 },
  { id: "final-cut", label: "Final Cut Pro", mark: "Fc", tint: "#2f2f33", group: "edit", x: 38, y: 3, tilt: 4 },
  { id: "capcut", label: "CapCut", mark: "Cc", tint: "#141416", group: "edit", x: 70, y: 12, tilt: -3 },
  { id: "photoshop", label: "Photoshop", mark: "Ps", tint: "#2f8fe0", group: "design", x: 8, y: 38, tilt: 5 },
  { id: "canva", label: "Canva", mark: "Cv", tint: "#12908f", group: "design", x: 40, y: 32, tilt: -4 },
  { id: "veo", label: "Veo 2", mark: "V2", tint: "#3d6fd4", group: "ai", x: 68, y: 42, tilt: 6 },
  { id: "flow", label: "Flow", mark: "Fl", tint: "#4a5568", group: "ai", x: 3, y: 66, tilt: -5 },
  { id: "seedance", label: "Seedance", mark: "Sd", tint: "#b0472f", group: "ai", x: 28, y: 60, tilt: 3 },
  { id: "flux", label: "FLUX", mark: "Fx", tint: "#3b3b41", group: "ai", x: 54, y: 68, tilt: -6 },
  { id: "hugging-face", label: "Hugging Face", mark: "HF", tint: "#c58a00", group: "ai", x: 72, y: 82, tilt: 5 },
] satisfies readonly Skill[];

export const skillGroups = [
  { id: "edit", label: "Editing" },
  { id: "design", label: "Design" },
  { id: "ai", label: "AI-assisted" },
] as const;
