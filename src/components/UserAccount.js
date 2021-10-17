import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { startLogout } from "../actions/auth";

import logo3 from "../assets/cda-logo3.png";
import userIcon from "../assets/user-icon1.png";
import homeIcon from "../assets/home-icon1.png";
// import cdaIcon from '../assets/cda-logo1.png';
import editIcon from "../assets/edit-icon.png";
import logoutIcon from "../assets/logout-icon.png";
// import visaIcon  from '../assets/visa-icon.png';
// import cardIcon  from '../assets/credit-card-icon.png';

// import { mockData } from '../assets/mockData';
import { useSelector } from "react-redux";
import { getCuponClientes } from "../actions/cda";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const SideBarClientAccount = ({ logout, uid }) => {
  const url = `https://webclientesqa.grupomok.com/asistencia/sponsor?id=107&rut=${uid}&Fono=953153687&flujo=1`;
  return (
    <div className="div-block-30">
      <img src={logo3} alt="logo" className="image-24" />
      <div className="div-block-31">
        <div className="div-block-48">
          <img src={userIcon} alt="Usuario" className="image-28" />
          <span className="button-4">Mi cuenta</span>
        </div>
        <div className="div-block-48 _2">
          <img src={homeIcon} alt="Home" className="image-28" />
          <Link to="/" className="button-4">
            Volver al Home
          </Link>
        </div>
        <div className="div-block-48">
          <img src={logoutIcon} alt="logo2" className="image-28 _2" />
          <Link to="/" className="button-4" onClick={logout}>
            Salir
          </Link>
        </div>
      </div>
      <div className="div-block-34">
        <img src="" alt="" className="image-27" />
      </div>
      <a href={url} className="w-button" target="_blank" rel="noreferrer">
        Solicitar asistencia
      </a>
    </div>
  );
};
const CarList = ({ vehiculos = [] }) => {
  return (
    <div className="div-block-42">
      <p className="paragraph-5">MIS VEHÍCULOS</p>
      <div className="div-block-38">
        {vehiculos.map((vehiculo, key) => {
          return <CarListItem key={key} vehiculo={vehiculo} />;
        })}
      </div>
    </div>
  );
};

const CarListItem = (props) => {
  const {
    patente,
    nombre,
    rutAsegurado,
    marca,
    modelo,
    ded,
    cuotasPendientes,
  } = props.vehiculo;

  return (
    <div className="div-block-40">
      <p className="paragraph-4">{patente}</p>
      <div className="div-block-49"></div>
      <div className="info-de-auto">
        <div className="div-block-47">
          <p className="paragraph-3">Nombre asegurado</p>
          <p className="paragraph-6">{nombre.toLowerCase()}</p>
        </div>
        <div className="div-block-47">
          <p className="paragraph-3">RUT</p>
          <p className="paragraph-6">{rutAsegurado}</p>
        </div>
        <div className="div-block-47">
          <p className="paragraph-3">Marca</p>
          <p className="paragraph-6">{marca}</p>
        </div>
        <div className="div-block-47">
          <p className="paragraph-3">Modelo</p>
          <p className="paragraph-6">{modelo}</p>
        </div>
      </div>
      <div className="div-block-50">
        <div className="info-de-auto-copy">
          <div className="div-block-47">
            <p className="paragraph-3-copy">Plan</p>
            <p className="paragraph-6-copy">{ded}</p>
          </div>
        </div>
      </div>
      {cuotasPendientes.length > 0 && (
        <div className="cuotasP-div">
          <p className="cuotasPendientes">Cuotas Pendientes</p>
          {cuotasPendientes.map((cuota, key) => {
            const numero = cuota.slice(5, 7);
            const numeroMes = parseInt(numero[0] === "0" ? numero[1] : numero);
            return (
              <p key={key} className="cuota-mes paragraph-3">
                {months[numeroMes - 1]}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
const RequestedBenefits = ({uid}) => {
    
    const cuponesCliente = useSelector(state => state.cda.cuponCliente.filter(cupons => cupons.cliente.rut === uid));    
    return (
        <div className="requested-benefits">
            <p className="ben-title">BENEFICIOS SOLICITADOS</p>
            {
                cuponesCliente.map((cupon, key) => {
                    return(
                        <div key={key}>
                            <RequestedBenefitItem cupon={cupon}/>
                            <hr /> 
                        </div>                       
                    )
                })
            }
        </div>
    )
}
const RequestedBenefitItem = (props) => {

    const {cupon} = props.cupon;
    return (
        <div className="benefit-item-wrapper">
            <div className="benefit-item">
                <div>
                    <p className="paragraph-3">Patente</p>
                    <p className="paragraph-6"></p>
                </div>
                <div>
                    <p className="paragraph-3">Fecha</p>
                    <p className="paragraph-6"></p>
                </div>
                <div>
                    <p className="paragraph-3">Servicio</p>
                    <p className="paragraph-6">{cupon.servicio}</p>
                </div>
                <div>
                    <p className="paragraph-3">Proveedor</p>
                    <p className="paragraph-6">{cupon.proveedor}</p>
                </div>
            </div>
        </div>
    )
}
export const UserAccount = () => {

  

  const { uid, nombre, correo, telefono, vehiculos } = useSelector((state) => state.auth);
  const cuponCliente = useSelector(state => state.cda.cuponCliente.find(cupons => cupons.cliente.rut === uid));
  const {cuponClienteLoaded} = useSelector(state => state.cda);
  const history = useHistory();
  const dispatch = useDispatch();
  const hasBenefits = !!(cuponClienteLoaded && cuponCliente);   
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startLogout());
    history.push("/");
  };

  console.log("cuponCliente: "+cuponCliente)
  console.log("cuponClienteLoaded: "+cuponClienteLoaded)

  useEffect(() => {
      dispatch(getCuponClientes())
  }, [dispatch])  

  return (
    <div className="user-account-screen">
      <div className="section-8">
        <div className="div-block-43"></div>
        <div className="div-block-32">
          <img src="" alt="blue-shape" />
        </div>
        <SideBarClientAccount uid={uid} logout={handleLogout} />
        <div className="div-block-3_3">
          <div className="div-block-51">
            <h1 className="heading-7">Mi cuenta</h1>
            <div className="div-block-52">
              <img src={editIcon} alt="editar" className="image-29" />
            </div>
          </div>
          <div className="div-block-35">
            <div className="div-block-45">
              <div className="div-block-36"></div>
              <div className="div-block-46">
                <h1 className="heading-8">{nombre.toLowerCase()}</h1>
                <p className="datos-usuario">
                  {uid} <br />
                  {correo} <br />
                  {telefono}
                </p>
              </div>
            </div>

            {/* <div className="div-block-53">
              <img src={visaIcon} alt="visa-icon" className="image-30" />
              <img src={cardIcon} alt="card-icon" className="image-30_1" />
              <div className="div-block-54">
                <h1 className="numeros-tarjeta">0000 0000 0000 0000</h1>
                <div className="div-block-55">
                  <div>
                    <p className="titulos-credit-card">NOMBRE</p>
                    <p className="credit-card-datos">José Pérez</p>
                  </div>
                  <div>
                    <p className="titulos-credit-card">Fecha</p>
                    <p className="credit-card-datos">06/25</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="div-block-37"></div>
          <CarList vehiculos={vehiculos} />
          <div className="div-block-37"></div>
          {
              hasBenefits && 
              <RequestedBenefits uid={uid}/>
          }
          <div className="div-block-42"></div>
        </div>
      </div>
    </div>
  );
};
