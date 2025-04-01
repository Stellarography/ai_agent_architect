import React from 'react';
import AgentList from '../components/AgentList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AgentManagementPage: React.FC = () => {
  return (
    <div className="space-y-6">
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

