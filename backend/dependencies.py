from services.interfaces import ProjectServiceInterface
from services.project_service import ProjectService

def get_project_service() -> ProjectServiceInterface:
    return ProjectService()