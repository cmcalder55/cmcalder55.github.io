
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const Flower = () => {
    <div>
        <h1>Blender3D Flower Generator</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.flowerGen.url} 
        onClick={() => handleClick(links.flowerGen.url)}
        />
        <p>Placeholder</p>
  </div>
}

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