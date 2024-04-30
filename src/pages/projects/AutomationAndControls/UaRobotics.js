
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

  
export const UaRobotics = () => {
    return (
      <div>
        <h1>Underactuated Robotic Gripper</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
          link={links.uaHand.url} 
        />
        <p>Placeholder</p>
      </div>
    );
  };
  