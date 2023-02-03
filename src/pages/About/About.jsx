import imgBanner from "../../assets/images/aboutbannerDesktop.png";
import aboutData from "../../assets/data/aboutData.json";
import "../../assets/styles/About.css";
import AboutBanner from "../../components/AboutBanner";
import Collapse from "../../components/Collapse";

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
//R