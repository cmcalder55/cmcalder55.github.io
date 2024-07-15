// Filename - pages/projects/Classification/Classification.js

import ProjectPage from "../ProjectPage";
import links from "../../../components/linkMetadata";

const PatternRecognition = () => {
    const project_data = {
        name: "Pattern Recognition",
        topics: [
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
        ],
    };

    return ProjectPage({ project_data });
};

export default PatternRecognition;