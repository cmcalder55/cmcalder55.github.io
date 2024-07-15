
import React from 'react';     
import "../styles/style.css"; 

const RepoLink = ({ link }) => {

    const handleClick = (url) => {
        window.open(url);
    };

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

export default RepoLink;