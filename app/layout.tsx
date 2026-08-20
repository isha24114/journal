import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Heading font — DM Sans, weight 700 ("Bold"), used at 24px / 100% line-height.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

// "Recent Posts" / editorial display font — Cormorant Garamond, weight 700, 28px / 100%.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// Body copy font (Circular Std, weight 450 "Book") is declared via @font-face
// in globals.css instead of next/font/local, because Circular Std is a paid
// commercial font (Lineto) that can't be redistributed in this project. Drop
// your licensed .woff2 files into /public/fonts (see globals.css for the exact
// filenames) and it will be picked up automatically — until then the page
// falls back to the system sans stack so nothing breaks.

export const metadata: Metadata = {
  title: "Temples Around Gir: A Journey Through Faith, History & Landscape",
  description:
    "Beyond the forest, Saurashtra holds a quieter story in stone, sea air and pilgrimage paths — one that invites you to travel with attention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
