import imgBanner from "../../assets/images/aboutbannerDesktop.png";
import aboutData from "../../assets/data/aboutData.json";
import "../../assets/styles/About.css";
import AboutBanner from "../../components/AboutBanner";
import Collapse from "../../components/Collapse";

// Affiche l'interface About composé du composant enfant AboutBanner qui reçoit la propriété picture avec la valeur imgBanner, et le composant collapse
// On map le tableau aboutData pour que le composant enfant renvoie un collapse avec son titre et son contenu pour chaque itération data du tableau
function About() {
return (
<div className="about">
<AboutBanner picture={imgBanner} />
<div className="about__dropdowns">
{aboutData.map((data, index) => (
<Collapse key={index} title={data.title} content={data.content} />
))}
</div>
</div>
);
}

export default About;
