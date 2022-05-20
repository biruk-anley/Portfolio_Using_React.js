import {FaPhoneAlt } from 'react-icons/fa';
import {FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {AiTwotoneMail } from 'react-icons/ai';
import EOTC from './images/eotc.png';
import mahiberekdusan  from './images/mk.png';

const Footer = () => {
    return ( 
        <div className="footer-content">
            <div className="footer-content-one">
                <h2>Contact us</h2>
                <FaPhoneAlt/>call us <br />
                <AiTwotoneMail/><Link to="#">birukanley1991@gmail.com</Link><br />
                <FaTelegram/><Link to="#">telegram linnk t.eme</Link> <br />
            </div>

            <div className="footer-content-two">
                <h2>Related webs</h2>
                
                <img src={EOTC} className='footer-image' alt="eotc-logo" /><Link to="https://www.ethiopianorthodox.org/">EOTC website</Link><br />
                <img src={mahiberekdusan} className='footer-image' alt="mahibere-kidusan-logo" /><Link to="https://eotcmk.org/e/en/">Mahibere Kidusan website</Link> <br />
            </div>

            <div className="footer-content-three">
                <h2>Quick Link</h2>
                <ul>
                    <li><Link to="/">Home</Link><br /></li>
                    <li><Link to="#">About us</Link><br /></li>
                    <li><Link to="#">EOTC</Link><br /></li>
                    <li><Link to="#">Monastery</Link><br /></li>
                    <li><Link to="#">Church</Link><br /></li>
                    
                </ul>
               
            </div>
        </div>
     );
}
 
export default Footer;