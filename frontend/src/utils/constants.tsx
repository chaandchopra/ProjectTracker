export const initialForm = {
    "proj_id": "",
    "proj_name": "",
    "concept": 0,
    "initial": 0,
    "sprint": [0, 0, 0, 0, 0, 0],
    "sprint_notes": "",
    "technology": "",
    "business_function": "",
    "initiation_date": "",
    "sprint_start": ""
}


export const projMetaData = {
    "Label": {
        "label": "Label",
        "width": "w-[20%]",
        "widthSolo": "w-[0%]",
        "bgColor": "bg-blue-600",
        "textColor": "text-blue-600",
        "isFooter": false,
        "isHeader": false,
    },
    "Conceptualize": {
        "label": "Conceptualize",
        "description": "Project concept, exploring feasibility",
        "width": "w-[10%]",
        "widthSolo": "w-[15%]",
        "bgColor": "bg-blue-600",
        "textColor": "text-blue-600",
        "isFooter": true,
        "isHeader": false,
    },
    "Initialize": {
        "label": "Initialize",
        "description": "Team formed, planning and initial design",
        "width": "w-[10%]",
        "widthSolo": "w-[15%]",
        "bgColor": "bg-orange-400",
        "textColor": "text-orange-400",
        "isFooter": true,
        "isHeader": false,

    },
    "Experiment": {
        "label": "Experiment",
        "description": "MVP development, iterative testing",
        "width": "w-[60%]",
        "widthSolo": "w-[70%]",
        "bgColor": "bg-teal-400",
        "textColor": "text-teal-400",
        "isFooter": true,
        "isHeader": false,
    }
}

export const centerMe="flex justify-center items-center"