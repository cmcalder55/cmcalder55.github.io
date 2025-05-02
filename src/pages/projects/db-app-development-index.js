// Filename - pages/projects/DbAppDevelopment/DbAppDevelopment.js

import ProjectPage from "../ProjectPage";
import links from "../../../components/linkMetadata";

const DbAppDevelopment = () => {
    const project_data = {
      name: "DB / App Development",
      topics: [
        {
          title: "Blender3D Flower Generator",
          pagelink: "flower-generator",
          description: "todo",
          url: links.flowerGen.url
        },
        {
          title: "Navali's Oracle",
          pagelink: "navalis-oracle",
          description: "todo",
          url: links.PoeOracle.url
        },
        {
          title: "Automated Bottle Storage",
          pagelink: "auto-storage",
          description: "todo",
          url: links.autoStore.url
        },
      ],
    };
  
    return ProjectPage({ project_data });
  };
  
export default DbAppDevelopment;