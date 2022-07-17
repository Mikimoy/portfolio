import { Carousel } from 'react-bootstrap';
import '../style/hero.css';
import foto from '../assets/spiderman.jpg';


function Hero() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="hero"
            src="https://cutewallpaper.org/27/black-hole-gif-wallpaper/artstation-arcane-absortion-black-hole-alvaro-g-a-black-hole-wallpaper-black-hole-gif-black-hole.gif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="hero"
            src={ foto }
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="hero"
            src={ foto }
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default Hero