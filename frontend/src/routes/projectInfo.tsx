
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ProjectDetailHeader, ProjectDetailsProgressBar, ProjectDetailsProjectInfo, ProjectDetailsSprintNotes } from '../components/projectDetails'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteProject, getProjectById, updateProject } from '../services/projectService';
import  { EditModal } from '../components/EditModal';
import { useState } from 'react';
import { DeleteModal } from '../components/DeleteModal';
import { projMetaData } from '../utils/constants';

export const projectLoader = async ({ params }) => {
    const { id } = params;
    return id;
}

const ProjectInfo = () => {
    const projectId = useLoaderData();
    const queryClient = useQueryClient();
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
    
    const onSave = async (updated) => {
        try {
            await updateProject(updated);
            queryClient.setQueryData([`projects/${projectId}`], (oldData:[]) => {
                if (!oldData) return [];
                return { ...oldData, data:  updated }; 
            });
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
            <ProjectDetailHeader setOpenDelete={setOpenDelete} projectInfo={data.data}/>
            <ProjectDetailsProgressBar projectInfo={{ ...data.data, ...projMetaData }} editOpen={setOpen} detailType={setType}/>
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