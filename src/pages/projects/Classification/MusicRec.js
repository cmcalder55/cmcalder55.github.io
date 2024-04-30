import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

export const MusicRec = () => {
    return (
        <div>
          <h1>Music Reccommender</h1>
          {/* Link to GitHub repository */}
          <RepoLink 
            link={links.musicRec.url} 
          />
          <p>Placeholder</p>
        </div>
      );  
}
// export default MusicRec;