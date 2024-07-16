
import links from "../../../components/linkMetadata";
import {RepoLink} from "../../../components/Buttons";

const LogReg = () => {
    return (    
      <div>
        <h1>Logistic Regression</h1>
        {/* Link to GitHub repository */}
        <RepoLink link={links.logReg.url} />
        <p>Placeholder</p>
      </div>
    )
  }  
export default LogReg;