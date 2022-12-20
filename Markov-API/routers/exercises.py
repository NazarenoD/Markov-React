from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from models.db import get_db 
from typing import List, Optional
from sqlalchemy.orm import Session

from models.tables import (
    Theme_Alk,
    Categorie_Alk,
    Exercise_Alk,
)


from pydantic import BaseModel
class main_Schema(BaseModel):
    id_theme : int
    title : str
    description : str
    class Config:
        orm_mode = True


router = APIRouter(prefix="/exc")



@router.get("/main/", tags=["excercises"],response_model=List[main_Schema])
async def theme_list(db:Session = Depends(get_db)):
    data = db.query(Theme_Alk).filter().all()
    return data


@router.get("/main/{theme}", tags=["excercises"])
async def read_user(theme: str,db:Session = Depends(get_db)):
    id = db.query(Theme_Alk).filter(Theme_Alk.title == theme).first()
    data = db.query(Categorie_Alk).filter(Categorie_Alk.id_theme == id.id_theme).all()
    return data

@router.get("/main/{theme}/{excersise}", tags=["excercises"])
async def read_user(theme: str,excersise: str,db:Session = Depends(get_db)):
    id = db.query(Theme_Alk).filter(Theme_Alk.title == theme).first()
    id_Categorie = db.query(Categorie_Alk).filter(Categorie_Alk.id_theme == id.id_theme).filter(Categorie_Alk.title == excersise).first()
    data = db.query(Exercise_Alk).filter(Exercise_Alk.id_categorie == id_Categorie.id_categorie).all()
    
    return data
