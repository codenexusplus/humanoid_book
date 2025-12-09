from pydantic import BaseModel

class Query(BaseModel):
    text: str
    
class QueryWithSelection(BaseModel):
    text: str
    selected_text: str

class RAGResponse(BaseModel):
    answer: str
    source_documents: list[str] = []