// pages/projects/AutomationAndControls/subpages.js

import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const PathFindingSim = () => {
    return (
      <div>
        <h1>Simulation and Path Planning of an Autonomous Mobile Robot</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
          link={links.pathPlanning.url} 
          onClick={() => handleClick(links.pathPlanning.url)}
        />
        <p>Placeholder</p>
      </div>
    );
  };
  
  export const UaRobotics = () => {
    return (
      <div>
        <h1>Underactuated Robotic Gripper</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
          link={links.uaHand.url} 
          onClick={() => handleClick(links.uaHand.url)}
        />
        <p>Placeholder</p>
      </div>
    );
  };
  
  export const PiController = () => {
    return (
      <div>
        <h1>Custom PI Controller</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
          link={links.piCtrl.url} 
          onClick={() => handleClick(links.piCtrl.url)}
        />
        <p>Placeholder</p>
      </div>
    );
  };