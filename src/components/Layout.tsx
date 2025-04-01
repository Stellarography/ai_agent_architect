// src/components/Layout.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  Settings,
  Users,
  GitBranch,
  BarChart3,
  Bell,
  User
} from "lucide-react";
import { ThemeToggle } from './ui/theme-toggle';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LayoutProps {
  children: React.ReactNode;
}

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-sm ${
    isActive ? 'bg-muted text-primary font-semibold' : 'text-muted-foreground hover:text-primary'
  }`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navLinks = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/agents', icon: Users, label: 'Agents' },
    { to: '/design', icon: GitBranch, label: 'Workflows' },
    { to: '/monitoring', icon: BarChart3, label: 'Monitoring' },
    { to: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[256px_1fr] lg:grid-cols-[256px_1fr_256px]">
      {/* Left Sidebar - Hidden on mobile */}
      <aside className="hidden md:flex md:flex-col gap-2 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        {/* Sidebar Header */}
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <Users className="h-6 w-6 text-primary" />
            <span className="">AI Agent Architect</span>
          </NavLink>
        </div>
        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-auto py-4 px-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={getNavLinkClass}
              end={link.to === '/'}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-slate-50 dark:bg-slate-900 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="shrink-0 md:hidden h-10 w-10 p-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col w-64 sm:w-72">
              <nav className="grid gap-2 text-lg font-medium mt-4">
                <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="">AI Agent Architect</span>
                </NavLink>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => `flex items-center gap-4 rounded-xl px-3 py-2 ${isActive ? 'bg-muted text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
                    end={link.to === '/'}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-slate-100 dark:bg-slate-800">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t p-4 text-center text-xs text-muted-foreground bg-slate-50 dark:bg-slate-900">
          {new Date().getFullYear()} AI Agent Architect. All rights reserved.
          <NavLink to="/privacy" className="ml-2 hover:text-primary">Privacy</NavLink>
          <NavLink to="/terms" className="ml-2 hover:text-primary">Terms</NavLink>
        </footer>
      </div>

      {/* Right Sidebar - Hidden on mobile and medium screens */}
      <aside className="hidden lg:flex lg:flex-col gap-4 border-l border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4">
        <h2 className="font-semibold border-b pb-2">Context / Details</h2>
        <div className="text-sm text-muted-foreground flex-1 overflow-auto">
          <p>Details relevant to the current page or selected item will appear here.</p>
        </div>
      </aside>
    </div>
  );
};

export default Layout;