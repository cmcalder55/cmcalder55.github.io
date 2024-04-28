// Filename - pages/projects/FeatureExtraction/FeatureExtraction.js

import ProjectPage from "../../ProjectPage";

export const Index = () => {
  const project_data = {
    name: "Feature Extraction",
    topics: [
      {
        title: "Autoencoder",
        pagelink: "autoencoder",
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
        pagelink: "hidden-layer",
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
        pagelink: "semantic-net",
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
        pagelink: "embedding",
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

export const Autoencoder = () => {

}

export const Hidden = () => {

}

export const Semantic = () => {

}

export const Embedding = () => {

}
