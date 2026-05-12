# Siwon's Atelier

Personal academic portfolio of JungWon Park — KAIST, Industrial Design & CS.

## Stack

React 18 · TypeScript · styled-components · Framer Motion · Vite

## Quick Start

```bash
npm install
npm run dev
```

## Customising

All design tokens live in **`src/styles/theme.ts`** — colors, spacing, border-radius, layout width.  
All content lives in **`src/data/`** — edit `siteData.ts`, `projects.ts`, `publications.ts`, `awards.ts`.

### Background color

```ts
// src/styles/theme.ts
colors: {
  background:   '#0e1015',  // main canvas
  surface:      '#161820',  // cards / sections (keep slightly lighter)
  surfaceHover: '#1b1d27',  // surface on hover
}
```

### Accent color

```ts
  primary: '#6a93d4',  // all highlights — change this one value
```