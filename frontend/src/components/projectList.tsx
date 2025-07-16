import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createProject, getProjects } from '../services/projectService';
import { Paper } from '@mui/material';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { ProjectBar, ProjectBarFooter, ProjectBarHeader } from './projectBar';
import { Link } from 'react-router-dom';
import { AddModal } from './AddModal';
import { useState } from 'react';
import { initialForm } from '../utils/constants';

const status = [
    { label: "Conceptualize", description: "Project concept, exploring feasibility", legendColor: "text-blue-600" },
    { label: "Initialize", description: "Team formed, planning and initial design", legendColor: "text-orange-400" },
    { label: "Experiment", description: "MVP development, iterative testing", legendColor: "text-teal-400" },
]

const projectStatusInfo = {
    "Label": { label: "Label", width: "25%", bgColor: "bg-blue-600" },
    "Conceptualize": { label: "Conceptualize", description: "Project concept, exploring feasibility", width: "10%", bgColor: "bg-blue-600" },
    "Initialize": { label: "Initialize", description: "Team formed, planning and initial design", width: "10%", bgColor: "bg-orange-400" },
    "Experiment": { label: "Experiment", description: "MVP development, iterative testing", width: "60%", bgColor: "bg-teal-400" },
}

export const Legend = () => {

    return (
        <div>
            <Paper elevation={2} className="p-2">
                {status.map((item) => (
                    <span className="text-black text-xs m-4">
                        <span id={`LegendIcon${item.label}`} className={`relative -top-0.5 mr-2 ${item.legendColor}`}>
                            <Brightness1Icon fontSize="inherit" />
                        </span>
                        {item.label}: {item.description}
                    </span>
                ))}
            </Paper>
        </div>
    )
}

export const ProjectHomeHeader = ({ openAddProject }) => {
    return (
        <div className="pb-4">
            <div className="flex items-center justify-between">
                <div className="text-lg font-bold mb-2">
                    Projects Pipeline
                </div>
                <button className="ml-auto bg-blue-600 text-white my-2 rounded-full w-8 h-8 flex items-center justify-center m-1 " onClick={() => openAddProject(true)}>+</button>
            </div>
            <hr />
        </div>
    )
}



export const ProjectList = ({
    openAddProj,
    setOpenAddProj }
) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['projects'],
        queryFn: () => getProjects(),
    });
    const queryClient = useQueryClient();
    if (isLoading) return (<p>Loading...</p>);
    if (error) return (<p>Error fetching projects {error.message}</p>);

    const addProj = async (updated) => {
        try {
            await createProject(updated);
            queryClient.setQueryData(['projects'], (oldData:[]) => {
                if (!oldData) return [];
                return { ...oldData, data: [...data.data, updated] }; 
            });
            alert("Project created successfully! Refresh Page to see the updates...");
        } catch (error) {
            console.error("Error updating project:", error);
        }
    }
    return (
        <>
            <ProjectBarHeader sprint={data?.data[0].sprint} />
            {data?.data?.map((project) => (
                <>
                    <Link to={`/project/${project.proj_id}`}> <ProjectBar projectInfo={{ ...project, ...projectStatusInfo }} />
                    </Link>
                </>
            ))}
            <div className="fixed bottom-0 left-0 w-full bg-white">
                <ProjectBarFooter />
            </div>
            <AddModal
                open={openAddProj}
                onClose={() => setOpenAddProj(false)}
                initialData={initialForm}
                onSave={(updated) => { addProj(updated) }}
            />
        </>
    );
}