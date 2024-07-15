// Filename - pages/projects/ANN.js

import ProjectPage from "../ProjectPage";
import links from "../../../components/linkMetadata";

const ANN = () => {
    const project_data = {
      name: "Artificial Neural Networks",
      topics: [
        {
          title: "Convolutional Neural Network",
          pagelink: "cnn",
          description: "todo",
          url: links.cnn.url
        },
        {
          title: "Long Short-Term Memory Network",
          pagelink: "lstm",
          description: "todo",
          url: links.lstm.url
        },
        {
            title: "Residual Neural Network",
            pagelink: "resnet",
            description: "todo",
            url: links.resnet.url
          },
      ],
    };
  
    return ProjectPage({ project_data });
  };

export default ANN;
  