import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { forgetPass } from "../actions/auth";
import userIcon from "../assets/user-icon2.png";

import { useHistory } from "react-router-dom";
import { Header } from "../layout/Header";
import { useState } from "react";

export const OlvidePass = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { uid } = useSelector((state) => state.auth);
  const [open, setopen] = useState(false);

  const [formLoginValues, handleLoginInputChange] = useForm({
    lRut: "",
  });

  const { lRut } = formLoginValues;

  const handleForgetPass = (e) => {
    e.preventDefault();
    if (uid == undefined) {
      setopen(true);
    }
    dispatch(forgetPass(lRut, history));
  };

  return (
    <div className="outter login-container" style={{ height: "100vh" }}>
      <Header />
      {open && (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <p>Por favor Espere..</p>
        </div>
      )}
      <div className="middle">
        <div className="div-block-59">
          <img src={userIcon} alt="icono-usuario" className="image-31" />
          <center>
            <h4 className="paragraph-2">
              Ingresa tu rut <br /> Enviaremos un link a la dirección asociada
            </h4>
          </center>

          <div className="inner form-block-2">
            <form onSubmit={handleForgetPass}>
              <input
                type="text"
                className="form-control text-field-2"
                placeholder="RUT"
                name="lRut"
                value={lRut}
                onChange={handleLoginInputChange}
                autoComplete="true"
                required
              />

              <div
                className="form-group"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <input
                  type="submit"
                  className="cda-btn1 mt-20"
                  value="Enviar Link"
                />
              </div>
            </form>
          </div>
          <a href="/login" className="link-2">
            Volver al Login
          </a>
          <a href="/login-first" className="link-2">
            Ingreso por Primera Vez
          </a>
        </div>
      </div>
    </div>
  );
};
