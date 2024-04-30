
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const DecisionTree = () => {
    return (
        <div>
            <h1>Decision Tree Classifier</h1>
            {/* Link to GitHub repository */}
            <RepoLink 
            link={links.dtClass.url} 
            />
            <p>Placeholder</p>
        </div>
    );  
};

export default DecisionTree;