// Filename - pages/Home.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = (e) => {
    e.stopPropagation(); // Prevent clicking the link when toggling
    setIsExpanded(!isExpanded);
  };

  const listContent = [
    "Content for Item 1", 
    "item2", 
    "item3"
  ]; // Content list

  return (
    <div>
      <h1><NavLink to="/about">&gt; About</NavLink></h1>

      {/* Expandable Projects Header */}
      <h1>
        <NavLink to="/projects">&gt; Projects</NavLink>{" "}
        <span style={{ cursor: "pointer" }} onClick={toggleExpansion}>
          {isExpanded ? "[-]" : "[+]"}
        </span>
      </h1>

      {/* Expanded List */}
      {isExpanded && (
        <ul style={{ listStyle: 'none', paddingLeft: '30px' }}>
          {listContent.map((text, index) => (
            <li key={index}>
              <a>- {text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
