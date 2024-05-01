
import { useNavigate } from "react-router-dom";

import RepoLink from "../../components/GitHubButton";
import "../../styles/style.css";

const ProjectPage = ({ project_data }) => {

    // const location = useLocation(); // Hook to get location object
    // const handleClick = (link) => {
    //     // Append the provided link path to the current pathname
    //     const fullPath = `${window.location.origin}${location.pathname}/${link}`;
    //     window.navigator(fullPath, '_blank'); // Open new window with full path
    // };

    let navigator = useNavigate();
    const handleClick = (link) => {
        navigator(link);
    };

    return (
        <div className="main">
            <h1>{project_data.name}</h1>
            {project_data.topics.map((topic, index) => (
                <div
                    key={index}
                    className="topic-container"
                >
                    <div className="topic-text-content">
                        <h2>
                            <a href={topic.pagelink} className="topic-title">
                                {topic.title}
                            </a>
                        </h2>
                        <p>{topic.description}</p>
                        <div>
                            <RepoLink link={topic.url} />
                            <button
                                className="learn-more-button"
                                href={topic.pagelink}
                                onClick={ () => { handleClick(topic.pagelink); }}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectPage;
