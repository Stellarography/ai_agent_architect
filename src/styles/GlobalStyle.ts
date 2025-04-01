/**
 * Global Style Configuration
 * 
 * Defines application-wide styles using styled-components that complement
 * Shadcn's theming system. This includes:
 * 
 * - Basic CSS reset properties
 * - Core layout configurations
 * - Custom global styles that don't conflict with Shadcn
 * 
 * Note: Base styles like colors, typography, and theme-specific styles
 * are handled by Shadcn's CSS variables and should not be defined here.
 */

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Core resets that don't conflict with Shadcn */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: hsl(var(--background));
  }

  ::-webkit-scrollbar-thumb {
    background: hsl(var(--muted));
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--muted-foreground));
  }

  /* Focus outline for accessibility */
  :focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
  }

  /* Selection styles */
  ::selection {
    background: hsl(var(--primary) / 0.1);
    color: hsl(var(--primary));
  }
`;

export default GlobalStyle;