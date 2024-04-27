// Filename - pages/projects/Classification/Classification.js

import ProjectPage from "../../ProjectPage";

const Classification = () => {
    const project_data = {
      name: "Classification",
      topics: [
        {
          title: "Music Recommendation Model",
          pagelink: "/classification/music-recommender",
          description: "Music Recommender",
          links: [
            {
              text: "View on GitHub",
              url: "https://github.com/cmcalder55/classification/tree/main/music-recommender",
            },
          ],
        },
        {
          title: "Gaussian Mixture Model",
          pagelink: "/classification/gmm",
          description: "todo",
          links: [
            {
              text: "View on GitHub",
              url: "https://github.com/cmcalder55/classification/blob/main/gmm_density.ipynb",
            },
          ],
        },
        {
          title: "Text Clustering",
          pagelink: "/classification/text-clustering",
          description: "todo",
          links: [
            {
              text: "View on GitHub",
              url: "https://github.com/cmcalder55/classification/blob/main/text_clustering.ipynb",
            },
          ],
        },
        {
          title: "Naive-Bayes",
          pagelink: "/classification/naive-bayes",
          description: "todo",
          links: [
            {
              text: "View on GitHub",
              url: "https://github.com/cmcalder55/classification/blob/main/naive-bayes.ipynb",
            },
          ],
        },
        {
          title: "Linear SVM",
          pagelink: "/classification/linear-svm",
          description: "todo",
          links: [
            {
              text: "View on GitHub",
              url: "https://github.com/cmcalder55/classification/blob/main/linear_svm.ipynb",
            },
          ],
        },
        {
          title: "Decision Tree",
          pagelink: "/classification/decision-tree",
          description: "todo",
          links: [
            {
              text: "View on GitHub",
              url: "https://github.com/cmcalder55/classification/blob/main/decision_tree_classifier.ipynb",
            },
          ],
        },
      ],
    };
  
    return ProjectPage({ project_data });
  };
  
  export default Classification;