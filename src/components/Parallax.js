import { Parallax } from 'react-parallax';
import Nasa from '../assets/nasa.jpg'
import '../style/Parallax.css';
const ImageOne = () => (
    <Parallax className='image ' blur={0} bgImage={Nasa}  strength={800} bgImageStyle={{minHeight:"120vh" }}>
        <div className='content'>
            <span className="img-txt">a trip tasdsadsado Space</span>
        </div>
    </Parallax>
);

export default ImageOne