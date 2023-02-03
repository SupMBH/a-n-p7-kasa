import "../assets/styles/AboutBanner.css";

const AboutBanner = ({ picture }) => (
  <div className="wrapper-aboutBanner">
    <img src={ picture} alt="Paysage montagneux" className="wrapper-aboutBanner__img" />
    <div className="wrapper-aboutBanner__background"></div>
  </div>
);

export default AboutBanner;
//R