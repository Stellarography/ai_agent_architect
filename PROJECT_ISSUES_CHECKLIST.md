# Project Issues Checklist
> ⚠️ This checklist is read-only except for the checkboxes. Do not modify the content directly.
> 
> Legend:
> - First checkbox: Issue exists [ ]
> - Second checkbox: Verified as breaking/problematic [!]

Created: [Current Timestamp]

## Dependencies Issues
- [x] [ ] Version compatibility check for React ecosystem:
  - React 19.1.0 and React DOM 19.0.0 version mismatch needs alignment
  - Both versions are valid but need to be in sync
- [x] [ ] Testing library ecosystem:
  - @testing-library/react 16.2.0 is current latest version
  - Test failures may be due to incorrect configuration rather than version
✓ ESLint 9.21.0 configuration is properly set up:
  - Already using flat config format
  - --ext CLI option is a command-line feature, not a configuration issue
  - Current configuration already includes proper TypeScript and React support
  - No breaking changes or required updates needed

## Type Definition Issues
- [ ] [!] @types/react-router-dom version 5.3.3 is outdated compared to react-router-dom ^7.4.1

## TypeScript Configuration Issues
- [ ] [!] tsconfig.json uses a references-based project structure but appears to be missing essential compiler options
- [ ] [!] Path aliases are duplicated in both tsconfig.json and tsconfig.app.json
- [ ] [!] Missing important compiler options in root tsconfig.json:
  - No strict mode configuration at root level
  - No explicit module/target settings
- [ ] [!] Potential bundling issues due to:
  - allowImportingTsExtensions: true without proper build setup
  - moduleResolution: "bundler" might need validation with current Vite version

## Build Tool Issues
- [ ] [!] Tailwind dependencies have incorrect versions:
  - tailwindcss ^4.0.17 (current latest is 3.x.x)
  - @tailwindcss/postcss and @tailwindcss/vite packages don't exist
- [ ] [!] PostCSS version ^8.5.3 doesn't exist (current latest is 8.4.x)

## Vite Configuration Issues
- [ ] [!] Path aliases in vite.config.ts don't fully match tsconfig.json paths
- [ ] [!] Missing HMR configuration for React
✓ Comments indicate removed PostCSS configuration - Documented in docs/tailwind_postcss_conflict.md
- [ ] [!] Build optimization settings not configured

## PostCSS Configuration Issues
✓ Empty postcss.config.cjs is INTENTIONAL:
  - Documented in docs/tailwind_postcss_conflict.md
  - Configuration is handled by @tailwindcss/vite plugin
  - Empty config prevents conflicts with Vite's built-in PostCSS handling
  - This demonstrates the importance of documentation for seemingly "incorrect" configurations

## Documentation Impact Note
✓ The presence of docs/tailwind_postcss_conflict.md demonstrates:
  - Proper documentation of technical decisions
  - Explanation of non-obvious configuration choices
  - Prevention of future "fixes" that could reintroduce problems
  - Value of maintaining documentation for build tool interactions

## Jest Configuration Issues
- [ ] [!] Jest config uses tsconfig.test.json but no verification of its existence/content
- [ ] [!] moduleNameMapper paths don't fully match the path aliases in tsconfig.json
- [ ] [!] Missing coverage configuration despite having coverage script
- [ ] [!] Missing test file naming pattern configuration

## ESLint Configuration Issues
✓ ESLint 9.21.0 configuration is already future-proofed:
  - Using flat config format with proper files pattern: `files: ['**/*.{ts,tsx}']`
  - New --ext CLI option (v9.21.0) is for command-line use without config files
  - Deprecated rules metadata format is handled internally by ESLint
  - Current configuration follows best practices for file extension handling
  - No configuration changes needed for v9.21.0 features

Documentation Note:
✓ Command line usage for non-config file linting:
  ```
  # Example of new --ext usage (when needed):
  npx eslint --no-config-lookup --rule '{"no-unused-vars": "error"}' --ext '.jsx'
  ```
  - This is for cases without config files only
  - Our project uses proper configuration file, so this isn't needed

## Project Structure Concerns
- [ ] [!] Multiple theme-related files that might have overlapping functionality:
  - src/lib/theme-toggle.ts
  - src/components/ui/theme-toggle.tsx
  - src/components/ui/ThemeToggle.tsx
- [ ] [!] Duplicate Home page components:
  - src/pages/Home.tsx
  - src/pages/HomePage.tsx

## Verification Process
1. Check first box [ ] when issue is confirmed to exist
2. Check second box [!] only after verifying that the issue:
   - Breaks the code
   - Negatively affects development
   - Impacts deployment
   - Causes production issues
   - Hampers functionality
   
❗ DO NOT make any changes until both boxes are checked for an issue

## Recommendations (Pending Verification)
1. Update all dependencies to their correct latest stable versions
2. Resolve duplicate theme toggle implementations
3. Consolidate Home page components
4. Update type definitions to match library versions
5. Fix build tool configurations
6. Verify all TypeScript configurations

> 📝 Note: This checklist is protected. Only the checkboxes should be modified. All other content is read-only.

Would you like me to:
1. Begin the verification process for any specific category?
2. Help validate if specific issues are actually problematic?
3. Create a verification plan for testing each issue's impact?

Please let me know how you'd like to proceed with the verification process.