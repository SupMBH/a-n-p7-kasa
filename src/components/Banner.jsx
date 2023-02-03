import "../assets/styles/Banner.css";

const Banner = ({ title, picture }) => (
  <div className="wrapper-banner">
    <img src={picture} alt="Paysage montagneux" className="wrapper-banner__img" />
    <div className="wrapper-banner__background">
      <div className="wrapper-banner__title">{title}</div>
    </div>
  </div>
);

export default Banner;
//R