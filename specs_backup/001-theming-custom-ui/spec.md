# Feature Specification: Theming & Custom UI Layer

**Feature Branch**: `001-theming-custom-ui`  
**Created**: 2025-12-07  
**Status**: Draft  
**Input**: User description: "This is an excellent step. For a textbook aimed at industry practitioners, the visual design and organization are just as critical as the technical accuracy. A well-designed UI significantly improves readability, engagement, and information retention.Since your documentation is based on Docusaurus, I will create the specification for the Theming & Custom UI Layer. This will be designated as Feature 006 as it cuts across all content modules.🎨 Feature Specification: Theming & Custom UI LayerBranch: 006-theming-custom-uiFeature Directory: specs/006-theming-custom-uiFocus: Enhancing Readability, Consistency, and User Experience (UX) across the entire textbook.OverviewThis specification defines the requirements for implementing a beautifully organized and highly readable custom theme for the Physical AI textbook using Docusaurus. The goal is to move beyond the default theme to create a professional, engaging, and industry-grade user experience, ensuring the content is easy to scan, absorb, and navigate.Goals and RationaleElevate Professionalism: Create a visual identity consistent with a high-end technical textbook.Maximize Readability: Utilize custom typography, color palettes, and spacing to reduce cognitive load.Improve Scannability: Introduce custom components and consistent visual cues to help readers quickly find key information (e.g., warnings, exercises, code output).Functional Requirements (FR)1. Theming & Aesthetics (Styling)IDRequirementDetailFR-UI-001Custom Branding: Customize the Docusaurus theme to establish a unique color palette (primary, secondary, and accent colors) that reflects a high-tech, professional aesthetic (e.g., deep blues, grays, or greens).Use global CSS variables (/src/css/custom.css) to override Infima variables.FR-UI-002Dark Mode Refinement: Ensure the custom color palette looks professional and maintains high contrast (WCAG-AA compliance) in both Light and Dark Modes, with distinct styling for code blocks in each mode.Must use the [data-theme='dark'] selector for dark mode overrides.FR-UI-003Custom Typography: Select a clear, modern, and readable font stack (e.g., a technical sans-serif) for body text and a monospace font for all code blocks.Customize font families via CSS and ensure all font files are included/loaded correctly.FR-UI-004Enhanced Table Formatting: Design custom, visually distinct styling for all Markdown tables to ensure data is highly readable and not cramped.Use custom CSS classes for <table> elements.2. Custom Components & Content UX (MDX)IDRequirementDetailFR-UI-005Custom Callout Blocks: Create dedicated, reusable React/MDX components for instructional content, distinct from standard Docusaurus admonitions.AlertBlock (for warnings/critical info); TipBlock (for non-essential tips/efficiency hacks); HardwareBlock (for content specific to a Hardware Path).FR-UI-006Exercise/Checkpoint Component: Create a custom ExerciseBlock component that clearly demarcates assessment tasks. It MUST have a distinct border/background and an optional hidden solution that can be revealed via a toggle button (Swizzled Details component).Must utilize React State for the show/hide functionality.FR-UI-007Architecture Diagram Component: Create a component to embed complex system diagrams (e.g., M1, M2, M3 system architectures). This component MUST be responsive and allow for side-by-side annotations for complex diagrams.Integrate a responsive image wrapper or embed tool (e.g., Mermaid/Excalidraw/Draw.io embed).FR-UI-008Code Annotation Component: Customize code blocks (via swizzling or plugins) to allow for in-line highlighting and/or labels linked to accompanying text explanations.Utilize the Docusaurus title property and custom styles for line highlighting.3. Navigation & Structure (Architecture)IDRequirementDetailFR-UI-009Landing Page (/): Create a custom, visually engaging landing page (not a standard docs page) that introduces the book, the 13-week journey, and the core technologies (ROS 2, Isaac Sim, VLA).Must be a dedicated React page in src/pages/index.js featuring a prominent link to the start of the documentation.FR-UI-010Custom Sidebar Grouping: Customize the sidebars.js to use custom labels and icons for each of the five modules (Intro, M1, M2, M3, M4, Capstone) to improve navigational clarity.Use custom options in sidebars.js and CSS for icon placement.FR-UI-011Table of Contents (TOC) Enhancement: Ensure the right-hand TOC is highly visible, sticky, and uses distinct heading levels (H2, H3) to aid navigation within long chapters.Swizzle or customize the TOC component.Success Criteria (SC)IDCriterionTypeSC-UI-001Aesthetic Approval: The final custom theme is reviewed and approved by the content lead as being professional, modern, and distinct from the default Docusaurus theme.QualitativeSC-UI-002Accessibility: All text and custom component backgrounds pass the WCAG 2.1 AA contrast ratio for both Light and Dark modes.Quantitative (Tool verified)SC-UI-003Custom Component Integration: All six custom blocks (AlertBlock, TipBlock, HardwareBlock, ExerciseBlock, Architecture Diagram, Code Annotation) are correctly imported and used at least once in the Introduction Module content.QuantitativeSC-UI-004Responsiveness: The layout, including tables, sidebars, and custom components, is fully responsive and renders cleanly on mobile devices (e.g., viewport width $< 768$px).Qualitative (Manual testing)AssumptionsA-001: Docusaurus's Swizzling functionality will be used where necessary to override default components (e.g., Admonitions, CodeBlock, DocItem/TOC).A-002: The theme will adhere to a modular CSS approach (e.g., CSS Modules) to ensure maintainability and prevent style conflicts.A-003: The core structure will retain the classic Docusaurus two-sidebar layout (Left: Navigation, Right: TOC) for familiarity and technical density."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Textbook Reader Browsing Content (Priority: P1)

