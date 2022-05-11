import arrow from "./images/Group 5.svg";
import church from "./images/Bitmap.jpg";
import cloud from "./images/cloud.svg";
import "../App.css";


const Home = () => {
  return ( 
      <div className="Home-content">
          {/* for content one */}
          <div className="Home-content-one">
              <h2>Travel</h2>
              <p>To</p>
              <img src={arrow}  alt="arrow pic" /> 
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quibusdam consectetur officiis dolore molestiae commodi.</p>
          </div>


          {/* for content Two*/}
          <div className="Home-content-three">
            <img src={cloud} alt="an image for the cloud" />
            <img src={church} alt="an image for the church" />
              
          </div>
      </div>
   );
}

export default Home;