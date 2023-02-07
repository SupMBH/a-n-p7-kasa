import "../assets/styles/ApartmentCards.css";

// Avec ce composant, on prend 2 prop cover et title et on renvoie un element article contenant image (source de l'url définie par cover) et titre
const ApartmentCard = ({cover, title}) => (
  <article className="article">
    <img src={cover} alt="Appartement" className="article__image" />
    <div className="article__title">{title}</div>
  </article>
);

export default ApartmentCard;
//R