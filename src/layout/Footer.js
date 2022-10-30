import React, { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo1 from "../assets/cda-logo1.png";
import logo3 from "../assets/cda-logo3.png";

export const Footer = () => {
  const { uid } = useSelector((state) => state.auth);

  return (
    <div className="footer">
      <a href="/" className="w-nav-brand">
        <div className="div-block-33">
          <img src={logo1} className="image5" alt="logo1" />
          <img src={logo3} className="image6" alt="logo3" />
        </div>
      </a>
      <div className="div-block-21">
        <a href="/contacto" className="cda-btn2">
          Contáctanos
        </a>
        {uid === undefined && (
          <Link to="/login" className="cda-btn2">
            Ingresar a mi cuenta
          </Link>
        )}
      </div>
    </div>
  );
};
