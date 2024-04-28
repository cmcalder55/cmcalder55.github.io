
import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const GenAlg = () => {
  return (
    <div>
      <h1>Genetic Algorithms</h1>
      {/* Link to GitHub repository */}
      <RepoLink 
      link={links.genAlg.url} 
      onClick={() => handleClick(links.genAlg.url)}
      />
      <p>Placeholder</p>
    </div>
  )
}

export const LinAlg = () => {
  return (    
    <div>
      <h1>Linear Regression</h1>
      {/* Link to GitHub repository */}
      <RepoLink 
      link={links.linReg.url} 
      onClick={() => handleClick(links.linReg.url)}
      />
      <p>Placeholder</p>
    </div>
  )
}

export const LogBarrier = () => {
  return (    
    <div>
      <h1>Log-Barrier Optimization</h1>
      {/* Link to GitHub repository */}
      <RepoLink 
      link={links.logBar.url} 
      onClick={() => handleClick(links.logBar.url)}
      />
      <p>Placeholder</p>
    </div>
  )
}

export const GradientDescent = () => {
  return (
    <div>
      <h1>Gradient Descent</h1>
      {/* Link to GitHub repository */}
      <RepoLink 
      link={links.gradDesc.url} 
      onClick={() => handleClick(links.gradDesc.url)}
      />
      <p>Placeholder</p>
    </div>
  )
}

export const Factorization = () => {
  return (
    <div>
      <h1>Matrix Factorization</h1>
      {/* Link to GitHub repository */}
      <RepoLink 
      link={links.matFac.url} 
      onClick={() => handleClick(links.matFac.url)}
      />
      <p>Placeholder</p>
    </div>
  )
}

export const BayesEst = () => {
  return (
    <div>
      <h1>Bayes Estimation</h1>
      {/* Link to GitHub repository */}
      <RepoLink 
      link={links.bayesEst.url} 
      onClick={() => handleClick(links.bayesEst.url)}
      />
      <p>Placeholder</p>
    </div>
    )
}

export const Backprop = () => {
  return (
    <div>
      <h1>Stochastic Backpropegation</h1>
      {/* Link to GitHub repository */}
      <RepoLink 
      link={links.stocProp.url} 
      onClick={() => handleClick(links.stocProp.url)}
      />
      <p>Placeholder</p>
    </div>
  )
}
