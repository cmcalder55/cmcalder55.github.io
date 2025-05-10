import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoPage from "../pages/NoPage";
import About from "../pages/About";

import HomeLayout from "../components/HomeLayout";
import Home from "../pages/Home";

import ProjectsLayout from "../components/ProjectsLayout";
import ProjectPage from "../pages/Projects";

export default function AppRouter() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "cmcalder55";
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    let all = [];
    const perPage = 100;
    const fetchPage = async (page = 1) => {
      try {
        const url = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`;
        const headers = token
          ? { Authorization: `token ${token}` }
          : {};
        const res = await fetch(url, { headers });
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const data = await res.json();
        if (data.length) {
          all = all.concat(data);
          fetchPage(page + 1);
        } else {
          setRepos(all);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPage();
  }, [username, token]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Projects */}
          <Route path="projects" element={<ProjectsLayout />}>
            <Route
              index
              element={
                <ProjectPage
                  data={repos}
                  loading={loading}
                  error={error}
                  username={username}
                />
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
