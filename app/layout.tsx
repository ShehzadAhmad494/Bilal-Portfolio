import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";

import Choreography from "./Choreography";
import "./globals.css";

const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Bilal — Video Editor & Graphic Designer",
  description:
    "Selected video editing, motion, graphic design, and image work by Muhammad Bilal.",
  applicationName: "Muhammad Bilal Portfolio",
  authors: [{ name: "Muhammad Bilal" }],
  keywords: [
    "Muhammad Bilal",
    "video editor",
    "graphic designer",
    "motion design",
    "portfolio",
  ],
  openGraph: {
    title: "Muhammad Bilal — Video Editor & Graphic Designer",
    description:
      "Cinematic edits, graphic compositions, and AI-assisted creative work.",
    type: "website",
    siteName: "Muhammad Bilal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal — Video Editor & Graphic Designer",
    description:
      "Cinematic edits, graphic compositions, and AI-assisted creative work.",
  },
  icons: {
    icon: "/media/muhammad-bilal.webp",
    apple: "/media/muhammad-bilal.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2eee6" },
    { media: "(prefers-color-scheme: dark)", color: "#10100f" },
  ],
};

const themeScript = `
  try {
    var stored = localStorage.getItem('bilal-theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
  }
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Share-card image, written by hand rather than through `metadata.openGraph.images`:
          that path absolutises against `metadataBase`, which without a known production
          domain resolves to http://localhost:3000 and would ship a dead image URL. The
          path stays relative until a real domain is available, at which point these three
          tags should become absolute URLs. The image is a real frame from the graded field
          piece in the reel — nothing composited, nothing invented.
        */}
        <meta property="og:image" content="/media/og-cover.jpg" />
        <meta
          property="og:image:alt"
          content="Frame from Muhammad Bilal's graded field piece: a figure standing in a golden crop field under an open sky"
        />
        <meta name="twitter:image" content="/media/og-cover.jpg" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${display.variable} ${sans.variable}`}>
        {children}
        {/*
          Motion layer, mounted once for every route. It renders nothing: it attaches
          GSAP entrance and scroll choreography after hydration, and does nothing at
          all under `prefers-reduced-motion: reduce`. The page above is complete
          without it.
        */}
        <Choreography />
      </body>
    </html>
  );
}
