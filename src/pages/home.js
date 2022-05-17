import arrow from "./images/Group 5.svg";
import church from "./images/Bitmap.jpg";
import cloud from "./images/cloud.svg";
import "../App.css";


const Home = () => {
  return ( 
      <div className="Home-content">
          {/* for content one */}
          <div className="Home-content-one">
              <div className="home-travel-content">
                <div className="home-travel-title">
                    <div className="travel-do">
                        <h2 >Travel</h2> 
                        <div className="arrow">
                          <img src={arrow}  alt="arrow pic" /> 
                        </div>
                    </div>
                    <div className="to-eth">
                      <p>To</p>
                      <p>Ethiopia</p>
                    </div>
                    
                   
                </div>
                
              
                
              </div>
              
              
              
              
          </div>


          {/* for content Two*/}
          <div className="Home-content-two">
            
            <img className="church-img" src={church} alt="an image for the church" />
            <img className="cloud" src={cloud} alt="an image for the cloud" />
            {/* <img className="cloud-2" src={cloud} alt="an image for the cloud" />
            <img className="cloud-3" src={cloud} alt="an image for the cloud" /> */}
            
              
          </div>
      </div>
   );
}

export default Home;