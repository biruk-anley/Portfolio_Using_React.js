import MonasteryList from "./MonasteryList";
import Slider from "./Slider";

const Top = () => {
    return ( 
        <div className="top-selected">
            <Slider/>
            <h2>Top 5 Place to be visted</h2>
            <p>why It is top 5 places reason for those top5
                It will be selected based on niumber of rate
            </p>
            <div className="topPlace-holder">
                <div className="list-content">
                    <h2>1.DebreTabor Medanilaem</h2>
                    <p>Peoples come to this place because of ....</p>
                    <MonasteryList/>
                </div>

                <div className="list-content">
                    <h2>2.Lalibela</h2>
                    <p>Peoples come to this place because of ....</p>
                    <MonasteryList/>
                </div>
            </div>

        </div>
     );
}
 
export default Top;