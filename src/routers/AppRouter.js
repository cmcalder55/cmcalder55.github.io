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
import * as AnnPages from "../pages/projects/ArtificialNeuralNet/subpages"
import AutomationAndControls from "../pages/projects/AutomationAndControls/AutomationAndControls";
import * as AutomationPages from "../pages/projects/AutomationAndControls/subpages";
import Classification from "../pages/projects/Classification/Classification"
import * as ClassificationPages from "../pages/projects/Classification/subpages"
import * as DbAppDev from "../pages/projects/DbAppDevelopment/DbAppDevelopment"
import * as DbAppDevPages from "../pages/projects/DbAppDevelopment/subpages"
import FeatureExtraction from "../pages/projects/FeatureExtraction/FeatureExtraction"
import * as FeatureExtractionPages from "../pages/projects/FeatureExtraction/subpages"
import Optimization from "../pages/projects/Optimization/Optimization"
import * as OptimizationPages from "../pages/projects/Optimization/subpages"
import PreProcessing from "../pages/projects/PreProcessing/PreProcessing"
import * as PreProcessingPages from "../pages/projects/PreProcessing/subpages"

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
              <Route index element={<ANN />} />
              <Route path="cnn"               element={<AnnPages.CNN />} />
              <Route path="lstm"              element={<AnnPages.LSTM />} />
              <Route path="rnn"               element={<AnnPages.RNN />} />
            </Route>

            {/* Automation and Control Systems pages */}
            <Route path="automation-and-controls" >
              <Route index element={<AutomationAndControls />} />
              <Route path="ua-robotics"       element={<AutomationPages.UaRobotics />} />
              <Route path="pi-controller"     element={<AutomationPages.PiController />} />
              <Route path="path-planning"     element={<AutomationPages.PathFindingSim />} />
            </Route>

            {/* Classification pages */}
            <Route path="classification" >
              <Route index element={<Classification />} />
              <Route path="music-recommender" element={<ClassificationPages.MusicRec />} />
              <Route path="gmm"               element={<ClassificationPages.GMM />} />
              <Route path="text-clustering"   element={<ClassificationPages.TextClustering />} />
              <Route path="naive-bayes"       element={<ClassificationPages.NB />} />
              <Route path="linear-svm"        element={<ClassificationPages.SVM />} />
              <Route path="decision-tree"     element={<ClassificationPages.DecisionTree />} />
            </Route>
            
            {/* Database / App Development pages */}
            <Route path="db-app-dev" >
              <Route index element={<DbAppDev />} />
              <Route path="flower-generator"  element={<DbAppDevPages.Flower />} />
              <Route path="navalis-oracle"    element={<DbAppDevPages.Oracle />} />
            </Route>

            {/* Feature Extraction pages */}
            <Route path="feature-extraction" >
              <Route index element={<FeatureExtraction />} />
              <Route path="autoencoder"       element={<FeatureExtractionPages.Autoencoder />} />
              <Route path="hidden-layer"      element={<FeatureExtractionPages.Hidden />} />
              <Route path="semantic-net"      element={<FeatureExtractionPages.Semantic />} />
              <Route path="embedding"         element={<FeatureExtractionPages.Embedding />} />
            </Route>

            {/* Optimization pages */}
            <Route path="optimization" >
            <Route index element={<Optimization />} />
              <Route path="gen-alg"           element={<OptimizationPages.GenAlg />} />
              <Route path="lin-reg"           element={<OptimizationPages.LinAlg />} />
              <Route path="log-barrier"       element={<OptimizationPages.LogBarrier />} />
              <Route path="gradient-descent"  element={<OptimizationPages.GradientDescent />} />
              <Route path="matrix-fac"        element={<OptimizationPages.Factorization />} />
              <Route path="bayes-est"         element={<OptimizationPages.BayesEst />} />
              <Route path="stoc-backprop"     element={<OptimizationPages.Backprop />} />
            </Route>

            {/* Pre-Processing pages */}
            <Route path="pre-processing" >
              <Route index element={<PreProcessing />} />
              <Route path="web-scraping"      element={<PreProcessingPages.WebScraping />} />
              <Route path="vectorization"     element={<PreProcessingPages.Vectorization />} />
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
