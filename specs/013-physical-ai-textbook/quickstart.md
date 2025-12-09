# Quickstart Guide: Physical AI & Humanoid Robotics Textbook Project

**Feature Branch**: `013-physical-ai-textbook`
**Created**: 2025-12-08
**Status**: Draft

This guide provides a quick overview of how to set up and run the Physical AI & Humanoid Robotics Textbook project locally.

## Prerequisites

*   Git
*   Node.js (LTS version, e.g., v18.x or v20.x) and npm/yarn
*   Python (3.9+) and pip/conda
*   Docker (for local database/vector store development, optional)

## Setup Instructions

### 1. Clone the repository

```bash
git clone [repository-url]
cd [repository-name]
git checkout 013-physical-ai-textbook
```

### 2. Frontend Setup (Docusaurus)

Navigate to the `my-website/` directory.

```bash
cd my-website/
npm install
npm start
```
This will start the Docusaurus development server, typically accessible at `http://localhost:3000`.

### 3. Backend Setup (FastAPI)

Navigate to the `backend/` directory.

```bash
cd backend/
python -m venv venv
./venv/Scripts/pip install uvicorn openai qdrant-client fastapi pydantic python-dotenv
```

**Database and Vector Store**:
*   **Neon Serverless Postgres**: Set up a new project on Neon.tech and configure your connection string in a `.env` file for the backend.
*   **Qdrant Cloud Free Tier**: Set up a new cluster on Qdrant Cloud and configure your API key and URL in the `.env` file.

```bash
# Example .env in backend/
DATABASE_URL="postgresql://user:password@host/db"
QDRANT_URL="https://[your-qdrant-cluster].qdrant.tech"
QDRANT_API_KEY="your_api_key"
BETTER_AUTH_API_KEY="your_better_auth_api_key" # Replace with actual BetterAuth key
OPENAI_API_KEY="your_openai_api_key" # For OpenAI Agents/ChatKit SDKs
```

Run the FastAPI application:

```bash
cd backend/
./venv/Scripts/uvicorn src.main:app --reload
```
The backend API will typically be accessible at `http://localhost:8000`.

### 4. Running Tests

**Frontend Tests**:

```bash
cd my-website/
npm test
```

**Backend Tests**:

```bash
cd backend/
./venv/Scripts/pytest
```

## Further Steps

*   Refer to `specs/013-physical-ai-textbook/spec.md` for detailed feature requirements.
*   Refer to `specs/013-physical-ai-textbook/plan.md` for architectural decisions and code structure.
*   Refer to `specs/013-physical-ai-textbook/tasks.md` (once generated) for implementation tasks.
