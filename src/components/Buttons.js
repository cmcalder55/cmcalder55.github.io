
import React from 'react';     
import "../styles/style.css"; 


const handleClick = (url) => {
    window.open(url);
};

const RepoLink = ({ link }) => {

    return (
        <a 
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"            
            onClick={ () => handleClick(link) } 
        >
            View on GitHub
        </a>
    );
};

const LearnMore = ({ link }) => {

    return (
        <button className="learn-more-button"
            href={link}
            onClick={ () => { handleClick(link); }}
        >
            Learn More
        </button> 
    );
};

export {RepoLink, LearnMore};