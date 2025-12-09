---
id: 002
title: Theming & Custom UI Layer Task Generation
stage: tasks
date: 2025-12-07
surface: agent
model: gemini-1.5-flash
feature: 006-theming-custom-ui
branch: 006-theming-custom-ui
user: batool1
command: /sp.tasks This is an excellent step. For a textbook aimed at industry practitioners, the visual design and organization are just as critical as the technical accuracy. A well-designed UI significantly improves readability, engagement, and information retention.Since your documentation is based on Docusaurus, I will create the specification for the Theming & Custom UI Layer. This will be designated as Feature 006 as it cuts across all content modules.🎨 Feature Specification: Theming & Custom UI LayerBranch: 006-theming-custom-uiFeature Directory: specs/006-theming-custom-uiFocus: Enhancing Readability, Consistency, and User Experience (UX) across the entire textbook.OverviewThis specification defines the requirements for implementing a beautifully organized and highly readable custom theme for the Physical AI textbook using Docusaurus. The goal is to move beyond the default theme to create a professional, engaging, and industry-grade user experience, ensuring the content is easy to scan, absorb, and navigate.Goals and RationaleElevate Professionalism: Create a visual identity consistent with a high-end technical textbook.Maximize Readability: Utilize custom typography, color palettes, and spacing to reduce cognitive load.Improve Scannability: Introduce custom components and consistent visual cues to help readers quickly find key information (e.g., warnings, exercises, code output).Functional Requirements (FR)1. Theming & Aesthetics (Styling)IDRequirementDetailFR-UI-001Custom Branding: Customize the Docusaurus theme to establish a unique color palette (primary, secondary, and accent colors) that reflects a high-tech, professional aesthetic (e.g., deep blues, grays, or greens).Use global CSS variables (/src/css/custom.css) to override Infima variables.FR-UI-002Dark Mode Refinement: Ensure the custom color palette looks professional and maintains high contrast (WCAG-AA compliance) in both Light and Dark Modes, with distinct styling for code blocks in each mode.Must use the [data-theme='dark'] selector for dark mode overrides.FR-UI-003Custom Typography: Select a clear, modern, and readable font stack (e.g., a technical sans-serif) for body text and a monospace font for all code blocks.Customize font families via CSS and ensure all font files are included/loaded correctly.FR-UI-004Enhanced Table Formatting: Design custom, visually distinct styling for all Markdown tables to ensure data is highly readable and not cramped.Use custom CSS classes for `<table>` elements.2. Custom Components & Content UX (MDX)IDRequirementDetailFR-UI-005Custom Callout Blocks: Create dedicated, reusable React/MDX components for instructional content, distinct from standard Docusaurus admonitions.AlertBlock (for warnings/critical info); TipBlock (for non-essential tips/efficiency hacks); HardwareBlock (for content specific to a Hardware Path).FR-UI-006Exercise/Checkpoint Component: Create a custom ExerciseBlock component that clearly demarcates assessment tasks. It MUST have a distinct border/background and an optional hidden solution that can be revealed via a toggle button (Swizzled Details component).Must utilize React State for the show/hide functionality.FR-UI-007Architecture Diagram Component: Create a component to embed complex system diagrams (e.g., M1, M2, M3 system architectures). This component MUST be responsive and allow for side-by-side annotations for complex diagrams.Integrate a responsive image wrapper or embed tool (e.g., Mermaid/Excalidraw/Draw.io embed).FR-UI-008Code Annotation Component: Customize code blocks (via swizzling or plugins) to allow for in-line highlighting and/or labels linked to accompanying text explanations.Utilize the Docusaurus title property and custom styles for line highlighting.3. Navigation & Structure (Architecture)IDRequirementDetailFR-UI-009Landing Page (/): Create a custom, visually engaging landing page (not a standard docs page) that introduces the book, the 13-week journey, and the core technologies (ROS 2, Isaac Sim, VLA).Must be a dedicated React page in `src/pages/index.js` featuring a prominent link to the start of the documentation.FR-UI-010Custom Sidebar Grouping: Customize the `sidebars.js` to use custom labels and icons for each of the five modules (Intro, M1, M2, M3, M4, Capstone) to improve navigational clarity.Use custom options in `sidebars.js` and CSS for icon placement.FR-UI-011Table of Contents (TOC) Enhancement: Ensure the right-hand TOC is highly visible, sticky, and uses distinct heading levels (H2, H3) to aid navigation within long chapters.Swizzle or customize the TOC component.Success Criteria (SC)IDCriterionTypeSC-UI-001Aesthetic Approval: The final custom theme is reviewed and approved by the content lead as being professional, modern, and distinct from the default Docusaurus theme.QualitativeSC-UI-002Accessibility: All text and custom component backgrounds pass the WCAG 2.1 AA contrast ratio for both Light and Dark modes.Quantitative (Tool verified)SC-UI-003Custom Component Integration: All six custom blocks (AlertBlock, TipBlock, HardwareBlock, ExerciseBlock, Architecture Diagram, Code Annotation) are correctly imported and used at least once in the Introduction Module content.QuantitativeSC-UI-004Responsiveness: The layout, including tables, sidebars, and custom components, is fully responsive and renders cleanly on mobile devices (e.g., viewport width $< 768$px).Qualitative (Manual testing)AssumptionsA-001: Docusaurus's Swizzling functionality will be used where necessary to override default components (e.g., Admonitions, CodeBlock, DocItem/TOC).A-002: The theme will adhere to a modular CSS approach (e.g., CSS Modules) to ensure maintainability and prevent style conflicts.A-003: The core structure will retain the classic Docusaurus two-sidebar layout (Left: Navigation, Right: TOC) for familiarity and technical density.
labels: ["theming", "ui", "docusaurus", "tasks"]
links:
  spec: specs/006-theming-custom-ui/spec.md
  ticket: null
  adr: null
  pr: null
files:
- specs/006-theming-custom-ui/tasks.md
tests:
-
---

## Prompt

---
description: Generate an actionable, dependency-ordered tasks.md for the feature based on available design artifacts.
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. **Setup**: Run `.specify/scripts/powershell/check-prerequisites.ps1 -Json` from repo root and parse FEATURE_DIR and AVAILABLE_DOCS list. All paths must be absolute. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\''m Groot' (or double-quote if possible: "I'm Groot").

2. **Load design documents**: Read from FEATURE_DIR:
   - **Required**: plan.md (tech stack, libraries, structure), spec.md (user stories with priorities)
   - **Optional**: data-model.md (entities), contracts/ (API endpoints), research.md (decisions), quickstart.md (test scenarios)
   - Note: Not all projects have all documents. Generate tasks based on what's available.

3. **Execute task generation workflow**:
   - Load plan.md and extract tech stack, libraries, project structure
   - Load spec.md and extract user stories with their priorities (P1, P2, P3, etc.)
   - If data-model.md exists: Extract entities and map to user stories
   - If contracts/ exists: Map endpoints to user stories
   - If research.md exists: Extract decisions for setup tasks
   - Generate tasks organized by user story (see Task Generation Rules below)
   - Generate dependency graph showing user story completion order
   - Create parallel execution examples per user story
   - Validate task completeness (each user story has all needed tasks, independently testable)

4. **Generate tasks.md**: Use `.specify.specify/templates/tasks-template.md` as structure, fill with:
   - Correct feature name from plan.md
   - Phase 1: Setup tasks (project initialization)
   - Phase 2: Foundational tasks (blocking prerequisites for all user stories)
   - Phase 3+: One phase per user story (in priority order from spec.md)
   - Each phase includes: story goal, independent test criteria, tests (if requested), implementation tasks
   - Final Phase: Polish & cross-cutting concerns
   - All tasks must follow the strict checklist format (see Task Generation Rules below)
   - Clear file paths for each task
   - Dependencies section showing story completion order
   - Parallel execution examples per user story
   - Implementation strategy section (MVP first, incremental delivery)

5. **Report**: Output path to generated tasks.md and summary:
   - Total task count
   - Task count per user story
   - Parallel opportunities identified
   - Independent test criteria for each story
   - Suggested MVP scope (typically just User Story 1)
   - Format validation: Confirm ALL tasks follow the checklist format (checkbox, ID, labels, file paths)

Context for task generation: 

The tasks.md should be immediately executable - each task must be specific enough that an LLM can complete it without additional context.

## Task Generation Rules

**CRITICAL**: Tasks MUST be organized by user story to enable independent implementation and testing.

**Tests are OPTIONAL**: Only generate test tasks if explicitly requested in the feature specification or if user requests TDD approach.

### Checklist Format (REQUIRED)

Every task MUST strictly follow this format:

```text
- [ ] [TaskID] [P?] [Story?] Description with file path
```

**Format Components**:

1. **Checkbox**: ALWAYS start with `- [ ]` (markdown checkbox)
2. **Task ID**: Sequential number (T001, T002, T003...) in execution order
3. **[P] marker**: Include ONLY if task is parallelizable (different files, no dependencies on incomplete tasks)
4. **[Story] label**: REQUIRED for user story phase tasks only
   - Format: [US1], [US2], [US3], etc. (maps to user stories from spec.md)
   - Setup phase: NO story label
   - Foundational phase: NO story label  
   - User Story phases: MUST have story label
   - Polish phase: NO story label
5. **Description**: Clear action with exact file path

**Examples**:

- ✅ CORRECT: `- [ ] T001 Create project structure per implementation plan`
- ✅ CORRECT: `- [ ] T005 [P] Implement authentication middleware in src/middleware/auth.py`
- ✅ CORRECT: `- [ ] T012 [P] [US1] Create User model in src/models/user.py`
- ✅ CORRECT: `- [ ] T014 [US1] Implement UserService in src/services/user_service.py`
- ❌ WRONG: `- [ ] Create User model` (missing ID and Story label)
- ❌ WRONG: `T001 [US1] Create model` (missing checkbox)
- ❌ WRONG: `- [ ] [US1] Create User model` (missing Task ID)
- ❌ WRONG: `- [ ] T001 [US1] Create model` (missing file path)

### Task Organization

1. **From User Stories (spec.md)** - PRIMARY ORGANIZATION:
   - Each user story (P1, P2, P3...) gets its own phase
   - Map all related components to their story:
     - Models needed for that story
     - Services needed for that story
     - Endpoints/UI needed for that story
     - If tests requested: Tests specific to that story
   - Mark story dependencies (most stories should be independent)

2. **From Contracts**:
   - Map each contract/endpoint → to the user story it serves
   - If tests requested: Each contract → contract test task [P] before implementation in that story's phase

3. **From Data Model**:
   - Map each entity to the user story(ies) that need it
   - If entity serves multiple stories: Put in earliest story or Setup phase
   - Relationships → service layer tasks in appropriate story phase

4. **From Setup/Infrastructure**:
   - Shared infrastructure → Setup phase (Phase 1)
   - Foundational/blocking tasks → Foundational phase (Phase 2)
   - Story-specific setup → within that story's phase

### Phase Structure

- **Phase 1**: Setup (project initialization)
- **Phase 2**: Foundational (blocking prerequisites - MUST complete before user stories)
- **Phase 3+**: User Stories in priority order (P1, P2, P3...)
  - Within each story: Tests (if requested) → Models → Services → Endpoints → Integration
  - Each phase should be a complete, independently testable increment
- **Final Phase**: Polish & Cross-Cutting Concerns

---

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage:
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.
