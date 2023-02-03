import React from 'react';
import "../assets/styles/Collapse.css";
import arrowdown from "../assets/images/dropdown-arrow-desktop.png";

function Collapse({ content, title }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="collapse">
      <div className={`collapse__content ${!isOpen ? "collapse__content--margin" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="collapse__title">{title}</div>
        <img className={`collapse__arrow ${isOpen ? "collapse__arrow--rotate" : ""}`} src={arrowdown} alt="" />
      </div>
      <div className={`${isOpen ? "collapse__text" : "collapse__hide"}`}>{content}</div>
    </div>
  );
}

export default Collapse;
//R