
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ProjectDetailHeader, ProjectDetailsProgressBar, ProjectDetailsProjectInfo, ProjectDetailsSprintNotes } from '../components/projectDetails'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteProject, getProjectById, updateProject } from '../services/projectService';
import  { EditModal } from '../components/EditModal';
import { useState } from 'react';
import { DeleteModal } from '../components/DeleteModal';
import { projMetaData } from '../utils/constants';
import { convertLength } from '@mui/material/styles/cssUtils';

export const projectLoader = async ({ params }) => {
    const { id } = params;
    return id;
}

const ProjectInfo = () => {
    const projectId = useLoaderData();
    const { data, isLoading, error } = useQuery({
        queryKey: [`projects/${projectId}`],
        queryFn: () => getProjectById(projectId),
    });
    const queryClient = useQueryClient();
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [type, setType] = useState("");
    const navigate = useNavigate();

    
    const updateMutation = useMutation ({
        mutationFn: updateProject,
        onSuccess: (updated) => {
            queryClient.setQueryData([`projects/${projectId}`], (oldData:[]) => {
                if (!oldData) return [];
                return { ...oldData, data:  updated.data }; 
            });
            alert("Project updated successfully!!!");
        },
        onError: (err) => {
            alert("Err updating project");
            console.log(err);
        }
    })

    const deleteMutation = useMutation({
        mutationFn: deleteProject,
        onSuccess: (updated) => {
            queryClient.setQueryData([`projects/${projectId}`], (oldData:[]) => {
                if (!oldData) return [];
                return { ...oldData, data:  updated.data }; 
            });
            navigate("/")
            alert("Project is deleted !!")
        },
        onError: (err) => {
            alert("Err deleting project");
            console.log(err);
        }
    })

    const onSave = (updated: any) => updateMutation.mutate(updated);
    const onDelete = (updated: any) => deleteMutation.mutate(updated);

    if (isLoading) return (<p>Loading...</p>);
    if (error) return (<p>Error fetching projects {error.message}</p>);

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