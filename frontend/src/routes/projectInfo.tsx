
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ProjectDetailHeader, ProjectDetailsProgressBar, ProjectDetailsProjectInfo, ProjectDetailsSprintNotes } from '../components/projectDetails'
import { useQuery } from '@tanstack/react-query';
import { deleteProject, getProjectById, updateProject } from '../services/projectService';
import  { EditModal } from '../components/EditModal';
import { useEffect, useMemo, useState } from 'react';
import { DeleteModal } from '../components/DeleteModal';

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
    const [openDelete, setOpenDelete] = useState(false);
    const [type, setType] = useState("");
    const navigate = useNavigate();

    if (isLoading) return (<p>Loading...</p>);
    if (error) return (<p>Error fetching projects {error.message}</p>);
    
    const onSave = (updated) => {
        try {
            updateProject(updated);
            data.data = updated;
            alert("Project updated successfully!");
          } catch (error) {
            console.error("Error updating project:", error);
          }
    }
    const onDelete = async (updated) => {
        try {
            await deleteProject(updated);
            data.data = updated;
            navigate("/");
            alert("Project updated successfully!");
          } catch (error) {
            console.error("Error updating project:", error);
          }
    }
    return (
        <div className='p-4'>
            <ProjectDetailHeader setOpenDelete={setOpenDelete}/>
            <ProjectDetailsProgressBar projectInfo={{ ...data.data, ...projectStatusInfo1 }} editOpen={setOpen} detailType={setType}/>
            <ProjectDetailsSprintNotes projectInfo={data.data} editOpen={setOpen} detailType={setType}/>
            <ProjectDetailsProjectInfo projectInfo={data.data} editOpen={setOpen} detailType={setType} />
            <EditModal
                open={open}
                onClose={() => setOpen(false)}
                initialData={data.data}
                onSave={(updated) => {onSave(updated)}}
                type={type}
            />
            <DeleteModal
                open={openDelete}
                projId={data.data.proj_id}
                onClose={() => setOpenDelete(false)}
                onConfirm={(projId) => {onDelete(projId)}}
            />
        </div>
    );
}

export default ProjectInfo;