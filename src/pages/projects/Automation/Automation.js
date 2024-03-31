// Filename - pages/projects/Automation.js

import ProjectPage from "../../ProjectPage";

const Automation = () => {
  const project_data = {
    name: "Automation",
    topics: [
      {
        title: "Blender3D Flower Generator",
        pagelink: "flower",
        description: "Blender3D Python script to generate cherry blossoms.",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/art/tree/main/flower-generator-blender3d",
          },
        ],
      },
      {
        title: "Path Finding",
        pagelink: "path_finding",
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

export default Automation;
