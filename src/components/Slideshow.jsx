
import "../assets/styles/Slideshow.css";
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import { useState } from "react";

//la fonction prend en propriété un tableau d'images et utilise l'état local current pour savoir quelle image afficher.
//On stocke la longueur du tableau dans la const lengh et si >1 donc plus d'une image, affichage des flèches
//les fonctions next et prev mettent à jour l'état current pour faire défiler à gauche ou droite
//On map pour afficher les images dans les div mais seule l'actuelle est affichée dans active-pictrure 
function Slideshow({ props }) {
  const [current, updateCurrent] = useState(0);
  const length = props.length;
  //next incrémente l'indice current s'il n'est pas au maximum, sinon il le remet à 0
  const next = () => updateCurrent(current === length - 1 ? 0 : current + 1);
  //prev décrémente l'indice current s'il n'est pas à 0, sinon il le remet à la dernière image
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