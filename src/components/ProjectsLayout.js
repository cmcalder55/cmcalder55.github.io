
// In ProjectsLayout.js

import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./ProjectsLayout.css";
import "./Layout.css";

const ProjectsLayout = () => {
	return (
		<div className="projects-layout">
			<aside className="sidebar">
				<nav>
					<ul>
						{ /* Side Navbar Links */}
                        <li className="nav-item">
                            <NavLink to="/projects/auto-driving" className="nav-link" end>
                                Robotics
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                Blender3D
                            </NavLink>
                        </li>
					</ul>
				</nav>
			</aside>
			<main className="content">
				{/* Your Projects Content Here */}
				<Outlet /> {/* For Nested Routes if necessary */}
			</main>
		</div>
	);
};
		
export default ProjectsLayout;