import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../style/aboutus.css';
import foto from '../assets/logo192.png';

const AboutUs = () => {
  return (
    <div className='coll'>
    <Container>
    <Row>
      <Col sm className='col-1'>
        <div className='logo'>
            <a href="#">
                <img src={ foto } alt="logo" className="foto-1"/>
            </a>
        </div>
      </Col>
      <Col sm className='col-2'>
        <div className='text'>
        <h1> About Us</h1>
        <p>
        Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Lorem ipsum dolor sit,consectetur adipiscing elit. Sed porttitor lectus nibh.<br/>consectetur adipiscing elit accumsan.
        </p>
        </div>
      </Col>
    </Row>
  </Container>
  </div>
  )
}

export default AboutUs