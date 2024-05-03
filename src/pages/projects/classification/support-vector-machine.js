import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const SVM = () => {
  return (
    <div>
      <h1>Linear SVM</h1>
      {/* Link to GitHub repository */}
      <RepoLink 
        link={links.linearSvm.url} 
      />
      <p>Placeholder</p>
    </div>
  );  
};

// export default SVM;