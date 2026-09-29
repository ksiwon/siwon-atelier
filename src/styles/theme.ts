// ─── Design tokens ─────────────────────────────────────────────────────────────
// Content-first, single accent, no gradients, one typeface.

export const theme = {
  colors: {
    background: '#0e1015',
    surface:    '#161820',

    primary:    '#6a93d4',

    text:       '#dedede',
    textMuted:  '#a0a0a0',
    textDim:    '#6a6a6a',

    border:      'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(255, 255, 255, 0.16)',
  },

  font: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",

  // Type scale — every text element on the site maps to exactly one level.
  //   display  → name in hero
  //   title    → section titles (h2)
  //   heading  → item titles (award / paper / project names)
  //   body     → paragraphs
  //   small    → secondary lines (orgs, authors, descriptions in lists)
  //   caption  → meta (years, tags, venues, links)
  type: {
    display: { size: 'clamp(2rem, 1.4rem + 2.4vw, 2.75rem)', weight: 700, line: 1.15, tracking: '-0.03em' },
    title:   { size: 'clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)', weight: 700, line: 1.3, tracking: '-0.02em' },
    heading: { size: '1.0625rem', weight: 600, line: 1.4, tracking: '-0.01em' },
    body:    { size: '1rem',      weight: 400, line: 1.75, tracking: '0' },
    small:   { size: '0.875rem',  weight: 400, line: 1.6, tracking: '0' },
    caption: { size: '0.8125rem', weight: 400, line: 1.5, tracking: '0' },
  },

  spacing: {
    xs:   '0.25rem',
    sm:   '0.5rem',
    md:   '1rem',
    lg:   '1.5rem',
    xl:   '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },

  layout: {
    maxWidth:      '1080px',
    sectionPadX:   '2rem',
    sectionPadXSm: '1rem',          // mobile ≤ 480px
    sectionPadY:   '6rem',
    sectionPadYSm: '4rem',          // mobile ≤ 768px
  },

  transitions: {
    fast:   '0.15s ease',
    normal: '0.25s ease',
  },

  zIndex: {
    nav:   100,
    modal: 200,
  },
};

export type Theme = typeof theme;
export type TypeLevel = keyof Theme['type'];
