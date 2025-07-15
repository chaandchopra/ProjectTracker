from typing import Dict, List, Optional
from pydantic import BaseModel

class ProjectResponse(BaseModel):
    proj_id: str
    proj_name: str
    concept: int | str = 0
    initial: int | str= 0
    sprint: List[int| str]
    sprint_notes: Optional[str] = None
    technology: Optional[str] = None
    business_function: Optional[str] = None
    initiation_date: Optional[str] = None
    sprint_start: Optional[str] = None
