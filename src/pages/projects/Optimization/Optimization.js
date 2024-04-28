// Filename - pages/projects/Optimization/Optimization.js

import ProjectPage from "../../ProjectPage";
import links from "../../../components/linkMetadata";

const Optimization = () => {
  const project_data = {
    name: "Optimization",
    topics: [
      {
        title: "Urban Planning with Genetic Algorithms",
        pagelink: "gen-alg",
        description: "gen_alg",
        url: links.genAlg.url
      },
      {
        title: "Linear Regression Models",
        pagelink: "lin-reg",
        description: "Information about topic 2",
        url: links.linReg.url
      },
      {
        title: "Log-Barrier Optimization",
        pagelink: "log-barrier",
        description: "Information about topic",
        url: links.logBar.url
      },
      {
        title: "Gradient Descent Methods",
        pagelink: "gradient-descent",
        description: "Information about topic 2",
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