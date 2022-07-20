import React from 'react'
import '../style/mainhome.css';
import { Row, Col, Container } from 'react-bootstrap';
import services from '../assets/logo192.png';
import '../style/responsive.css';


const MainHome = () => {
  return (
    <div className="main">
    <Container>
      <Row>
        <Col sm>
          <div className='img-dev'>
            <img src={ services } alt='logo'/>
          </div>
          <div className='dev-text'>
            <h1>Web Developer</h1>
            <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </p>
          </div>
        </Col>
        <Col sm>
          <img src={ services } alt='logo'/>
          <div className='game-text'>
            <h1>Game Developer</h1>
            <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </p>
          </div>
        </Col>
        <Col sm>
          <img src={ services } alt='logo'/>
          <div className='art-text'>
            <h1>3D Artist</h1>
            <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default MainHome
