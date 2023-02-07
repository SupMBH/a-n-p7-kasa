import "../assets/styles/ApartmentTag.css";

//Ici on prend en prop getTag et on revoie une div tag avec un élément de paragraphe qui contient la prop
const ApartmentTag = ({ getTag }) => (

  <div className="tag">
    <p className="tag__text">{getTag}</p>
  </div>
);
export default ApartmentTag;