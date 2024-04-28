// Filename - pages/projects/Classification/Classification.js

import ProjectPage from "../../ProjectPage";

let github_link = "View on GitHub";

export const Index = () => {
    const project_data = {
      name: "Classification",
      topics: [
        {
          title: "Music Recommendation Model",
          pagelink: "music-recommender",
          description: "Music Recommender",
          links: [
            {
              text: github_link,
              url: "https://github.com/cmcalder55/classification/tree/main/music-recommender",
            },
          ],
        },
        {
          title: "Gaussian Mixture Model",
          pagelink: "gmm",
          description: "todo",
          links: [
            {
              text: github_link,
              url: "https://github.com/cmcalder55/classification/blob/main/gmm_density.ipynb",
            },
          ],
        },
        {
          title: "Text Clustering",
          pagelink: "text-clustering",
          description: "todo",
          links: [
            {
              text: github_link,
              url: "https://github.com/cmcalder55/classification/blob/main/text_clustering.ipynb",
            },
          ],
        },
        {
          title: "Naive-Bayes",
          pagelink: "naive-bayes",
          description: "todo",
          links: [
            {
              text: github_link,
              url: "https://github.com/cmcalder55/classification/blob/main/naive-bayes.ipynb",
            },
          ],
        },
        {
          title: "Linear SVM",
          pagelink: "linear-svm",
          description: "todo",
          links: [
            {
              text: github_link,
              url: "https://github.com/cmcalder55/classification/blob/main/linear_svm.ipynb",
            },
          ],
        },
        {
          title: "Decision Tree",
          pagelink: "decision-tree",
          description: "todo",
          links: [
            {
              text: github_link,
              url: "https://github.com/cmcalder55/classification/blob/main/decision_tree_classifier.ipynb",
            },
          ],
        },
      ],
    };
  
    return ProjectPage({ project_data });
  };
  
export const NB = () => {
  
}

export const SVM = () => {
  
}

export const GMM = () => {
  
}

export const MusicRec = () => {
  
}

export const TextClustering = () => {
  
}

export const DecisionTree = () => {
  
}