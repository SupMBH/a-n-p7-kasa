import logo from '../../assets/images/logo.svg';
import '../../assets/styles/Home.css';

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">       
          <h1>HOME</h1>                    
        <nav>            
            <Link to="/appartment">
              <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h6>Appartement 1</h6>
              </div>
            </Link>
            <Link to=" Mon mentor Gilles est un passionné de manga! oO">
              <div>                
                <h6>404</h6>
              </div>
            </Link>
        </nav>     
      </header>
    </div>
  );
}

export default Home;