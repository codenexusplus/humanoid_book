# Tasks: Physical AI & Humanoid Robotics Textbook

**Input**: Design documents from `/specs/013-physical-ai-textbook/`
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

- [X] T001 Clone the repository and checkout `013-physical-ai-textbook` branch
- [X] T002 Initialize Docusaurus project in `frontend/` (or `my-website/`) if not already done
- [X] T003 Set up Node.js environment and install frontend dependencies in `frontend/package.json`
- [X] T004 Initialize Python project in `backend/` and set up virtual environment
- [X] T005 Configure basic `.gitignore` for frontend and backend
- [X] T006 [P] Configure linting (ESLint, Prettier for JS/TS; Black, Flake8 for Python) and formatting tools

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T007 Create `backend/src/main.py` for FastAPI application entry point
- [X] T008 Set up basic FastAPI application structure in `backend/src/api/`
- [X] T009 Configure local and deployment environment variables for backend (`.env`, etc.)
- [X] T010 Integrate Docusaurus into the `frontend/` (or `my-website/`) structure if it's not already integrated at the root level as per project structure in `plan.md`.

## Phase 3: User Story 1 - AI/Spec-Driven Book Creation and Deployment (Priority: P1) 🎯 MVP

**Goal**: Authors can create Docusaurus-based textbook and deploy it to GitHub Pages.

**Independent Test**: A Docusaurus book is successfully generated locally and can be deployed to a preview GitHub Pages environment.

### Implementation for User Story 1

- [X] T011 Create basic Docusaurus pages and routes for main content in `frontend/src/pages/`
- [X] T012 Define Docusaurus sidebar structure for book modules/chapters in `frontend/sidebars.js` or `sidebars.ts`
- [X] T013 Populate initial content for an example chapter in `docs/` folder
- [X] T014 Configure Docusaurus to build to a deployable static site
- [X] T015 Set up GitHub Actions or similar CI/CD for automated deployment to GitHub Pages

## Phase 4: User Story 2 - Integrated RAG Chatbot for Book Content (Priority: P1)

**Goal**: Readers can interact with an embedded RAG chatbot for book content.

**Independent Test**: The chatbot UI is visible and responds to basic queries from book content, including selected text.

### Implementation for User Story 2

- [X] T016 Define `backend/src/models/rag_models.py` for RAG-related data structures (e.g., query, response)
- [X] T017 Implement `backend/src/services/rag_service.py` for RAG logic using OpenAI Agents/ChatKit SDKs
- [X] T018 Integrate Qdrant client in `backend/src/services/qdrant_client.py` and configure connection to Qdrant Cloud
- [X] T019 Develop API endpoints for chatbot queries in `backend/src/api/chatbot.py`
- [X] T020 Create a process to ingest Docusaurus book content into Qdrant (e.g., a script or FastAPI endpoint for admin)
- [X] T021 Design React component for chatbot UI in `frontend/src/components/Chatbot/Chatbot.js`
- [X] T022 Integrate chatbot UI component into Docusaurus theme or a relevant page in `frontend/src/theme/` or `frontend/src/pages/`
- [X] T023 Implement frontend logic to send user queries to `backend/chatbot/query` and display responses
- [X] T024 Implement frontend logic to send selected text with queries to `backend/chatbot/query-selection`

## Phase 5: User Story 3 - User Signup and Signin with Background Questions (BetterAuth) (Priority: P2)

**Goal**: Users can sign up/sign in, providing background info.

**Independent Test**: Users can successfully register and log in, and their background data is stored.

### Implementation for User Story 3

- [X] T025 Define `backend/src/models/user_models.py` for user data, including background fields
- [X] T026 Implement `backend/src/services/user_service.py` for user management and BetterAuth integration
- [X] T027 Develop API endpoints for user signup (`POST /auth/signup`) and signin (`POST /auth/signin`) in `backend/src/api/auth.py`
- [X] T028 Implement frontend React components for signup and signin forms in `frontend/src/components/Auth/`
- [X] T029 Integrate BetterAuth SDK/API client into frontend for user authentication
- [X] T030 Store user background questions during signup flow

## Phase 6: User Story 4 - Personalized Content in Chapters (Priority: P2)

**Goal**: Logged-in users can personalize chapter content based on their background.

**Independent Test**: A logged-in user can trigger personalization, and content adapts based on their stored background.

### Implementation for User Story 4

- [X] T031 Extend `backend/src/models/user_models.py` to include `personalization_settings`
- [X] T032 Implement `backend/src/services/personalization_service.py` to adapt content based on user background and settings
- [X] T033 Develop API endpoint for `GET /chapter/{chapter_id}/personalize` in `backend/src/api/personalization.py`
- [X] T034 Design and implement a toggle/button for personalization at the start of Docusaurus chapters in `frontend/src/theme/DocItem/`
- [X] T035 Implement frontend logic to fetch personalized content from the backend based on user's action and display it

## Phase 7: User Story 5 - Urdu Content Translation (Priority: P2)

**Goal**: Logged-in users can translate chapter content into Urdu.

**Independent Test**: A logged-in user can trigger translation, and chapter content displays in Urdu.

### Implementation for User Story 5

- [X] T036 Implement `backend/src/services/translation_service.py` to handle content translation to Urdu (integrate with a translation API)
- [X] T037 Develop API endpoint for `GET /chapter/{chapter_id}/translate/ur` in `backend/src/api/translation.py`
- [X] T038 Design and implement a toggle/button for Urdu translation at the start of Docusaurus chapters in `frontend/src/theme/DocItem/`
- [X] T039 Implement frontend logic to fetch Urdu translated content from the backend based on user's action and display it

## Phase 8: Polish & Cross-Cutting Concerns

- [X] T040 Review and refine `quickstart.md` with concrete setup instructions
- [X] T041 Add comprehensive unit and integration tests for backend services and APIs
- [X] T042 Add comprehensive unit tests for custom frontend components and hooks
- [X] T043 Set up E2E tests for core user flows (book creation, chatbot interaction, auth, personalization, translation)
- [X] T044 Optimize Docusaurus build process for performance
- [X] T045 Review and implement security best practices (e.g., input validation, error handling)
- [X] T046 Document API contracts using OpenAPI specification in `specs/013-physical-ai-textbook/contracts/openapi.yaml`
- [X] T047 Update `GEMINI.md` with any new dependencies or architectural decisions made during implementation

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
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 4 (P2)**: Depends on User Story 3 (for logged-in user and background data).
- **User Story 5 (P2)**: Can start after Foundational (Phase 2) - No direct dependencies on other stories but benefits from US1's content.

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, User Stories 1, 2, 3, and 5 can start in parallel (User Story 4 depends on User Story 3).
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

## Implementation Strategy

### MVP First (User Story 1 & 2 Only - Priority 1)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. Complete Phase 4: User Story 2
5. **STOP and VALIDATE**: Test User Stories 1 & 2 independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 (P1) → Test independently → Deploy/Demo
3. Add User Story 2 (P1) → Test independently → Deploy/Demo
4. Add User Story 3 (P2) → Test independently → Deploy/Demo
5. Add User Story 4 (P2) → Test independently → Deploy/Demo
6. Add User Story 5 (P2) → Test independently → Deploy/Demo
7. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: User Story 5
   - Developer E: User Story 4 (after User Story 3 is complete)
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
