/**
 * Root Application Component
 * 
 * Serves as the application's entry point, integrating:
 * - Global styles via styled-components
 * - Routing system
 * - Theme support through Shadcn's CSS variables
 * 
 * The app uses Shadcn's theming system which operates by toggling
 * the 'dark' class on the HTML root element and CSS variables.
 */

import React, { useEffect } from 'react';
import AppRoutes from './router/AppRoutes';
import GlobalStyle from './styles/GlobalStyle';
import { initializeTheme } from './lib/theme-toggle';
import { ToastProvider } from './providers/ToastProvider';

const App: React.FC = () => {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <ToastProvider>
      <GlobalStyle />
      <AppRoutes />
    </ToastProvider>
  );
};

export default App;
