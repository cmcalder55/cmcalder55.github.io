
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const PiController = () => {
    return (
      <div>
        <h1>Custom PI Controller</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
          link={links.piCtrl.url} 
        />
        <p>Placeholder</p>
      </div>
    );
  };