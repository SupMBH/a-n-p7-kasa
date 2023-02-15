import "../../assets/styles/Apartment.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../../assets/data/data.json";
import Slideshow from "../../components/Slideshow";
import ApartmentTag from "../../components/ApartmentTag";
import Collapse from "../../components/Collapse";
import Rate from "../../components/Rate";
import HostName from "../../components/HostName";

//fonction Réact Apartment va générer le contenu HTML relatif à l'appartement en focale en utilisant les composants enfant Slideshow, Rate, HostName et Collapse
function Apartment() {
  //On récup l'ID à partir des paramètres de l'URL avec useparams
  const { productId } = useParams();
  //On récup la fonction useNavigate pour renvoyer vers d'autres pages
  const navigate = useNavigate();
  //On fait une recherche dans le tableau data (le json) avec la méthode find pour vérifier si sur chaque itération apartement on a une égalité stricte entre l'id 
  //de cet appartement et l'id récupéré de l'URL et si c'est le cas on l'envoie en constante apartment
  const apartment = data.find((apartment) => apartment.id === productId);
  //Avec le hook useEffect, on gère en effet de bord le fait que cette const apartement puisse être undefined en renvoyant alors en page 404 
  useEffect(() => {
    if (!apartment) navigate("Error404");
  });
  //Si apartment est bien def, alors on décompose cet objet en propriétés que l'on va afficher ou injecter dans les composants enfants afin qu'ils les retraitent 
  //Dans la div apartement__tags, on map le tableau apartment.tags pour renvoyer un composant ApartmentTag en lui passant le tag courant en tant que propriété getTag 
  if (apartment) {
    const { title, location, rating, host, equipments, description, pictures } =
      apartment;
    return (
      <section className="apartment">
        <Slideshow props={pictures} />
        <div className="apartment__content">
          <div className="apartment__info">
            <h1 className="apartment__title">{title}</h1>
            <p className="apartment__location">{location}</p>
            <div className="apartment__tags">
              {apartment.tags.map((tag, index) => (
                <ApartmentTag key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="apartment__rating-host">
            <Rate rating={rating} />
            <HostName host={host} />
          </div>
        </div>
        <div className="apartment__dropdowns">
          <Collapse title="Description" content={description} />
          <Collapse
            title="Equipements"
            content={equipments.map((equipment, index) => (
              <li className="apartment__dropdowns__list" key={index}>
                {equipment}
              </li>
            ))}
          />
        </div>
      </section>
    );
  }
}

export default Apartment;
