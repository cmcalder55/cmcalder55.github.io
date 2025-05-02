// Filename - pages/projects/PreProcessing.js

import ProjectPage from "../ProjectPage";
import links from "../../components/linkMetadata";

const Utils = () => {
    const project_data = {
        name: "Utilities / Helpers",
        topics: [
            {
                title: "Network Graphs",
                pagelink: "network-graph",
                description: "todo",
                url: links.netGraph.url
            },
            {
                title: "Web Scraping",
                pagelink: "web-scraping",
                description: "todo",
                url: links.webScr.url
            },
        ],
    };

    return ProjectPage({ project_data });
};

export default Utils;