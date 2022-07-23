/* eslint-disable jsx-a11y/anchor-is-valid */
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
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        </p>
        </div>
      </Col>
    </Row>
  </Container>
  </div>
  )
}

export default AboutUs
