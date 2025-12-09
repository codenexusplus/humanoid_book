# Quickstart: Theming & Custom UI Layer

This guide provides a quick overview of how to start using and contributing to the custom theme and UI components.

## 1. Theme Development Environment Setup

1.  **Clone the repository**: If you haven't already, clone the project repository.
2.  **Install dependencies**: Navigate to the project root and run:
    ```bash
    npm install
    # or yarn install
    ```
3.  **Start the Docusaurus development server**:
    ```bash
    npm run start
    # or yarn start
    ```
    This will open a new browser window with the Docusaurus site, and changes to theme files or content will hot-reload.

## 2. Customizing Global Styles

All global CSS variables and theme overrides are located in `src/css/custom.css`.

*   **Light Mode**: Edit the `--ifm-color-*` and `--ifm-font-*` variables directly in `src/css/custom.css`.
*   **Dark Mode**: For dark mode specific overrides, use the `[data-theme='dark']` selector in `src/css/custom.css` to define distinct styles (e.g., `html[data-theme='dark'] { --ifm-color-primary: ...; }`).

## 3. Using Custom Components in MDX

The custom components (e.g., `AlertBlock`, `ExerciseBlock`) are designed to be used directly within your Markdown (`.md` or `.mdx`) files.

### Example: AlertBlock

To use an `AlertBlock` (assuming it's registered correctly in `docusaurus.config.js` or via MDX directives):

```mdx
import AlertBlock from '@site/src/components/AlertBlock';

<AlertBlock type="warning" title="Important Notice">
  This section contains critical information you should be aware of.
</AlertBlock>
```

### Example: ExerciseBlock with Solution

```mdx
import ExerciseBlock from '@site/src/components/ExerciseBlock';

<ExerciseBlock title="Practice Exercise 1">
  What is the capital of France?

  <details>
    <summary>Show Solution</summary>
    Paris
  </details>
</ExerciseBlock>
```

## 4. Swizzling Docusaurus Components

If you need to deeply customize a Docusaurus component, you can "swizzle" it.

1.  **Identify the component**: For example, `DocItem` or `CodeBlock`.
2.  **Run the swizzle command**:
    ```bash
    npm run swizzle @docusaurus/theme-classic DocItem -- --typescript
    # or yarn swizzle @docusaurus/theme-classic DocItem -- --typescript
    ```
    This will copy the component's source code into `src/theme/DocItem`, allowing you to modify it.

## 5. Adding New Custom Components

1.  Create a new React component file (e.g., `MyNewComponent.js`) in `src/components/`.
2.  Develop your component, accepting necessary props.
3.  Import and use it in your `.mdx` files as shown above.