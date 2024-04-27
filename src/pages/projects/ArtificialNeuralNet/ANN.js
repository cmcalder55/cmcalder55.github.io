// Filename - pages/projects/ANN.js

import ProjectPage from "../../ProjectPage";

const ANN = () => {
    const project_data = {
      name: "Artificial Neural Networks",
      topics: [
        {
          title: "Convolutional Neural Network",
          pagelink: "/ann/cnn",
          description: "Blender3D Python script to generate cherry blossoms.",
          links: [
            {
              text: "View on GitHub",
              url: "https://github.com/cmcalder55/ann/tree/main/cnn",
            },
          ],
        },
        {
          title: "Long Short-Term Memory Network",
          pagelink: "/ann/ltsm",
          description: "Information about topic 2",
          links: [
            {
              text: "View on GitHub",
              url: "https://github.com/cmcalder55/ann/tree/main/ltsm",
            },
          ],
        },
        {
            title: "Residual Network",
            pagelink: "/ann/rnn",
            description: "Information about topic 2",
            links: [
              {
                text: "View on GitHub",
                url: "https://github.com/cmcalder55/ann/tree/main/rnn",
              },
            ],
          },
      ],
    };
  
    return ProjectPage({ project_data });
  };
  
  export default ANN;
  