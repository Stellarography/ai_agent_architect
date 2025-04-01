import React from 'react';
import AgentList from '../components/AgentList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import  { ThemeToggle } from '@/components/ui/theme-toggle';
import { useGetAgentsQuery } from '../services/agentApiSlice';
<services></services>

const AgentManagementPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
        {/* Header with Navigation */}
        <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-15 items-center">
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end"> 
                <ThemeToggle />
            </div>
        </div>
        </header>

        {/* Main Content */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Agent Management</h1>
        <p className="text-muted-foreground">Create and manage your AI agents</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Agents</CardTitle>
          <CardDescription>
            View and manage all your AI agents. Add new agents or modify existing ones.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AgentList />
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentManagementPage;

