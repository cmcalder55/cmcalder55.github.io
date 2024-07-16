
import React from 'react';     
import "../styles/style.css"; 

import { useNavigate } from 'react-router-dom';

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

const LearnMore = ({ link }) => {

    const navigate = useNavigate();

    return (
        <button className="learn-more-button"
            href={link}
            onClick={ () => { navigate(link); }}
        >
            Learn More
        </button> 
    );
};

export {RepoLink, LearnMore};