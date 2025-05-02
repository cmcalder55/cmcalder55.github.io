
import links from "../../../components/linkMetadata";
import {RepoLink} from "../../../components/Buttons";

const resNet = () => {
    return (
        <div>
            <h1>Residual Neural Network</h1>
            {/* Link to GitHub repository */}
            <RepoLink link={links.resnet.url} />
            
            <h2>Background</h2>
            <p></p>

            <h2>The Identity Shortcut</h2>
            <p></p>

            <h2>Examples</h2>
            <h3>Predict CIFAR-10 Data</h3>
            <p></p>

        </div>
    );
}

export default resNet;