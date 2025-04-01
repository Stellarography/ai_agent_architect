import React, { useState } from 'react';
import { useGetSystemStatusQuery, useGetMetricsQuery, useGetErrorLogsQuery, useAcknowledgeErrorMutation } from '../services/monitoringApiSlice';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { StatusIndicator } from '@/components/ui/status-indicator';

/**
 * MonitoringDashboard Component
 * 
 * Displays real-time system health metrics and error tracking for AI agents and workflows.
 * Provides functionality to acknowledge and clear errors from the system.
 * 
 * Features:
 * - Real-time system status overview
 * - Component-level health monitoring
 * - Error logging and acknowledgment
 * - Performance metrics visualization
 * 
 * @returns {JSX.Element} The monitoring dashboard UI
 */
const MonitoringDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('1h');
  const today = new Date();
  const todayStart = today.toISOString().split('T')[0];
  
  const { data: systemStatus, isLoading: statusLoading } = useGetSystemStatusQuery();
  const { data: metrics } = useGetMetricsQuery({ timeRange });
  const { data: errors } = useGetErrorLogsQuery({ 
    from: todayStart, 
    to: today.toISOString() 
  });
  const [acknowledgeError] = useAcknowledgeErrorMutation();

  if (statusLoading) return <div>Loading system status...</div>;

  const handleAcknowledgeError = async (errorId: string) => {
    try {
      await acknowledgeError(errorId).unwrap();
    } catch (error) {
      console.error('Failed to acknowledge error:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>Current system health and component status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <StatusIndicator 
              status={
                systemStatus?.status === 'healthy' ? 'online' :
                systemStatus?.status === 'degraded' ? 'loading' : 'error'
              } 
            />
            <span className="font-medium">
              {systemStatus?.status.charAt(0).toUpperCase() + systemStatus?.status.slice(1)}
            </span>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {systemStatus?.components.map((component) => (
              <Card key={component.name}>
                <CardHeader>
                  <CardTitle className="text-sm">{component.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <StatusIndicator 
                      status={
                        component.status === 'operational' ? 'online' :
                        component.status === 'issues' ? 'loading' : 'error'
                      } 
                    />
                    <span className="text-sm text-muted-foreground">
                      {component.metrics.cpu && `CPU: ${component.metrics.cpu}%`}
                      {component.metrics.memory && ` | Mem: ${component.metrics.memory}%`}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <div className="flex gap-2">
            {['1h', '24h', '7d'].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics?.map((metric) => (
              <Card key={metric.id}>
                <CardHeader>
                  <CardTitle className="text-sm">{metric.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(metric.timestamp).toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Error Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Error Logs</CardTitle>
          <CardDescription>Recent errors and warnings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {errors?.map((error) => (
              <Alert
                key={error.id}
                variant={error.level === 'error' ? 'destructive' : 'default'}
              >
                <AlertTitle className="flex items-center justify-between">
                  <span>{error.source}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAcknowledgeError(error.id)}
                  >
                    Acknowledge
                  </Button>
                </AlertTitle>
                <AlertDescription>
                  <div>{error.message}</div>
                  <div className="text-xs mt-2">
                    {new Date(error.timestamp).toLocaleString()}
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonitoringDashboard;