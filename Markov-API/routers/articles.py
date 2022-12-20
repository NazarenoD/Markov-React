from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from models.db import get_db 
from typing import List, Optional
from sqlalchemy.orm import Session

from models.tables import Articles_Alk



router = APIRouter(prefix="/art")



@router.get("/main/", tags=["articles"])
async def theme_list(db:Session = Depends(get_db)):
    data = db.query(Articles_Alk).filter().all()
    return data




