
import church from "./images/Bitmap.jpg";
const Gallery = () => {
    return ( 
        <div className="gallerys">
            <h2>Checkout Spritual Images</h2>
            <div className="images-list">
                <div className="list-one">
                   <img src={church} alt=''/>
                    <p>Lalibela</p>
                </div>
                <div className="list-one" alt=''>
                   <img src={church} alt=''/>
                    <p>Lalibela</p>
                </div>
                <div className="list-one">
                   <img src={church} alt=''/>
                    <p>Lalibela</p>
                </div>
                <div className="list-one">
                   <img src={church} alt=''/>
                    <p>Lalibela</p>
                </div>
            </div>
        </div>
     );
}
 
export default Gallery;