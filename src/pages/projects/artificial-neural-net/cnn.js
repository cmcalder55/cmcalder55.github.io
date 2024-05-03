
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const CNN = () => {
    return (
        <div>
            <h1>Convolutional Neural Network</h1>

            <RepoLink link={links.cnn.url} />

            <h2>Background</h2>

            <h2>Common Models</h2>
            <h3>LeNet-5</h3>
            <p></p>

            <h3>AlexNet</h3>
            <p></p>

            <h2>Modeling with TensorFlow</h2>
            <p></p>

            <h2>Examples</h2>
            <h3>Predicting MNIST Handwritten Numbers</h3>
            <p></p>

            <h3>Predicting CIFAR-10 Images</h3>     
            <p></p>

        </div>
    )
};

export default CNN;