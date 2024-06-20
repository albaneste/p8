
import './carrousel.css';
import arrowRight from "../../images/arrowright.png";
import arrowLeft from "../../images/arrowleft.png";
import { useState } from 'react';


function Carrousel({ images }) {
  const [current, setCurrent] = useState(0)
  const length = images.length

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  return (
    <div className="carrousel">

        <img src={arrowLeft} alt="gauche" onClick={prevSlide} className="arrowleft"/>
        <img src={arrowRight} alt="droite" onClick={nextSlide} className="arrowright"/>

      {images.map((image, id, title) => (
        <div
          key={id}
          className={current === id ? 'slider slider-active' : 'slider'}
        >
          {id === current && (
            <img className="slider-image" src={image} alt={title} />
          )}

          {id === current && (
            <span className="slider-number"> 
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
export default Carrousel;