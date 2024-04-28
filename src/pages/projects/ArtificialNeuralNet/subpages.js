
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const CNN = () => {
    return (<div>
        <h1>Convolutional Neural Network</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.cnn.url} 
        onClick={() => handleClick(links.cnn.url)}
        />
        <p>Placeholder</p>
  </div>)
}

export const LSTM = () => {
    return (<div>
        <h1>Long Short-Term Memory Network</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.lstm.url} 
        onClick={() => handleClick(links.lstm.url)}
        />
        <p>Placeholder</p>
  </div>)
}

export const RNN = () => {
    return (
      <div>
        <h1>Residual Neural Network</h1>
        {/* Link to GitHub repository */}
        <RepoLink 
        link={links.rnn.url} 
        onClick={() => handleClick(links.rnn.url)}
        />
        <p>Placeholder</p>
    </div>
  )
}