// Filename - pages/projects/Classification/Classification.js

import ProjectPage from "../../ProjectPage";
import links from "../../../components/linkMetadata";

const Classification = () => {
    const project_data = {
      name: "Classification",
      topics: [
        {
          title: "Music Recommendation Model",
          pagelink: "music-recommender",
          description: "Music Recommender",
          url: links.musicRec.url
        },
        {
          title: "Gaussian Mixture Model",
          pagelink: "gmm",
          description: "todo",
          url: links.gmModel.url
        },
        {
          title: "Text Clustering",
          pagelink: "text-clustering",
          description: "todo",
          url: links.textCluster.url
        },
        {
          title: "Naive-Bayes",
          pagelink: "naive-bayes",
          description: "todo",
          url: links.naiveBayes.url
        },
        {
          title: "Linear SVM",
          pagelink: "linear-svm",
          description: "todo",
          url: links.linearSvm.url
        },
        {
          title: "Decision Tree",
          pagelink: "decision-tree",
          description: "todo",
          url: links.dtClass.url
        },
      ],
    };
  
    return ProjectPage({ project_data });
  };

export default Classification;