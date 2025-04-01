import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface WorkflowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: Record<string, any>;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  type?: string;
}

export interface Workflow {
  id: string;
  name: string;
  description?: string;
  status: 'draft' | 'active' | 'archived';
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  createdAt: string;
  updatedAt: string;
}

export const workflowApi = createApi({
  reducerPath: 'workflowApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Workflow'],
  endpoints: (builder) => ({
    getWorkflows: builder.query<Workflow[], void>({
      query: () => 'workflows',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Workflow' as const, id })),
              { type: 'Workflow', id: 'LIST' },
            ]
          : [{ type: 'Workflow', id: 'LIST' }],
    }),

    getWorkflowById: builder.query<Workflow, string>({
      query: (id) => `workflows/${id}`,
      providesTags: (result, error, id) => [{ type: 'Workflow', id }],
    }),

    addWorkflow: builder.mutation<Workflow, Partial<Workflow>>({
      query: (body) => ({
        url: 'workflows',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Workflow', id: 'LIST' }],
    }),

    updateWorkflow: builder.mutation<Workflow, Partial<Workflow> & Pick<Workflow, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `workflows/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Workflow', id }],
    }),

    deleteWorkflow: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `workflows/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Workflow', id }],
    }),
  }),
});

export const {
  useGetWorkflowsQuery,
  useGetWorkflowByIdQuery,
  useAddWorkflowMutation,
  useUpdateWorkflowMutation,
  useDeleteWorkflowMutation,
} = workflowApi;