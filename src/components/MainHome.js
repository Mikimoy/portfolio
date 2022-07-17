import React from 'react'
import '../style/mainhome.css';
import { Row, Col, Container } from 'react-bootstrap';
import services from '../assets/logo192.png';


const MainHome = () => {
  return (
    <div className="main">
    <Container>
      <Row md={4}>
      <Col sm className='coll1'>
      <div>
        <img src={ services } alt='logo' className='img-web-dev'/>
        </div>
        <div>
        <h1>Web Developer</h1>
        </div>
        <div>
        <p>"Neque porro quisquam est qui dolorem ipsum<br/>quia dolor sit amet, consectetur, adipisci velit..."</p>
        </div>
        </Col>
        <Col sm className='coll2'>
        <div>
        <img src={ services } alt='logo' className='img-game-dev'/>
        </div>
        <div>
        <h1>Game Developer</h1>
        </div>
        <div>
        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </div>
        </Col>
        <Col sm className='coll3'>
        <div>
        <img src={ services } alt='logo' className='img-3d-dev'/>
        </div>
        <div>
        <h1>3D Artist</h1>
        </div>
        <div>
        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </div>
        </Col>
        </Row>
    </Container>
    </div>
  )
}

export default MainHome
