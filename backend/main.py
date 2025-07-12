from fastapi import FastAPI
import api

app = FastAPI(title="Project Tracker API")

app.include_router(api.router, prefix="/api", tags=["Projects"])