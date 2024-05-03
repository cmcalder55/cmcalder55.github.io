
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const LinAlg = () => {
    return (    
      <div>
        <h1>Linear Regression</h1>
        {/* Link to GitHub repository */}
        <RepoLink link={links.linReg.url} />
        <p>Placeholder</p>
      </div>
    )
  }  
export default LinAlg;