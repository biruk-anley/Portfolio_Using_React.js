
import { FaPhoneAlt } from "react-icons/fa";
import church from "./images/Bitmap.jpg";


const Slider = () => {
    return (
      <div className="Slider-holder">
        <FaPhoneAlt />call us <br />
        <img src={church} alt="image" />
        <FaPhoneAlt />call us <br />
     
      </div>
    );
}
 
export default Slider;