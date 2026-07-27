from fastapi import FastAPI

app = FastAPI(
    title="AI Project Management Platform API",
    description="Backend API for the AI Project Management Platform.",
    version="1.0.0",
)

@app.get("/")
def root():
    return {"message": "Welcome to the AI Project Management Platform API"}