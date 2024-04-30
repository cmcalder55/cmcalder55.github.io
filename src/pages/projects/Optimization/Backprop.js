
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const Backprop = () => {
    return (
      <div>
        <h1>Stochastic Backpropegation</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.stocProp.url} 
        onClick={() => handleClick(links.stocProp.url)}
        />
        <p>Placeholder</p>
      </div>
    )
  }

export default Backprop;