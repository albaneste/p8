import './rating.css';
import starempty from "../../images/starempty.png";
import starfull from "../../images/starfull.png";

function Rating (rate) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {stars.map((star) =>
                rate.rating >= star ? (
                    <img className="stars" key={star} src={starfull} alt="" />
                ) : (
                    <img className="stars" key={star} src={starempty} alt="" />
                )
            )}
        </div>
    );
};

export default Rating;