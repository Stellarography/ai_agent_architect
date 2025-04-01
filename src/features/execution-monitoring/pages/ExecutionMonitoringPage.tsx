import React from 'react';
import MonitoringDashboard from '../components/MonitoringDashboard';

const ExecutionMonitoringPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Execution Monitoring</h1>
      <MonitoringDashboard />
    </div>
  );
};

export default ExecutionMonitoringPage;