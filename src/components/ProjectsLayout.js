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
                            <span className="nav-link">Control Systems/Automation</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        Automated Bottle Storage
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Mirror Mounts PI Controller
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* New Group "Robotics" with Sublinks */}
                        <li className="nav-item">
                            <span className="nav-link">Automated Robotics</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        Robotic Kinematics
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Underactuated Robotic Manipulator
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* New Group "3D Rendering" with Sublinks */}
                        <li className="nav-item">
                            <span className="nav-link">3D Rendering/Simulating</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Blender3D Flower Generator
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
                                        Gradient Descent (Newton's Method)
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Linear Regression
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Log-Barrier Optimization
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Urban Planning Genetic Algorithm
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* New Group "Pattern Recognition" with Sublinks */}
                        <li className="nav-item">
                            <span className="nav-link">Pattern Recognition/Classification</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        Class-Conditional Density
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Indeed Marketable Skills Scraper
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Linear SVM Classifier
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Multinomial Naive Bayes Classifier
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Text Clustering
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* New Group "Prediction" with Sublinks */}
                        <li className="nav-item">
                            <span className="nav-link">Recommender Systems</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        Matrix Factorization
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        ###
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Prediction Systems</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        Stock Predictor
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Computer Vision Surface Tension Predictor
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Web Scraping</span>
                            <ul className="nav-sublist">
                                <li className="nav-item">
                                    <NavLink to="/projects/auto-driving" className="nav-link" end>
                                        Scrape TripAdvisor Reviews
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects/blender-flowers" className="nav-link" end>
                                        Twitter Scraping
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
