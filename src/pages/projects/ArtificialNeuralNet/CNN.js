
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const CNN = () => {
    return (
        <div>
            <h1>Convolutional Neural Network</h1>
            {/* Link to GitHub repository */}
            <RepoLink link={links.cnn.url} />

            <p>Placeholder</p>

        </div>)
};

export default CNN;