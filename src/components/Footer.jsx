import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Jaelon Enterprise Limited. All
          rights reserved.
        </p>
        <nav className="footer-menu">
          <ul className="footer-menu-list">
            <li className="footer-menu-item">
              <a href="/privacy" className="footer-link">Privacy Policy</a>
            </li>
            <li className="footer-menu-item">
              <a href="/terms" className="footer-link">Terms of Service</a>
            </li>
            <li className="footer-menu-item">
              <a href="/contact" className="footer-link">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-additional">
        <address>
          <p>Contact: info@jaelon.com</p>
          <p>Address: 123 Jaelon Street, Cityville, Country</p>
        </address>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;