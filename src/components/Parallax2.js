import { Parallax } from 'react-parallax';
import '../style/parallax2.css';
import testgif from '../assets/test.gif';

import { Container } from 'react-bootstrap';

const ImageTwo = () => (
  <div className='body-parallax2'>
    <Parallax className='image' blur={0} bgImage={ testgif } strength={100} bgImageStyle={{maxHeight:"100vh" }}>
        <div className='text-parallax2'>
        <Container>
        <div className='text-1'>
        <h1>How It Works</h1>
            <div className='icon-text'>
            <i className="fa-duotone fa-building-flag"></i>
          <h1>Brain</h1>
            </div>
          <p>When You Have A Bussines With Our Company, You Will Take A Website With All You Want As You Request And We Will Give You Free Ads In Our Social Media</p>
          </div>

          <div className='text-2'>
            <div className='icon-text'>
            <i className="fa-duotone fa-building-flag"></i>
          <h1>Brain</h1>
            </div>
          <p>When You Have A Bussines With Our Company, You Will Take A Website With All You Want As You Request And We Will Give You Free Ads In Our Social Media</p>
          </div>

          <div className='text-3'>
            <div className='icon-text'>
            <i className="fa-duotone fa-building-flag"></i>
          <h1>Brain</h1>
            </div>
          <p>When You Have A Bussines With Our Company, You Will Take A Website With All You Want As You Request And We Will Give You Free Ads In Our Social Media</p>
          </div>
        </Container>
    </div>
    </Parallax>
    </div>
);

export default ImageTwo
