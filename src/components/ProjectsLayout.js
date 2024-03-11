// In ProjectsLayout.js

import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../styles/style.css";

const ProjectsLayout = () => {
  return (
    <div className="projects-layout">
      <main className="content">
        <Outlet /> {/* For Nested Routes if necessary */}
      </main>
    </div>
  );
};

export default ProjectsLayout;
