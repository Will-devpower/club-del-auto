import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { resetPass } from "../actions/auth";

import { useHistory } from "react-router-dom";
import { useState } from "react";

export const ResetPass = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { uid } = useSelector((state) => state.auth);
  const [open, setopen] = useState(false);

  const { token, id } = useParams();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lRut: "",
  });

  const { lPassword, lPasswordConfim } = formLoginValues;

  const handleResetPass = (e) => {
    e.preventDefault();
    if (uid == undefined) {
      setopen(true);
    }
    dispatch(resetPass(id, token, lPassword, lPasswordConfim, history));
  };

  return (
    <div className="outter login-container" style={{ height: "100vh" }}>
      {open && (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <p>Por favor Espere..</p>
        </div>
      )}
      <div className="middle">
        <div className="div-block-59">
          <a href="/" className="link-2">
            Volver al home
          </a>
          <br />
          <br />
          <h1 className="heading-login">Ingresa tu Nueva contraseña</h1>
          <div className="inner form-block-2">
            <form onSubmit={handleResetPass}>
              <input
                type="password"
                className="form-control text-field-2"
                placeholder="Registra tu Contraseña"
                name="lPassword"
                value={lPassword}
                onChange={handleLoginInputChange}
                autoComplete="false"
                required
              />

              <input
                type="password"
                className="form-control text-field-2"
                placeholder="Repite tu Contraseña"
                name="lPasswordConfim"
                value={lPasswordConfim}
                onChange={handleLoginInputChange}
                autoComplete="false"
                required
              />

              <center>
                <h6>
                  (La contraseña debe incluir de 6 a 20 caractéres, al menos un
                  número, Maýusculas y minúsculas)
                </h6>
              </center>

              <div
                className="form-group"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <input type="submit" className="btnSubmit" value="Ingresar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
