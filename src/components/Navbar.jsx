import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container">
      <div className="container-wrapper nav">
        <nav className="navbar">
          <div className="navbar-logo">
            <NavLink to="/">
              <img src="/path/to/logo.png" alt="Your Company Logo" />
            </NavLink>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <NavLink exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink to="/about" activeClassName="active-link">
                About
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/services" activeClassName="active-link">
                Services
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/products" activeClassName="active-link">
                Products
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/contact" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-menu">
            {/* <li className="navbar-item">
              <NavLink to="/admin" activeClassName="active-link">
                Admin
              </NavLink>
            </li> */}
            {/* <li className="navbar-item">
              <NavLink to="/worker" activeClassName="active-link">
                Worker
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
