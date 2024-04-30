
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const Factorization = () => {
    return (
      <div>
        <h1>Matrix Factorization</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.matFac.url} 
        onClick={() => handleClick(links.matFac.url)}
        />
        <p>Placeholder</p>
      </div>
    )
  }