// import ProgressBar from "../components/progressBar";
import { useState } from "react";
import {ProjectList, Legend, ProjectHomeHeader} from "../components/projectList";
import { AddModal } from "../components/AddModal";

const Home = () => {
    const [openAddProj, setOpenAddProj] = useState(false);
    const initialForm =  {
        "proj_id": "",
        "proj_name": "",
        "concept": 0,
        "initial": 0,
        "sprint": [ 0, 0, 0, 0, 0, 0 ],
        "sprint_notes": "", 
        "technology": "",
        "business_function": "",
        "initiation_date": "",
        "sprint_start": ""
    }

    return (
        <div className="p-4">
            <ProjectHomeHeader openAddProject={setOpenAddProj}/>
            <Legend />
            <ProjectList />
            <AddModal
                open={openAddProj}
                onClose={() => setOpenAddProj(false)}
                initialData={initialForm}
                onSave={(updated) => {console.log(updated)}}
            />
        </div>
    )
}

export default Home;