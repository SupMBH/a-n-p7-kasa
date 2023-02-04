
import "../assets/styles/ApartmentTag.css";

const ApartmentTag = ({ getTag }) => (

  <div className="tag">
    <p className="tag__text">{getTag}</p>
  </div>
);
export default ApartmentTag;