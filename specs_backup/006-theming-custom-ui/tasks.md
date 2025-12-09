---
description: "Task list for feature 006-theming-custom-ui implementation"
---

# Tasks: 006-theming-custom-ui

**Input**: Design documents from `/specs/006-theming-custom-ui/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create `src/css/custom.css` for global styles.
- [x] T002 Create `src/components/` for custom React/MDX components.
- [x] T003 Create `src/pages/` for custom landing page.
- [x] T004 Create `src/theme/` for Docusaurus swizzled components.
- [x] T005 Create `src/utils/` for utility functions.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Define custom color palette (primary, secondary, accent) in `src/css/custom.css`.
- [x] T007 Override Infima variables in `src/css/custom.css` to apply custom branding.
- [x] T008 Implement base styles for typography, headings, paragraphs in `src/css/custom.css`.
- [x] T009 Ensure WCAG 2.1 AA contrast compliance for light mode in `src/css/custom.css`.
- [x] T010 Ensure WCAG 2.1 AA contrast compliance for dark mode in `src/css/custom.css`.
- [x] T011 Implement distinct styling for code blocks in light mode in `src/css/custom.css`.
- [x] T012 Implement distinct styling for code blocks in dark mode in `src/css/custom.css`.

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Extend Docusaurus Markdown Capabilities (Priority: P1) 🎯 MVP

**Goal**: Enhance instructional content with custom MDX components.

**Independent Test**: Verify each custom MDX component renders correctly and accepts props as expected.

### Implementation for User Story 1

- [x] T013 [P] [US1] Create `AlertBlock.js` component in `src/components/AlertBlock.js`.
- [x] T014 [P] [US1] Create `TipBlock.js` component in `src/components/TipBlock.js`.
- [x] T015 [P] [US1] Create `HardwareBlock.js` component in `src/components/HardwareBlock.js`.
- [x] T016 [P] [US1] Create `ExerciseBlock.js` component in `src/components/ExerciseBlock.js`.
- [x] T017 [P] [US1] Create `ArchitectureDiagram.js` component in `src/components/ArchitectureDiagram.js`.
- [x] T018 [P] [US1] Create `CodeAnnotation.js` component in `src/components/CodeAnnotation.js`.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Customize Docusaurus Core UI (Priority: P1)

**Goal**: Refine key Docusaurus UI elements for improved UX by swizzling.

**Independent Test**: Verify swizzled Docusaurus components visually match design and retain original functionality.

### Implementation for User Story 2

- [x] T019 [P] [US2] Swizzle and customize `Admonition` component in `src/theme/Admonition/index.js`.
- [x] T020 [P] [US2] Swizzle and customize `CodeBlock` component in `src/theme/CodeBlock/index.js`.
- [x] T021 [P] [US2] Swizzle and customize `DocItem` component in `src/theme/DocItem/index.js`.
- [x] T022 [P] [US2] Swizzle and customize `TOC` component in `src/theme/TOC/index.js`.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T023 Implement custom landing page `src/pages/index.js`.
- [x] T024 Review overall UI/UX for consistency and polish.
- [x] T025 Performance optimization (e.g., image loading, Lighthouse scores).
- [x] T026 Accessibility audit and final WCAG 2.1 AA verification.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all components for User Story 1 together:
Task: "Create AlertBlock.js component in src/components/AlertBlock.js"
Task: "Create TipBlock.js component in src/components/TipBlock.js"
Task: "Create HardwareBlock.js component in src/components/HardwareBlock.js"
Task: "Create ExerciseBlock.js component in src/components/ExerciseBlock.js"
Task: "Create ArchitectureDiagram.js component in src/components/ArchitectureDiagram.js"
Task: "Create CodeAnnotation.js component in src/components/CodeAnnotation.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence