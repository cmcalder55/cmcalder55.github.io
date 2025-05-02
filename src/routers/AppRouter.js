// src/router/AppRouter.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoPage from "../pages/NoPage";
import About from "../pages/About";

import HomeLayout from "../components/HomeLayout";
import Home from "../pages/Home";

import ProjectsLayout from "../components/ProjectsLayout";
import ProjectPage from "../pages/Projects";

import data from "../components/topics"

import LSTM from "../pages/projects/lstm";
import CNN from "../pages/projects/cnn";
import { UaRobotics } from "../pages/projects/underactuated-robotics";
import { PiController } from "../pages/projects/pi-controller";
import { PathFindingSim } from "../pages/projects/robot-path-finding";
import FwdInvKinematics from "../pages/projects/fi-kinematics";
import MusicRec from "../pages/projects/music-recommender";
import TextClustering from "../pages/projects/text-clustering";
import TextClassifier from "../pages/projects/text-classifiers";
import PredictGameSales from "../pages/projects/predict-game-sales";
import DecisionTree from "../pages/projects/decision-tree";
import FlowerGen from "../pages/projects/flower-generator";
import Oracle from "../pages/projects/navalis-oracle";
import AutoStorage from "../pages/projects/auto-storage";
import Autoencoder from "../pages/projects/autoencoder";
import ProbDensity from "../pages/projects/prob-density";
import Semantic from "../pages/projects/semantic-net";
import Backprop from "../pages/projects/stochastic-backpropegation";
import BayesEst from "../pages/projects/bayes-estimation";
import Factorization from "../pages/projects/matrix-factorization";
import GenAlg from "../pages/projects/genetic-algorithm";
import GradientDescent from "../pages/projects/gradient-descent";
import LinAlg from "../pages/projects/linear-regression";
import LogBarrier from "../pages/projects/log-barrier";
import LogReg from "../pages/projects/logistic-regression";
import Vectorization from "../pages/projects/vectorization";


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
                        <Route index element={<ProjectPage data={data}/>} />
                            {/* <Route path="cnn" element={<CNN />} />
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
                            <Route path="network-graph" element={<netGraph />} /> */}
                        </Route>
                    </Route>

                    {/* Catch any undefined URLs (404 error) */}
                    <Route path="*" element={<NoPage />} />

                {/* </Route> */}
            </Routes>
        </Router>
    );
}
