import "../../assets/styles/Error404.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="wrapper-error">
      <div className="wrapper-error__number">404</div>
      <div className="wrapper-error__msg">Oups! La page que vous demandez n'existe pas.</div>
      <Link className="wrapper-error__back-link" to="/" title="Home">
      Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error404;
//R