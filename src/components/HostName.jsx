
import "../assets/styles/HostName.css";

//on retourne ici le nom et la photo de l'hôte en utilisant split pour séparer nom et prénom avec espace
//on retourne une div pour nom et prénom sur 2 paragraphes et une div avec l'image que l'on sort de la propriété picture de host
function HostName({ host }) {
  const [name, lastname] = host.name.split(" ");

  return (
    <div className="host">
      <div className="host__name">
        <p>{name}</p>
        <p>{lastname}</p>
      </div>
      <img src={host.picture} alt="" className="host__picture" />
    </div>
  );
}

export default HostName;