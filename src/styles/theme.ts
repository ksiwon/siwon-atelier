// ─── Design tokens ─────────────────────────────────────────────────────────────
// Shifted from neon-developer to refined academic-researcher dark palette.
// Reference: Jon Barron, Chelsea Finn, Andrej Karpathy sites — content-first,
// subtle colors, generous whitespace, typography-driven.

export const theme = {
  colors: {
    background: '#08101e',       // deep navy (warmer than pure black)
    backgroundAlt: '#0c1526',
    surface: '#111d30',
    surfaceHover: '#172438',

    primary: '#5b8af7',          // refined academic blue (not neon purple)
    primaryGlow: 'rgba(91, 138, 247, 0.3)',
    secondary: '#7c6ef5',        // muted violet
    accent: '#38c9b4',           // soft teal

    text: '#eef2f8',
    textMuted: '#8a9bbf',        // slightly blue-tinted muted
    textDim: '#526281',

    border: 'rgba(91, 138, 247, 0.12)',
    borderHover: 'rgba(91, 138, 247, 0.25)',

    gradient: {
      primary: 'linear-gradient(135deg, #5b8af7 0%, #7c6ef5 60%, #38c9b4 100%)',
      glow: 'radial-gradient(ellipse at center, rgba(91, 138, 247, 0.12) 0%, transparent 70%)',
      mesh: `
        radial-gradient(at 30% 10%, rgba(91, 138, 247, 0.10) 0px, transparent 50%),
        radial-gradient(at 80% 5%, rgba(124, 110, 245, 0.07) 0px, transparent 50%),
        radial-gradient(at 5% 60%, rgba(56, 201, 180, 0.07) 0px, transparent 50%),
        radial-gradient(at 85% 55%, rgba(91, 138, 247, 0.04) 0px, transparent 50%),
        radial-gradient(at 10% 95%, rgba(124, 110, 245, 0.07) 0px, transparent 50%)
      `,
    },

    glass: {
      background: 'rgba(17, 29, 48, 0.65)',
      border: 'rgba(91, 138, 247, 0.12)',
      shadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
    },
  },

  fonts: {
    heading: "'Outfit', sans-serif",
    body: "'Noto Sans KR', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },

  fontSizes: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    sm: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
    base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
    lg: 'clamp(1.125rem, 1rem + 0.6vw, 1.25rem)',
    xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 1.2rem + 1.5vw, 2rem)',
    '3xl': 'clamp(2rem, 1.5rem + 2.5vw, 3rem)',
    '4xl': 'clamp(2.5rem, 1.8rem + 3.5vw, 4rem)',
    '5xl': 'clamp(3rem, 2rem + 5vw, 5.5rem)',
    hero: 'clamp(3rem, 2rem + 5vw, 6rem)',
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },

  borderRadius: {
    sm: '0.375rem',
    md: '0.625rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },

  transitions: {
    fast: '0.15s ease',
    normal: '0.25s ease',
    slow: '0.4s ease',
    spring: '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  zIndex: {
    base: 1,
    nav: 100,
    modal: 200,
    tooltip: 300,
  },
};

export type Theme = typeof theme;