import React from "react";
import { RepoLink, LearnMore } from "../components/Buttons";
import "../styles/topics.css";
import "../styles/style.css";
import RepoList from "./Repos";

const ProjectPage = ({ data, loading, error, username }) => {
  if (loading) return <p>Loading {username}’s public repos…</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  // Filter out repos whose names contain the username
  const filteredData = data.filter(
    (repo) => {
      const name = repo.name.toLowerCase();
      return !name.includes(username.toLowerCase()) && !name.includes("github");
    }
  );


  if (!filteredData.length)
    return <p>{username} has no public repositories to display.</p>;

  return (
    <div className="main">
      {filteredData.map((repo) => (
        <div key={repo.id} className="topic-container">
          <div className="topic-info">
            <h2>{repo.name}</h2>
            <RepoLink link={repo.html_url} />
            <LearnMore link={repo.html_url} />
          </div>
          <div className="topic-description">
            <p>{repo.description || "No description provided."}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
