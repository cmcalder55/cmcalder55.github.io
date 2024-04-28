// Filename - pages/projects/Optimization/Optimization.js

import ProjectPage from "../../ProjectPage";

export const Index = () => {
  const project_data = {
    name: "Optimization",
    topics: [
      {
        title: "Urban Planning with Genetic Algorithms",
        pagelink: "gen-alg",
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
        pagelink: "lin-reg",
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
        pagelink: "log-barrier",
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
        pagelink: "gradient-descent",
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
        pagelink: "matrix-fac",
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
        pagelink: "bayes-est",
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
        pagelink: "stoc-backprop",
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

export const GenAlg = () => {

}

export const LinAlg = () => {

}

export const LogBarrier = () => {

}

export const GradientDescent = () => {

}

export const Factorization = () => {

}

export const BayesEst = () => {

}

export const Backprop = () => {

}
