from typing import List
from fastapi import APIRouter, Depends, HTTPException
from dependencies import get_project_service
from services.interfaces import ProjectServiceInterface
from schema import ProjectResponse

router = APIRouter()

@router.get("/projects/", response_model=list[ProjectResponse])
def list_projects( service: ProjectServiceInterface = Depends(get_project_service)):
    return service.list_projects()

@router.get("/projects/{proj_id}", response_model=ProjectResponse|None)
def get_projects( service: ProjectServiceInterface = Depends(get_project_service), 
                 proj_id: str = None):
    return service.get_project(proj_id)

@router.delete("/projects/{proj_id}", response_model=list[ProjectResponse|None])
def delete_project( service: ProjectServiceInterface = Depends(get_project_service), 
                    proj_id: str = None):
    return service.delete_project(proj_id)

@router.put("/projects/", response_model=ProjectResponse|None)
def update_project(service: ProjectServiceInterface = Depends(get_project_service), 
                    project_data: ProjectResponse = None):
    if not service.get_project(project_data.proj_id):
        raise HTTPException(status_code=404, detail="Project not found")
    return service.update_project( project_data )


@router.post("/projects/", response_model=List[ProjectResponse|None])
def create_project(service: ProjectServiceInterface = Depends(get_project_service), 
                    project_data: ProjectResponse = None):
    return service.create_project( project_data )