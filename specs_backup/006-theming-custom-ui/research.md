# Research Findings: Theming & Custom UI Layer

## Phase 0: Research for NEEDS CLARIFICATION

### Clarification for "Testing: specific visual regression tools"

*   **Decision**: Implement visual regression testing using Storybook with Chromatic. For broader E2E visual regression, Playwright can be integrated if necessary.
*   **Rationale**: Storybook provides an isolated environment for developing and testing UI components, which is ideal for the custom React/MDX components defined in the spec. Chromatic integrates seamlessly with Storybook to provide automated visual regression testing, flagging unintended UI changes. This approach aligns with component-driven development, ensuring consistent styling and behavior across the Docusaurus site. Playwright offers robust browser automation for end-to-end testing, and its screenshot capabilities can complement Chromatic for full-page layout verification, especially for responsive design and overall page integrity.
*   **Alternatives considered**:
    *   **Pure Playwright/Cypress with image snapshotting**: While capable of visual regression, these tools are primarily geared towards end-to-end functional testing. Setting up component-level isolation for every custom MDX component might be more cumbersome compared to Storybook.
    *   **Manual visual inspection**: Not scalable or reliable for a complex and evolving textbook with custom theming. High risk of missing subtle visual regressions.
    *   **Dedicated Docusaurus plugins for visual testing**: No mature, widely adopted Docusaurus-specific plugins for comprehensive visual regression testing were identified that would supersede general-purpose tools like Storybook/Chromatic or Playwright.

This decision addresses the "NEEDS CLARIFICATION" regarding specific testing tools by proposing a robust solution for visual regression, which is critical for a feature focused on UI and theming.