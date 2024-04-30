
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const Oracle = () => {
    <div>
        <h1>Navali's Oracle</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.PoeOracle.url} 
        onClick={() => handleClick(links.PoeOracle.url)}
        />
        <p>Placeholder</p>
  </div>
}