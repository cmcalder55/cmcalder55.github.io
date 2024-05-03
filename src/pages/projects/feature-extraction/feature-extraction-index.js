// Filename - pages/projects/FeatureExtraction/FeatureExtraction.js

import ProjectPage from "../ProjectPage";
import links from "../../../components/linkMetadata";

const FeatureExtraction = () => {
  const project_data = {
    name: "Feature Extraction",
    topics: [
      {
        title: "Autoencoder",
        pagelink: "autoencoder",
        description: "Information about topic 1",
        url: links.autoEn.url
      },
      {
        title: "Hidden Layer Network",
        pagelink: "hidden-layer",
        description: "Information about topic 2",
        url: links.hidden.url
      },
      {
        title: "Semantic Network Analysis",
        pagelink: "semantic-net",
        description: "Information about topic 2",
        url: links.semanticNet.url
      },
      {
        title: "Vector Embedding",
        pagelink: "embedding",
        description: "Information about topic 2",
        url: links.vecEmbed.url
      },
    ],
  };

  return ProjectPage({ project_data });
};

export default FeatureExtraction;