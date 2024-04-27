import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const Projects = () => {
  let navigate = useNavigate();

  // page square links
  const squaresData = [
    { url: "/projects/ann", text: "Artifical Neural Networks" },
    { url: "/projects/automation-and-controls", text: "Automation / Control Systems" },
    { url: "/projects/classification", text: "Classification" },
    { url: "/projects/db-app-dev", text: "DB / App Development" },  
    { url: "/projects/feature-extraction", text: "Feature Extraction" },
    { url: "/projects/optimization", text: "Optimization" },
    { url: "/projects/pre-processing", text: "Data Pre-Processing" },
  ];

  // go to the page url on clicking the square
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
