
import links from "../../components/links";
import {RepoLink} from "../../components/Buttons";

const CNN = () => {
    return (
        <div>
            <h1>Convolutional Neural Network</h1>

            <RepoLink link={links.cnn.url} />

            <h2>Background</h2>
            <p>
                Convolutional Neural Networks (CNN) are a type of model that uses sequential convolution
                and max pooling layers to identify prominent data features. They were first inspired by
                human visual processing, and are especially suited for image processing tasks. CNN are
                good at image processing because they work similarly to image structuring and hierarchy shaping
                in traditional computer vision. Image "complexity" is reduced by segmenting the image and
                separating out distinctive features.
            </p>
            <p>
                Similarly, CNN use the convolutional layers to "percieve" the input data using a filter and then 
                use max pooling to sub-sample the data to reduce its size and complexity. The filter weights
                help to organize the data hierarchically and separate features. This also makes CNN good
                at identifying outliers in data.
            </p>

            <h2>Common Models</h2>
            <h3>LeNet-5</h3>
            <p></p>

            <h3>AlexNet</h3>
            <p></p>

            <h3>VGG</h3>
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