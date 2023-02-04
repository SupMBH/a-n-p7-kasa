import "../../assets/styles/Apartment.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../../assets/data/data.json";
import Slideshow from "../../components/Slideshow";
import ApartmentTag from "../../components/ApartmentTag";
import Collapse from "../../components/Collapse";
import Rate from "../../components/Rate";
import HostName from "../../components/HostName";

function Apartment() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const apartment = data.find((apartment) => apartment.id === productId);

  useEffect(() => {
    if (!apartment) navigate("Error404");
  });

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
