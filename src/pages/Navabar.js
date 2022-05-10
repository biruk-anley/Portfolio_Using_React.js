import LOGO from "./images/logo.png";
import "./CSS/Navabars.css";
import Lightmode from "./images/light-mode.svg";
import { Link } from "react-router-dom";
import Menus from "./images/48.svg";

const Navbar = () => {
  // const humberger = document.getElementById("humberger");
  // const nav = document.getElementById("nav-id");

  // humberger.addEventListener("Click", () => {
  //   nav.classList.toggle("Show");
  // });

  return (
    <div className="nav-bar">
      <div className="logo">
        <div className="images">
          <img src={LOGO} alt="logo" />
          <h2>KiBur Travel</h2>
        </div>
      </div>

      <div className="nav-bar--list">
        <ul id="nav-id" className="nav">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="link">
              About Us
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/Eotc" className="link">
              EOTC
            </Link>
          </li>
          <li>
            <select>
              <option value="Monastery">
                <Link to="/Monastery" className="link">
                  Monastery
                </Link>
              </option>
              <option value="Church">
                <Link to="/Church" className="link">
                  Church
                </Link>
              </option>
            </select>
          </li>
          <li>
            <Link to="/Top5" className="link">
              TOP5
            </Link>
          </li>
          <li>
            <Link to="/Gallery" className="link">
              Gallery
            </Link>
          </li>
          {/* <li>
            <Link to="#">
              <select>
                <option value="Language">Language</option>
                <option value="English">English</option>
                <option value="Amharic">አማረኛ</option>
              </select>
            </Link>
          </li> */}
          <li className="lightmodeicon">
            <img src={Lightmode} alt="" />
          </li>
        </ul>
        <li className="menus" id="humberger">
          <img src={Menus} alt="" />
        </li>
      </div>
    </div>
  );
};

export default Navbar;
