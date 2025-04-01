/**
 * Theme Management Utilities
 * 
 * Handles theme switching functionality with:
 * - Local storage persistence
 * - System preference detection
 * - CSS class management
 * - Event handling for system preference changes
 */

type Theme = 'light' | 'dark';

export function setTheme(theme: Theme) {
  // Update DOM
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  
  // Update localStorage
  try {
    localStorage.setItem('theme', theme);
  } catch (e) {
    console.warn('Failed to save theme preference:', e);
  }

  // Dispatch event for other components
  window.dispatchEvent(new CustomEvent('theme-change', { detail: theme }));
}

export function getTheme(): Theme {
  // Check localStorage
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  }

  // Check system preference
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

export function initializeTheme() {
  const theme = getTheme();
  setTheme(theme);

  // Listen for system theme changes
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if there's no user preference stored
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
  }
}
