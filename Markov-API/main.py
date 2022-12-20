from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import tables
from models.db import engine

from routers import exercises

app = FastAPI()

app.include_router(exercises.router)

tables.Base.metadata.create_all(engine)

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)