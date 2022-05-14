
import MonasteryList from "./MonasteryList";
import Slider from "./Slider";
const Monastery = () => {
    return ( 
        <div className="Eotc">
            <Slider/>
            <h2>Historical and Miracle Full Orthodox Monasconst Monastery</h2>
            <p>Ethiopia is blessed with historical and miracle full Monasconst Monasteryes that attracts everyone
                in a Monasconst Monastery ther is priest , daiakon an chirtioans ,,,,,,the differnce between Monasconst Monastery and
                monastery is
            </p>
            <div className="Monastery-list">
                <MonasteryList/>
                <MonasteryList/>
                <MonasteryList/>
                <MonasteryList/>
            </div>
        </div>
     );
}
 

 
export default Monastery;