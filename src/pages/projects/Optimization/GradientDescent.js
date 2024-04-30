
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const GradientDescent = () => {
    return (
      <div>
        <h1>Gradient Descent</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.gradDesc.url} 
        onClick={() => handleClick(links.gradDesc.url)}
        />
        <p>Placeholder</p>
      </div>
    )
  }