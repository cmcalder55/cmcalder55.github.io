
import links from "../../components/links";
import {RepoLink} from "../../components/Buttons";

const Backprop = () => {
    return (
      <div>
        <h1>Stochastic Backpropegation</h1>
        {/* Link to GitHub repository */}
        <RepoLink link={links.stocProp.url} />
        <p>Placeholder</p>
      </div>
    )
  }

export default Backprop;