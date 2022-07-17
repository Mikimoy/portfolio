/* eslint-disable jsx-a11y/alt-text */

import '../style/hero.css';
import foto from '../assets/logo192.png';

function Hero() {
    return (
      <div className="Hero"> 
      <center>
        <div className="tittle">
      <img src={foto}/>
        <h1 className="titleWelcome">
        Sazanaz Haver <br/></h1>
      <p>
      With Best Staycasion
      </p>
    
    </div>  
    </center>
          </div>
 
    );
  }

export default Hero
