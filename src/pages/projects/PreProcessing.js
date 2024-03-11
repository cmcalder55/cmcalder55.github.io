// Filename - pages/projects/MachineLearningAI.js

import ProjectPage from "../ProjectPage";

const PreProcessing = () => {
  const project_data = {
    name: "Pre-Processing",
    topics: [
      {
        title: "Vectorization",
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
        title: "Tokenization",
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
        title: "TFIDF",
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

export default PreProcessing;
