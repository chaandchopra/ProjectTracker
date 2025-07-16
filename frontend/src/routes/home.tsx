// import ProgressBar from "../components/progressBar";
import { useState } from "react";
import { ProjectList, Legend, ProjectHomeHeader } from "../components/projectList";

const Home = () => {
    const [openAddProj, setOpenAddProj] = useState(false);

    return (
        <div className="p-4 bg-gray-50">
            <ProjectHomeHeader openAddProject={setOpenAddProj} />
            <Legend />
            <ProjectList openAddProj={openAddProj} setOpenAddProj={setOpenAddProj}/>
        </div>
    )
}

export default Home;