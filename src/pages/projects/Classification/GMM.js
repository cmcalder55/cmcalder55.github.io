import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const GMM = () => {
    return (
        <div>
            <h1>Gaussian Mixture Model</h1>
            {/* Link to GitHub repository */}
            <RepoLink 
            link={links.gmModel.url} 
            />
            <p>Placeholder</p>
        </div>
    );  
};

export default GMM;