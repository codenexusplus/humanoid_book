from fastapi import APIRouter, Depends, HTTPException
from backend.src.services.translation_service import TranslationService
import os

router = APIRouter()

# Dependency to get TranslationService instance
def get_translation_service():
    return TranslationService()

@router.get("/{chapter_id}/translate/ur")
async def get_urdu_translated_chapter(
    chapter_id: str,
    translation_service: TranslationService = Depends(get_translation_service)
):
    try:
        # In a real scenario, fetch original content for the chapter first
        original_content = f"Original content of chapter {chapter_id} goes here."
        translated_content = await translation_service.translate_content_to_urdu(chapter_id, original_content)
        return {"chapter_id": chapter_id, "content": translated_content, "language": "ur"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
