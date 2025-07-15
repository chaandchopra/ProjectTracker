import json 
from abc import abstractmethod
from typing import List
from schema import ProjectResponse
from services.interfaces import ProjectServiceInterface

DATA_FILE = "data/project_info.json"


class ProjectService(ProjectServiceInterface):
    def _read_json(self, path: str):
        with open(path, "r") as f:
            return json.load(f)

    def get_project(self, proj_id: str) -> ProjectResponse | None:
        proj_list = self._read_json(DATA_FILE)
        for proj in proj_list:
            if proj['proj_id'] == proj_id:
                return ProjectResponse(**proj)
        return None
    
    def update_project(self, data: dict) -> ProjectResponse | None:
        proj_id = data.proj_id
        proj_list = self._read_json(DATA_FILE)
        for proj in proj_list:
            if proj['proj_id'] == proj_id:
                proj.update(data)
                with open(DATA_FILE, "w") as f:
                    json.dump(proj_list, f, indent=4)
                return ProjectResponse(**proj)
        return None
    
    def delete_project(self, proj_id: str) -> List[ProjectResponse] | bool:
        proj_list = self._read_json(DATA_FILE)
        for i, proj in enumerate(proj_list):
            if proj['proj_id'] == proj_id:
                del proj_list[i]
                with open(DATA_FILE, "w") as f:
                    json.dump(proj_list, f, indent=4)
                return proj_list
        return False

    def list_projects(self) -> List[ProjectResponse]:
        proj_list = self._read_json(DATA_FILE)
        return [ProjectResponse(**proj) for proj in proj_list]
    
    def create_projects(self, data:ProjectResponse) -> List[ProjectResponse]:
        proj_list = self._read_json(DATA_FILE)
        for i, proj in enumerate(proj_list):
            if proj['proj_id'] == proj_id:
                del proj_list[i]
                with open(DATA_FILE, "w") as f:
                    json.dump(proj_list, f, indent=4)
                return proj_list
        return False    