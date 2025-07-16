import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import { ProjectBarOnly } from './projectBar';
import { Link } from 'react-router-dom';

export const ProjectDetailHeader = ({ setOpenDelete, projectInfo }) => {
    return (
        <div className="pb-4">
            <div className="flex items-center justify-between">
                <div className="text-lg font-bold flex gap-4 mb-2">
                    <Link to="/"><div className=" bg-black text-white rounded-md text-sm p-1 pr-2 pl-2">Back</div></Link>
                    {projectInfo.proj_id}.{projectInfo.proj_name}
                </div>
                <div className="flex gap-6">
                    <div className=" bg-green-500 text-white rounded-xl text-sm p-1 pr-2 pl-2 flex justify-center ">Experiment</div>
                    <button onClick={()=>setOpenDelete(true)} className="text-red-500 text-xl"><DeleteOutlineIcon fontSize='inherit' /></button>
                </div>
            </div>
            <hr />
        </div>
    )
}

const PaperHeader = ({ header, editOpen, setDetailType, detailType}) => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="font-bold text-lg pt-2 pb-2">{header}</div>
                <button className="bg-gray-300 p-1 pr-2 pl-2 m-2 rounded-md" onClick={()=> {editOpen(true); setDetailType(detailType);}}><SettingsIcon fontSize='medium' /></button>
            </div>
            <hr />
        </div>
    )
}
export const ProjectDetailsProgressBar = ({ projectInfo, editOpen, detailType }) => {
    return (
        <div className="p-4">
            <Paper elevation={3} className="p-4">
                <PaperHeader header="Project Progress" editOpen={editOpen}  setDetailType={detailType} detailType={"projectProgress"} />
                <ProjectBarOnly projectInfo={projectInfo} />
            </Paper>
        </div>
    )
}

export const ProjectDetailsSprintNotes = ({ projectInfo, editOpen, detailType }) => {
    return (
        <div className="p-4">
            <Paper elevation={3} className="p-4">
               <PaperHeader header="Sprint Notes" editOpen={editOpen} setDetailType={detailType} detailType={"sprintNotes"} />
                <div className="p-2">{projectInfo.sprint_notes}</div>
            </Paper>
        </div>
    )
}

export const ProjectDetailsProjectInfo = ({projectInfo, editOpen, detailType }) => {
    return (
        <div className="p-4">
            <Paper elevation={3} className="p-4">
                <PaperHeader header="Project Information" editOpen={editOpen} setDetailType={detailType} detailType={"projectInfo"} />
                <div className="p-2">
                    <div className="grid grid-cols-3 gap-y-4">
                        <div>
                            <p className="text-sm font-semibold">Technology:</p>
                            <p className="text-sm">{projectInfo.technology}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Business Function:</p>
                            <p className="text-sm">{projectInfo.business_function}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Initiation Date:</p>
                            <p className="text-sm">{projectInfo.initiation_date}</p>
                        </div>

                        {/* Row 2 (Full width) */}
                        <div className="col-span-3">
                            <p className="text-sm font-semibold">Sprint Start:</p>
                            <p className="text-sm">{projectInfo.sprint_start}</p>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}


