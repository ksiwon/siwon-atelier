// ─── Design tokens ─────────────────────────────────────────────────────────────
// Academic researcher palette — content-first, single accent, no gradients.
// Reference: Jon Barron, Andrej Karpathy, Chelsea Finn — typography-driven,
// dark solid background, minimal decoration.

export const theme = {
  colors: {
    background:    '#0e1015',       // near-black with a whisper of blue
    backgroundAlt: '#111318',
    surface:       '#161820',
    surfaceHover:  '#1b1d27',

    primary:      '#6a93d4',        // one accent color: muted academic blue
    primaryGlow:  'rgba(106, 147, 212, 0.18)',
    secondary:    '#6a93d4',        // intentionally same — no rainbow palette
    accent:       '#6a93d4',

    text:         '#dedede',
    textMuted:    '#a0a0a0',   // was #888 — boosted for legibility on #111
    textDim:      '#6a6a6a',   // was #555 — boosted for legibility on #111

    border:       'rgba(255, 255, 255, 0.08)',
    borderHover:  'rgba(255, 255, 255, 0.16)',

    // gradient kept as object for type-safety but values are now solid/none
    gradient: {
      primary: '#6a93d4',           // flat color, no gradient
      glow:    'none',
      mesh:    'none',              // no mesh overlay on background
    },

    glass: {
      background: 'rgba(22, 22, 22, 0.95)',
      border:     'rgba(255, 255, 255, 0.08)',
      shadow:     '0 4px 16px rgba(0, 0, 0, 0.4)',
    },
  },

  fonts: {
    heading: "'Outfit', sans-serif",
    body:    "'Noto Sans KR', sans-serif",
    mono:    "'JetBrains Mono', monospace",
  },

  fontSizes: {
    xs:   'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    sm:   'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
    base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
    lg:   'clamp(1.125rem, 1rem + 0.6vw, 1.25rem)',
    xl:   'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 1.2rem + 1.5vw, 2rem)',
    '3xl': 'clamp(2rem, 1.5rem + 2.5vw, 3rem)',
    '4xl': 'clamp(2.5rem, 1.8rem + 3.5vw, 4rem)',
    '5xl': 'clamp(3rem, 2rem + 5vw, 5.5rem)',
    hero:  'clamp(3rem, 2rem + 5vw, 6rem)',
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
    '5xl': '8rem',
  },

  // Reduced radii — academic sites are sharp, not bubbly
  borderRadius: {
    sm:   '2px',
    md:   '3px',
    lg:   '4px',
    xl:   '6px',
    full: '9999px',
  },

  // Layout tokens — single source of truth for content width and section rhythm
  layout: {
    maxWidth:      '1080px',
    sectionPadX:   '2rem',          // = spacing.xl
    sectionPadXSm: '1rem',          // = spacing.md  (mobile ≤ 480px)
    sectionPadY:   '8rem',          // = spacing['5xl'] (desktop sections)
    sectionPadYSm: '4rem',          // = spacing['3xl'] (mobile sections)
  },

  transitions: {
    fast:   '0.15s ease',
    normal: '0.25s ease',
    slow:   '0.4s ease',
    spring: '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  zIndex: {
    base:    1,
    nav:     100,
    modal:   200,
    tooltip: 300,
  },
};

export type Theme = typeof theme;