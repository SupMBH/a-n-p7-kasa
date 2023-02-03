
import "../assets/styles/HostName.css";


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