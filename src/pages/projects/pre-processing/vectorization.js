
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const Vectorization = () => {
    return (
        <div>
          <h1>Vectorization</h1>
          {/* Link to GitHub repository */}
          <RepoLink 
            link={links.toVector.url} 
          />
          <p>Placeholder</p>
        </div>
      );
    };
    
export default Vectorization;