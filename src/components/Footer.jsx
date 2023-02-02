import "../assets/styles/Footer.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link className="footer__logo" to="/">
        <Logo fill="#ffffff" className="logo" />
      </Link>
      <div className="footer__mentions">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;