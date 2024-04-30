
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const FlowerGen = () => {
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