// pages/projects/AutomationAndControls/AutomationAndControls.js

import ProjectPage from "../ProjectPage";
import links from "../../../components/linkMetadata";

const AutomationAndControls = () => {
  const project_data = {
    name: "Automation",
    topics: [
      {
        title: "Autonomous Mobile Robotics Path Planning",
        pagelink: "path-planning",
        description: "SLAM mapping, Path Planning with localization uncertainty",
        url: links.pathPlanning.url,
      },
      {
        title: "Custom PI Controller",
        pagelink: "pi-controller",
        description: "Automation and Machine Learning for Robust Self-Tuning of Magneto-Optical Traps",
        url: links.piCtrl.url,
      },
      {
        title: "Underactuated Robotic Gripper",
        pagelink: "ua-robotics",
        description: "creation of a low-cost robotic hand that can be attached to a commercial robotic arm for various complex manipulation tasks",
        url: links.uaHand.url
      },
    ],
  };

  return ProjectPage({ project_data });
};

export default AutomationAndControls;