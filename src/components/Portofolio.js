import React, { useEffect } from 'react'
import { Container, Row, Col, Card} from "react-bootstrap";
import '../style/Portofolio.css';
import destination from "../data/Destination.js";
import Aos from 'aos';
import "aos/dist/aos.css";

const Portofolio = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div id='web'>
 <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2 className="judul-teks"> Portofolio Website</h2>
            <p className="judul-deskprisi-teks">
              Temukan Kebutuhan anda dalam membangun Website Terbaik
            </p>
          </Col>
        </Row>
        <Row>
        {destination.map((value, index) => {
            return (
              <Col sm="12" md="6" lg="4" xl="3" key={value.id} >

                  <Card className="card-destinasi" data-aos="fade-up">
                    <Card.Img
                      className="card-image"
                      src={value.gambar}
                      alt={value.name}
                      aria-label={`Card image ${value.name}`}
                    />
                  
                      <Card.Text className=" card-text-destinasi">
                        <h2>{value.nama}</h2>
                        <p>{value.paragraf}<a href={value.id}>
                        <button > 
                          See more</button></a></p>
                      </Card.Text>
                  
                  </Card>
          
              </Col>
            );
          })}
        </Row>

      </Container>
    </div>
  )
}

export default Portofolio