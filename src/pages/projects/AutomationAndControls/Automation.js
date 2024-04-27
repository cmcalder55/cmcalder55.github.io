// Filename - pages/projects/Automation.js

import ProjectPage from "../../ProjectPage";

const Automation = () => {
  const project_data = {
    name: "Automation",
    topics: [
      {
        title: "Autonomous Mobile Robotics Path Planning",
        pagelink: "/automation-and-controls/path-planning",
        description: "SLAM mapping, Path Planning with localization uncertainty",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/automation-and-controls/tree/main/autonomous-mobile-robotics",
          },
        ],
      },
      {
        title: "Custom PI Controller",
        pagelink: "/automation-and-controls/pi-controller",
        description: "Automation and Machine Learning for Robust Self-Tuning of Magneto-Optical Traps",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/automation-and-controls/tree/main/mirror-mount-pi-controller",
          },
        ],
      },
      {
        title: "Underactuated Robotic Gripper",
        pagelink: "/automation-and-controls/ua-robotics",
        description: "creation of a low-cost robotic hand that can be attached to a commercial robotic arm for various complex manipulation tasks",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/automation-and-controls/tree/main/underactuated-robotics",
          },
        ],
      },
    ],
  };

  return ProjectPage({ project_data });
};

const PathFindingSim = () => {
  return (
    <div>
      <h1>Simulation and Path Planning of an Autonomous Mobile Robot</h1>
      {/* Link to GitHub repository */}
      <a
        href="https://github.com/cmcalder55/autonomous-mobile-robotics"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View this project on GitHub
      </a>
      <p>Placeholder</p>
    </div>
  );
};

const PiController = () => {
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
        View this project on GitHub
      </a>
      <p>Placeholder</p>
    </div>
  );
};

const UaRobotics = () => {
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
        View this project on GitHub
      </a>
      <p>Placeholder</p>
    </div>
  );
};



export default Automation; PathFindingSim; UaRobotics; PiController;

