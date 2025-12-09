import os
from qdrant_client import QdrantClient, models
from openai import OpenAI
import asyncio

# Assuming Docusaurus content is available as markdown files
# This is a simplified example, actual ingestion would involve parsing markdown,
# chunking text, generating embeddings, and uploading to Qdrant.

async def ingest_content_to_qdrant(
    content_path: str, # Path to your Docusaurus docs folder
    qdrant_url: str,
    qdrant_api_key: str,
    openai_api_key: str,
    collection_name: str = "textbook_content"
):
    print(f"Ingesting content from {content_path} to Qdrant collection {collection_name}...")

    openai_client = OpenAI(api_key=openai_api_key)
    qdrant_client = QdrantClient(url=qdrant_url, api_key=qdrant_api_key)

    # Ensure collection exists
    qdrant_client.recreate_collection(
        collection_name=collection_name,
        vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE), # Assuming OpenAI embeddings
    )

    # Placeholder for actual content loading and embedding
    # In a real scenario, you'd iterate through markdown files, read, chunk, embed, and upload.
    sample_content = [
        {"text": "Introduction to Physical AI and embodied intelligence.", "metadata": {"chapter": "Intro"}},
        {"text": "ROS 2 architecture and core concepts: Nodes, Topics, Services.", "metadata": {"chapter": "ROS2 Fundamentals"}},
        {"text": "Simulating physics, gravity, and collisions in Gazebo.", "metadata": {"chapter": "Digital Twin"}}
    ]
    
    points = []
    for i, item in enumerate(sample_content):
        # Generate embedding for the text
        embedding_response = await openai_client.embeddings.create(input=[item["text"]], model="text-embedding-ada-002")
        embedding = embedding_response.data[0].embedding
        
        points.append(
            models.PointStruct(
                id=i, # Unique ID for each point
                vector=embedding,
                payload=item["metadata"]
            )
        )

    qdrant_client.upsert(
        collection_name=collection_name,
        points=points,
        wait=True
    )
    print(f"Ingested {len(sample_content)} sample content points.")

if __name__ == "__main__":
    # Example usage (run with `python -m asyncio backend/src/scripts/ingest_content.py`)
    # Make sure to set environment variables for QDRANT_URL, QDRANT_API_KEY, OPENAI_API_KEY
    qdrant_url = os.getenv("QDRANT_URL")
    qdrant_api_key = os.getenv("QDRANT_API_KEY")
    openai_api_key = os.getenv("OPENAI_API_KEY")
    docusaurus_docs_path = os.path.join(os.getcwd(), "my-website", "docs") # Adjust as needed

    if not all([qdrant_url, qdrant_api_key, openai_api_key]):
        print("Please set QDRANT_URL, QDRANT_API_KEY, and OPENAI_API_KEY environment variables.")
    else:
        asyncio.run(ingest_content_to_qdrant(docusaurus_docs_path, qdrant_url, qdrant_api_key, openai_api_key))