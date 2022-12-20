from sqlalchemy import TIMESTAMP, Column, String, Integer, Float, Boolean, ForeignKey, Text
from sqlalchemy.sql.expression import text
from .db import Base
from sqlalchemy.orm import relationship



####################### EXERCISES #######################

class Theme_Alk(Base):
    __tablename__ = 'Theme'
    id_theme = Column(Integer, primary_key = True, nullable = False)
    title = Column(String, nullable = False)
    description = Column(String, nullable = False)
    created = Column(TIMESTAMP(timezone=True),nullable = False, server_default = text('now()'))



class Categorie_Alk(Base):
    __tablename__ = "Categorie"
    id_categorie = Column(Integer, primary_key = True, nullable = False)
    id_theme = Column(Integer,  ForeignKey('Theme.id_theme', ondelete="CASCADE"), nullable = False)
    title = Column(String, nullable = False)
    description = Column(String, nullable = False)
    created = Column(TIMESTAMP(timezone=True),nullable = False, server_default = text('now()'))
    
    owner = relationship('Theme_Alk')



class Exercise_Alk(Base):
    __tablename__ = "Exercise"
    id_exercise = Column(Integer, primary_key = True, nullable = False)
    id_categorie = Column(Integer,  ForeignKey('Categorie.id_categorie', ondelete="CASCADE"), nullable = False)
    title = Column(String, nullable = False)
    description = Column(String, nullable = False)
    solution = Column(Text, nullable = False)
    created = Column(TIMESTAMP(timezone=True),nullable = False, server_default = text('now()'))
    
    owner = relationship('Categorie_Alk')



####################### ARTICLES #######################



class Articles_Alk(Base):
    __tablename__ = 'Articles'
    id_articles = Column(Integer, primary_key = True, nullable = False)
    title = Column(String, nullable = False)
    description = Column(String, nullable = False)
    content = Column(String, nullable = False)
    created = Column(TIMESTAMP(timezone=True),nullable = False, server_default = text('now()'))
    
