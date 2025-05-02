import links from "../../components/links";
import {RepoLink} from "../../components/Buttons";

const TextClassifier = () => {
    return (
        <div>
          <h1>Text Classifiers</h1>
          <RepoLink link={links.naiveBayes.url} />
          
          <p>Placeholder</p>
        </div>
      );
}

export default TextClassifier;