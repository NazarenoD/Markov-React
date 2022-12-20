from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from decouple import config

class Settings():
    database_hostname = config('DATABASE_HOSTNAME')
    database_port = config('DATABASE_PORT')
    database_password = config('DATABASE_PASSWORD')
    database_name = config('DATABASE_NAME')
    database_username = config('DATABASE_USERNAME')
    secret_key = config('SECRET_KEY')
    algorithm = config('ALGORITHM')
    access_token_expire_minutes = config('ACCESS_TOKEN_EXPIRE_MINUTES')

settings = Settings()

        
SQLALCHEMY_DATABASE_URL = f"postgresql://{settings.database_username}:{settings.database_password}@{settings.database_hostname}/{settings.database_name}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        

        




#test conection

"""
import psycopg2
from psycopg2.extras import RealDictCursor
import time

while True:
    try:
        conn = psycopg2.connect(host = settings.database_hostname, database = settings.database_name,
                                user = 'postgres', password = settings.database_password,
                                cursor_factory= RealDictCursor)
        cursor = conn.cursor()
        print('***********************Connection ready***********************')
        break
    except Exception as error:
        print('***********************DB connection error***********************')
        #print (error)
        time.sleep(2)
        """
        