import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { startLogout } from '../actions/auth';

import logo3 from '../assets/cda-logo3.png';
import userIcon from '../assets/user-icon1.png';
import homeIcon from '../assets/home-icon1.png';
import cdaIcon from '../assets/cda-logo1.png';
import editIcon from '../assets/edit-icon.png';
import logoutIcon from '../assets/logout-icon.png';
// import visaIcon  from '../assets/visa-icon.png';
// import cardIcon  from '../assets/credit-card-icon.png';

// import { mockData } from '../assets/mockData';
import { useSelector } from "react-redux";

export const UserAccount = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch( startLogout() );
        history.push('/');
    }

    // const { rut, nombre, correo, telefono, vehiculos } = mockData;

    const { body } = useSelector(state => state.auth);   

    console.log( body )

    return (
        <div className="user-account-screen">
        <div className="section-8">
            <div className="div-block-43"></div>
            <div className="div-block-32">
                <img src="" alt="blue-shape" />
            </div>
            <div className="div-block-30">
                <img src={ logo3 } alt="logo" className="image-24"/>
                <div className="div-block-31">
                    <div className="div-block-48">
                        <img src={ userIcon } alt="Usuario" className="image-28" />
                        <Link to="/" className="button-4">Mi cuenta</Link >
                    </div>
                    <div className="div-block-48 _2">
                        <img src={ homeIcon } alt="Home" className="image-28" />
                        <Link to="/" className="button-4">Volver al Home</Link >
                    </div>
                    <div className="div-block-48 _2">
                        <img src={ cdaIcon } alt="logo2" className="image-28 _2" />
                        <Link to="/" className="button-4">Contactanos</Link >                        
                    </div>
                    <div className="div-block-48">
                        <img src={ logoutIcon } alt="logo2" className="image-28 _2" />
                        <Link to="/" className="button-4" onClick={ handleLogout }>Salir</Link >
                    </div>
                </div>
                <div className="div-block-34">
                    <img src="" alt="" className="image-27" />
                </div>
                <Link to="/" className="pedir-asistencia">Pedir asistencia</Link >
            </div>
            <div className="div-block-3_3">
                <div className="div-block-51">
                    <h1 className="heading-7">Mi cuenta</h1>
                    <div className="div-block-52"><img src={ editIcon } alt="editar" className="image-29" /></div>
                </div>
                <div className="div-block-35">
                    <div className="div-block-45">
                        {/* <div className="div-block-36"></div> */}
                        <div className="div-block-46">
                            <h1 className="heading-8">{ body.nombre }</h1>
                            <p className="datos-usuario">
                                { body.rut } <br />
                                { body.correo } <br />
                                { body.telefono }
                            </p>
                        </div>
                    </div>
                    
                    
                    {/* <div className="div-block-53">
                        <img src={ visaIcon } alt="visa-icon" className="image-30"/>
                        <img src={ cardIcon } alt="card-icon" className="image-30_1"/>
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
                <div className="div-block-42">
                    <p className="paragraph-5">MIS VEHÍCULOS</p>
                    <div className="div-block-38">
                    {
                        body.vehiculos &&
                        body.vehiculos.map(vehiculo => {

                          return (  
                          
                                <div key={ vehiculo.rutAsegurado } className="div-block-40">
                                    <p className="paragraph-4">{ vehiculo.patente }</p>
                                    <div className="div-block-49"></div>
                                    <div className="info-de-auto">
                                        <div className="div-block-47">
                                            <p className="paragraph-3">Nombre asegurado</p>
                                            <p className="paragraph-6">{ vehiculo.nombre }</p>
                                        </div>
                                        <div className="div-block-47">
                                            <p className="paragraph-3">RUT</p>
                                            <p className="paragraph-6">{ vehiculo.rutAsegurado }</p>
                                        </div>
                                        <div className="div-block-47">
                                            <p className="paragraph-3">Marca</p>
                                            <p className="paragraph-6">{ vehiculo.marca }</p>
                                        </div>
                                        <div className="div-block-47">
                                            <p className="paragraph-3">Modelo</p>
                                            <p className="paragraph-6">{ vehiculo.modelo }</p>
                                        </div>
                                        {/* <div className="div-block-47">
                                            <p className="paragraph-3">Año</p>
                                            <p className="paragraph-6">{ vehiculo.anio }</p>
                                        </div> */}
                                    </div>
                                    <div className="div-block-50">
                                        <div className="info-de-auto-copy">
                                            <div className="div-block-47">
                                                <p className="paragraph-3-copy">Plan</p>
                                                <p className="paragraph-6-copy">{ vehiculo.ded }</p>
                                            </div>
                                            {/* <div className="div-block-47">
                                                <p className="paragraph-3-copy">Monto mensual</p>
                                                <p className="paragraph-6-copy">{ vehiculo.montoMensual }</p>
                                            </div>
                                            <div className="div-block-47">
                                                <p className="paragraph-3-copy">Monto p. anteriores</p>
                                                <p className="paragraph-6-copy">{ vehiculo.estadoPago }</p>
                                            </div>
                                            <div className="div-block-47">
                                                <p className="paragraph-3-copy">Mes de pago</p>
                                                <p className="paragraph-6-copy">{ vehiculo.ultCuota }</p>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* <div className="pago-wrapper">
                                        <div className="estado-pago-wrapper">
                                            <p className="estado-pago">ESTADO DE PAGO</p>
                                            <p className={ vehiculo.estadoPago === 'Pendiente'
                                                ? 'Pendiente'
                                                : 'Pagado'
                                            }>
                                                { vehiculo.estadoPago }
                                            </p>
                                        </div>
                                        {
                                            ( vehiculo.estadoPago === 'Pendiente') &&
                                            <Link to="/" className="pagar-seguro-auto">Pagar</Link >
                                        }
                                    </div> */}
                                </div>                                
                            )
                            
                        })
                    }
                    </div> 
                </div>
                <div className="div-block-37"></div>
                <div className="div-block-42">

                </div>
            </div>
        </div>
        </div>
    )
}
