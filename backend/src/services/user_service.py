from backend.src.models.user_models import UserCreate, UserInDB
from typing import Dict, Any

class UserService:
    def __init__(self):
        # Placeholder for BetterAuth client or direct user storage
        self.users_db: Dict[str, UserInDB] = {} # In-memory mock DB for now

    async def create_user(self, user: UserCreate) -> UserInDB:
        # Simulate BetterAuth interaction
        # In a real scenario, this would involve calling BetterAuth API
        hashed_password = f"hashed_{user.password}" # Mock hashing

        new_user = UserInDB(
            username=user.username,
            email=user.email,
            hashed_password=hashed_password,
            software_background=user.software_background,
            hardware_background=user.hardware_background,
            personalization_settings={}, # Default empty
            preferred_language="en"
        )
        self.users_db[user.username] = new_user
        return new_user

    async def get_user(self, username: str) -> UserInDB | None:
        return self.users_db.get(username)

    async def authenticate_user(self, username: str, password: str) -> UserInDB | None:
        user = await self.get_user(username)
        if user and user.hashed_password == f"hashed_{password}": # Mock password check
            return user
        return None

    async def update_user_personalization(self, username: str, settings: Dict[str, Any]) -> UserInDB:
        user = self.users_db.get(username)
        if user:
            user.personalization_settings = settings
            return user
        raise ValueError("User not found")
