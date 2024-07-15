// src/router/AppRouter.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeLayout from "../components/HomeLayout";
import Interests from "../pages/interests/Interests";
import Art from "../pages/interests/Art";
import Bookshelf from "../pages/interests/Bookshelf";
import Technical from "../pages/interests/Technical";
import Games from "../pages/interests/Games";

import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import About from "../pages/About";

import ProjectsLayout from "../components/ProjectsLayout";
import Projects from "../pages/Projects";

import ANN from "../pages/projects/artificial-neural-net/ann-index";
import resNet from "../pages/projects/artificial-neural-net/res-net";
import LSTM from "../pages/projects/artificial-neural-net/lstm";
import CNN from "../pages/projects/artificial-neural-net/cnn";

import AutomationAndControls from "../pages/projects/automation-and-controls/automation-and-controls-index";
import { UaRobotics } from "../pages/projects/automation-and-controls/underactuated-robotics";
import { PiController } from "../pages/projects/automation-and-controls/pi-controller";
import { PathFindingSim } from "../pages/projects/automation-and-controls/robot-path-finding";
import FwdInvKinematics from "../pages/projects/automation-and-controls/fi-kinematics";

import PatternRecognition from "../pages/projects/pattern-recognition/pattern-recognition-index";
import MusicRec from "../pages/projects/pattern-recognition/music-recommender";
import TextClustering from "../pages/projects/pattern-recognition/text-clustering";
import TextClassifier from "../pages/projects/pattern-recognition/text-classifiers";
import PredictGameSales from "../pages/projects/pattern-recognition/predict-game-sales";
import DecisionTree from "../pages/projects/pattern-recognition/decision-tree";

import DbAppDev from "../pages/projects/db-app-development/db-app-development-index";
import FlowerGen from "../pages/projects/db-app-development/flower-generator";
import Oracle from "../pages/projects/db-app-development/navalis-oracle";
import AutoStorage from "../pages/projects/db-app-development/auto-storage";

import FeatureExtraction from "../pages/projects/feature-extraction/feature-extraction-index";
import Autoencoder from "../pages/projects/feature-extraction/autoencoder";
import Hidden from "../pages/projects/feature-extraction/hidden-layers"
import Semantic from "../pages/projects/feature-extraction/semantic-net"

import Optimization from "../pages/projects/optimization/optimization-index";
import Backprop from "../pages/projects/optimization/stochastic-backpropegation";
import BayesEst from "../pages/projects/optimization/bayes-estimation";
import Factorization from "../pages/projects/optimization/matrix-factorization";
import GenAlg from "../pages/projects/optimization/genetic-algorithm";
import GradientDescent from "../pages/projects/optimization/gradient-descent";
import LinAlg from "../pages/projects/optimization/linear-regression";
import LogBarrier from "../pages/projects/optimization/log-barrier";

import PreProcessing from "../pages/projects/pre-processing/pre-processing-index";
import textProcessing from "../pages/projects/pre-processing/text-processing";
import OneHotEncoder from "../pages/projects/pre-processing/one-hot";
import Vectorization from "../pages/projects/pre-processing/vectorization";

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
                                <Route path="cnn" element={<CNN />} />
                                <Route path="lstm" element={<LSTM />} />
                                <Route path="resnet" element={<resNet />} />
                        </Route>

                        {/* Automation and Control Systems pages */}
                        <Route path="automation-and-controls" >
                            <Route index element={<AutomationAndControls />} />
                                <Route path="ua-robotics" element={<UaRobotics />} />
                                <Route path="pi-controller" element={<PiController />} />
                                <Route path="path-planning" element={<PathFindingSim />} />                                
                                <Route path="fi-kinematics" element={<FwdInvKinematics />} />
                        </Route>

                        {/* Pattern Recognition pages */}
                        <Route path="pattern-recognition" >
                            <Route index element={<PatternRecognition />} />
                                <Route path="decision-tree" element={<DecisionTree />} />                            
                                <Route path="music-recommender" element={<MusicRec />} />
                                <Route path="predict-sales" element={<PredictGameSales />} />
                                <Route path="text-classifiers" element={<TextClassifier />} />
                                <Route path="text-clustering" element={<TextClustering />} />
                        </Route>

                        {/* Database / App Development pages */}
                        <Route path="db-app-dev" >
                            <Route index element={<DbAppDev />} />
                                <Route path="flower-generator" element={<FlowerGen />} />
                                <Route path="navalis-oracle" element={<Oracle />} />
                                <Route path="auto-bottle-storage" element={<AutoStorage />} />
                        </Route>

                        {/* Feature Extraction pages */}
                        <Route path="feature-extraction" >
                            <Route index element={<FeatureExtraction />} />
                                <Route path="autoencoder" element={<Autoencoder />} />
                                <Route path="hidden-layer" element={<Hidden />} />
                                <Route path="semantic-net" element={<Semantic />} />
                        </Route>

                        {/* Optimization pages */}
                        <Route path="optimization" >
                            <Route index element={<Optimization />} />
                                <Route path="gen-alg" element={<GenAlg />} />
                                <Route path="lin-reg" element={<LinAlg />} />
                                <Route path="log-barrier" element={<LogBarrier />} />
                                <Route path="gradient-descent" element={<GradientDescent />} />
                                <Route path="matrix-fac" element={<Factorization />} />
                                <Route path="bayes-est" element={<BayesEst />} />
                                <Route path="stoc-backprop" element={<Backprop />} />
                        </Route>

                        {/* Pre-Processing pages */}
                        <Route path="pre-processing" >
                            <Route index element={<PreProcessing />} />
                                <Route path="one-hot-encoder" element={<OneHotEncoder />} />
                                <Route path="vectorization" element={<Vectorization />} />
                                <Route path="text-processing" element={<textProcessing />} />
                        </Route>

                    </Route>

                    {/* interests pages */}
                    {/* <Route path="interests" element={<Interests />} /> */}
                    <Route path="interests" >
                        <Route index element={<Interests />} />
                            <Route path="bookshelf" element={<Bookshelf />} />
                            <Route path="art" element={<Art />} />
                            <Route path="games" element={<Games />} />
                            <Route path="technical" element={<Technical />} />
                    </Route>

                    {/* Catch any undefined URLs (404 error) */}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </Router>
    );
}
