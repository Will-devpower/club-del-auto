import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";

const baseUrl = process.env.REACT_APP_API_URL;
// const baseUrl = "http://localhost:1337"

export const startLogin = (rut, password, history) => {
  return async (dispatch) => {
    const data = { identifier: rut, password: password };

    const resp = await fetchSinToken(
      "clientes/login/" + rut + "/" + password,
      data,
      "GET"
    );

    if (resp.status === 200) {
      const idCliente = await resp.json();
      const resp2 = await fetchSinToken("app/getUser/" + rut, data, "POST");

      if (resp2.status === 200) {
        const body = await resp2.json();

        const { rut, nombre, telefono, correo, vehiculos } = body;

        //localStorage.setItem('token', body.jwt );
        localStorage.setItem("rut", JSON.stringify(rut));
        localStorage.setItem("id", JSON.stringify(idCliente));
        localStorage.setItem("nombre", JSON.stringify(nombre));
        localStorage.setItem("telefono", JSON.stringify(telefono));
        localStorage.setItem("correo", JSON.stringify(correo));
        localStorage.setItem("vehiculos", JSON.stringify(vehiculos));
        localStorage.setItem("token-init-date", new Date().getTime());

        dispatch(
          login({
            uid: rut,
            nombre: nombre,
            correo: correo,
            telefono: telefono,
            vehiculos: vehiculos,
            id: idCliente,
          })
        );

        history.push("/");
        document.querySelector(".popup-container").style.display = "none";
        document.querySelector("body").style.overflow = "visible";

        Swal.fire({
          icon: "success",
          title: "Bienvenido de vuelta",
          text: body.nombre,
        });
      } else {
        Swal.fire("Error", "El Rut o la Contraseña son incorrectos", "error");
      }
    } else {
      Swal.fire("Error", "El Rut o la Contraseña son incorrectos", "error");
    }
  };
};

export const loginFirst = (rut, password, lPasswordConfim, history) => {
  return async (dispatch) => {
    if (password !== lPasswordConfim) {
      Swal.fire("Error", "Las Contraseñas deben coincidir", "error");
    } else if (!CheckPassword(password)) {
      Swal.fire(
        "Error",
        "La contraseña debe incluir de 6 a 20 caractéres, al menos un número, Maýusculas y minúsculas",
        "error"
      );
    } else {
      const data = { identifier: rut, password: password };

      const resp = await fetchSinToken(
        "clientes/registro/" + rut + "/" + password,
        data,
        "POST"
      );

      if (resp.status === 200) {
        const body = await resp.json();

        const { rut, nombre, telefono, correo, vehiculos } = body;
        //localStorage.setItem('token', body.jwt );
        localStorage.setItem("rut", JSON.stringify(rut));
        localStorage.setItem("nombre", JSON.stringify(nombre));
        localStorage.setItem("telefono", JSON.stringify(telefono));
        localStorage.setItem("correo", JSON.stringify(correo));
        localStorage.setItem("vehiculos", JSON.stringify(vehiculos));
        localStorage.setItem("token-init-date", new Date().getTime());

        dispatch(
          login({
            uid: rut,
            nombre: nombre,
            correo: correo,
            telefono: telefono,
            vehiculos: vehiculos,
          })
        );

        history.push("/");
        document.querySelector(".popup-container").style.display = "none";
        document.querySelector("body").style.overflow = "visible";

        Swal.fire({
          icon: "success",
          title: "Registro Exitoso",
          text: "De ahora en adelante podrás ingresar con tu contraseña",
        });
      } else {
        Swal.fire(
          "Error",
          "Ocurrió un error en el registro, por favor intenta más tarde",
          "error"
        );
      }
    }
  };
};

export const forgetPass = (rut, history) => {
  return async (dispatch) => {
    const data = { identifier: rut };

    const resp = await fetchSinToken("app/forgot/" + rut, data, "GET");

    if (resp.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Reset Pass",
        text: "Enviamos un link a tu correo",
      });
    } else {
      Swal.fire("Error", "Ocurrió un error en el proceso", "error");
    }
  };
};

export const resetPass = (id, token, pass, passConfirm, history) => {
  return async (dispatch) => {
    if (pass !== passConfirm) {
      Swal.fire("Error", "Las contraseñas deben coincidir", "error");
    } else if (!CheckPassword(pass)) {
      Swal.fire(
        "Error",
        "La contraseña debe incluir de 6 a 20 caractéres, al menos un número, Maýusculas y minúsculas",
        "error"
      );
    } else {
      const data = { idcliente: id, token: token, pass: pass };

      const resp = await fetchSinToken("app/reset", data, "POST");

      if (resp.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registro Exitoso",
          text: "De ahora en adelante podrás ingresar con tu nueva contraseña",
        });

        Swal.fire({
          icon: "success",
          title: "Registro Exitoso",
          text: "De ahora en adelante podrás ingresar con tu nueva contraseña",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location = baseUrl;
          }
        });
      } else {
        Swal.fire("Error", "El link ya expiró", "error");
      }
    }
  };
};

export const sendMail = (nombre, email, asunto, mensaje, history) => {
  return async (dispatch) => {
    const data = {
      nombre: nombre,
      email: email,
      asunto: asunto,
      mensaje: mensaje,
    };

    const resp = await fetchSinToken("app/contacto/", data, "POST");

    if (resp.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Mensaje Enviado",
        text: "Te responderemos a la brevedad",
      });
    } else {
      Swal.fire(
        "Error",
        "Ocurrió un error al enviar el mensaje, por favor intenta más tarde",
        "error"
      );
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startChecking = () => {
  return (dispatch) => {
    // const token = localStorage.getItem('token');
    const rutUsuario = localStorage.getItem("rut");
    const idUsuario = localStorage.getItem("id");
    const nombreUsuario = localStorage.getItem("nombre");
    const telefonoUsuario = localStorage.getItem("telefono");
    const correoUsuario = localStorage.getItem("correo");
    const vehiculosUsuario = localStorage.getItem("vehiculos");

    if (rutUsuario) {
      return dispatch(
        login({
          uid: JSON.parse(rutUsuario),
          nombre: JSON.parse(nombreUsuario),
          correo: JSON.parse(correoUsuario),
          telefono: JSON.parse(telefonoUsuario),
          vehiculos: JSON.parse(vehiculosUsuario),
          id: JSON.parse(idUsuario),
        })
      );
    }

    dispatch(checkingFinish());
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });

function CheckPassword(value) {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (value.match(passw)) {
    return true;
  } else {
    return false;
  }
}
