
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const Vectorization = () => {
    return (
        <div>
          <h1>Vectorization</h1>
          {/* Link to GitHub repository */}
          <RepoLink 
            link={links.toVector.url} 
            onClick={() => handleClick(links.toVector.url)}
          />
          <p>Placeholder</p>
        </div>
      );
    };
    