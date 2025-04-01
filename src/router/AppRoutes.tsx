// src/router/AppRoutes.tsx
/**
 * Application Routing Configuration
 * 
 * This component defines the routing structure for the entire application using React Router.
 * It includes:
 * - BrowserRouter for client-side routing
 * - Suspense for lazy loading and loading states
 * - Layout wrapper for consistent page structure
 * - Route definitions for all major application pages
 */

import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import AgentManagementPage from '../features/agent-management/pages/AgentManagementPage';
import WorkflowDesignerPage from '../features/workflow-design/pages/WorkflowDesignerPage';
import ExecutionMonitoringPage from '../features/execution-monitoring/pages/ExecutionMonitoringPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents" element={<AgentManagementPage />} />
            <Route path="/design" element={<WorkflowDesignerPage />} />
            <Route path="/monitoring" element={<ExecutionMonitoringPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;