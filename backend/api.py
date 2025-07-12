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

@router.delete("/projects/{proj_id}", response_model=list[int])
def delete_project( service: ProjectServiceInterface = Depends(get_project_service), 
                    proj_id: str = None):
    return service.delete_project(proj_id)

@router.put("/projects/{proj_id}", response_model=bool)
def update_project(service: ProjectServiceInterface = Depends(get_project_service), 
                   proj_id: str = None, project_data: ProjectResponse = None):
    if not service.get_project(proj_id):
        raise HTTPException(status_code=404, detail="Project not found")
    return service.update_project(proj_id, project_data)