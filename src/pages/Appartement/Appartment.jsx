import logo from '../../assets/images/logo.svg';
import '../../assets/styles/Appartment.css';

import { Link } from "react-router-dom";

function Appartment() {
    return (
      <div className="App">
        <header className="App-header">
        <p>
            <h2>APPARTEMENT 1 </h2>
        </p>
          <img src={logo} className="App-logo" alt="logo" />          
          <nav>
              <Link to="/">Acceuil</Link>            
          </nav>     
        </header>
      </div>
    );
  }  
  
export default Appartment;