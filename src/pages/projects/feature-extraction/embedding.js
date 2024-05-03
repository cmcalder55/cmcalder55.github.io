
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const Embedding = () => {
    <div>
        <h1>Vector Embedding</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.vecEmbed.url} 
        />
        <p>Placeholder</p>
  </div>
}

export default Embedding;