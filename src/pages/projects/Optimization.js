// Filename - pages/projects/Optimization.js

import ProjectPage from "../ProjectPage";

const Optimization = () => {
  const project_data = {
    name: "Optimization",
    topics: [
      {
        title: "Urban Planning with Genetic Algorithms",
        pagelink: "gen_alg",
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
        pagelink: "lin_reg",
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
        pagelink: "log_barrier",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/placeholder",
          },
        ],
      },
      {
        title: "Gradient Descent Methods",
        pagelink: "gr_descent",
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
        pagelink: "matrix_fac",
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
        pagelink: "ltsm_net",
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
