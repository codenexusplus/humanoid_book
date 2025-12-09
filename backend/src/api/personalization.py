from fastapi import APIRouter, Depends, HTTPException
from backend.src.services.personalization_service import PersonalizationService
from backend.src.services.user_service import UserService
from backend.src.models.user_models import UserInDB # Assuming UserInDB is also needed for current user context
import os

router = APIRouter()

# Dependency to get PersonalizationService instance
def get_personalization_service():
    return PersonalizationService()

# Placeholder for current user dependency (needs proper JWT/session management)
async def get_current_user():
    # This is a mock. In a real app, this would decode JWT and fetch user from DB.
    # For now, let's assume a logged-in user with a specific username for testing.
    # In a fully integrated system, this would come from a secure token.
    mock_user_service = UserService()
    user = await mock_user_service.get_user("testuser") # Assume "testuser" is logged in for mock purposes
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    return user


@router.get("/{chapter_id}/personalize")
async def get_personalized_chapter(
    chapter_id: str,
    personalization_service: PersonalizationService = Depends(get_personalization_service),
    current_user: UserInDB = Depends(get_current_user) # Inject current user
):
    try:
        personalized_content = await personalization_service.get_personalized_content(chapter_id, current_user)
        return {"chapter_id": chapter_id, "content": personalized_content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
