import './rating.css';
import starempty from "../../images/starempty.png";
import starfull from "../../images/starfull.png";

function rating({stars}) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {stars.map((star) =>
                stars.rating >= star ? 
                (   <img className="stars-rating" key={star} src={starfull} alt="" /> ) 
                :
                 ( <img className="stars-rating" key={star} src={starempty} alt="" /> )
                   
               
            )}
        </div>
    );
};

export default rating;