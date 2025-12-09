from fastapi import FastAPI
from backend.src.api import chatbot
from backend.src.api import auth
from backend.src.api import personalization
from backend.src.api import translation

app = FastAPI()

app.include_router(chatbot.router, prefix="/chatbot", tags=["Chatbot"])
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(personalization.router, prefix="/personalize", tags=["Personalization"])
app.include_router(translation.router, prefix="/translate", tags=["Translation"])

@app.get("/")
async def root():
    return {"message": "Welcome to the Physical AI Textbook Backend!"}