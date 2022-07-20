import { Parallax } from 'react-parallax';
import '../style/Parallax.css';

import { Row, Col, Container } from 'react-bootstrap';
import foto from '../assets/logo192.png';

const ImageTwo = () => (
    <Parallax className='image ' blur={0} bgImage="https://wallpaperaccess.com/full/166051.jpg" strength={800} bgImageStyle={{minHeight:"120vh" }}>
      <div >
         <Container className='Card'>
         <Row>
        <Col sm className='ada'>
          <h2>Our Service</h2>
          <hr></hr>
        </Col>
        <Col sm className='ada'>  <i class="fa-solid fa-browser" ></i><h5>Web Developer</h5>
        <p>A company profile describes what makes your company unique. It automatically differentiates your brand because no other company has the exact same founding story  </p>

        <i class="fa-solid fa-browser" ></i><h5>Web Developer</h5>
        <p>A company profile describes what makes your company unique. It automatically differentiates your brand because no other company has the exact same founding story  </p>
        <i class="fa-solid fa-browser" ></i><h5>Web Developer</h5>
        <p>A company profile describes what makes your company unique. It automatically differentiates your brand because no other company has the exact same founding story  </p>
        </Col>
        <Col sm className='ada'><i class="fa-solid fa-gamepad-modern"></i><h5>Game Developer</h5>
        <p>You can justify a higher price point for your products and services, if you go into details about your production values or ethically-sourced materials.</p>
        <i class="fa-solid fa-browser" ></i><h5>Web Developer</h5>
        <p>A company profile describes what makes your company unique. It automatically differentiates your brand because no other company has the exact same founding story  </p>
        <i class="fa-solid fa-browser" ></i><h5>Web Developer</h5>
        <p>A company profile describes what makes your company unique. It automatically differentiates your brand because no other company has the exact same founding story  </p></Col>
      </Row>
    </Container>
    </div>
    </Parallax>
);

export default ImageTwo





