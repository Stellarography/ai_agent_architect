/**
 * Redux Store Configuration
 * 
 * This file configures the main Redux store using Redux Toolkit's configureStore.
 * It sets up:
 * - The root reducer combining all feature and API slice reducers
 * - Middleware configuration including RTK Query's middleware
 * - TypeScript types for the store's state and dispatch function
 * 
 * Key Components:
 * - store: The configured Redux store instance
 * - RootState: Type representing the complete state tree
 * - AppDispatch: Typed dispatch function for action creators
 */

import { configureStore } from '@reduxjs/toolkit';
// Import the API slices
import { agentApi } from '../features/agent-management/services/agentApiSlice';
import { workflowApi } from '../features/workflow-design/services/workflowApiSlice';
import { monitoringApi } from '../features/execution-monitoring/services/monitoringApiSlice';
// Import other reducers here if needed

export const store = configureStore({
  reducer: {
    // Add the generated reducers
    [agentApi.reducerPath]: agentApi.reducer,
    [workflowApi.reducerPath]: workflowApi.reducer,
    [monitoringApi.reducerPath]: monitoringApi.reducer,
    // Add other feature slices here later
    // exampleFeature: exampleReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(agentApi.middleware)
      .concat(workflowApi.middleware)
      .concat(monitoringApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks are defined in src/hooks/reduxHooks.ts