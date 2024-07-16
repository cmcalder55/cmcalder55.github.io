// In ProjectsLayout.js

import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/style.css";

const ProjectsLayout = () => {
  return (
    <div className="pages-layout">
      <main className="content">
        <Outlet /> {/* For Nested Routes if necessary */}
      </main>
    </div>
  );
};

export default ProjectsLayout;
