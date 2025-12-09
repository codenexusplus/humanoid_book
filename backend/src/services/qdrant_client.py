from qdrant_client import QdrantClient
import os

def get_qdrant_client():
    qdrant_url = os.getenv("QDRANT_URL")
    qdrant_api_key = os.getenv("QDRANT_API_KEY")
    
    if not qdrant_url or not qdrant_api_key:
        raise ValueError("QDRANT_URL and QDRANT_API_KEY must be set in environment variables.")

    return QdrantClient(url=qdrant_url, api_key=qdrant_api_key)