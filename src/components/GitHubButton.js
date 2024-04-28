   
import React from 'react';     
import "../styles/style.css"; 


const RepoLink = ({ link, onClick}) => {
    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"            
            onClick={onClick}
        >
            View on GitHub
        </a>
    );
};

export default RepoLink;