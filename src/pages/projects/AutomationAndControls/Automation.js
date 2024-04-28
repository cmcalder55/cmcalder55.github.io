// Filename - pages/projects/Automation.js

import ProjectPage from "../../ProjectPage";

let github_link = "View on GitHub";

export const Index = () => {
  const project_data = {
    name: "Automation",
    topics: [
      {
        title: "Autonomous Mobile Robotics Path Planning",
        pagelink: "path-planning",
        description: "SLAM mapping, Path Planning with localization uncertainty",
        links: [
          {
            text: github_link,
            url: "https://github.com/cmcalder55/automation-and-controls/tree/main/autonomous-mobile-robotics",
          },
        ],
      },
      {
        title: "Custom PI Controller",
        pagelink: "pi-controller",
        description: "Automation and Machine Learning for Robust Self-Tuning of Magneto-Optical Traps",
        links: [
          {
            text: github_link,
            url: "https://github.com/cmcalder55/automation-and-controls/tree/main/mirror-mount-pi-controller",
          },
        ],
      },
      {
        title: "Underactuated Robotic Gripper",
        pagelink: "ua-robotics",
        description: "creation of a low-cost robotic hand that can be attached to a commercial robotic arm for various complex manipulation tasks",
        links: [
          {
            text: github_link,
            url: "https://github.com/cmcalder55/automation-and-controls/tree/main/underactuated-robotics",
          },
        ],
      },
    ],
  };

  return ProjectPage({ project_data });
};

export const PathFindingSim = () => {
  return (
    <div>
      <h1>Simulation and Path Planning of an Autonomous Mobile Robot</h1>
      {/* Link to GitHub repository */}
      <a
        href="https://github.com/cmcalder55/automation-and-controls/tree/main/autonomous-mobile-robotics"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        { github_link }
      </a>
      <p>Placeholder</p>
    </div>
  );
};

export const UaRobotics = () => {
  return (
    <div>
      <h1>Underactuated Robotic Gripper</h1>
      {/* Link to GitHub repository */}
      <a
        href="https://github.com/cmcalder55/automation-and-controls/tree/main/underactuated-robotics"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        { github_link }
      </a>
      <p>Placeholder</p>
    </div>
  );
};

export const PiController = () => {
  return (
    <div>
      <h1>Custom PI Controller</h1>
      {/* Link to GitHub repository */}
      <a
        href="https://github.com/cmcalder55/automation-and-controls/tree/main/mirror-mount-pi-controller"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        { github_link }
      </a>
      <p>Placeholder</p>
    </div>
  );
};