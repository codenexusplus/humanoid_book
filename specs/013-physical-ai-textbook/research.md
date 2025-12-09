# Research Summary: Physical AI & Humanoid Robotics Textbook

**Feature Branch**: `013-physical-ai-textbook`
**Created**: 2025-12-08
**Status**: Completed

## Resolved Clarifications & Technology Choices

### Language/Version Environment

*   **Decision**:
    *   **Python**: Python 3.9+ for the FastAPI backend.
    *   **JavaScript/TypeScript**: Node.js v18.x LTS (or later compatible LTS) for Docusaurus and React development, TypeScript 5.x.
    *   **React**: React 19 (as specified in `my-website/package.json`).
    *   **Docusaurus**: Docusaurus 3.x (as specified in `my-website/package.json`).
*   **Rationale**: These versions ensure compatibility with the specified libraries and frameworks (FastAPI, Docusaurus v3, React 19) and align with current stable release practices, providing a robust and well-supported development environment.
*   **Alternatives Considered**:
    *   Older Python versions: Rejected due to potential compatibility issues with newer libraries and lack of modern features.
    *   Other Node.js versions: LTS versions are preferred for stability and long-term support.

### Testing Frameworks and Coverage Goals

*   **Decision**:
    *   **Frontend (Docusaurus/React)**: Jest with React Testing Library.
    *   **Backend (FastAPI)**: Pytest.
    *   **Coverage Goals**: 80% unit test coverage for custom frontend components and utilities; 80% unit and integration test coverage for backend API endpoints and business logic.
*   **Rationale**: Jest and React Testing Library are standard, widely-adopted, and effective tools for React component testing, focusing on user-centric interactions. Pytest is the de-facto standard for Python testing, known for its simplicity and extensibility. 80% coverage is a common industry benchmark for maintaining code quality without impeding development speed.
*   **Alternatives Considered**:
    *   Cypress/Playwright for E2E: While valuable, these are considered for a later stage to keep the initial plan focused.
    *   Unittest (Python built-in): Pytest offers a more modern and feature-rich experience.

## Best Practices & Integration Patterns

### RAG Chatbot Integration

*   **Decision**: Utilize OpenAI Agents/ChatKit SDKs on the backend (FastAPI) for orchestrating the RAG workflow. Neon Serverless Postgres will store metadata and potentially user-specific RAG history, while Qdrant Cloud Free Tier will serve as the vector store for book content embeddings.
*   **Rationale**: This leverages specialized tools for each part of the RAG pipeline. OpenAI SDKs simplify interaction with LLMs, FastAPI provides a performant API layer, Neon offers scalable and cost-effective database solution, and Qdrant is optimized for vector search.
*   **Alternatives Considered**: Other vector databases (e.g., Pinecone, Chroma): Qdrant's free tier and capabilities align well with the project's initial scope and budget.

### User Authentication and Personalization

*   **Decision**: Implement BetterAuth for user signup and signin. User background information and personalization settings will be stored in Neon Serverless Postgres, linked to the user's profile.
*   **Rationale**: BetterAuth is a specified requirement. Storing user-specific data in Neon Postgres ensures persistence and allows for querying and updating personalization preferences.
*   **Alternatives Considered**: Custom authentication implementation: Rejected as BetterAuth is explicitly required.

### Content Translation

*   **Decision**: Implement translation to Urdu via an API call from the FastAPI backend. The translation service can be an external provider or a local model, depending on chosen approach during implementation. Initial approach will be to integrate with a free/low-cost translation API.
*   **Rationale**: Offloading translation to a dedicated service is efficient and scalable. Integrating through the backend allows for better control and potential caching.
*   **Alternatives Considered**: Frontend-only translation: Rejected to avoid exposing API keys and centralize translation logic.

