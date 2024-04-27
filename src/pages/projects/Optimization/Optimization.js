// Filename - pages/projects/Optimization/Optimization.js

import ProjectPage from "../../ProjectPage";

const Optimization = () => {
  const project_data = {
    name: "Optimization",
    topics: [
      {
        title: "Urban Planning with Genetic Algorithms",
        pagelink: "/optimization/gen-alg",
        description: "gen_alg",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/optimization/tree/main/genetic_algorithm",
          },
        ],
      },
      {
        title: "Linear Regression Models",
        pagelink: "/optimization/lin-reg",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/optimization/tree/main/linear_regression",
          },
        ],
      },
      {
        title: "Log-Barrier Optimization",
        pagelink: "/optimization/log-barrier",
        description: "Information about topic",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/optimization/tree/main/log_barrier",
          },
        ],
      },
      {
        title: "Gradient Descent Methods",
        pagelink: "/optimization/gradient-descent",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/optimization/tree/main/gradient_descent",
          },
        ],
      },
      {
        title: "Matrix Factorization",
        pagelink: "/optimization/matrix-fac",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/optimization/tree/main/matrix_factorization",
          },
        ],
      },
      {
        title: "Bayes Estimation",
        pagelink: "/optimization/bayes-est",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/optimization/tree/main/bayes_estimation",
          },
        ],
      },
      {
        title: "Stochastic Backpropegation",
        pagelink: "/optimization/stoc-backprop",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/optimization/tree/main/stochastic_backpropegation",
          },
        ],
      },
    ],
  };

  return ProjectPage({ project_data });
};

export default Optimization;
