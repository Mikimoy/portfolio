/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../style/footer.css';
import foto from '../assets/logo192.png';
import { Row, Col, Container } from 'react-bootstrap';
export const Footer = () => {
  return (
    <div> 
      <footer>
        <div className="container">
          <div className='col-auto'>
          <Container>
      <Row>
        <Col sm> <i class="fa-brands fa-instagram"></i>  
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-solid fa-envelope"></i></Col>
        <Col sm> <p>Sazanaz Haver</p>
        </Col>
        <Col sm><p className='p2'>© 2022   copyright </p></Col>
      </Row>
    </Container>
            </div>
             <hr></hr>
          
          <div className="">
            <center>
          <img src={foto}/>
          </center>
          </div>
          <div className="about">
          <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
         About
        </Col>
        <Col md="auto">FAQ</Col>
        <Col xs lg="2" className='as2'>
        Warranty
        </Col>
      </Row>
    </Container>
          </div>
        </div>

        <div className="">
            <center>
          
          </center>
          </div>
      </footer>
      </div>
  )
}

export default Footer;