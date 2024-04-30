// src/router/AppRouter.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeLayout from "../components/HomeLayout";
import Interests from "../pages/InterestsPage";
import Art from "../pages/interests/Art";
import Bookshelf from "../pages/interests/Bookshelf";
import Technical from "../pages/interests/Technical";
import Games from "../pages/interests/Games";

import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import About from "../pages/About";

import ProjectsLayout from "../components/ProjectsLayout";
import Projects from "../pages/Projects";
import ANN from "../pages/projects/ArtificialNeuralNet/ANN";
import RNN from "../pages/projects/ArtificialNeuralNet/RNN";
import LSTM from "../pages/projects/ArtificialNeuralNet/LSTM";
import CNN from "../pages/projects/ArtificialNeuralNet/CNN";

import AutomationAndControls from "../pages/projects/AutomationAndControls/AutomationAndControls";
import { UaRobotics } from "../pages/projects/AutomationAndControls/UaRobotics";
import { PiController } from "../pages/projects/AutomationAndControls/PiController";
import { PathFindingSim } from "../pages/projects/AutomationAndControls/PathFindingSim";

import Classification from "../pages/projects/Classification/Classification";
import { MusicRec } from "../pages/projects/Classification/MusicRec";
import GMM from "../pages/projects/Classification/GMM";
import { TextClustering } from "../pages/projects/Classification/TextClustering";
import { NB } from "../pages/projects/Classification/NB";
import { SVM } from "../pages/projects/Classification/SVM";
import DecisionTree from "../pages/projects/Classification/DecisionTree";

import * as DbAppDev from "../pages/projects/DbAppDevelopment/DbAppDevelopment";
import * as DbAppDevPages from "../pages/projects/DbAppDevelopment/subpages";

import FeatureExtraction from "../pages/projects/FeatureExtraction/FeatureExtraction";
import * as FeatureExtractionPages from "../pages/projects/FeatureExtraction/subpages";

import Optimization from "../pages/projects/Optimization/Optimization";
import * as OptimizationPages from "../pages/projects/Optimization/subpages";

import PreProcessing from "../pages/projects/PreProcessing/PreProcessing";
import * as PreProcessingPages from "../pages/projects/PreProcessing/subpages";

// import links from "../components/linkMetadata";

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
              <Route path="cnn"               element={<CNN />} />
              <Route path="lstm"              element={<LSTM />} />
              <Route path="rnn"               element={<RNN />} />
            </Route>

            {/* Automation and Control Systems pages */}
            <Route path="automation-and-controls" >
              <Route index element={<AutomationAndControls />} />
              <Route path="ua-robotics"       element={<UaRobotics />} />
              <Route path="pi-controller"     element={<PiController />} />
              <Route path="path-planning"     element={<PathFindingSim />} />
            </Route>

            {/* Classification pages */}
            <Route path="classification" >
              <Route index element={<Classification />} />
              <Route path="music-recommender" element={<MusicRec />} />
              <Route path="gmm"               element={<GMM />} />
              <Route path="text-clustering"   element={<TextClustering />} />
              <Route path="naive-bayes"       element={<NB />} />
              <Route path="linear-svm"        element={<SVM />} />
              <Route path="decision-tree"     element={<DecisionTree />} />
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
          {/* <Route path="interests" element={<Interests />} /> */}
          <Route path="interests" >
            <Route index element={<Interests />} />
              <Route path="bookshelf"           element={<Bookshelf />} />
              <Route path="art"                 element={<Art />} />
              <Route path="games"               element={<Games />} />
              <Route path="technical"           element={<Technical />} />
          </Route>

          {/* Catch any undefined URLs (404 error) */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
