// pages/projects/AutomationAndControls/AutomationAndControls.js
import { useNavigate } from "react-router-dom";
import links from "../../components/linkMetadata";
import "../../styles/topics.css";
import "../../styles/style.css";

const Interests = () => {
  let navigate = useNavigate();

  // page square links
  const squaresData = [
      { url: "/interests/bookshelf", text: "Bookshelf" },
      { url: "/interests/technical", text: "Technical Papers" },
  ];

  // go to the page url on clicking the square
  const handleClick = (url) => {
      if (url.startsWith("https")) {
          window.open(url, '_blank');
      } else {
          navigate(url);
      }
  };
  return (
      <div className="projects-container">
          <h1>Interests</h1>
          {/* <p>Here are some of the projects I have worked on.</p> */}
          <div className="grid-container">
              {/* Render the squares with their corresponding URLs and text */}
              {squaresData.map((square, index) => (
                  <div
                      key={index}
                      className="square"
                      onClick={() => handleClick(square.url)}
                  >
                      <div className="square"></div>
                      <div className="square-text">{square.text}</div>
                  </div>
              ))}
          </div>
      </div>
  );
};


export default Interests;