import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { startLogout } from '../actions/auth';

import logo3 from '../assets/cda-logo3.png';
import userIcon from '../assets/user-icon1.png';
import homeIcon from '../assets/home-icon1.png';
import cdaIcon from '../assets/cda-logo1.png';
import editIcon from '../assets/edit-icon.png';
import visaIcon  from '../assets/visa-icon.png';
import cardIcon  from '../assets/credit-card-icon.png';

import { mockData } from '../assets/mockData';

export const UserAccount = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch( startLogout() );
        history.push('/');
    }

    const { rut, nombre, correo, telefono, vehiculos } = mockData;

    // console.log(rut, nombre)

    return (
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
                        <a href="#" className="button-4">Mi cuenta</a>
                    </div>
                    <div className="div-block-48 _2">
                        <img src={ homeIcon } alt="Home" className="image-28" />
                        <a href="/" className="button-4">Volver al Home</a>
                    </div>
                    <div className="div-block-48 _2">
                        <img src={ cdaIcon } alt="logo2" className="image-28 _2" />
                        <a href="#" className="button-4" onClick={ handleLogout }>Contactanos</a>
                    </div>
                </div>
                <div className="div-block-34">
                    <img src="" alt="" className="image-27" />
                </div>
                <a href="#" className="pedir-asistencia">Pedir asistencia</a>
            </div>
            <div className="div-block-3_3">
                <div className="div-block-51">
                    <h1 className="heading-7">Mi cuenta</h1>
                    <div className="div-block-52"><img src={ editIcon } alt="editar" className="image-29" /></div>
                </div>
                <div className="div-block-35">
                    <div className="div-block-45">
                        <div className="div-block-36"></div>
                        <div className="div-block-46">
                            <h1 className="heading-8">{ nombre }</h1>
                            <p className="datos-usuario">
                                { rut } <br />
                                { correo } <br />
                                { telefono }
                            </p>
                        </div>
                    </div>
                    <div className="div-block-53">
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
                    </div>
                </div>
                <div className="div-block-37"></div>
                <div className="div-block-42">
                    <p className="paragraph-5">MIS VERHÍCULOS</p>
                    <div className="div-block-38">
                        <div className="div-block-40"></div>
                        <div className="div-block-40"></div>
                    </div>
                </div>
                <div className="div-block-37"></div>
                <div className="div-block-42">

                </div>
            </div>
        </div>
    )
}
