import "../assets/styles/ApartmentCards.css";

const ApartmentCard = ({cover, title}) => (
  <article className="article">
    <img src={cover} alt="Appartement" className="article__image" />
    <div className="article__title">{title}</div>
  </article>
);

export default ApartmentCard;
//R