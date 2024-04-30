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

import DbAppDev from "../pages/projects/DbAppDevelopment/DbAppDevelopment";
import { FlowerGen } from "../pages/projects/DbAppDevelopment/FlowerGen";
import { Oracle } from "../pages/projects/DbAppDevelopment/Oracle";

import FeatureExtraction from "../pages/projects/FeatureExtraction/FeatureExtraction";
import Autoencoder from "../pages/projects/FeatureExtraction/Autoencoder"
import Hidden from "../pages/projects/FeatureExtraction/Hidden"
import Semantic from "../pages/projects/FeatureExtraction/Semantic"
import Embedding from "../pages/projects/FeatureExtraction/Embedding"

import Optimization from "../pages/projects/Optimization/Optimization";
import Backprop from "../pages/projects/Optimization/Backprop";
import BayesEst from "../pages/projects/Optimization/BayesEst";
import Factorization from "../pages/projects/Optimization/Factorization";
import GenAlg from "../pages/projects/Optimization/GenAlg";
import GradientDescent from "../pages/projects/Optimization/GradientDescent";
import LinAlg from "../pages/projects/Optimization/LinAlg";
import LogBarrier from "../pages/projects/Optimization/LogBarrier";

import PreProcessing from "../pages/projects/PreProcessing/PreProcessing";
import WebScraping from "../pages/projects/PreProcessing/WebScraping";
import Vectorization from "../pages/projects/PreProcessing/Vectorization";

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
              <Route path="flower-generator"  element={<FlowerGen />} />
              <Route path="navalis-oracle"    element={<Oracle />} />
            </Route>

            {/* Feature Extraction pages */}
            <Route path="feature-extraction" >
              <Route index element={<FeatureExtraction />} />
              <Route path="autoencoder"       element={<Autoencoder />} />
              <Route path="hidden-layer"      element={<Hidden />} />
              <Route path="semantic-net"      element={<Semantic />} />
              <Route path="embedding"         element={<Embedding />} />
            </Route>

            {/* Optimization pages */}
            <Route path="optimization" >
            <Route index element={<Optimization />} />
              <Route path="gen-alg"           element={<GenAlg />} />
              <Route path="lin-reg"           element={<LinAlg />} />
              <Route path="log-barrier"       element={<LogBarrier />} />
              <Route path="gradient-descent"  element={<GradientDescent />} />
              <Route path="matrix-fac"        element={<Factorization />} />
              <Route path="bayes-est"         element={<BayesEst />} />
              <Route path="stoc-backprop"     element={<Backprop />} />
            </Route>

            {/* Pre-Processing pages */}
            <Route path="pre-processing" >
              <Route index element={<PreProcessing />} />
              <Route path="web-scraping"      element={<WebScraping />} />
              <Route path="vectorization"     element={<Vectorization />} />
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
