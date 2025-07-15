// import ProgressBar from "../components/progressBar";
import { useState } from "react";
import { ProjectList, Legend, ProjectHomeHeader } from "../components/projectList";
import { AddModal } from "../components/AddModal";
import { createProject } from "../services/projectService";

const Home = () => {
    const [openAddProj, setOpenAddProj] = useState(false);
    const initialForm = {
        "proj_id": "",
        "proj_name": "",
        "concept": 0,
        "initial": 0,
        "sprint": [0, 0, 0, 0, 0, 0],
        "sprint_notes": "",
        "technology": "",
        "business_function": "",
        "initiation_date": "",
        "sprint_start": ""
    }

    const addProj = async (updated) => {
        try {
            await createProject(updated);
            // data.data = updated;
            alert("Project created successfully! Refresh Page to see the updates...");
        } catch (error) {
            console.error("Error updating project:", error);
        }
    }

    return (
        <div className="p-4">
            <ProjectHomeHeader openAddProject={setOpenAddProj} />
            <Legend />
            <ProjectList />
            <AddModal
                open={openAddProj}
                onClose={() => setOpenAddProj(false)}
                initialData={initialForm}
                onSave={(updated) => { addProj(updated) }}
            />
        </div>
    )
}

export default Home;