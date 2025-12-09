# Data Model: Theming & Custom UI Layer

This feature primarily involves front-end UI components and styling, therefore the "data model" focuses on the structure and properties of these elements rather than traditional backend data entities.

## 1. Custom Component Props

The custom React/MDX components will accept various props to control their content, appearance, and behavior.

### 1.1 AlertBlock, TipBlock, HardwareBlock

These components will likely share a similar interface for their core content.

*   **`type` (string, optional)**: Categorization for styling (e.g., 'warning', 'info', 'critical' for `AlertBlock`).
*   **`title` (string, optional)**: A title for the block.
*   **`children` (ReactNode, required)**: The main content of the block.

### 1.2 ExerciseBlock

*   **`title` (string, optional)**: Title of the exercise.
*   **`children` (ReactNode, required)**: The problem statement and instructions for the exercise.
*   **`solution` (ReactNode, optional)**: The hidden solution content, revealed by a toggle.

### 1.3 ArchitectureDiagram

*   **`src` (string, required)**: Path to the diagram image (e.g., SVG, PNG).
*   **`alt` (string, required)**: Alternative text for accessibility.
*   **`annotations` (array of objects, optional)**:
    *   **`text` (string, required)**: The annotation text.
    *   **`position` (object, optional)**: `x`, `y` coordinates or CSS properties for placement.
*   **`responsive` (boolean, optional)**: Whether the diagram should be responsive (defaults to true).

### 1.4 CodeAnnotation

This will likely involve enhancing existing Docusaurus code blocks.

*   **`title` (string, optional)**: Title of the code block (Docusaurus built-in).
*   **`highlights` (string, optional)**: Comma-separated line numbers or ranges to highlight.
*   **`annotationText` (object, optional)**: Key-value pairs where key is line number and value is annotation text.

## 2. Docusaurus Theme Configuration

Customizations applied via `docusaurus.config.js` or theme options.

*   **`colorMode.defaultMode` (string)**: 'light' or 'dark'.
*   **`colorMode.disableSwitch` (boolean)**: Whether to hide the dark mode toggle.
*   **`themeConfig.navbar.title` (string)**: Site title.
*   **`themeConfig.navbar.logo` (object)**: Logo image path and alt text.
*   **`themeConfig.customCss` (string)**: Path to global CSS file.

## 3. Global CSS Variables (`src/css/custom.css`)

These variables will define the custom color palette and typography.

### 3.1 Color Palette

*   `--ifm-color-primary`, `--ifm-color-primary-dark`, etc.
*   `--ifm-color-secondary`, `--ifm-color-accent`
*   `--ifm-background-color`, `--ifm-font-color-base`
*   `--ifm-code-background-color`, `--ifm-code-font-color` (for light/dark mode)

### 3.2 Typography

*   `--ifm-font-family-base`
*   `--ifm-font-family-monospace`
*   `--ifm-h1-font-size`, etc.

## 4. `sidebars.js` Configuration

*   **`items` (array)**: Array of sidebar items.
    *   **`label` (string)**: Display name for the module.
    *   **`type` (string)**: 'category' or 'doc'.
    *   **`customIcon` (string, optional)**: Path to a custom icon for the module.
    *   **`link` (string, optional)**: Link to the module's introduction.