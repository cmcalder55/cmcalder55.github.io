
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const BayesEst = () => {
    return (
      <div>
        <h1>Bayes Estimation</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.bayesEst.url} 
        onClick={() => handleClick(links.bayesEst.url)}
        />
        <p>Placeholder</p>
      </div>
      )
  }