// Filename - pages/projects/Optimization/Optimization.js

import ProjectPage from "../ProjectPage";

const Optimization = () => {
  const project_data = {
    name: "Optimization",
    topics: [
      {
        title: "Urban Planning with Genetic Algorithms",
        pagelink: "/optimization/gen_alg",
        description: "gen_alg",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Linear Regression Models",
        pagelink: "/optimization/lin_reg",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Log-Barrier Optimization",
        pagelink: "/optimization/log_barrier",
        description: "Information about topic",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/log-barrier-optimization",
          },
        ],
      },
      {
        title: "Gradient Descent Methods",
        pagelink: "/optimization/gradient_descent",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Matrix Factorization",
        pagelink: "/optimization/matrix_factorization",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "LTSM Network",
        pagelink: "/optimization/ltsm_net",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      // Add more topics as needed
    ],
  };

  return ProjectPage({ project_data });
};

export default Optimization;
