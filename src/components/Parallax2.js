import { Parallax } from 'react-parallax';
import '../style/parallax2.css';
import testgif from '../assets/test.gif';
import "aos/dist/aos.css";
import { Container,Row ,Col } from 'react-bootstrap';

const ImageTwo = () => (
  <div className='body-parallax2'>
    <Parallax className='parallax2' blur={0} bgImage={ testgif } strength={700} bgImageStyle={{maxHeight:"111vh"}}>
        <div className='text-parallax2'>
        <div data-aos="zoom-in-up">
          <h1>How It Works</h1>
        </div>
        <Container>
          <Row>
            <div className="item-1-parallax2" data-aos="zoom-in-left">
              <Col sm={2} className='col-1-parallax2'>
                <div className="icon-parallax2">
                  <i class="fa-thin fa-head-side-brain"></i>
                </div>
              </Col>

              <Col sm={7} className='col-2-parallax2'>
              <h1>blabla</h1>
                <p>Lorem Ipsum Mentog Meja Sakit Kepala Akhirnya Di Cium Ema Ema Gara GAra Sudah Gila Maka Dia PErgi Ke Pasar Untuk Membeli Sawah Yang Berada Di Laut</p>
              </Col>
            </div>
            
            
            <div className="item-2-parallax2" data-aos="zoom-in-right">
              <Col sm={2} className='col-1-parallax2'>
                <div className="icon-parallax2">
                  <i class="fa-thin fa-head-side-brain"></i>
                </div>
              </Col>

              <Col sm={7} className='col-2-parallax2'>
              <h1>blabla</h1>
                <p>Lorem Ipsum Mentog Meja Sakit Kepala Akhirnya Di Cium Ema Ema Gara GAra Sudah Gila Maka Dia PErgi Ke Pasar Untuk Membeli Sawah Yang Berada Di Laut</p>
              </Col>
            </div>

            <div className="item-3-parallax2" data-aos="zoom-in-left">
              <Col sm={2} className='col-1-parallax2'>
                <div className="icon-parallax2">
                  <i class="fa-thin fa-head-side-brain"></i>
                </div>
              </Col>

              <Col sm={7} className='col-2-parallax2'>
              <h1>blabla</h1>
                <p>Lorem Ipsum Mentog Meja Sakit Kepala Akhirnya Di Cium Ema Ema Gara GAra Sudah Gila Maka Dia PErgi Ke Pasar Untuk Membeli Sawah Yang Berada Di Laut</p>
              </Col>
            </div>

            <div className="item-4-parallax2" data-aos="zoom-in-right">
              <Col sm={2} className='col-1-parallax2'>
                <div className="icon-parallax2">
                  <i class="fa-thin fa-head-side-brain"></i>
                </div>
              </Col>

              <Col sm={7} className='col-2-parallax2'>
              <h1>blabla</h1>
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
