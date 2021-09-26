import { HomeCupones } from "./HomeCupones"
import { Suscripcion } from "./Suscripcion"
import { Header } from "../layout/Header"

import bannerBG1 from '../assets/home-banner-bg1.png'
import bannerBG2 from '../assets/home-banner-bg2.png'
import bCircle from '../assets/imagen-asis1.png'
import secretary from '../assets/secretary.png'
import chair from '../assets/chair.png'
import carImg from '../assets/car.png'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { LoginScreen } from "./LoginScreen"
import { triggerLoginPopup } from "../helpers/triggerLogin"



export const HomeScreen = () => {

    const { uid } = useSelector(state => state.auth);
    const url = `https://webclientesqa.grupomok.com/asistencia/sponsor?id=107&rut=${uid}&Fono=953153687&flujo=1`;
   
    
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
                <img src={ bCircle } alt="blue-circle" className="image-13" data-aos="fade-left"/>
                <div className="asistencias">
                    <div className="div-block-6">
                        <img src={ secretary } alt="secretary" className="image-9" data-aos="fade-right"/>
                        <img src={ chair } alt="chair" className="image-9-copy" data-aos="fade-left"/>
                    </div>
                    <div className="div-block-9">
                        <h1 className="heading-2">¿Necesitas asistencia inmediata?</h1>
                        <p className="paragraph-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.
                        </p>
                        {
                            ( uid !== undefined ) 
                            ?
                            <a href={ url } className="w-button" target="_blank" rel="noreferrer">Solicitar asistencia</a>
                            :
                            <button className="w-button" onClick={ triggerLoginPopup } value="Solicitar Asistencia">Iniciar Sesión</button> 
                        }
                    </div>
                </div>
                <div className="asistencias">
                <img src={ carImg } loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 470px, 600px" alt="car-img" className="image-12" data-aos="fade-left" />   
                    <div className="div-block-9">
                        <h1 className="heading-2">¿Necesitas asistencia inmediata?</h1>
                        <p className="paragraph-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.
                        </p>
                        {
                             ( uid !== undefined ) 
                             ?
                            <a href="/" className="w-button">Llena el formulario</a>
                            :
                            <button className="w-button" onClick={ triggerLoginPopup } value="Llena el formulario">Iniciar Sesión</button> 
                        }
                    </div>
                    <div className="div-block-6-copy"></div>
                </div>                
                <div className="asistencias movil">
                    <div className="div-block-6">
                        <h1 className="heading-2">¿Necesitas asistencia inmediata?</h1>
                        <p className="paragraph-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.
                        </p>
                        <Link to={`https://webclientesqa.grupomok.com/asistencia/sponsor?id=107&rut=16797012-5&Fono=953153687&flujo=1`} className="w-button">Solicitar asistencia</Link>
                    </div>
                </div>
                <div className="asistencias movil">
                    <div className="div-block-6">
                        <h1 className="heading-2">¿Tuviste un accidente<br />o sufriste un robo?</h1>
                        <p className="paragraph-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.
                        </p>
                        <a href="/" className="w-button">Llena el formulario</a>
                    </div>
                </div>
                </div>

                <HomeCupones />

                <div className="el-club">
                    <h1 className="heading-3">Sé parte <strong>del club</strong></h1>
                    <p className="paragraph-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.</p>
                    <a href="/" className="join">Más información</a>
                </div>

                <Suscripcion />
            </div>
            
            <div className="div-block-23"></div> 
        </div>
    )
}
