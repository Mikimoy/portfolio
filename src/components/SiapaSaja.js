import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/siapasaja.css';
import foto from '../assets/logo192.png';

const SiapaSaja = () => {
  return (
    <div className='wnu'>
        <h1>Who Need Us ?</h1>
        <div className="conten-wnu">
        <Container>
        <Row>
            <Col sm className='col-1-siapasaja'>
                <Card className="text-center">
                    <Card.Body>
                        <div className="icon-wnu">
                            <i class="fa-solid fa-alicorn"></i>
                        </div>
                        <Card.Text>
                            User Internet
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col sm className='col-1-siapasaja'>
            <Card className="text-center">
                <Card.Body>
                    <div className="icon-wnu">
                        <i class="fa-solid fa-store"></i>                    
                    </div>                    
                    <Card.Text>
                        Marketplace
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>

            <Col sm className='col-1-siapasaja'>
                <Card className="text-center">
                    <Card.Body>
                        <div className="icon-wnu">
                            <i class="fa-solid fa-people-group"></i>                        
                        </div>                        
                        <Card.Text>
                            Team Youtube
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col sm className='col-1-siapasaja'>
                <Card className="text-center">
                    <Card.Body>
                        <div className="icon-wnu">
                            <i class="fa-solid fa-building"></i>                        
                        </div>
                        <Card.Text>
                            Any Company
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>
    </div>
  </div>
  )
}

export default SiapaSaja
