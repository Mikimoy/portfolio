import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/siapasaja.css';
import foto from '../assets/logo192.png';

const SiapaSaja = () => {
  return (
    <div className='conten'>
        <h1>Siapa Saja Client</h1>
        <Container>
        <Row>

            <Col sm className='col-1-siapasaja'>
                <Card className="text-center">
                    <Card.Body>
                        <img src= { foto } alt="foto" className='col-1-image'/>
                        <Card.Title>Special</Card.Title>
                        <Card.Text>
                            With supporting text below
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col sm className='col-1-siapasaja'>
            <Card className="text-center">
                <Card.Body>
                    <img src= { foto } alt="foto" className='col-1-image'/>
                    <Card.Title>Special</Card.Title>
                    <Card.Text>
                        With supporting text below
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>

            <Col sm className='col-1-siapasaja'>
                <Card className="text-center">
                    <Card.Body>
                        <img src= { foto } alt="foto" className='col-1-image'/>
                        <Card.Title>Special</Card.Title>
                        <Card.Text>
                            With supporting text below
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col sm className='col-1-siapasaja'>
                <Card className="text-center">
                    <Card.Body>
                        <img src= { foto } alt="foto" className='col-1-image'/>
                        <Card.Title>Special</Card.Title>
                        <Card.Text>
                            With supporting text below
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>
  </div>
  )
}

export default SiapaSaja