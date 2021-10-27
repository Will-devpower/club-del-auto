import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useParams } from "react-router-dom"
import { Footer } from "../layout/Footer"
import { Header } from "../layout/Header"
import { CuponesDestacados } from "./CuponesDestacados"
import { getCouponById } from "../actions/cda"
import { buyCoupon } from '../actions/cda';
import { LoginScreen } from "./LoginScreen"

function loadMap(text){
    let location = 'https://maps.google.com/maps?q='+text+'&t=&z=13&ie=UTF8&iwloc=&output=embed';    
    document.getElementById('myMap').setAttribute('src', location);
}

export const CuponScreen = () => {    
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.cda);
    const coupon = useSelector(state => state.cda.cupons.find(coupon => coupon.id === parseInt(id)));
<<<<<<< HEAD
    const { uid , vehiculos} = useSelector(state => state.auth);

    let patente = ""
    if(uid !== undefined) patente = vehiculos[0].patente
=======
    const { uid } = useSelector(state => state.auth);
    console.log('COUP: ', coupon)
>>>>>>> developer-will
    
    const handleInputChange = ({ target }) => {        
        patente = target.value
    }

    useEffect(() => {
        dispatch(getCouponById( id ));        
    }, [dispatch, id]);
    
    const getCoupon = ( e ) => {
        e.preventDefault();
        if(uid !== undefined){
            dispatch( buyCoupon( uid, patente, coupon.id ) ); 
        }
    }


    return (
        <div className="cupon-screen">
        <div className="popup-container">
            <LoginScreen />
        </div>    
        <Header />
        <div className="section-7">
            <h1 className="titulo-servicio">{coupon.proveedor.nombre}</h1>
            <p className="bajada-servicio">{coupon.servicio}</p>
            <div className="div-block-26">
                <div>
                    <div className="slider w-slider" style={{backgroundImage:`url(${coupon.img[0].url})`}}></div>
                    <p className="descripcion-servicio-2">{coupon.bajada}</p>
                </div>
                <div className="div-block-27">
                    <p className="descripcion">DESCRIPCIÓN</p>
                    <div className="div-block-28">
                        <img src="https://uploads-ssl.webflow.com/60da07a904f25339b115d11e/60f4c1eb32558eee7089b5bf_Porcentajes_2.png" alt="icono1" className="image-22" />
                        <p className="descripcion-servicio">{coupon.descripcion}</p>
                    </div>

                    {
                        uid !== undefined &&
                            <div className="formbuilder-select form-group select-div">
                                <br/>
                                <p className="descripcion">ELIGE UNA PATENTE:</p>
                                <select 
                                    name="patenteSeleccionada" 
                                    id="patenteSeleccionada" 
                                    className="input-control"
                                    onChange={handleInputChange}
                                >
                                    {
                                        vehiculos.map(( veh ) => (
                                            <option value="veh.patente" id="veh.patente">{veh.patente}</option>
                                        ))
                                    }
                                    
                                </select>
                                <span className="boton-comprar-servicio" onClick={ getCoupon }>Obtener cupón</span>
                            </div>
                    }

                    <div className="divisor-entre-descrip-servicios"></div>
                    <div className="div-block-28">
                        <img src="https://uploads-ssl.webflow.com/60da07a904f25339b115d11e/60f4c1ebb62a5610e369699e_TerminosCondiciones_1.png" alt="" className="image-22" />
                        <p className="terminos-condiciones">Términos y condiciones</p>
                    </div>

                    
                </div>
            </div>
            <div className="divisor-desktop"></div>
            <div className="div-block-26-copy">
                <p className="descripcion_2">Direcciones</p>

                {
                    coupon.direcciones.map(( direccion ) => ( 
                        <div className="div-block-29">
                            <img src="https://uploads-ssl.webflow.com/60da07a904f25339b115d11e/60f4c569fb792d607478e0a9_Location.png" alt="icono-gps" className="image-23" />
                            <p className="texto-ubicacion" onClick={ () => loadMap(direccion.direccion) }>{direccion.direccion}</p>
                        </div>
                    ))

                    
                }
                
            </div>
            <div className="mapa">            
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe id="myMap" 
                            src="https://maps.google.com/maps?q=SantiagodeChile&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div> 
            </div>
            <div className="divisor-desktop"></div>
            <p className="descripcion-copy">TAMBIÉN TE PODRÍA INTERESAR</p>
            <CuponesDestacados />

        </div>
        <Footer />
        <script>            
           
        </script>
        </div>
        
    )

    
    
}
