from fastapi import APIRouter, Depends, HTTPException
from backend.src.models.rag_models import Query, QueryWithSelection, RAGResponse
from backend.src.services.rag_service import RAGService
import os

router = APIRouter()

# Dependency to get RAGService instance
def get_rag_service():
    openai_api_key = os.getenv("OPENAI_API_KEY")
    qdrant_url = os.getenv("QDRANT_URL")
    qdrant_api_key = os.getenv("QDRANT_API_KEY")
    collection_name = os.getenv("QDRANT_COLLECTION_NAME", "textbook_content") # Default collection name

    if not openai_api_key or not qdrant_url or not qdrant_api_key:
        raise HTTPException(status_code=500, detail="RAG service environment variables not configured.")
    
    return RAGService(openai_api_key, qdrant_url, qdrant_api_key, collection_name)


@router.post("/query", response_model=RAGResponse)
async def query_chatbot(query: Query, rag_service: RAGService = Depends(get_rag_service)):
    try:
        response_text = await rag_service.query(query.text)
        return RAGResponse(answer=response_text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/query-selection", response_model=RAGResponse)
async def query_chatbot_with_selection(query: QueryWithSelection, rag_service: RAGService = Depends(get_rag_service)):
    try:
        response_text = await rag_service.query_with_selection(query.text, query.selected_text)
        return RAGResponse(answer=response_text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))