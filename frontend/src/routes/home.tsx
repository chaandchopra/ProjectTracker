// import ProgressBar from "../components/progressBar";
import {ProjectList, Legend, ProjectHomeHeader} from "../components/projectList";

const Home = () => {
    return (
        <div className="p-4">
            <ProjectHomeHeader />
            <Legend />
            <ProjectList />
        </div>
    )
}

export default Home;