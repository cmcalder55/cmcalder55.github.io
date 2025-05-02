// Filename - pages/projects/FeatureExtraction/FeatureExtraction.js

import ProjectPage from "../ProjectPage";
import links from "../../../components/linkMetadata";

const FeatureExtraction = () => {
  const project_data = {
    name: "Feature Extraction",
    topics: [
      {
        title: "Auto-Encoder",
        pagelink: "autoencoder",
        description: "todo",
        url: links.autoEn.url
      },
      {
        title: "Semantic Network Analysis",
        pagelink: "semantic-net",
        description: "todo",
        url: links.semanticNet.url
      },
      {
        title: "Conditional Class Density",
        pagelink: "prob-density",
        description: "todo",
        url: links.probDen.url
      },
    ],
  };

  return ProjectPage({ project_data });
};

export default FeatureExtraction;