
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const LSTM = () => {
    return (<div>
        <h1>Long Short-Term Memory Network</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={ links.lstm.url } 
        />
        <p>Placeholder</p>
  </div>)
}

export default LSTM;
