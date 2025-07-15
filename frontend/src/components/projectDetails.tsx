import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import { ProjectBarOnly } from './projectBar';

export const ProjectDetailHeader = () => {
    return (
        <div className="pb-4">
            <div className="flex items-center justify-between">
                <div className="text-lg font-bold flex gap-4 mb-2">
                    <div className=" bg-black text-white rounded-md text-sm p-1 pr-2 pl-2">Back</div>
                    Projects Pipeline
                </div>
                <div className="flex gap-6">
                    <div className=" bg-green-500 text-white rounded-xl text-sm p-1 pr-2 pl-2 flex justify-center ">Experiment</div>
                    <div className="text-red-500 text-xl"><DeleteOutlineIcon fontSize='inherit' /></div>
                </div>
            </div>
            <hr />
        </div>
    )
}
const PaperHeader = ({ header }) => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="font-bold text-lg pt-2 pb-2">{header}</div>
                <button className="bg-gray-300 p-1 m-2 rounded-md" ><SettingsIcon fontSize='medium'/></button>
            </div>
            <hr />
        </div>
    )
}
export const ProjectDetailsProgressBar = ({projectInfo}) => {
    return (
        <div className="p-4">
            <Paper elevation={3} className="p-4">
                <PaperHeader header="Project Progress" />
                <ProjectBarOnly projectInfo={projectInfo}/>
            </Paper>
        </div>
    )
}

export const ProjectDetailsSprintNotes = ({projectInfo}) => {
    return (
        <div className="p-4">
            <Paper elevation={3} className="p-4">
                <PaperHeader header="Sprint Notes" />
                <div className="p-2">{projectInfo.sprint_notes}</div>
            </Paper>
        </div>
    )
}

export const ProjectDetailsProjectInfo = () => {
    return (
        <div className="p-4">
            <Paper elevation={3} className="p-4">
                <PaperHeader header="Project Information" />
            </Paper>
        </div>
    )
}


