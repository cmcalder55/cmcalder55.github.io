// Filename - pages/projects/ANN.js

import ProjectPage from "../../ProjectPage";

let github_link = "View on GitHub";

export const Index = () => {
    const project_data = {
      name: "Artificial Neural Networks",
      topics: [
        {
          title: "Convolutional Neural Network",
          pagelink: "cnn",
          description: "Blender3D Python script to generate cherry blossoms.",
          links: [
            {
              text: github_link,
              url: "https://github.com/cmcalder55/ann/tree/main/cnn",
            },
          ],
        },
        {
          title: "Long Short-Term Memory Network",
          pagelink: "ltsm",
          description: "Information about topic 2",
          links: [
            {
              text: github_link,
              url: "https://github.com/cmcalder55/ann/tree/main/ltsm",
            },
          ],
        },
        {
            title: "Residual Network",
            pagelink: "rnn",
            description: "Information about topic 2",
            links: [
              {
                text: github_link,
                url: "https://github.com/cmcalder55/ann/tree/main/rnn",
              },
            ],
          },
      ],
    };
  
    return ProjectPage({ project_data });
  };
  
export const CNN = () => {

}

export const LTSM = () => {
  
}

export const RNN = () => {
  
}
  