
import links from "../../components/links";
import {RepoLink} from "../../components/Buttons";

const DecisionTree = () => {
    return (
        <div>
            <h1>Decision Tree Classifier</h1>
            <RepoLink link={links.dtClass.url} />

            <h2>Background</h2>
            <p></p>

            <h2>Grid Search</h2>
            <p></p>

            <h2>Binning for Continuous Data</h2>
            <p></p>

            <h2>Examples</h2>
            <h3>Predicting Video Game Sales</h3>
            <p></p>

            <h3>Titanic Passenger Survival Likelihood</h3>
            <p></p>
        </div>
    );  
};

export default DecisionTree;