// Filename - pages/projects/FeatureExtraction/FeatureExtraction.js

import ProjectPage from "../../ProjectPage";

const FeatureExtraction = () => {
  const project_data = {
    name: "Feature Extraction",
    topics: [
      {
        title: "Autoencoder",
        pagelink: "/feature-extraction/autoencoder",
        description: "Information about topic 1",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Hidden Layer Network",
        pagelink: "/feature-extraction/hidden-layer",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Semantic Network Analysis",
        pagelink: "/feature-extraction/semantic-net",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Vector Embedding",
        pagelink: "/feature-extraction/embedding",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
    ],
  };

  return ProjectPage({ project_data });
};

export default FeatureExtraction;
