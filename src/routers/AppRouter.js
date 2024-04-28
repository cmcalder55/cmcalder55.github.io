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
import * as ANN from "../pages/projects/ArtificialNeuralNet/ANN"
import * as Automation from "../pages/projects/AutomationAndControls/Automation";
import * as Classification from "../pages/projects/Classification/Classification"
import * as DbAppDev from "../pages/projects/DbAppDevelopment/DbAppDevelopment"
import * as FeatureExtraction from "../pages/projects/FeatureExtraction/FeatureExtraction"
import * as Optimization from "../pages/projects/Optimization/Optimization"
import * as PreProcessing from "../pages/projects/PreProcessing/PreProcessing"

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
            <Route path="ann" >
              <Route index element={<ANN.Index />} />
              <Route path="cnn" element={<ANN.CNN />} />
              <Route path="ltsm" element={<ANN.LTSM />} />
              <Route path="rnn" element={<ANN.RNN />} />
            </Route>

            {/* Automation and Control Systems pages */}
            <Route path="automation-and-controls" >
              <Route index element={<Automation.Index />} />
              <Route path="ua-robotics" element={<Automation.UaRobotics />} />
              <Route path="pi-controller" element={<Automation.PiController />} />
              <Route path="path-planning" element={<Automation.PathFindingSim />} />
            </Route>

            {/* Classification pages */}
            <Route path="classification" >
              <Route index element={<Classification.Index />} />
              <Route path="music-recommender" element={<Classification.MusicRec />} />
              <Route path="gmm" element={<Classification.GMM />} />
              <Route path="text-clustering" element={<Classification.TextClustering />} />
              <Route path="naive-bayes" element={<Classification.NB />} />
              <Route path="linear-svm" element={<Classification.SVM />} />
              <Route path="decision-tree" element={<Classification.DecisionTree />} />
            </Route>
            
            {/* Database / App Development pages */}
            <Route path="db-app-dev" >
              <Route index element={<DbAppDev.Index />} />
              <Route path="flower-generator" element={<DbAppDev.Flower />} />
              <Route path="navalis-oracle" element={<DbAppDev.Oracle />} />
            </Route>

            {/* Feature Extraction pages */}
            <Route path="feature-extraction" >
              <Route index element={<FeatureExtraction.Index />} />
              <Route path="autoencoder" element={<FeatureExtraction.Autoencoder />} />
              <Route path="hidden-layer" element={<FeatureExtraction.Hidden />} />
              <Route path="semantic-net" element={<FeatureExtraction.Semantic />} />
              <Route path="embedding" element={<FeatureExtraction.Embedding />} />
            </Route>

            {/* Optimization pages */}
            <Route path="optimization" >
            <Route index element={<Optimization.Index />} />
              <Route path="gen-alg" element={<Optimization.GenAlg />} />
              <Route path="lin-reg" element={<Optimization.LinAlg />} />
              <Route path="log-barrier" element={<Optimization.LogBarrier />} />
              <Route path="gradient-descent" element={<Optimization.GradientDescent />} />
              <Route path="matrix-fac" element={<Optimization.Factorization />} />
              <Route path="bayes-est" element={<Optimization.BayesEst />} />
              <Route path="stoc-backprop" element={<Optimization.Backprop />} />
            </Route>

            {/* Pre-Processing pages */}
            <Route path="pre-processing" >
              <Route index element={<PreProcessing.Index />} />
              <Route path="web-scraping" element={<PreProcessing.WebScraping />} />
              <Route path="vectorization" element={<PreProcessing.Vectorization />} />
            </Route>

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
