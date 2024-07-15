// Filename - pages/projects/PreProcessing.js

import ProjectPage from "../ProjectPage";
import links from "../../../components/linkMetadata";

const PreProcessing = () => {
    const project_data = {
        name: "Pre-Processing",
        topics: [
            {
                title: "One-Hot Encoder",
                pagelink: "one-hot-encoder",
                description: "todo",
                url: links.scrape.url
            },
            {
                title: "Word Vectorization",
                pagelink: "vectorization",
                description: "todo",
                url: links.toVector.url
            },
            {
                title: "Text Processing",
                pagelink: "text-processing",
                description: "todo",
                url: links.textCluster.url
            },
        ],
    };

    return ProjectPage({ project_data });
};

export default PreProcessing;