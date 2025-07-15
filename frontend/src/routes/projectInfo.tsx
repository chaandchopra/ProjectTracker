
import { useLoaderData } from 'react-router-dom';
import { ProjectDetailHeader, ProjectDetailsProgressBar, ProjectDetailsProjectInfo, ProjectDetailsSprintNotes } from '../components/projectDetails'
import { useQuery } from '@tanstack/react-query';
import { getProjectById } from '../services/projectService';
import  { EditModal } from '../components/EditModal';
import { useMemo, useState } from 'react';

export const projectLoader = async ({ params }) => {
    const { id } = params;
    return id;
}
const projectStatusInfo1 = {
    "Conceptualize": { label: "Conceptualize", description: "Project concept, exploring feasibility", width: "w-[15%s", bgColor: "bg-blue-600" },
    "Initialize": { label: "Initialize", description: "Team formed, planning and initial design", width: "w-[15%]", bgColor: "bg-orange-400" },
    "Experiment": { label: "Experiment", description: "MVP development, iterative testing", width: "w-[70%]", bgColor: "bg-teal-400" },
}

const ProjectInfo = () => {
    const projectId = useLoaderData();
    const { data, isLoading, error } = useQuery({
        queryKey: [`projects/${projectId}`],
        queryFn: () => getProjectById(projectId),
    });
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");

    if (isLoading) return (<p>Loading...</p>);
    if (error) return (<p>Error fetching projects {error.message}</p>);
    return (
        <div className='p-4'>
            <ProjectDetailHeader />
            <ProjectDetailsProgressBar projectInfo={{ ...data.data, ...projectStatusInfo1 }} editOpen={setOpen} detailType={setType}/>
            <ProjectDetailsSprintNotes projectInfo={data.data} editOpen={setOpen} detailType={setType}/>
            <ProjectDetailsProjectInfo projectInfo={data.data} editOpen={setOpen} detailType={setType} />
            <EditModal
                open={open}
                onClose={() => setOpen(false)}
                initialData={data.data}
                onSave={(updated) => {data.data=updated}}
                type={type}
            />
        </div>
    );
}

export default ProjectInfo;