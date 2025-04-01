import React from 'react';
import WorkflowList from '../components/WorkflowList';

const WorkflowDesignerPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Workflow Designer</h1>
      <WorkflowList />
    </div>
  );
};

export default WorkflowDesignerPage;