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
import ANN from "../pages/projects/ArtificialNeuralNet/ANN"
import Automation from "../pages/projects/AutomationAndControls/Automation";
import Classification from "../pages/projects/Classification/Classification"
import DbAppDev from "../pages/projects/DbAppDevelopment/DbAppDevelopment"
import  FeatureExtraction from "../pages/projects/FeatureExtraction/FeatureExtraction"
import Optimization from "../pages/projects/Optimization/Optimization"
import PreProcessing from "../pages/projects/PreProcessing/PreProcessing"

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

            {/* Artificial Neural Network pages */}
            <Route path="ann" element={<ANN />} />
            {/* <Route path="control_systems/ua_robotic_hand" element={<RoboticHand />} /> */}
            
            {/* Automation and Control Systems pages */}
            <Route path="automation-and-controls" element={<Automation />} />
            {/* <Route path="automation-and-controls/flower_generator" element={<Flower />} />
            <Route path="automation-and-controls/path_planning" element={<PathFindingSim />} /> */}

            {/* pre-processing pages */}
            <Route path="classification" element={<Classification />} />
            
            {/* Database / App Development pages */}
            <Route path="db-app-dev" element={<DbAppDev />} />

            {/* miscellaneous pages */}
            <Route path="feature-extraction" element={<FeatureExtraction />} />
          
            {/* Optimization pages */}
            <Route path="optimization" element={<Optimization />} />
            {/* <Route path="optimization/log_barrier" element={<LogBarrier />} /> */}
            {/* <Route path="optimization/lin_reg" element={<Optimization />} />
            <Route path="optimization/gradient_descent" element={<Optimization />} />
            <Route path="optimization/matrix_factorization" element={<Optimization />} />
            <Route path="optimization/ltsm_net" element={<Optimization />} /> */}
            {/* <Route path="optimization/comp_vis" element={<Optimization />} /> */}

            {/* miscellaneous pages */}
            <Route path="pre-processing" element={<PreProcessing />} />
          
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
