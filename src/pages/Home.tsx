import React from 'react';
import HomePage from './HomePage';
import { ThemeToggle } from '@/components/ui/theme-toggle';

/**
 * Home Component
 * 
 * Serves as the layout wrapper for the home page content.
 * Handles the overall page structure, navigation elements,
 * and global UI components like theme toggle.
 */
const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <HomePage />
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
            Built with modern tools and technologies.
            <br className="sm:hidden" /> All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/yourusername/ai_agent_architect" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a 
              href="/docs" 
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Documentation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
