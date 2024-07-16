
import links from "../../../components/linkMetadata";
import {RepoLink} from "../../../components/Buttons";

const TextClustering = () => {
    return (
        <div>
            <h1>Text Clustering Methods</h1>
            <RepoLink link={links.textCluster.url} />

            <h2>K-Means Clustering</h2>
            <p></p>

            <h2>Gaussian Mixture Model Clustering</h2>
            <p></p>

            <h2>LDA Clustering</h2>
            <p></p>

            <h2>Analysis</h2>
            <h3>Best Pre-Processing Parameters</h3>
            <p>
                Preprocessing by stripping all punctuation and only keeping non-numeric characters over 2 letters worked well by reducing variance within clusters and normalizing the documents. Also, after looking at the top 20 words for each cluster, additional stop words ['like','would'] were added. This further reduced variance in the data and helps to reduce overlapping features/similarity between clusters. The high variance is shown in the scatter plots below.
            </p>

            <h3>Cosine vs. Euclidian Distance</h3>
            <p>
                Cosine distance similarity was more effective that Euclidean because the decision space had large dimensions, and there is a lot of overlap between text vectors due to common words such as 'person' or 'where'. In this case, cosine similarity is better because it considers the angle between two vectors, unlike Euclidean similiarity that considers vector magnitude. This means cosine is better for determining the semantic components of text for clustering, where Euclidean is suited for tasks with token raw frequency.

            </p>

            <h3>Assigning Cluster Topic Names</h3>
            <p>
                Topic names can be assigned by looking at the most popular words for each cluster:
                Cluster 0:  water; energy; light; earth; number; one; used; air; mass; two; speed; gas; equation; force; also; answer; heat; sun; use; first
                Cluster 1:  http; com; www; business; credit; money; company; get; good; find; pay; need; want; one; yahoo; help; tax; card; home; site
                Cluster 2:  get; people; know; help; think; good; one; time; want; really; weight; need; work; take; could; make; day; also; feel; way
                Cluster 3: god; people; jesus; bible; believe; religion; christians; one; man; life; think; world; christian; church; many; know; question; say; love; christ

                Based on the semantic similarity of the clusters, they could be labeled as:
                0: 'science and math'
                1: 'business'
                2: 'health and wellness'
                3: 'religion'

                These labels were chosen based on the percieved common topic between the words, as well as what defined them the best without being similar to another cluster. For example, assigning topic 0 as 'tech' might be too vague and relate to a lot of text in topic 1 as well.

            </p>

        </div>
    );
};

export default TextClustering;
