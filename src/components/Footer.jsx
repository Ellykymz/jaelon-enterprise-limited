const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Jaelon Enterprise Limited. All
          rights reserved.
        </p>
        <ul className="footer-menu">
          <li className="footer-item">
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li className="footer-item">
            <a href="/terms">Terms of Service</a>
          </li>
          <li className="footer-item">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-additional">
        <p>Contact: info@jaelon.com</p>
        <p>Address: 123 Jaelon Street, Cityville, Country</p>
      </div>
    </footer>
  );
};

export default Footer;
