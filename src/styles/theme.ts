export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  primary: '#6200EE',
  background: '#FFF',
  secondary: '#03DAC6',
  error: '#B00020',
  success: '#4CAF50',
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  primary: '#BB86FC',
  background: '#121212',
  secondary: '#018786',
  error: '#CF6679',
  success: '#00C853',
  fontSizes: { ...lightTheme.fontSizes },
  breakpoints: { ...lightTheme.breakpoints },
  spacing: { ...lightTheme.spacing },
};

export type ThemeType = typeof lightTheme;

// Extend styled-components default theme type
import 'styled-components';
// Type declaration for styled-components theme support
declare module 'styled-components' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ThemeType {}
}