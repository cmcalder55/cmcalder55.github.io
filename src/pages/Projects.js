import React from "react";
import { RepoLink, LearnMore } from "../components/Buttons";
import "../styles/topics.css";
import "../styles/style.css";


const ProjectPage = ({ data }) => {

    return (
        <div className="main">
            <h1>{data.name}</h1>
            {data.topics.map((topic, index) => (
                <div key={index} className="topic-container">
                    <div className="topic-info">
                        <h2>{topic.title} </h2>   
                        <RepoLink link={topic.url} />
                        <LearnMore link={topic.pagelink} />                                                
                    </div>
                    <div className="topic-description">
                        <p>{topic.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectPage;