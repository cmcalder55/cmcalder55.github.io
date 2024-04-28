
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const Autoencoder = () => {
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


export const Hidden = () => {
    <div>
        <h1>Hidden Layer Network</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.hidden.url} 
        onClick={() => handleClick(links.hidden.url)}
        />
        <p>Placeholder</p>
  </div>
}


export const Semantic = () => {
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
