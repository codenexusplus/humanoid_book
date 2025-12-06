# Tasks: Chapter 1: The Foundation of Embodied Intelligence

**Input**: Design documents from `specs/001-foundation-embodied-intelligence/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

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

- [X] T001 Create chapter markdown file `my-website/docs/001-foundation-embodied-intelligence.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T002 Add Docusaurus YAML frontmatter (id, title, sidebar_position) to `my-website/docs/001-foundation-embodied-intelligence.md`
- [X] T003 Add "Course Mapping" section with module and weeks to `my-website/docs/001-foundation-embodied-intelligence.md`
- [X] T004 Add "Learning Outcomes" section with bulleted list to `my-website/docs/001-foundation-embodied-intelligence.md`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Reading the chapter (Priority: P1) 🎯 MVP

**Goal**: A student can read the core content of the chapter to understand fundamental concepts.

**Independent Test**: The generated markdown file can be rendered by Docusaurus, and its content covers the key concepts of Embodied Intelligence.

### Implementation for User Story 1

- [X] T005 [US1] Write section "1.1 From Digital AI to Embodied Intelligence" covering differentiation and embodiment to `my-website/docs/001-foundation-embodied-intelligence.md`
- [X] T006 [US1] Write section "1.2 Physical Laws as System Constraints" covering kinematics and dynamics to `my-website/docs/001-foundation-embodied-intelligence.md`
- [X] T007 [US1] Write section "1.3 Sensor Systems: The Data Backbone of Perception" covering vision, ranging, inertial, and force sensors to `my-website/docs/001-foundation-embodied-intelligence.md`
- [X] T008 [US1] Write section "1.4 The Humanoid Robotics Landscape and Sim-to-Real" covering simulation necessity to `my-website/docs/001-foundation-embodied-intelligence.md`
- [X] T009 [US1] Write section "1.5 Hardware Connection: The Compute Pipeline" covering hardware stack to `my-website/docs/001-foundation-embodied-intelligence.md`
- [X] T010 [US1] Ensure total word count is approximately 2500 words in `my-website/docs/001-foundation-embodied-intelligence.md`
- [X] T011 [US1] Verify the chapter is written in a conceptual and theoretical style in `my-website/docs/001-foundation-embodied-intelligence.md`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Answering review questions (Priority: P2)

**Goal**: A student can use review questions to self-assess their understanding of the chapter.

**Independent Test**: Review questions are present at the end of the chapter and are answerable from the chapter's content.

### Implementation for User Story 2

- [X] T012 [US2] Add "Review Questions" section with 3-5 questions to `my-website/docs/001-foundation-embodied-intelligence.md`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T013 Review chapter content for accuracy and clarity in `my-website/docs/001-foundation-embodied-intelligence.md`
- [X] T014 Final check against project constitution and `specs/001-foundation-embodied-intelligence/spec.md`

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