As a textbook reader, I want the visual design (colors, typography, spacing) of the entire textbook to be professional, clean, and consistent, so that I can focus on the technical content without visual distractions and have a pleasant reading experience.

**Why this priority**: Core to the entire feature's goal of enhancing readability and professionalism.

**Independent Test**: Can be visually inspected by browsing various pages across the textbook (e.g., introduction, a module chapter, a code example) in both light and dark modes, verifying consistent application of custom branding, typography, and spacing.

**Acceptance Scenarios**:

1.  **Given** I am viewing any page in the textbook in Light Mode, **When** I observe the page, **Then** the custom color palette (primary, secondary, accent) is applied, and the chosen font stack is used for body text and monospace font for code blocks.
2.  **Given** I switch to Dark Mode on any page, **When** I observe the page, **Then** the custom color palette and typography are maintained with high contrast, and code blocks have distinct styling.
3.  **Given** I am viewing a Markdown table, **When** I observe the table, **Then** it uses the enhanced, visually distinct formatting.

---

### User Story 2 - Author Creating Content with Custom Blocks (Priority: P1)

As an author, I want to use custom content blocks (Alert, Tip, Hardware, Exercise) that are visually distinct and easy to insert, so that I can effectively highlight important information, provide tips, or delineate assessment tasks for readers.

**Why this priority**: Directly enables authors to create richer, more structured, and engaging educational content.

**Independent Test**: Can be tested by an author inserting each custom block type into an MDX file, rendering the page, and verifying that each block displays correctly with its intended styling and functionality (e.g., solution toggle for ExerciseBlock).

**Acceptance Scenarios**:

1.  **Given** I am an author editing an MDX file, **When** I insert an `<AlertBlock>`, `<TipBlock>`, or `<HardwareBlock>`, **Then** it renders with its specified distinct visual style.
2.  **Given** I am an author editing an MDX file, **When** I insert an `<ExerciseBlock>` with a hidden solution, **Then** it renders with a distinct border/background, and a toggle button is present to reveal the solution.
3.  **Given** an `<ExerciseBlock>` with a hidden solution is displayed, **When** I click the toggle button, **Then** the hidden solution is revealed.

---

### User Story 3 - Reader Navigating Complex Information (Priority: P2)

As a reader, I want clear and intuitive navigation (sidebar, TOC) and the ability to view complex diagrams easily, so that I can quickly find relevant sections and understand intricate technical concepts.

**Why this priority**: Important for the overall usability and learnability of the textbook, especially given its technical nature.

**Independent Test**: Can be tested by navigating through the sidebar, observing the landing page, and interacting with embedded diagrams on various devices to ensure responsiveness and clarity.

**Acceptance Scenarios**:

1.  **Given** I visit the textbook's root URL, **When** the page loads, **Then** I see a custom, visually engaging landing page that introduces the book and links to the documentation.
2.  **Given** I am on any documentation page, **When** I view the left sidebar, **Then** the modules are clearly grouped with custom labels and icons, improving navigational clarity.
3.  **Given** I am on a long chapter page, **When** I view the right-hand Table of Contents, **Then** it is highly visible, sticky, and uses distinct heading levels (H2, H3).
4.  **Given** I am viewing a page with an embedded architecture diagram, **When** I view it on a mobile device, **Then** the diagram is responsive and retains readability.

---

### Edge Cases

-   What happens if an author attempts to use a custom component without importing it?
-   How do custom styles interact with Docusaurus updates or plugin styles?
-   What is the behavior for users with accessibility needs beyond WCAG-AA contrast (e.g., screen readers)?
-   How does the site perform on very old or niche browsers?

## Requirements *(mandatory)*

### Functional Requirements

