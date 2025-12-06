import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradient.mesh};
    pointer-events: none;
    z-index: 0;
  }

  #root {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textDim};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.textMuted};
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulse-glow {
    0%, 100% { 
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
    }
    50% { 
      box-shadow: 0 0 40px rgba(99, 102, 241, 0.5), 0 0 60px rgba(139, 92, 246, 0.3);
    }
  }

  @keyframes glitch {
    0% {
      clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
      transform: translate(-2px, 2px);
    }
    20% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(2px, -2px);
    }
    40% {
      clip-path: polygon(0 54%, 100% 54%, 100% 56%, 0 56%);
      transform: translate(-2px, 0);
    }
    60% {
      clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
      transform: translate(0, 2px);
    }
    80% {
      clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
      transform: translate(2px, 0);
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      transform: translate(0, 0);
    }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
