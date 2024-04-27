// Filename - pages/projects/FeatureExtraction/FeatureExtraction.js

import ProjectPage from "../../ProjectPage";

const FeatureExtraction = () => {
  const project_data = {
    name: "Feature Extraction",
    topics: [
      {
        title: "Residual Networks",
        pagelink: "res_net",
        description: "Information about topic 1",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Music Recommender",
        pagelink: "flower",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Semantic Analysis Methods",
        pagelink: "flower",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Text Clustering & Classification",
        pagelink: "flower",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Stochastic Backpropegation",
        pagelink: "flower",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      // Add more topics as needed
    ],
  };

  return ProjectPage({ project_data });
};

export default FeatureExtraction;
