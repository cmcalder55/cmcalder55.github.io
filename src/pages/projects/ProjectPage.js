
import { RepoLink, LearnMore } from "../../components/Buttons";
import "../../styles/topics.css";

const ProjectPage = ({ project_data }) => {

    return (
        <div className="main">
            <h1>{project_data.name}</h1>
            {project_data.topics.map((topic, index) => (
                <div key={index} className="topic-container">
                    <div className="topic-info">
                        <h2>{topic.title} </h2>   
                        <RepoLink link={topic.url} />
                        <LearnMore link={topic.pagelink} />                                                
                    </div>
                    <div className="topic-description">
                        <p>{topic.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectPage;
