
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const Autoencoder = () => {
    <div>
        <h1>Auto-Encoder</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.autoEn.url} 
        onClick={() => handleClick(links.autoEn.url)}
        />
        <p>Placeholder</p>
  </div>
}

export default Autoencoder;