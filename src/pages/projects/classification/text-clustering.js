
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const TextClustering = () => {
  return (
      <div>
        <h1>Text Clustering Methods</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
          link={links.textCluster.url} 
        />
        <p>Placeholder</p>
      </div>
    );  
};

// export default TextClustering;
