# AI Agent Architect

A comprehensive platform for designing, managing, and monitoring AI agents and their workflows.

## Features

### Agent Management
- Full CRUD operations for AI agents
- Status tracking and configuration management
- Real-time agent status indicators
- Intuitive form-based agent creation and editing

### Workflow Design
- Visual workflow designer
- Workflow version management
- Status tracking (draft, active, archived)
- Component-based workflow assembly

### Execution Monitoring
- Real-time system status dashboard
- Performance metrics visualization
- Error logging and acknowledgment
- Component-level health monitoring

## Technical Stack

<div class="grid grid-cols-3 gap-4">
  <div>
    **Core Technologies**
    - React
    - TypeScript
    - Vite
    - Tailwind CSS
    - Shadcn UI
  </div>
  <div>
    **State Management**
    - Redux Toolkit
    - RTK Query
    - React Query
  </div>
  <div>
    **Testing & Quality**
    - Jest
    - React Testing Library
    - Cypress
    - ESLint
    - Prettier
  </div>
</div>

## Theme System

### Features
- System preference detection
- Local storage persistence
- Real-time theme switching
- CSS variable-based theming

### Implementation
- Shadcn UI integration
- CSS variable customization
- Dark mode class toggle
- Theme context propagation

## Project Structure

```
src/
├── components/          # Shared UI components
│   ├── ui/             # Shadcn UI components
│   └── Layout.tsx      # App layout wrapper
├── features/           # Feature modules
│   ├── agent-management/
│   ├── workflow-design/
│   └── execution-monitoring/
├── lib/               # Utility functions
├── store/            # Redux store config
└── styles/           # Global styles
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn
   ```
3. Start development server:
   ```bash
   yarn dev
   ```

## Development Guidelines

### Component Development
- Use Shadcn UI components when available
- Follow Tailwind CSS patterns
- Maintain dark mode compatibility
- Implement responsive designs

### State Management
- Use RTK Query for API calls
- Implement proper cache invalidation
- Type all state interfaces
- Use typed Redux hooks

### Styling
- Use Tailwind utility classes
- Follow CSS variable theme system
- Maintain responsive layouts
- Support dark/light modes

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines and contribution workflow.
