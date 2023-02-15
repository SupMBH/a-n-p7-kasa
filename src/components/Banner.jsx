import "../assets/styles/Banner.css";

//Cette fonction prend en prop title et picture et renvoie une div en 2 aprties: l'image de la prop source d'url et le title mis en prop
const Banner = ({ title, picture }) => (
  <div className="wrapper-banner">
    <img src={picture} alt="Paysage montagneux" className="wrapper-banner__img" />
    <div className="wrapper-banner__background">
      <div className="wrapper-banner__title">{title}</div>
    </div>
  </div>
);

export default Banner;