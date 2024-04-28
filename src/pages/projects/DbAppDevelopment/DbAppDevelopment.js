// Filename - pages/projects/Classification/DbAppDevelopment.js

import ProjectPage from "../../ProjectPage";

export const Index = () => {
    const project_data = {
      name: "DB / App Development",
      topics: [
        {
          title: "Blender3D Flower Generator",
          pagelink: "flower-generator",
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
          pagelink: "navalis-oracle",
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
  
export const Flower = () => {

}

export const Oracle = () => {

}