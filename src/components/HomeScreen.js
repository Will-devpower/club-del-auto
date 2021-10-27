import { HomeCupones } from "./HomeCupones"
import { Suscripcion } from "./Suscripcion"
import { Header } from "../layout/Header"

import bannerBG1 from '../assets/home-banner-bg3.png'
import bannerBG2 from '../assets/home-banner-bg2.png'
import bCircle from '../assets/imagen-asis1.png'
import secretary from '../assets/secretary.png'
import chair from '../assets/chair.png'
import reloj from '../assets/asistencia_reloj.png'
import carImg from '../assets/car.png'
import carImg2 from '../assets/car_small.png'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { LoginScreen } from "./LoginScreen"
import { triggerLoginPopup } from "../helpers/triggerLogin"



export const HomeScreen = () => {

    const { uid } = useSelector(state => state.auth);
    const { textosApp } = useSelector(state => state.cda);
    const { titulo_asistencia, desc_asistencia, titulo_accidente,  desc_accidente, btn_cupones, titulo_cupones, titulo_club1, titulo_club2, desc_club, btn_club} = textosApp;
    const url = `https://webclientesqa.grupomok.com/asistencia/sponsor?id=107&rut=${uid}&Fono=953153687&flujo=1`;
    const size = window.innerWidth;    
    // console.log(body)    
    
    return (
        <div className="home-screen">
            <div className="popup-container">
                <LoginScreen />
            </div>            
            <Header />
            <div className="container">
                <div className="banner">
                    <img src={ bannerBG1 } alt="banner-bg1" className="image-7"/>
                    <img src={ bannerBG2 } alt="banner-bg2" className="image-8"/>
                    <h1 className="heading">Nos preocupamos <br /> por tu seguridad</h1>
                </div>
                <div className="section-2">
                <img src={ bCircle } alt="blue-circle" className="image-13" data-aos={ size >= 1024 ? 'fade-left' : ''}/>
                <div className="asistencias">
                    <div className="div-block-6">
                        <img src={ secretary } alt="secretary" className="image-9" data-aos="fade-right"/>
                        <img src={ chair } alt="chair" className="image-9-copy" data-aos="fade-left"/>
                    </div>
                    <div className="div-block-9">
                        <h1 className="heading-2">{titulo_asistencia}</h1>
                        <p className="paragraph-2">{desc_asistencia}</p>
                        {
                            ( uid !== undefined ) 
                            ?
                            <a href={ url } className="w-button" target="_blank" rel="noreferrer">Solicitar asistencia</a>
                            :
                            <button className="w-button" onClick={ triggerLoginPopup } value="Solicitar Asistencia">Inicia sesión para continuar</button> 
                        }
                    </div>
                </div>
                <div className="asistencias">
                <img src={ carImg } className="home-car-img" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 470px, 600px" alt="car-img" className="image-12" data-aos="fade-left" />   
                    <div className="div-block-9">
                        <h1 className="heading-2">{titulo_accidente}</h1>
                        <p className="paragraph-2">{desc_accidente}</p>
                        {
                             ( uid !== undefined ) 
                             ?
                             <a href="/form-select" className="w-button">Llena el formulario</a>
                            :
                            <button className="w-button" onClick={ triggerLoginPopup } value="Llena el formulario">Inicia sesión para continuar</button> 
                        }
                    </div>
                    <div className="div-block-6-copy"></div>
                </div>                
                <div className="asistencias movil">
                    <div className="div-block-6">
                        <div className="div-block-9">
                            <h1 className="heading-2">{titulo_asistencia}</h1>
                            <p className="paragraph-2">{desc_asistencia}</p>
                            {
                                ( uid !== undefined ) 
                                ?
                                <a href={ url } className="w-button" target="_blank" rel="noreferrer">Solicitar asistencia</a>
                                :
                                <button className="w-button" onClick={ triggerLoginPopup } value="Solicitar Asistencia">Inicia sesión para continuar</button> 
                            }
                        </div>
                        <img src={ secretary } alt="secretary" className="image-9" />
                        <img src={ reloj } alt="reloj" className="image-20" />
                        <img src={ chair } alt="chair" className="image-9-copy" />
                    </div>
                </div>
                <div className="asistencias movil">
                    <img src={ carImg2 } loading="lazy" alt="car-img" className="image-21" />   
                    <div className="div-block-6 block6-movil">
                        <div className="div-block-9">
                            <h1 className="heading-2">{titulo_accidente}</h1>
                            <p className="paragraph-2">{desc_accidente}</p>
                            {
                                ( uid !== undefined ) 
                                ?
                                <a href="/form-select" className="w-button">Llena el formulario</a>
                                :
                                <button className="w-button" onClick={ triggerLoginPopup } value="Llena el formulario">Inicia sesión para continuar</button> 
                            }
                        </div>
                    </div>
                </div>
                </div>

                <HomeCupones tituloCupones={titulo_cupones} btn={btn_cupones}/>

                <div className="el-club">
                    <h1 className="heading-3">{titulo_club1} <strong>{titulo_club2}</strong></h1>
                    <p className="paragraph-22">{desc_club}</p>
                    <Link to="/info-club" className="join">{btn_club}</Link>
                </div>

                <Suscripcion />
            </div>
            
            {/* <div className="div-block-23"></div>  */}
        </div>
    )
}
