import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer-section'>
        <div className='footer-section-one'>
            <ul>
                <li><Link to='/about-us'>about</Link></li>
                <li><Link to='/contact-us'>contact</Link></li>
                <li><Link to='/coming-soon'>arrivals</Link></li>
                <li><Link to="/elements/product-list-types">elements</Link></li>
            </ul>
        </div>
        <div className='footer-section-two'>
            <span>© 2024 younes lassiri, All Rights Reserved</span>
        </div>
    </div>
  );
}

export default Footer;
