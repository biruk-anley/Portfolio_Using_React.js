import Advantage from "./AboutComponent/Advantage";
import Resource from "./AboutComponent/Resource";
import AboutUs from "./AboutComponent/AboutUs";
// import { FaPhoneAlt } from "react-icons/fa";
// import church from "./images/Bitmap.jpg";
import Slider from "./Slider";



const About = () => {
    return (
      <div className="about-holder">
        <Slider/>
        <ul>
          <li>About us</li> 
          <li>What can you get from us</li> 
          <li>Resources</li>    
        </ul>

        <Advantage/>
        <Resource/>
        <AboutUs/>
      </div>
    );
}
 
export default About;