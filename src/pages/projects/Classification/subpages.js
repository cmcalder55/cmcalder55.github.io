
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const NB = () => {
    return (
        <div>
          <h1>Naive Bayes</h1>
          {/* Link to GitHub repository */}
          <RepoLink 
            link={links.naiveBayes.url} 
            onClick={() => handleClick(links.naiveBayes.url)}
          />
          <p>Placeholder</p>
        </div>
      );
}

export const SVM = () => {
    return (
        <div>
          <h1>Linear SVM</h1>
          {/* Link to GitHub repository */}
          <RepoLink 
            link={links.linearSvm.url} 
            onClick={() => handleClick(links.linearSvm.url)}
          />
          <p>Placeholder</p>
        </div>
      );  
}

export const GMM = () => {
    return (
        <div>
          <h1>Gaussian Mixture Model</h1>
          {/* Link to GitHub repository */}
          <RepoLink 
            link={links.gmModel.url} 
            onClick={() => handleClick(links.gmModel.url)}
          />
          <p>Placeholder</p>
        </div>
      );  
}

export const MusicRec = () => {
    return (
        <div>
          <h1>Music Reccommender</h1>
          {/* Link to GitHub repository */}
          <RepoLink 
            link={links.musicRec.url} 
            onClick={() => handleClick(links.musicRec.url)}
          />
          <p>Placeholder</p>
        </div>
      );  
}

export const TextClustering = () => {
    return (
        <div>
          <h1>Text Clustering Methods</h1>
          {/* Link to GitHub repository */}
          <RepoLink 
            link={links.textCluster.url} 
            onClick={() => handleClick(links.textCluster.url)}
          />
          <p>Placeholder</p>
        </div>
      );  
}

export const DecisionTree = () => {
    return (
        <div>
          <h1>Decision Tree Classifier</h1>
          {/* Link to GitHub repository */}
          <RepoLink 
            link={links.dtClass.url} 
            onClick={() => handleClick(links.dtClass.url)}
          />
          <p>Placeholder</p>
        </div>
      );  
}