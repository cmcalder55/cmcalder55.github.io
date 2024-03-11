import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const ProjectPage = ({ project_data }) => {
  let navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div className="main">
      <h1>{project_data.name}</h1>
      {project_data.topics.map((topic, index) => (
        <div
          key={index}
          className="topic-container"
          onClick={() => handleClick(topic.pagelink)}
        >
          <div className="topic-text-content">
            <h2>
              <a href={topic.pagelink} className="topic-title">
                {topic.title}
              </a>
            </h2>
            <p>Information about the topic</p>
            <div>
              {topic.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
