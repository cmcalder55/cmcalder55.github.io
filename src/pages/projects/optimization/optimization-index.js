// Filename - pages/projects/Optimization/Optimization.js

import ProjectPage from "../ProjectPage";
import links from "../../../components/linkMetadata";

const Optimization = () => {
  const project_data = {
    name: "Optimization",
    topics: [
      {
        title: "Genetic Algorithms",
        pagelink: "gen-alg",
        description: "gen_alg",
        url: links.genAlg.url
      },
      {
        title: "Computer Vision Assisted LaPlacian Regression",
        pagelink: "computer-vis",
        description: "todo",
        url: links.genAlg.url
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
        url: links.linReg.url
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
    ],
  };

  return ProjectPage({ project_data });
};

export default Optimization;