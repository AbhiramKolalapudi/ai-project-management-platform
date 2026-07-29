from fastapi import FastAPI

from app.database import Base, engine

# Import models so SQLAlchemy registers them
from app.models.user import User

app = FastAPI()

Base.metadata.create_all(engine)


@app.get("/")
def root():
    return {"message": "Hello World"}