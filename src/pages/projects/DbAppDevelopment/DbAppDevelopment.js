// Filename - pages/projects/Classification/DbAppDevelopment.js

import ProjectPage from "../../ProjectPage";

const DbAppDev = () => {
    const project_data = {
      name: "DB / App Development",
      topics: [
        {
          title: "Blender3D Flower Generator",
          pagelink: "/db-app-dev/flower-generator",
          description: "todo",
          links: [
            {
              text: "View on GitHub",
              url: "https://github.com/cmcalder55/flower-generator",
            },
          ],
        },
        {
          title: "Navali's Oracle",
          pagelink: "/db-app-dev/navalis-oracle",
          description: "todo",
          links: [
            {
              text: "View on GitHub",
              url: "https://github.com/cmcalder55/navalis-oracle",
            },
          ],
        },
      ],
    };
  
    return ProjectPage({ project_data });
  };
  
  export default DbAppDev;