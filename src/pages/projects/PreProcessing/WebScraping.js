import handleClick from "../../ProjectPage";
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";


export const WebScraping = () => {
    return (
        <div>
          <h1>Web Scraping</h1>
          {/* Link to GitHub repository */}
          <RepoLink 
            link={links.scrape.url} 
            onClick={() => handleClick(links.scrape.url)}
          />
          <p>Placeholder</p>
        </div>
      );
    };
    