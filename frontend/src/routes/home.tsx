// import ProgressBar from "../components/progressBar";
import { useState } from "react";
import { ProjectList, Legend, ProjectHomeHeader } from "../components/projectList";
import { AddModal } from "../components/AddModal";
import { createProject } from "../services/projectService";
import { initialForm } from "../utils/constants";

const Home = () => {
    const [openAddProj, setOpenAddProj] = useState(false);

    const addProj = async (updated) => {
        try {
            await createProject(updated);
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