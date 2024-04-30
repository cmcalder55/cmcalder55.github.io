
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";


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
