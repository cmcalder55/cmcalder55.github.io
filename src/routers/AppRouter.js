// src/router/AppRouter.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProjectsLayout from "../components/ProjectsLayout";
import HomeLayout from "../components/HomeLayout";

import Interests from "../pages/Interests";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Optimization from "../pages/projects/Optimization";
import ControlSystems from "../pages/projects/ControlSystems";
import MachineLearningAI from "../pages/projects/MachineLearningAI";
import Automation from "../pages/projects/Automation/Automation";
import Robotics from "../pages/projects/Robotics";
import Miscellaneous from "../pages/projects/Miscellaneous";

import Flower from "../pages/projects/project_pages/flower_generator";
import LogBarrier from "../pages/projects/project_pages/log_barrier";
import RoboticHand from "../pages/projects/project_pages/ua_robotic_hand";
import PathFindingSim from "../pages/projects/Automation/path_finding";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Redirect to Home as the default route */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          {/* About page */}
          <Route path="about" element={<About />} />

          {/* Projects page with subroutes */}
          <Route path="projects" element={<ProjectsLayout />}>
            <Route index element={<Projects />} />
            {/* optimization pages */}
            <Route path="optimization" element={<Optimization />} />
            <Route path="optimization/log_barrier" element={<LogBarrier />} />
            {/* <Route path="optimization/lin_reg" element={<Optimization />} />
            <Route path="optimization/gr_descent" element={<Optimization />} />
            <Route path="optimization/matrix_fac" element={<Optimization />} />
            <Route path="optimization/ltsm_net" element={<Optimization />} />
            <Route path="optimization/comp_vis" element={<Optimization />} /> */}

            {/* control systems pages */}
            <Route path="control_systems" element={<ControlSystems />} />
            <Route path="control_systems/ua_robotic_hand" element={<RoboticHand />} />

            {/* machine learning / ai pages */}
            <Route path="machine_learning_ai" element={<MachineLearningAI />} />

            {/* automation pages */}
            <Route path="automation" element={<Automation />} />
            <Route path="automation/flower_generator" element={<Flower />} />
            <Route path="automation/path_planning" element={<PathFindingSim />} />

            {/* pre-processing pages */}
            <Route path="robotics" element={<Robotics />} />

            {/* miscellaneous pages */}
            <Route path="misc" element={<Miscellaneous />} />
          </Route>

          {/* interests pages */}
          <Route path="interests" element={<Interests />} />
          {/* <Route path="interests/bookshelf" element={<Optimization />} />
          <Route path="interests/art" element={<Optimization />} />
          <Route path="interests/games" element={<Optimization />} />
          <Route path="interests/technical" element={<Optimization />} /> */}

          {/* Catch any undefined URLs (404 error) */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
