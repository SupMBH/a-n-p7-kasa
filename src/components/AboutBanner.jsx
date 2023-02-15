import "../assets/styles/AboutBanner.css";

//Avec ce composant de bannière pour la page about, on prend en prop picture et on renvoie une div contenant l'image et une div qui sert de fond 
const AboutBanner = ({ picture }) => (
  <div className="wrapper-aboutBanner">
    <img src={ picture} alt="Paysage montagneux" className="wrapper-aboutBanner__img" />
    <div className="wrapper-aboutBanner__background"></div>
  </div>
);

export default AboutBanner;