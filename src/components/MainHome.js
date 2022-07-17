import React from 'react'
import '../style/mainhome.css';
import { Row, Col, Container } from 'react-bootstrap';


const MainHome = () => {
  return (
    <div className="main">
    <Container>
      <Row>
        <Col sm>Website Developers <br></br><p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p></Col>
        <Col sm>3D Artist<br></br><p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p></Col>
        <Col sm>Game Developers<br></br><p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p></Col>
      </Row>
    </Container>
    </div>
  )
}

export default MainHome