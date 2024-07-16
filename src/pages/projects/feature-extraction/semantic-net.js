
import links from "../../../components/linkMetadata";
import {RepoLink} from "../../../components/Buttons";

const Semantic = () => {
    <div>
        <h1>Semantic Network Analysis</h1>
        <RepoLink link={links.semanticNet.url} />

        <h2>Background</h2>
        <p></p>

        <h2>Preparing the Data</h2>
        <p></p>

        <h2>Representing Document Term Frequency</h2>
        <p>
            The networks show a visualization of the most popular terms used in tweets by three news networks using the term 'chatgpt', using two sets of users with opposing views.

            Eigenvector centrality was used to scale the size of the nodes for each term, representing the scale of term frequency in comparision to the rest of the nodes in the network. This is similar to how eigenvalues and eigenvectors are used in principal component analysis (PCA), where eigenvalues represent the total amount of the variance explained by a given feature. In the semantic network, the node size shows how much influence each term has on the variance of all the terms in all tweets by all users.

            For example, 'chatgpt' and 'chatbot' are the largest nodes in both networks. Since 'chatgpt' was the search keyword, it is guaranteed to be in every tweet, and should be the largest. It is also at the center of the web, since it is in 100% of the tweets, and has the largest influence over the variance of the entire cluster of tweets centered around 'chatgpt'. This also shows how nodes with larger magnitude eigenvectors will have more large nodes connected to them. Words that are more frequent are more likely to be used with other high frequency words, especially if they are more correlated such as 'chatgpt' and 'chatbot'. Since ChatGPT is a chatbot-style AI, it is unsuprising it is also found in a majority of the tweets and also has a large eigenvector.
        </p>

        <h2>Semantic Analysis Network Graph</h2>
        <p></p>

    </div>
}

export default Semantic;