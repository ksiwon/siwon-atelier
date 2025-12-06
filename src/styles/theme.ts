export const theme = {
  colors: {
    background: '#0a0b0f',
    backgroundAlt: '#0e1016',
    surface: '#141820',
    surfaceHover: '#1a1f2a',
    
    primary: '#6366f1',
    primaryGlow: 'rgba(99, 102, 241, 0.4)',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    
    text: '#f8fafc',
    textMuted: '#94a3b8',
    textDim: '#64748b',
    
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(255, 255, 255, 0.15)',
    
    gradient: {
      primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
      glow: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
      mesh: `
        radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
        radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%),
        radial-gradient(at 0% 50%, rgba(6, 182, 212, 0.1) 0px, transparent 50%),
        radial-gradient(at 80% 50%, rgba(99, 102, 241, 0.05) 0px, transparent 50%),
        radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.1) 0px, transparent 50%)
      `
    },
    
    glass: {
      background: 'rgba(20, 24, 32, 0.6)',
      border: 'rgba(255, 255, 255, 0.08)',
      shadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
    }
  },
  
  fonts: {
    heading: "'Outfit', sans-serif",
    body: "'Noto Sans KR', sans-serif",
    mono: "'JetBrains Mono', monospace"
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
    hero: 'clamp(3.5rem, 2.5rem + 6vw, 7rem)'
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
    '5xl': '8rem'
  },
  
  borderRadius: {
    sm: '0.375rem',
    md: '0.625rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px'
  },
  
  transitions: {
    fast: '0.15s ease',
    normal: '0.25s ease',
    slow: '0.4s ease',
    spring: '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },
  
  zIndex: {
    base: 1,
    nav: 100,
    modal: 200,
    tooltip: 300
  }
};

export type Theme = typeof theme;
