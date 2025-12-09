from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from backend.src.models.user_models import UserCreate, Token, UserInDB
from backend.src.services.user_service import UserService
import os

router = APIRouter()

# Dependency to get UserService instance
def get_user_service():
    return UserService() # In a real app, this would be a dependency injected DB session

@router.post("/signup", response_model=UserInDB)
async def signup(user_create: UserCreate, user_service: UserService = Depends(get_user_service)):
    existing_user = await user_service.get_user(user_create.username)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already registered"
        )
    user = await user_service.create_user(user_create)
    return user

@router.post("/signin", response_model=Token)
async def signin(form_data: OAuth2PasswordRequestForm = Depends(), user_service: UserService = Depends(get_user_service)):
    user = await user_service.authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    # In a real application, you would generate a JWT token here
    access_token = "mock_access_token_for_" + user.username
    return {"access_token": access_token, "token_type": "bearer"}
