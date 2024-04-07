// Filename - pages/projects/Robotics.js

import ProjectPage from "../ProjectPage";

const Robotics = () => {
  const project_data = {
    name: "Robotics",
    topics: [
      {
        title: "Underactuated Robotic Hand",
        pagelink: "flower",
        description: "Information about topic 1",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/flower-generator-blender3d",
          },
        ],
      },
      {
        title: "Robot Simulations",
        pagelink: "flower",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://example.com/link2",
          },
        ],
      },
      // Add more topics as needed
    ],
  };

  return ProjectPage({ project_data });
};

export default Robotics;
