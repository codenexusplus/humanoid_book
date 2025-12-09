# Contracts: Theming & Custom UI Layer

For the Theming & Custom UI Layer feature, "contracts" primarily refer to the interfaces and expected usage patterns of UI elements and styling configurations, rather than traditional API endpoints.

## 1. React Component Interfaces

The interfaces for custom React/MDX components are detailed in `data-model.md` under "Custom Component Props". These define the expected props, their types, and their intended behavior for each custom block (e.g., `AlertBlock`, `ExerciseBlock`, `ArchitectureDiagram`).

## 2. CSS Variable Contracts

The global CSS variables defined in `src/css/custom.css` (and potentially overridden in `src/css/dark-theme.css`) serve as a contract for styling. These variables provide a consistent and customizable way to manage the site's color palette, typography, and spacing, ensuring that all components adhere to the established visual identity. Refer to `data-model.md` for a list of key CSS variables.

## 3. Docusaurus Configuration Contract

The `docusaurus.config.js` and `sidebars.js` files define the structural and navigational contracts for the site. Changes to these files must adhere to Docusaurus's configuration schema and ensure backward compatibility where possible. Key configuration aspects are outlined in `data-model.md` under "Docusaurus Theme Configuration" and "`sidebars.js` Configuration".