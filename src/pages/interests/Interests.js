// pages/projects/AutomationAndControls/AutomationAndControls.js

import ProjectPage from "../projects/ProjectPage";
import links from "../../components/linkMetadata";

const Interests = () => {
  const project_data = {
    name: "Interests",
    topics: [
      {
        title: "a",
        pagelink: "a",
        description: "a",
        url: links.pathPlanning.url,
      },
      {
        title: "b",
        pagelink: "b",
        description: "b",
        url: links.piCtrl.url,
      },
      {
        title: "c",
        pagelink: "c",
        description: "c",
        url: links.uaHand.url
      },
    ],
  };

  return ProjectPage({ project_data });
};

export default Interests;