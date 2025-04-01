# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2025-03-30

### Added
- Implemented complete monitoring dashboard with real-time metrics
- Added workflow management system with CRUD operations
- Integrated RTK Query for agent, workflow, and monitoring APIs
- Enhanced theme system with system preference detection and persistence
- Added toast notifications for user feedback
- Created comprehensive documentation

### Changed
- Unified theme management using Shadcn UI system
- Improved mobile responsiveness in layout
- Consolidated API slices for better state management
- Enhanced error handling and user feedback

### Fixed
- Resolved linting warning (unused eslint-disable) and error (`@typescript-eslint/no-empty-interface`) in `src/styles/theme.ts`
- Removed unused `React` import in `src/App.tsx` flagged by TypeScript (`TS6133`)
- Corrected PostCSS configuration conflict by removing explicit `tailwindcss` and `autoprefixer` plugins
- Fixed theme toggle system to properly sync across components

### Documentation
- Created `docs/tailwind_postcss_conflict.md` with configuration issue resolution
- Added comprehensive README.md with features and development guidelines
- Created IMPLEMENTATION_CHECK.md for tracking project progress
- Added `docs/github_usage.md` with Git/GitHub workflow instructions