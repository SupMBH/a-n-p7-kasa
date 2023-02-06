
import "../assets/styles/Slideshow.css";
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import { useState } from "react";

//
function Slideshow({ props }) {
  const [current, updateCurrent] = useState(0);
  const length = props.length;
  const next = () => updateCurrent(current === length - 1 ? 0 : current + 1);
  const prev = () => updateCurrent(current === 0 ? length - 1 : current - 1);
  return (
    <div className="slideshow">
      {props.map((picture, index) => (
        <div key={index} className={index === current ? "slideshow__active-picture" : ""}>
          {index === current && (
            <img src={picture} alt="Appartement" className="slideshow__picture" />
          )}
        </div>
      ))}
      {length > 1 ? (
        <>
          <div className="slideshow__previous" onClick={prev}>
            <img src={arrowLeft} alt="" className="slideshow__previous-icon" />
          </div>
          <div className="slideshow__next" onClick={next}>
            <img src={arrowRight} alt="" className="slideshow__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Slideshow;