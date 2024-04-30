
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const LinAlg = () => {
    return (    
      <div>
        <h1>Linear Regression</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.linReg.url} 
        onClick={() => handleClick(links.linReg.url)}
        />
        <p>Placeholder</p>
      </div>
    )
  }