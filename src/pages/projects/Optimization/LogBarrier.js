
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const LogBarrier = () => {
    return (    
      <div>
        <h1>Log-Barrier Optimization</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.logBar.url} 
        onClick={() => handleClick(links.logBar.url)}
        />
        <p>Placeholder</p>
      </div>
    )
  }

export default LogBarrier;