// Filename - pages/projects/ANN.js

import ProjectPage from "../ProjectPage";
import links from "../../../components/linkMetadata";

const ANN = () => {
    const project_data = {
        name: "Artificial Neural Networks",
        topics: [
            {
                title: "Convolutional Neural Networks",
                pagelink: "cnn",
                description: "- Hidden Layers sequential model with Dense layers\n    - Test the effects of different numbers of hidden layers on the IMDB dataset\n\n\
- Test different CNN model setups\n    - ReLU vs. Leaky ReLU activation\n    - Increasing/decreasing dropout\n    - Additional convolution/activation/pooling hidden layer blocks",
                url: links.cnn.url
            },
            {
                title: "Long Short-Term Memory Network",
                pagelink: "lstm",
                description: "- LTSM recurrent neural networks and the vanishing gradient problem\n    - Predict airplane passenger counts over time",
                url: links.lstm.url
            },
            {
                title: "Residual Neural Network",
                pagelink: "resnet",
                description: "- Exploring the effect of different Res-Net model architectures on performance (Res-Net 18, 34, 50)\n    - Performance on the CIFAR-10 dataset\n\
    - Augmenting using additional synthetic/flipped images",
                url: links.resnet.url
            },
        ],
    };

    return ProjectPage({ project_data });
};

export default ANN;
