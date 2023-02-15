
import redstar from "../assets/images/redStar.svg";
import greystar from "../assets/images/greyStar.svg";
import "../assets/styles/Rate.css";

//Fonction d'affichage du nombre d'étoiles correspondant à la propriété rating des datas produits
//Concrêtement, on map le tableau stars qui contient les entiers de 1 à 5, et pour chaque itération star la fonction détermine si le rating est >= à star
//->Si oui on affiche une étoile rouge, si non une grise
//(on utilise les images d'étoiles en constantes importées redstar et greystar. Les étoiles sont enveloppées dans une vue avec la classe rating)  
function Rate({ rating }) {
const stars = [1, 2, 3, 4, 5];

return (
<div className="rating">
{stars.map((star) =>
rating >= star ? (
<img
         key={star}
         className="rating__icon"
         src={redstar}
         alt=""
       />
) : (
<img
         key={star}
         className="rating__icon"
         src={greystar}
         alt=""
       />
)
)}
</div>
);
}

export default Rate;