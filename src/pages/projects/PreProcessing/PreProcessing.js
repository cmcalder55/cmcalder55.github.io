// Filename - pages/projects/PreProcessing.js

import ProjectPage from "../ProjectPage";
import links from "../../../components/linkMetadata";

const PreProcessing = () => {
  const project_data = {
    name: "Pre-Processing",
    topics: [
      {
        title: "Web Scraping",
        pagelink: "web-scraping",
        description: "Information about topic 1",
        url: links.scrape.url
      },
      {
        title: "Vector Representation",
        pagelink: "vectorization",
        description: "Information about topic 2",
        url: links.toVector.url
      },
    ],
  };

  return ProjectPage({ project_data });
};

export default PreProcessing;