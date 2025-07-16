import { Paper } from "@mui/material";
import { ProgressBar, SprintProgressBar } from "./progressBar";
import { centerMe, projMetaData } from "../utils/constants";
// import ProjectInfo from "../routes/projectInfo";
const sprint = [90, 0, 0, 0, 0, 0];

export const ProjectBarFooter = () => {
    const labels = ["Label", "Conceptualize", "Initialize", "Experiment"]
    return (
        <div className="w-full h-8">
            <div className=" flex items-center justify-between p-2">
                {labels.map(label => (
                    <div className={`${projMetaData[label].width} h-4 flex pl-2 pr-2`}>
                        <div className={`w-full flex font-semibold justify-center items-center text-[12px] ${projMetaData[label].textColor}`}>
                            {projMetaData[label].isFooter ? projMetaData[label].label : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export const ProjectBarHeader = ({ sprint }) => {

    const labels = ["Label", "Conceptualize", "Initialize"]
    return (
        <div className="w-full h-8">
            {/* {JSON.stringify(projectInfo,null, 3)} */}
            <div className="flex items-center justify-between p-2">
                {labels.map(label => (
                    <div className={`${projMetaData[label].width} pl-2 pl-2 text-sm`}>
                    </div>
                ))}
                <div className={`${projMetaData["Experiment"].width} h-4 flex pl-2 pr-2`}>
                    {sprint.map((item, idx) => {
                        return (
                            <div className={`w-full ${centerMe} text-[10px]`}>
                                Sprint {idx + 1}
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
            <Paper elevation={1} className="flex items-center justify-between p-2">
                <div className={`${projMetaData["Label"].width} pl-2 pl-2 text-sm`}>
                    {projectInfo.proj_id}. {projectInfo.proj_name}
                </div>
                <div className={`${projMetaData["Conceptualize"].width} pl-2 pr-2`}>
                    <ProgressBar percent={projectInfo["concept"]} color={projectInfo.Conceptualize.bgColor} />
                </div>
                <div className={`${projMetaData["Initialize"].width} pl-2 pr-2`}>
                    <ProgressBar percent={projectInfo["initial"]} color={projectInfo.Initialize.bgColor} />
                </div>
                <div className={`${projMetaData["Experiment"].width} flex pl-2 pr-2`}>
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
                    <div className={`${projectInfo.Conceptualize.widthSolo} pl-1 pr-1`}>
                        <ProgressBar percent={projectInfo["concept"]} color={projectInfo.Conceptualize.bgColor} />
                    </div>
                    <div className={`${projectInfo.Initialize.widthSolo} pl-1 pr-1`}>
                        <ProgressBar percent={projectInfo["initial"]} color={projectInfo.Initialize.bgColor} />
                    </div>
                    <div className={`${projectInfo.Experiment.widthSolo} h-8 flex pl-1 pr-1`}>
                        {projectInfo["sprint"].map((item, idx) => {
                            const last = sprint.length - 1;
                            return (<SprintProgressBar percent={item} color={projectInfo.Experiment.bgColor} index={idx} last={last} />)
                        })
                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-5">
                <div className="flex items-center justify-between">
                    <div className={`${projectInfo.Conceptualize.widthSolo} pl-2 pr-2`}>
                        <div className={`w-full ${centerMe} text-[12px] font-semibold ${projectInfo.Conceptualize.textColor}`}>Conceptualize</div>
                    </div>
                    <div className={`${projectInfo.Initialize.widthSolo} pl-2 pr-2`}>
                        <div className={`w-full ${centerMe} font-semibold text-[12px] ${projectInfo.Initialize.textColor}`}>Initialize</div>
                    </div>
                    <div className={` ${projectInfo.Experiment.widthSolo} h-5 flex pl-2 pr-2`}>
                        {projectInfo["sprint"].map((item, idx) => {

                            return (<div className={`w-full ${centerMe} font-semibold text-[12px] ${projectInfo.Experiment.textColor}`}>Sprint {idx + 1}</div>)
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

// export default ProjectBar;
