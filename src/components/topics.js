import links from "./links";

const data = {
    name: "Projects",
    topics: [
        {
            title: "Autonomous Mobile Robotics Path Planning",
            pagelink: "path-planning",
            description: "SLAM mapping, Path Planning with localization uncertainty",
            url: links.pathPlanning.url,
        },
        {
            title: "PI-Based Auto-Tuning for Experiment Optimization",
            pagelink: "pi-controller",
            description: "Automation and Machine Learning for Robust Self-Tuning of Magneto-Optical Traps",
            url: links.piCtrl.url,
        },
        {
            title: "Underactuated Robotic Gripper",
            pagelink: "ua-robotics",
            description: "creation of a low-cost robotic hand that can be attached to a commercial robotic arm for various complex manipulation tasks",
            url: links.uaHand.url
        },
        {
            title: "Forward/Inverse Kinematics",
            pagelink: "fi-kinematics",
            description: "todo",
            url: links.fiKin.url
        },
        {
            title: "Blender3D Flower Generator",
            pagelink: "flower-generator",
            description: "todo",
            url: links.flowerGen.url
          },
          {
            title: "Navali's Oracle",
            pagelink: "navalis-oracle",
            description: "todo",
            url: links.PoeOracle.url
          },
          {
            title: "Automated Bottle Storage",
            pagelink: "auto-storage",
            description: "todo",
            url: links.autoStore.url
          },
          {
            title: "Convolutional Neural Networks",
            pagelink: "cnn",
            description: "- Hidden/Dense Layers sequential model\n    - Test the effects of different numbers of hidden layers on the IMDB dataset\n\n\
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
        {
            title: "Auto-Encoder",
            pagelink: "autoencoder",
            description: "todo",
            url: links.autoEn.url
          },
          {
            title: "Semantic Network Analysis",
            pagelink: "semantic-net",
            description: "todo",
            url: links.semanticNet.url
          },
          {
            title: "Conditional Class Density",
            pagelink: "prob-density",
            description: "todo",
            url: links.probDen.url
          },
          {
            title: "Genetic Algorithms",
            pagelink: "gen-alg",
            description: "gen_alg",
            url: links.genAlg.url
          },
          {
            title: "Computer Vision Assisted LaPlacian Regression",
            pagelink: "cv-laplacian",
            description: "todo",
            url: links.compVis.url
          },
          {
            title: "Linear Regression Models",
            pagelink: "lin-reg",
            description: "todo",
            url: links.linReg.url
          },
          {
            title: "Logistic Regression Models",
            pagelink: "log-reg",
            description: "todo",
            url: links.logReg.url
          },
          {
            title: "Log-Barrier Optimization",
            pagelink: "log-barrier",
            description: "todo",
            url: links.logBar.url
          },
          {
            title: "Gradient Descent Methods",
            pagelink: "gradient-descent",
            description: "todo",
            url: links.gradDesc.url
          },
          {
            title: "Matrix Factorization",
            pagelink: "matrix-fac",
            description: "Information about topic 2",
            url: links.matFac.url
          },
          {
            title: "Bayes Estimation",
            pagelink: "bayes-est",
            description: "Information about topic 2",
            url: links.bayesEst.url
          },
          {
            title: "Stochastic Backpropegation",
            pagelink: "stoc-backprop",
            description: "Information about topic 2",
            url: links.stocProp.url
          },
          {
            title: "Decision Tree",
            pagelink: "decision-tree",
            description: "todo",
            url: links.dtClass.url
        },
        {
            title: "Music Recommendation Model",
            pagelink: "music-recommender",
            description: "Music Recommender",
            url: links.musicRec.url
        },
        {
            title: "Predict Global Game Sales",
            pagelink: "predict-sales",
            description: "todo",
            url: links.predSales.url
        },
        {
            title: "Text Classification",
            pagelink: "text-classifiers",
            description: "todo",
            url: links.textCluster.url
        },
        {
            title: "Text Clustering",
            pagelink: "text-clustering",
            description: "todo",
            url: links.textClf.url
        },
        {
            title: "Word Vectorization",
            pagelink: "vectorization",
            description: "todo",
            url: links.toVector.url
        },
        {
            title: "Text Processing",
            pagelink: "text-processing",
            description: "todo",
            url: links.textProc.url
        },
        {
            title: "Network Graphs",
            pagelink: "network-graph",
            description: "todo",
            url: links.netGraph.url
        },
        {
            title: "Web Scraping",
            pagelink: "web-scraping",
            description: "todo",
            url: links.webScr.url
        }
    ],
};

export default data;