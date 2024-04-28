// Filename - pages/projects/PreProcessing.js

import ProjectPage from "../../ProjectPage";

export const Index = () => {
  const project_data = {
    name: "Pre-Processing",
    topics: [
      {
        title: "Web Scraping",
        pagelink: "web-scraping",
        description: "Information about topic 1",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/pre-processing/tree/main/web-scraping",
          },
        ],
      },
      {
        title: "Vector Representation",
        pagelink: "vectorization",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/pre-processing/tree/main/vector-representation",
          },
        ],
      },
    ],
  };

  return ProjectPage({ project_data });
};

export const WebScraping = () => {

}

export const Vectorization = () => {

}
