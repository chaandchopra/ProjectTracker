from abc import ABC, abstractmethod

from schema import ProjectResponse

class ProjectServiceInterface(ABC):

    @abstractmethod
    def list_projects(self) -> list[ProjectResponse]: pass