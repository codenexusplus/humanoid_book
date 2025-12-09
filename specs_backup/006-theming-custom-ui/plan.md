# Implementation Plan: Theming & Custom UI Layer

**Branch**: `006-theming-custom-ui` | **Date**: 2025-12-07 | **Spec**: specs/006-theming-custom-ui/spec.md
**Input**: Feature specification from `/specs/006-theming-custom-ui/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement a custom, professional, and highly readable theme for the Physical AI textbook using Docusaurus. This includes custom branding, refined dark mode, typography, enhanced table formatting, and custom React/MDX components for instructional content, exercises, architecture diagrams, and code annotations. The goal is to elevate professionalism, maximize readability, and improve scannability across the entire textbook.

## Technical Context

**Language/Version**: TypeScript/JavaScript (React), Node.js (Docusaurus CLI)
**Primary Dependencies**: React, Docusaurus, Infima
**Storage**: N/A
**Testing**: Jest, React Testing Library, visual regression testing (e.g., Storybook, Chromatic) - NEEDS CLARIFICATION on specific tools.
**Target Platform**: Web browsers (modern)
**Project Type**: Web
**Performance Goals**: Fast initial page load (lighthouse scores >90), smooth user interactions (no visible jank), optimized image loading.
**Constraints**: WCAG 2.1 AA contrast compliance, Docusaurus swizzling functionality for overrides, modular CSS approach (CSS Modules/PostCSS), retention of classic Docusaurus two-sidebar layout.
**Scale/Scope**: Entire Physical AI textbook, spanning multiple modules and content types.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The constitution check will focus on adherence to general software development principles and the specific requirements outlined in the feature specification:
*   **Modularity and Reusability**: All custom components and styling should be designed to be modular and reusable across the Docusaurus site.
*   **Accessibility**: Strict adherence to WCAG 2.1 AA contrast ratio for both Light and Dark modes.
*   **Maintainability**: Use of modular CSS, clear naming conventions, and well-documented components.
*   **Performance**: Ensure the custom theme does not negatively impact site performance; optimized asset loading and efficient rendering are crucial.
*   **Testability**: Custom React components should be unit-testable using standard React testing practices.
*   **Docusaurus Best Practices**: Leverage Docusaurus's swizzling capabilities and plugin architecture appropriately.

## Project Structure

### Documentation (this feature)

```text
specs/006-theming-custom-ui/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
src/
├── css/                   # Global styles and custom CSS variables
│   └── custom.css
├── components/            # Custom React components (e.g., AlertBlock, TipBlock, ExerciseBlock)
│   ├── AlertBlock.js
│   ├── TipBlock.js
│   ├── HardwareBlock.js
│   ├── ExerciseBlock.js
│   ├── ArchitectureDiagram.js
│   └── CodeAnnotation.js
├── pages/                 # Custom landing page (index.js)
│   └── index.js
├── theme/                 # Docusaurus swizzled components
│   ├── Admonition/
│   ├── CodeBlock/
│   ├── DocItem/
│   └── TOC/
└── utils/                 # Utility functions if needed for components
```

**Structure Decision**: The project structure will adapt the default Docusaurus layout, utilizing `src/css` for global styling, `src/components` for new React/MDX components, `src/pages` for the custom landing page, and `src/theme` for swizzled Docusaurus components to ensure maintainability and adherence to Docusaurus conventions.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
