
import "./CSS/Navabars.css";

import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar--list">
        <ul id="nav-id" className="nav">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="link">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/Resume" className="link">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/Myservices" className="link">
              My Services
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" className="link">
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="link">
              contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
