// Filename - pages/projects/ANN.js

import ProjectPage from "../../ProjectPage";
import links from "../../../components/linkMetadata";

const ANN = () => {
    const project_data = {
      name: "Artificial Neural Networks",
      topics: [
        {
          title: "Convolutional Neural Network",
          pagelink: "cnn",
          description: "Blender3D Python script to generate cherry blossoms.",
          url: links.cnn.url
        },
        {
          title: "Long Short-Term Memory Network",
          pagelink: "lstm",
          description: "Information about topic 2",
          url: links.lstm.url
        },
        {
            title: "Residual Network",
            pagelink: "rnn",
            description: "Information about topic 2",
            url: links.rnn.url
          },
      ],
    };
  
    return ProjectPage({ project_data });
  };

export default ANN;
  