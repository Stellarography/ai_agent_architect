/**
 * Theme Toggle Component
 * 
 * A reusable component that provides theme switching functionality using Shadcn's
 * theming system. This component:
 * 
 * - Manages theme state (light/dark) using React useState
 * - Syncs with system/user preferences on initial load
 * - Persists theme choice in localStorage
 * - Toggles the 'dark' class on the HTML root element
 * - Provides accessible button controls with icon transitions
 * 
 * @component
 */

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Button variant="outline" size="sm" onClick={toggleTheme} className="h-10 w-10 p-0">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
