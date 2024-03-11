import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const Projects = () => {
  let navigate = useNavigate();

  const squaresData = [
    { url: "/projects/control_systems", text: "Control Systems" },
    { url: "/projects/machine_learning_ai", text: "Machine Learning / AI" },
    { url: "/projects/automation", text: "Automation" },
    { url: "/projects/optimization", text: "Optimization" },
    { url: "/projects/robotics", text: "Robotics" },
    { url: "/projects/misc", text: "Miscellaneous" },
    // Add more objects for more squares/projects
  ];

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      {/* <p>Here are some of the projects I have worked on.</p> */}
      <div className="grid-container">
        {/* Render the squares with their corresponding URLs and text */}
        {squaresData.map((square, index) => (
          <div
            key={index}
            className="square"
            onClick={() => handleClick(square.url)}
          >
            <div className="square"></div>
            <div className="square-text">{square.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
