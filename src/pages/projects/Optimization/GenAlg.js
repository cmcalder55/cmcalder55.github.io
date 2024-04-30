
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const GenAlg = () => {
    return (
      <div>
        <h1>Genetic Algorithms</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.genAlg.url} 
        onClick={() => handleClick(links.genAlg.url)}
        />
        <p>Placeholder</p>
      </div>
    )
  }
  