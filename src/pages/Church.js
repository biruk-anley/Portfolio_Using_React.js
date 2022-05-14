
import MonasteryList from "./MonasteryList";
import Slider from "./Slider";
const Church = () => {
    return ( 
        <div className="Eotc">
            <Slider/>
            <h2>Historical and Miracle Full Orthodox Church</h2>
            <p>Ethiopia is blessed with historical and miracle full churches that attracts everyone
                in a church ther is priest , daiakon an chirtioans ,,,,,,the differnce between church and
                monastery is
            </p>
            <div className="church-list">
                <MonasteryList/>
                <MonasteryList/>
                <MonasteryList/>
                <MonasteryList/>
            </div>
        </div>
     );
}
 

 
export default Church;