// Basic theme structure - expand as needed
export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    primary: '#6200EE', // Example primary color
    secondary: '#03DAC6', // Example secondary color
    background: '#F7F7F7', // Slightly off-white background
    surface: '#FFFFFF', // Card backgrounds etc.
    error: '#B00020',
    // Add more theme variables: fonts, fontSizes, spacing, breakpoints etc.
  };
  
  export const darkTheme = {
    body: '#121212', // Dark background
    text: '#EAEAEA', // Light text
    primary: '#BB86FC', // Adjusted primary for dark mode
    secondary: '#03DAC6',
    background: '#1E1E1E', // Slightly lighter dark background
    surface: '#2C2C2C', // Card backgrounds etc.
    error: '#CF6679',
    // Add more theme variables
  };
  
  export type ThemeType = typeof lightTheme; // Define ThemeType based on one theme structure