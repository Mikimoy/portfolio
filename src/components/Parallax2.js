import { Parallax } from 'react-parallax';
import React from 'react';
import '../style/parallax2.css';
import testgif from '../assets/test.gif';
import "aos/dist/aos.css";
import { Container,Row ,Col } from 'react-bootstrap';

const ImageTwo = () => (
  <div className='body-parallax2'>
    <Parallax className='parallax2' blur={0} bgImage={ testgif } strength={700} bgImageStyle={{maxHeight:"111vh"}}>
        <div className='text-parallax2'>
        <div className='judul-parallax2' data-aos="zoom-in-up" data-aos-easing="ease-in-sine" data-aos-duration="500">
          <h1>How It Works</h1>
        </div>
        <Container>
          <Row>
            <div className="item-1-parallax2" data-aos="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration="10000" data-aos-delay="400">
              <Col sm={2} className='col-1-parallax2'>
                <div className="icon-parallax2">
                  <i class="fa-thin fa-head-side-brain"></i>
                </div>
              </Col>

              <Col sm={7} className='col-2-parallax2'>
              <h1>Brain</h1>
                <p>Lorem Ipsum Mentog Meja Sakit Kepala Akhirnya Di Cium Ema Ema Gara GAra Sudah Gila Maka Dia PErgi Ke Pasar Untuk Membeli Sawah Yang Berada Di Laut</p>
              </Col>
            </div>
            
            
            <div className="item-2-parallax2" data-aos="zoom-in-right" data-aos-easing="ease-in-sine" data-aos-duration="6000" data-aos-delay="500">
              <Col sm={2} className='col-1-parallax2'>
                <div className="icon-parallax2">
                  <i class="fa-thin fa-book-open-cover"></i>                
                </div>
              </Col>

              <Col sm={7} className='col-2-parallax2'>
              <h1>Book</h1>
                <p>Lorem Ipsum Mentog Meja Sakit Kepala Akhirnya Di Cium Ema Ema Gara GAra Sudah Gila Maka Dia PErgi Ke Pasar Untuk Membeli Sawah Yang Berada Di Laut</p>
              </Col>
            </div>

            <div className="item-3-parallax2" data-aos="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration="6000" data-aos-delay="600">
              <Col sm={2} className='col-1-parallax2'>
                <div className="icon-parallax2">
                  <i class="fa-thin fa-lightbulb-on"></i>                
                </div>
              </Col>

              <Col sm={7} className='col-2-parallax2'>
              <h1>Excellent Idea</h1>
                <p>Lorem Ipsum Mentog Meja Sakit Kepala Akhirnya Di Cium Ema Ema Gara GAra Sudah Gila Maka Dia PErgi Ke Pasar Untuk Membeli Sawah Yang Berada Di Laut</p>
              </Col>
            </div>

            <div className="item-4-parallax2" data-aos="zoom-in-right" data-aos-easing="ease-in-sine" data-aos-duration="6000" data-aos-delay="700">
              <Col sm={2} className='col-1-parallax2'>
                <div className="icon-parallax2">
                  <i class="fa-thin fa-code-simple"></i>                
                </div>
              </Col>

              <Col sm={7} className='col-2-parallax2'>
              <h1>Code</h1>
                <p>Lorem Ipsum Mentog Meja Sakit Kepala Akhirnya Di Cium Ema Ema Gara GAra Sudah Gila Maka Dia PErgi Ke Pasar Untuk Membeli Sawah Yang Berada Di Laut</p>
              </Col>
            </div>
          </Row>
        </Container>
    </div>
    </Parallax>
    </div>
);

export default ImageTwo
