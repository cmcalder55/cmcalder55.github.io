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
                        {/* New Group "Control Systems" with Sublinks */}
                        <li className="nav-item">
                            <span className="nav-link">Control Systems</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* New Group "Robotics" with Sublinks */}
                        <li className="nav-item">
                            <span className="nav-link">Robotics</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        Robotics
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* New Group "3D Rendering" with Sublinks */}
                        <li className="nav-item">
                            <span className="nav-link">3D Rendering</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        Blender3D
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* New Group "Optimization" with Sublinks */}
                        <li className="nav-item">
                            <span className="nav-link">Optimization</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* New Group "Pattern Recognition" with Sublinks */}
                        <li className="nav-item">
                            <span className="nav-link">Pattern Recognition</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* New Group "Prediction" with Sublinks */}
                        <li className="nav-item">
                            <span className="nav-link">Prediction</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="content">
                <Outlet /> {/* For Nested Routes if necessary */}
            </main>
        </div>
    );
};

export default ProjectsLayout;
