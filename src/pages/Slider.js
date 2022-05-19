
import {  AiOutlineLeftCircle } from "react-icons/ai";
import {  AiOutlineRightCircle } from "react-icons/ai";
import './CSS/Slider.css'
import church from "./images/Bitmap.jpg";


const Slider = () => {
    return (
      <div className="Slider-holder">
       
        < AiOutlineLeftCircle /> <br />
        {/* <img src={church} alt="image" /> */}
        < AiOutlineRightCircle /><br />
     
      </div>
    );
}
 
export default Slider;