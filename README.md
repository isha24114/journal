# Gir Vista Journal — article page

Next.js 16 / Tailwind CSS 4 rebuild of the "Temples Around Gir" journal page.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Fonts

- **Headings (H1/H2):** DM Sans, weight 700, 24px / 100% line-height — loaded
  automatically via `next/font/google` in `app/layout.tsx`.
- **"Recent Posts" / section display heading:** Cormorant Garamond, weight
  700, 28px / 100% line-height — also via `next/font/google`.
- **Body copy:** Circular Std, weight 450 ("Book"), 18px / 32px line-height.
  This is a paid commercial font, so it isn't bundled — see
  `public/fonts/README.txt` for exactly which files to drop in. Until you add
  them, body text falls back to the system UI font at the correct size/line
  height, so layout and spacing are unaffected.

The three exact type specs are defined once as reusable classes in
`app/globals.css`: `.text-body`, `.text-heading`, `.text-display`.

## Structure

```
app/
  layout.tsx       — fonts + metadata
  globals.css       — Tailwind v4 theme tokens, @font-face, exact type specs
  page.tsx          — page composition
components/
  content.ts             — all copy/data (edit this to change text/images)
  Sidebar.tsx             — Recent Posts + "Ready to explore?" CTA card
  ArticleSectionBlock.tsx — H2 + paragraph block
  GuideCard.tsx           — related-guide card
public/images/       — images extracted from the supplied reference files
```

## Notes on the source design

A few things in the reference screenshots repeat verbatim (the "Heritage
lives in the grand, the local and the in-between" section appears twice, the
four Recent Posts entries are identical, and two of the four related-guide
cards are identical "3-Day Gir Itinerary" cards). These have been reproduced
faithfully. All of it lives in `components/content.ts` as plain data, so
trimming duplicates or swapping in real copy/images later is a quick edit
there rather than a template change.

Page shell (max-width 1440px, 100px horizontal padding, 68px column gap,
`#FFFDF9` background) matches the values visible in the Figma inspector
panel in the third reference screenshot.
