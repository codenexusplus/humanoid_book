from pydantic import BaseModel, EmailStr
from typing import Optional, Dict, Any

class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str
    software_background: Optional[Dict[str, Any]] = None
    hardware_background: Optional[Dict[str, Any]] = None

class UserInDB(UserBase):
    hashed_password: str
    software_background: Optional[Dict[str, Any]] = None
    hardware_background: Optional[Dict[str, Any]] = None
    personalization_settings: Optional[Dict[str, Any]] = None
    preferred_language: Optional[str] = "en"

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None
