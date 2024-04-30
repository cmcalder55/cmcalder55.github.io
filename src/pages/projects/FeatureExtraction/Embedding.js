
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";


export const Embedding = () => {
    <div>
        <h1>Vector Embedding</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.vecEmbed.url} 
        onClick={() => handleClick(links.vecEmbed.url)}
        />
        <p>Placeholder</p>
  </div>
}
