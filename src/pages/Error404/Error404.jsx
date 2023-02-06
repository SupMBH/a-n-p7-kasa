import "../../assets/styles/Error404.css";
import { Link } from "react-router-dom";

//La fonction Error404 renvoi un composant qui affiche une div comportant l'erreur et un link de retour en page Home
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
