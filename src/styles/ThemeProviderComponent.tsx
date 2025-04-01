import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';

interface ThemeProviderComponentProps {
  children: React.ReactNode;
}

export const ThemeProviderComponent: React.FC<ThemeProviderComponentProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
      setIsDarkMode(prevMode => !prevMode);
  };

  const currentTheme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <button
         onClick={toggleTheme}
         className="fixed top-4 right-4 z-50 p-2 bg-gray-500 dark:bg-gray-700 text-white rounded shadow-md hover:bg-gray-600 dark:hover:bg-gray-600"
      >
         Toggle Theme ({isDarkMode ? 'Dark' : 'Light'})
      </button>
      {children}
    </ThemeProvider>
  );
};