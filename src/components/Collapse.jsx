import React from 'react';
import "../assets/styles/Collapse.css";
import arrowdown from "../assets/images/dropdown-arrow-desktop.png";

//Pour ce composant Collapse, on prend 2 propriétés content et title à afficher selon une condition de click
function Collapse({ content, title }) {
  //ici on va utiliser useState de react pour verifier l'état isopen et l'initialiser en false
  const [isOpen, setIsOpen] = React.useState(false);
  //ensuite on return une div de classe collapse en 2 parties qui va interroger à chaque fois isOpen:
  //- la première s'affiche tjrs mais selon que c'est ouvert ou fermé avec onClick on change le visuel de la fleche
  //- la deuxième si isOpen est true on affiche le texte
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
