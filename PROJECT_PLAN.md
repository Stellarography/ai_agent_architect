# AI Agent Workflow Architect - Project Plan & Overview

This document outlines the initial setup, architecture, and future development considerations for the AI Agent Workflow Architect application.

## 1. Project Initialization & Core Setup

The project is initialized as a React + TypeScript application using Vite, with Tailwind CSS selected during setup.

**Prerequisites:**

*   Node.js and npm/yarn installed.
*   Project created using `npm create vite@latest my-ai-workflow-app --template react-ts` (or similar) and Tailwind added.

**Initial Setup Steps (Executed via Prompts):**

1.  **Core Directory Structure:**
    *   `public/`: Static assets.
        *   `public/assets/`: Project-specific static assets.
    *   `src/`: Main application source code.
    *   `tests/`: Test files (Jest/RTL, Cypress).
    *   `docs/`: Project documentation (Docusaurus, Markdown).
2.  **`src/` Sub-directory Structure:**
    *   `assets/`: Static assets imported into the app (e.g., SVGs).
    *   `components/`: Shared, reusable UI components (e.g., Button, Layout).
    *   `features/`: Modules for distinct application features (Agent Management, Workflow Design, etc.). Each feature follows a standard internal structure:
        *   `components/`
        *   `hooks/`
        *   `pages/` (Optional, for feature-specific sub-routes)
        *   `services/` (API slices, data fetching logic)
        *   `styles/`
        *   `utils/`
        *   `index.ts` (Barrel exports)
    *   `hooks/`: Shared custom React hooks (e.g., `useAppDispatch`, `useAppSelector`).
    *   `pages/`: Top-level page components used by the main router.
    *   `router/`: Routing configuration (`AppRoutes.tsx`).
    *   `services/`: Shared API interaction logic (if any, most will be in features).
    *   `store/`: Redux state management configuration (`index.ts`, slices).
    *   `styles/`: Global styles (`GlobalStyle.ts`), theming (`theme.ts`, `ThemeProviderComponent.tsx`).
    *   `utils/`: Shared utility functions.
3.  **Core Dependencies Installed:**
    *   `react-router-dom` & `@types/react-router-dom`: For routing.
    *   `@reduxjs/toolkit` & `react-redux`: For state management.
    *   `styled-components` & `@types/styled-components`: For component styling and theming.
4.  **Feature Directory Skeletons Created:**
    *   `src/features/agent-management/`
    *   `src/features/workflow-design/`
    *   `src/features/execution-monitoring/`
    *   (Each with standard sub-directories and `index.ts`)
5.  **Redux Toolkit Store Setup (`src/store/index.ts`):**
    *   Basic store configured using `configureStore`.
    *   Placeholder for feature reducers and RTK Query API slice reducers/middleware.
    *   `RootState` and `AppDispatch` types exported.
6.  **Typed Redux Hooks (`src/hooks/reduxHooks.ts`):**
    *   `useAppDispatch` and `useAppSelector` created for type safety.
7.  **Placeholder Page Components Created:**
    *   `src/pages/HomePage.tsx`
    *   `src/features/agent-management/pages/AgentManagementPage.tsx`
    *   `src/features/workflow-design/pages/WorkflowDesignerPage.tsx`
    *   `src/features/execution-monitoring/pages/ExecutionMonitoringPage.tsx`
    *   `src/pages/NotFoundPage.tsx`
8.  **React Router Setup (`src/router/AppRoutes.tsx`):**
    *   `BrowserRouter`, `Routes`, `Route` configured.
    *   Basic navigation links added (to be replaced by Layout).
    *   Placeholder pages imported and routed.
    *   `Suspense` added for potential lazy loading.
9.  **Styled Components Theming & Global Styles:**
    *   Theme definition (`src/styles/theme.ts`) with `lightTheme` and `darkTheme`.
    *   Global styles (`src/styles/GlobalStyle.ts`) setting base styles using the theme. Includes note on Tailwind/Styled Components strategy.
    *   Theme provider component (`src/styles/ThemeProviderComponent.tsx`) with basic theme toggling logic.
10. **Application Integration (`src/App.tsx`, `src/main.tsx`):**
    *   `App.tsx` wraps the application with `Provider` (Redux), `ThemeProviderComponent` (Styled Components), and `AppRoutes` (Router).
    *   `main.tsx` renders the `App` component within `React.StrictMode` and imports Tailwind's base CSS (`index.css`).
11. **RTK Query API Slice Example (`src/features/agent-management/services/agentApiSlice.ts`):**
    *   Basic API slice created using `createApi` and `fetchBaseQuery`.
    *   Defines `Agent` type, `tagTypes`, and example endpoints (`getAgents`, `getAgentById`).
    *   Auto-generated hooks (`useGetAgentsQuery`, etc.) exported.
    *   Integrated into the Redux store (`src/store/index.ts`) by adding the reducer and middleware.
12. **Reusable Component Example (`src/components/Button.tsx`):**
    *   Basic `Button` component created using `styled-components`.
    *   Includes variants (`primary`, `secondary`), disabled state, and theme integration.
    *   Demonstrates accepting `className` for combining with Tailwind utilities.

## 2. Next Steps & Development Considerations

*   **Flesh out Features:**
    *   Build components within feature directories (e.g., `AgentList`, `WorkflowCanvas`).
    *   Utilize RTK Query hooks for data fetching and display.
    *   Establish patterns (data flow, component structure, tests) in one feature before replicating.
*   **Shared Layout Component:**
    *   Create `src/components/Layout/Layout.tsx` with header, sidebar, content area, footer.
    *   Integrate into `AppRoutes.tsx` to provide consistent structure.
*   **Testing Setup:**
    *   Install and configure Jest + React Testing Library (RTL) for unit/integration tests.
    *   Install and configure Cypress for end-to-end (E2E) tests.
*   **Documentation Setup:**
    *   Initialize Storybook for component library documentation and isolated development/testing.
    *   Initialize Docusaurus (in `docs/`) for overall project documentation.
*   **Styling Strategy:**
    *   Adhere to the defined strategy (Tailwind for utilities/layout, Styled Components for component logic/theming).
    *   Document the strategy clearly in `README.md` or `CONTRIBUTING.md`.
    *   Evaluate if tools like `twin.macro` are needed.
*   **Global UI State:**
    *   If necessary, create Redux slices (e.g., `src/features/ui/uiSlice.ts`) for managing global state like theme preference, notifications, modals, auth status.
*   **Environment Variables:**
    *   Set up `.env` files for configuration (API URLs, keys).
    *   Use `import.meta.env.VITE_...` in code.
    *   Add relevant `.env*` files to `.gitignore`.
*   **Error Handling & Reporting:**
    *   Implement React Error Boundaries (`src/components/ErrorBoundary.tsx`).
    *   Establish consistent API error handling.
    *   Consider integrating a service like Sentry or Rollbar.
*   **Accessibility (A11y):**
    *   Continuously apply best practices: semantic HTML, focus management, text alternatives, ARIA, color contrast.
*   **Linting/Formatting:**
    *   Ensure ESLint and Prettier are configured and used consistently.
    *   Integrate with VS Code settings and potentially pre-commit hooks (Husky/lint-staged).