import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faArtstation } from "@fortawesome/free-brands-svg-icons";
import './App.css';
import CanvasContainer from './components/CanvasContainer';

function App() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="dialgoav">
            <a
              href="https://dialgoav.github.io/DianaGomez/"
              target="_blank"
              aria-label="Portfolio"
            >dialgoav</a> 
          <div className="nav_socials">
            <a
              href="https://github.com/DianaG9"
              target="_blank"
              aria-label="GitHub"
              className="nav_icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/diana-gomez-avendano/"                            target="_blank"
              aria-label="LinkedIn"
              className="nav_icon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            
            <a
              href="https://x.com/dialgoav9"
              target="_blank"
              aria-label="Twitter"
              className="nav_icon"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a
              href="https://www.artstation.com/williamestebanvaronvillamil9"
              target="_blank"
              aria-label="ArtStation"
              className="nav_icon"
            >
              <FontAwesomeIcon icon={faArtstation} />
            </a>
          </div>
        </div>
      </div>
        <h1>Watermelon</h1>
        <h1 className='front'>Watermelon</h1>
      
        <CanvasContainer />

        <div className="loader_container">
          <p>Loading</p>
          <div className="loader"></div> 
        </div>

      </div>
    </>
  );
}

export default App;