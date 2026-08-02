from pydantic import BaseModel


class AITask(BaseModel):
    title: str
    description: str