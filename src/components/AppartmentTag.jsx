
import "../assets/styles/AppartmentTag.css";

const ApartmentTag = ({ getTag }) => (

  <div className="tag">
    <p className="tag__text">{getTag}</p>
  </div>
);
export default ApartmentTag;