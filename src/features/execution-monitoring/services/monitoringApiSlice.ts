import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface MetricData {
  id: string;
  timestamp: string;
  type: 'performance' | 'error' | 'status';
  value: number;
  label: string;
  agentId?: string;
  workflowId?: string;
}

export interface SystemStatus {
  id: string;
  status: 'healthy' | 'degraded' | 'error';
  message?: string;
  lastUpdated: string;
  components: {
    name: string;
    status: 'operational' | 'issues' | 'down';
    metrics: {
      cpu?: number;
      memory?: number;
      latency?: number;
    };
  }[];
}

export interface ErrorLog {
  id: string;
  timestamp: string;
  level: 'error' | 'warning' | 'info';
  message: string;
  source: string;
  stackTrace?: string;
  metadata?: Record<string, any>;
}

export const monitoringApi = createApi({
  reducerPath: 'monitoringApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Metrics', 'Status', 'Errors'],
  endpoints: (builder) => ({
    getMetrics: builder.query<MetricData[], { timeRange: string }>({
      query: ({ timeRange }) => `metrics?timeRange=${timeRange}`,
      providesTags: ['Metrics'],
    }),
    
    getSystemStatus: builder.query<SystemStatus, void>({
      query: () => 'system/status',
      providesTags: ['Status'],
    }),
    
    getErrorLogs: builder.query<ErrorLog[], { from: string; to: string }>({
      query: ({ from, to }) => `errors?from=${from}&to=${to}`,
      providesTags: ['Errors'],
    }),
    
    acknowledgeError: builder.mutation<void, string>({
      query: (errorId) => ({
        url: `errors/${errorId}/acknowledge`,
        method: 'POST',
      }),
      invalidatesTags: ['Errors'],
    }),
  }),
});

export const {
  useGetMetricsQuery,
  useGetSystemStatusQuery,
  useGetErrorLogsQuery,
  useAcknowledgeErrorMutation,
} = monitoringApi;