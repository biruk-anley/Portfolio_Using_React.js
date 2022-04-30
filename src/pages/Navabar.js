import LOGO from './images/logo.png'
import './CSS/Navabars.css'
const Navbar = () => {
    return (
      <div className="nav-bar">
        <div className="logo">
          <div className="images">
                <img src={LOGO} alt="logo" />
                <h2>KiBur title</h2>
          </div>
        </div>

        <div className="nav-bar--list">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              {" "}
              <a href="#">EOTC</a>
            </li>
            <li>
              <a href="#">
                <select>
                  <option value="Monastery">Alemayehu</option>
                  <option value="Church">Zenebe</option>
                </select>
              </a>
            </li>
            <li>
              <a href="#">TOP5</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">
                <select>
                  <option value="English">English</option>
                  <option value="Amharic">አማረኛ</option>
                </select>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}
 
export default Navbar;