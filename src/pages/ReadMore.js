import MonasteryList from "./MonasteryList";
import Heritage from "./Components/Heritage";
import Slider from "./Slider";
import { Link } from "react-router-dom";
const ReadMore = () => {
    return ( 
        
        <div className="read-more">
          <Slider/>
          <MonasteryList/>
          <h2>Spritual Schools</h2>
          <p>it consists spritual eduaction like digua metsihaft ,,
             types of diffrent teaching,,,list down them
          </p>

          <h3>what makes the church attractive</h3>
          <p>its history, the environment, or others that makes peoples  to come</p>
          <div className="heritage-list">
            <Heritage/>
          </div>
          <h2>About the environment</h2>
          <p>The weather condition.....what do we need to go there,,,,the transport System
             the language they speak the distance from Addis Ababa and others
          </p>

          <h2>Links and Descripitions</h2>
          <p>wikepedia ..youtube and other links related resources</p>
          <button>
            <Link to="/home" className="link">
              Go There
            </Link>
          </button>
        </div>
     );
}
 
export default ReadMore;