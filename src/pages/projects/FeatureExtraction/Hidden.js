
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const Hidden = () => {
    <div>
        <h1>Hidden Layer Network</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.hidden.url} 

        />
        <p>Placeholder</p>
  </div>
}

export default Hidden;