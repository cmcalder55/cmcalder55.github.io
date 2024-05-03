
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const Factorization = () => {
    return (
      <div>
        <h1>Matrix Factorization</h1>
        {/* Link to GitHub repository */}
        <RepoLink link={links.matFac.url} />
        <p>Placeholder</p>
      </div>
    )
  }

export default Factorization;