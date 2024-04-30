
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const Semantic = () => {
    <div>
        <h1>Semantic Network Analysis</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.semanticNet.url} 
        onClick={() => handleClick(links.semanticNet.url)}
        />
        <p>Placeholder</p>
  </div>
}

export default Semantic;