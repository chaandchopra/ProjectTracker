import { Paper } from "@mui/material";
import { ProgressBar, SprintProgressBar } from "./progressBar";
// import ProjectInfo from "../routes/projectInfo";
const sprint = [90, 0, 0, 0, 0, 0];

interface projectBarProps {
    proj_id: string;
    proj_name: string;
    conceptualize: number;
}
const projectStatusInfo = {
    "Label": { label: "Label", width: "w-[25%]", color: "blue-600" },
    "Conceptualize": { label: "Conceptualize", description: "Project concept, exploring feasibility", width: "w-[10%]", color: "blue-600" },
    "Initialize": { label: "Initialize", description: "Team formed, planning and initial design", width: "w-[10%]", color: "orange-400" },
    "Experiment": { label: "Experiment", description: "MVP development, iterative testing", width: "w-[60%]", color: "teal-400" },
}
const projectStatusInfo1 = {
    "Conceptualize": { label: "Conceptualize", description: "Project concept, exploring feasibility", width: "w-[15%]", bgColor: "bg-blue-600" },
    "Initialize": { label: "Initialize", description: "Team formed, planning and initial design", width: "w-[15%]", bgColor: "bg-orange-400" },
    "Experiment": { label: "Experiment", description: "MVP development, iterative testing", width: "w-[70%]", bgColor: "bg-teal-400" },
}
export const ProjectBarFooter = () => {

    return (
        <div className="w-full h-8">
            {/* {JSON.stringify(projectInfo,null, 3)} */}
            <div className="flex items-center justify-between p-2">
                <div className={`${projectStatusInfo["Label"].width} pl-2 pl-2 text-sm`}> </div>
                <div className={`${projectStatusInfo["Conceptualize"].width} pl-2 pr-2`}>
                    Conceptualize
                </div>
                <div className={`${projectStatusInfo["Initialize"].width} pl-2 pr-2`}>
                    Initialize
                </div>
                <div className={`${projectStatusInfo["Experiment"].width} h-4 flex pl-2 pr-2`}>
                    <div className="w-full flex justify-center items-center text-[12px]">
                        Experiments
                    </div>
                </div>
            </div>
        </div>
    );
}


export const ProjectBarHeader = ({ sprint }) => {

    return (
        <div className="w-full h-8">
            {/* {JSON.stringify(projectInfo,null, 3)} */}
            <div className="flex items-center justify-between p-2">
                <div className={`${projectStatusInfo["Label"].width} pl-2 pl-2 text-sm`}>

                </div>
                <div className={`${projectStatusInfo["Conceptualize"].width} pl-2 pr-2`}>
                    {/* <ProgressBar percent={projectInfo["concept"]} color={projectInfo.Conceptualize.color} /> */}
                </div>
                <div className={`${projectStatusInfo["Initialize"].width} pl-2 pr-2`}>
                    {/* <ProgressBar percent={projectInfo["initial"]} color={projectInfo.Initialize.color} /> */}
                </div>
                <div className={`${projectStatusInfo["Experiment"].width} h-4 flex pl-2 pr-2`}>
                    {sprint.map((item, idx) => {
                        // const last = sprint.length - 1;
                        return (
                            <div className="w-full flex justify-center items-center text-[12px]">
                                Sprint {idx + 1}
                                {/* <SprintProgressBar percent={item} color={projectInfo.Experiment.color} index={idx}  last ={last}/> */}
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export const ProjectBar = ({ projectInfo }) => {
    return (
        <div className="w-full h-16">
            {/* {JSON.stringify(projectInfo,null, 3)} */}
            <Paper elevation={3} className="flex items-center justify-between p-2">
                <div className={`${projectStatusInfo["Label"].width} pl-2 pl-2 text-sm`}>
                    {projectInfo.proj_id}. {projectInfo.proj_name}
                </div>
                <div className={`${projectStatusInfo["Conceptualize"].width} pl-2 pr-2`}>
                    <ProgressBar percent={projectInfo["concept"]} color={projectInfo.Conceptualize.bgColor} />
                </div>
                <div className={`${projectStatusInfo["Initialize"].width} pl-2 pr-2`}>
                    <ProgressBar percent={projectInfo["initial"]} color={projectInfo.Initialize.bgColor} />
                </div>
                <div className={`${projectStatusInfo["Experiment"].width} h-8 flex pl-2 pr-2`}>
                    {projectInfo["sprint"].map((item, idx) => {
                        const last = sprint.length - 1;
                        return (
                            <>
                                <SprintProgressBar percent={item} color={projectInfo.Experiment.bgColor} index={idx} last={last} />
                            </>
                        )
                    })
                    }
                </div>
            </Paper>
        </div>
    );
}

export const ProjectBarOnly = ({ projectInfo }) => {
    return (
        <>
            <div className="w-full h-16">
                {/* {JSON.stringify(projectInfo, null, 3)} */}
                <div className="flex items-center justify-between p-2">
                    <div className={` w-[20%] pl-1 pr-1`}>
                        <ProgressBar percent={projectInfo["concept"]} color={projectInfo.Conceptualize.bgColor} />
                    </div>
                    <div className={` w-[20%] pl-1 pr-1`}>
                        <ProgressBar percent={projectInfo["initial"]} color={projectInfo.Initialize.bgColor} />
                    </div>
                    <div className={` w-[60%] h-8 flex pl-1 pr-1`}>
                        {projectInfo["sprint"].map((item, idx) => {
                            const last = sprint.length - 1;
                            return ( <SprintProgressBar percent={item} color={projectInfo.Experiment.bgColor} index={idx} last={last} />)
                        })
                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-8">
                <div className="flex items-center justify-between">
                    <div className={` w-[20%] pl-2 pr-2`}>
                        <div className="w-full flex justify-center items-center text-[12px]">Concept</div>
                    </div>
                    <div className={` w-[20%] pl-2 pr-2`}>
                        <div className="w-full flex justify-center items-center text-[12px]">Initial</div>
                    </div>
                    <div className={` w-[60%] h-8 flex pl-2 pr-2`}>
                        {projectInfo["sprint"].map((item, idx) => {

                            return(<div className="w-full flex justify-center items-center text-[12px]">Sprint {idx+1}</div>)
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

// export default ProjectBar;
