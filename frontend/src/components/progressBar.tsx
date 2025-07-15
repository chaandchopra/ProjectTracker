
interface ProgressBarProps {
    percent: number; // 0 to 100
    color: string;
}

interface SprintProgressBarProps {
    percent: number;
    color: string;
    index: number; 
    last?: number; 
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percent, color }) => {
    const safePercent = Math.min(Math.max(percent, 0), 100); // clamp between 0 and 100

    return (
        <div className="w-full h-8 bg-gray-200 rounded-md overflow-hidden shadow-inner">
            <div
                className={`h-full ${color} transition-all duration-500`}
                style={{ width: `${safePercent}%` }}
            ></div>
        </div>
    );
};

export const SprintProgressBar: React.FC<SprintProgressBarProps> = ({ percent, color, index, last }) => {
    const safePercent = Math.min(Math.max(percent, 0), 100); // clamp between 0 and 100
    let borderRadius = "border-r-2"; // middle items get right border
    if(index == last) {
        borderRadius = " rounded-r-md"; // last item gets rounded right edge
    }
    else if (index == 0){
        borderRadius = " border-r-2 rounded-l-md"; // first item gets rounded left edge
    }
    // const borderRadius = key==last ? "border-0" : "border-r-2 border-gray-800";
    return (
        <div className={`w-full h-8 bg-gray-200 overflow-hidden shadow-inner border-gray-300 ${borderRadius}`}>
            <div
                className={`h-full ${color} transition-all duration-500`}
                style={{ width: `${safePercent}%` }}></div>
        </div>
    );
};

// export default ProgressBar;
