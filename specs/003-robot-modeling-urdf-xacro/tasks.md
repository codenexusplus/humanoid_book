# Tasks: Chapter 3: The Digital Twin (Modeling the Humanoid Structure)

**Input**: Design documents from `specs/003-robot-modeling-urdf-xacro/`
**Prerequisites**: spec.md (required), research.md, data-model.md, quickstart.md

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

- [X] T001 Create chapter markdown file `my-website/docs/robot-modeling-urdf-xacro.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T002 Add Docusaurus YAML frontmatter (id, title, sidebar_position) to `my-website/docs/robot-modeling-urdf-xacro.md`
- [X] T003 Add "Course Mapping" section to `my-website/docs/robot-modeling-urdf-xacro.md`
- [X] T004 Add "Learning Outcomes" section with bulleted list to `my-website/docs/robot-modeling-urdf-xacro.md`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Reading the chapter (Priority: P1) 🎯 MVP

**Goal**: A student can read the core content of the chapter to understand how to model humanoid structures using URDF/XACRO.

**Independent Test**: The generated markdown file can be rendered by Docusaurus, and its content covers the key concepts of URDF/XACRO.

### Implementation for User Story 1

- [X] T005 [US1] Write section "3.1 Introduction to the Unified Robot Description Format (URDF)" covering URDF, XML structure, links, and joints to `my-website/docs/robot-modeling-urdf-xacro.md`
- [X] T006 [US1] Write section "3.2 URDF Links: The Building Blocks" covering visual properties to `my-website/docs/robot-modeling-urdf-xacro.md`
- [X] T007 [US1] Explain XACRO for modularity and reusability to `my-website/docs/robot-modeling-urdf-xacro.md`
- [X] T008 [US1] Explain Kinematic and Dynamic Tags, Joint States to `my-website/docs/robot-modeling-urdf-xacro.md`
- [X] T009 [US1] Ensure total word count is approximately 2800 words in `my-website/docs/robot-modeling-urdf-xacro.md`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Answering review questions (Priority: P2)

**Goal**: A student can use review questions to self-assess their understanding of the chapter.

**Independent Test**: Review questions are present at the end of the chapter and are answerable from the chapter's content.

### Implementation for User Story 2

- [X] T010 [US2] Add "Review Questions" section with 3-5 technical questions to `my-website/docs/robot-modeling-urdf-xacro.md`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Visualizing the robot in RViz (Priority: P1)

**Goal**: A student can visualize the robot model in RViz using provided URDF/XACRO files.

**Independent Test**: URDF/XACRO files are provided and can be loaded into RViz to display the robot model correctly.

### Implementation for User Story 3

- [X] T011 [US3] Include XML/URDF/XACRO code examples for defining links, joints, and kinematic chains in `my-website/docs/robot-modeling-urdf-xacro.md`
- [X] T012 [US3] Provide instructions for visualizing the robot model in RViz using the provided files in `my-website/docs/robot-modeling-urdf-xacro.md`
- [X] T013 [US3] Ensure code examples are correct and runnable for RViz visualization in `my-website/docs/robot-modeling-urdf-xacro.md`

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T014 Review chapter content for accuracy and clarity in `my-website/docs/robot-modeling-urdf-xacro.md`
- [X] T015 Final check against project constitution and `specs/003-robot-modeling-urdf-xacro/spec.md`

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
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

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
# Launch all tests for User Story 1 together (if tests requested):
# Not applicable for this chapter

# Launch all models for User Story 1 together:
# Not applicable for this chapter
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
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
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