1.  **Theming & Aesthetics (Styling)**
    -   **FR-UI-001: Custom Branding**: Customize the Docusaurus theme to establish a unique color palette (primary, secondary, and accent colors) that reflects a high-tech, professional aesthetic (e.g., deep blues, grays, or greens). (Use global CSS variables `/src/css/custom.css` to override Infima variables.)
    -   **FR-UI-002: Dark Mode Refinement**: Ensure the custom color palette looks professional and maintains high contrast (WCAG-AA compliance) in both Light and Dark Modes, with distinct styling for code blocks in each mode. (Must use the `[data-theme='dark']` selector for dark mode overrides.)
    -   **FR-UI-003: Custom Typography**: Select a clear, modern, and readable font stack (e.g., a technical sans-serif) for body text and a monospace font for all code blocks. (Customize font families via CSS and ensure all font files are included/loaded correctly.)
    -   **FR-UI-004: Enhanced Table Formatting**: Design custom, visually distinct styling for all Markdown tables to ensure data is highly readable and not cramped. (Use custom CSS classes for `<table>` elements.)

2.  **Custom Components & Content UX (MDX)**
    -   **FR-UI-005: Custom Callout Blocks**: Create dedicated, reusable React/MDX components for instructional content, distinct from standard Docusaurus admonitions. (`AlertBlock` (for warnings/critical info); `TipBlock` (for non-essential tips/efficiency hacks); `HardwareBlock` (for content specific to a Hardware Path).)
    -   **FR-UI-006: Exercise/Checkpoint Component**: Create a custom `ExerciseBlock` component that clearly demarcates assessment tasks. It MUST have a distinct border/background and an optional hidden solution that can be revealed via a toggle button (Swizzled Details component). (Must utilize React State for the show/hide functionality.)
    -   **FR-UI-007: Architecture Diagram Component**: Create a component to embed complex system diagrams (e.g., M1, M2, M3 system architectures). This component MUST be responsive and allow for side-by-side annotations for complex diagrams. (Integrate a responsive image wrapper or embed tool (e.g., Mermaid/Excalidraw/Draw.io embed).)
    -   **FR-UI-008: Code Annotation Component**: Customize code blocks (via swizzling or plugins) to allow for in-line highlighting and/or labels linked to accompanying text explanations. (Utilize the Docusaurus title property and custom styles for line highlighting.)

3.  **Navigation & Structure (Architecture)**
    -   **FR-UI-009: Landing Page (/)**: Create a custom, visually engaging landing page (not a standard docs page) that introduces the book, the 13-week journey, and the core technologies (ROS 2, Isaac Sim, VLA). (Must be a dedicated React page in `src/pages/index.js` featuring a prominent link to the start of the documentation.)
    -   **FR-UI-010: Custom Sidebar Grouping**: Customize the `sidebars.js` to use custom labels and icons for each of the five modules (Intro, M1, M2, M3, M4, Capstone) to improve navigational clarity. (Use custom options in `sidebars.js` and CSS for icon placement.)
    -   **FR-UI-011: Table of Contents (TOC) Enhancement**: Ensure the right-hand TOC is highly visible, sticky, and uses distinct heading levels (H2, H3) to aid navigation within long chapters. (Swizzle or customize the TOC component.)

### Key Entities

-   **Docusaurus Theme**: The overarching visual and structural framework of the documentation site.
-   **Color Palette**: A defined set of primary, secondary, and accent colors used throughout the UI.
-   **Typography**: The selection and styling of fonts for various text elements (body, headings, code).
-   **Custom Components**: Reusable React/MDX components (e.g., AlertBlock, ExerciseBlock) to enhance content presentation.
-   **Navigation Structure**: The organization of the sidebar and Table of Contents for easy content discovery.

## Success Criteria *(mandatory)*

### Measurable Outcomes

-   **SC-UI-001: Aesthetic Approval**: The final custom theme is reviewed and approved by the content lead as being professional, modern, and distinct from the default Docusaurus theme. (Qualitative)
-   **SC-UI-002: Accessibility**: All text and custom component backgrounds pass the WCAG 2.1 AA contrast ratio for both Light and Dark modes. (Quantitative - Tool verified)
-   **SC-UI-003: Custom Component Integration**: All six custom blocks (AlertBlock, TipBlock, HardwareBlock, ExerciseBlock, Architecture Diagram, Code Annotation) are correctly imported and used at least once in the Introduction Module content. (Quantitative)
-   **SC-UI-004: Responsiveness**: The layout, including tables, sidebars, and custom components, is fully responsive and renders cleanly on mobile devices (e.g., viewport width < 768px). (Qualitative - Manual testing)

## Assumptions

-   **A-001**: Docusaurus's Swizzling functionality will be used where necessary to override default components (e.g., Admonitions, CodeBlock, DocItem/TOC).
-   **A-002**: The theme will adhere to a modular CSS approach (e.g., CSS Modules) to ensure maintainability and prevent style conflicts.
-   **A-003**: The core structure will retain the classic Docusaurus two-sidebar layout (Left: Navigation, Right: TOC) for familiarity and technical density.