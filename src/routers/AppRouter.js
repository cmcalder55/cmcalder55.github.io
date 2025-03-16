// src/router/AppRouter.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoPage from "../pages/NoPage";
import About from "../pages/About";

import HomeLayout from "../components/HomeLayout";
import Home from "../pages/Home";

import ProjectsLayout from "../components/ProjectsLayout";
import Projects from "../pages/Projects";

import LSTM from "../pages/projects/artificial-neural-net/lstm";
import CNN from "../pages/projects/artificial-neural-net/cnn";
import { UaRobotics } from "../pages/projects/automation-and-controls/underactuated-robotics";
import { PiController } from "../pages/projects/automation-and-controls/pi-controller";
import { PathFindingSim } from "../pages/projects/automation-and-controls/robot-path-finding";
import FwdInvKinematics from "../pages/projects/automation-and-controls/fi-kinematics";
import MusicRec from "../pages/projects/pattern-recognition/music-recommender";
import TextClustering from "../pages/projects/pattern-recognition/text-clustering";
import TextClassifier from "../pages/projects/pattern-recognition/text-classifiers";
import PredictGameSales from "../pages/projects/pattern-recognition/predict-game-sales";
import DecisionTree from "../pages/projects/pattern-recognition/decision-tree";
import FlowerGen from "../pages/projects/db-app-development/flower-generator";
import Oracle from "../pages/projects/db-app-development/navalis-oracle";
import AutoStorage from "../pages/projects/db-app-development/auto-storage";
import Autoencoder from "../pages/projects/feature-extraction/autoencoder";
import ProbDensity from "../pages/projects/feature-extraction/prob-density";
import Semantic from "../pages/projects/feature-extraction/semantic-net";
import Backprop from "../pages/projects/optimization/stochastic-backpropegation";
import BayesEst from "../pages/projects/optimization/bayes-estimation";
import Factorization from "../pages/projects/optimization/matrix-factorization";
import GenAlg from "../pages/projects/optimization/genetic-algorithm";
import GradientDescent from "../pages/projects/optimization/gradient-descent";
import LinAlg from "../pages/projects/optimization/linear-regression";
import LogBarrier from "../pages/projects/optimization/log-barrier";
import LogReg from "../pages/projects/optimization/logistic-regression";
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
                            <Route path="cnn" element={<CNN />} />
                            <Route path="lstm" element={<LSTM />} />
                            <Route path="resnet" element={<resNet />} />
                            <Route path="ua-robotics" element={<UaRobotics />} />
                            <Route path="pi-controller" element={<PiController />} />
                            <Route path="path-planning" element={<PathFindingSim />} />                                
                            <Route path="fi-kinematics" element={<FwdInvKinematics />} />
                            <Route path="decision-tree" element={<DecisionTree />} />                            
                            <Route path="music-recommender" element={<MusicRec />} />
                            <Route path="predict-sales" element={<PredictGameSales />} />
                            <Route path="text-classifiers" element={<TextClassifier />} />
                            <Route path="text-clustering" element={<TextClustering />} />
                            <Route path="flower-generator" element={<FlowerGen />} />
                            <Route path="navalis-oracle" element={<Oracle />} />
                            <Route path="auto-storage" element={<AutoStorage />} />
                            <Route path="autoencoder" element={<Autoencoder />} />
                            <Route path="prob-density" element={<ProbDensity />} />
                            <Route path="semantic-net" element={<Semantic />} />
                            <Route path="bayes-est" element={<BayesEst />} />
                            <Route path="cv-laplacian" element={<cvLaplacian />} />
                            <Route path="gen-alg" element={<GenAlg />} />
                            <Route path="gradient-descent" element={<GradientDescent />} />                                
                            <Route path="lin-reg" element={<LinAlg />} />
                            <Route path="log-barrier" element={<LogBarrier />} />
                            <Route path="log-reg" element={<LogReg />} />
                            <Route path="matrix-fac" element={<Factorization />} />
                            <Route path="stoc-backprop" element={<Backprop />} />
                            <Route path="vectorization" element={<Vectorization />} />
                            <Route path="text-processing" element={<textProcessing />} />
                            <Route path="web-scraping" element={<webScraping />} />
                            <Route path="network-graph" element={<netGraph />} />
                        </Route>
                    </Route>

                    {/* Catch any undefined URLs (404 error) */}
                    <Route path="*" element={<NoPage />} />

                {/* </Route> */}
            </Routes>
        </Router>
    );
}
