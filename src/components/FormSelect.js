import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { LoginScreen } from "./LoginScreen";

export const FormSelect = () => {
  return (
    <div className="formulario selection-form">
      <div className="popup-container">
        <LoginScreen />
      </div>
      <Header />
      <div className="form-inner rendered-form">
        <h1 className="heading-7 mt-70">Seleccione una Opción</h1>
        <div className="select-form">
          <div>
            <Link className="cda-btn4" to="form-choque">
              Choque
            </Link>
          </div>
          <div>
            <Link className="cda-btn4" to="form-robo">
              Robo
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
