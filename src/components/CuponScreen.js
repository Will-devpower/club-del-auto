import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Footer } from "../layout/Footer"
import { Header } from "../layout/Header"
import { CuponesDestacados } from "./CuponesDestacados"
import { getCouponById } from "../actions/cda"
import { buyCoupon } from '../actions/cda';

const handleMapLocation = () => {
    let location = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.4585893101416!2d-70.5960790847241!3d-33.38519810155255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c8c8e6ac09d3%3A0xf57b4843daee1c7d!2sSta.%20Mar%C3%ADa%203322%2C%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1sen!2sve!4v1630094339967!5m2!1sen!2sve';
    
    document.getElementById('myMap').setAttribute('src', location);
}

export const CuponScreen = () => {    
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const {coupon, loading, client} = useSelector(state => ({
        client: state.auth,
        loading: state.cda.loading,
        coupon: state.cda.cupons.find(coupon => coupon.id === parseInt(id))
    }));
    
    console.log('CUPON: ',coupon)
    console.log(client.body.rut)

    useEffect(() => {
        dispatch(getCouponById( id ));
    }, [dispatch, id]);

    const getCoupon = ( e ) => {
        e.preventDefault();
        dispatch( buyCoupon( client.body.rut, coupon.id ) );        
    }

    if(loading) return null
    
    return (
        <div className="cupon-screen">
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
                    <div className="divisor-entre-descrip-servicios"></div>
                    <div className="div-block-28">
                        <img src="https://uploads-ssl.webflow.com/60da07a904f25339b115d11e/60f4c1ebb62a5610e369699e_TerminosCondiciones_1.png" alt="" className="image-22" />
                        <p className="terminos-condiciones">Términos y condiciones</p>
                    </div>
                    <Link to={`/cupones/obtener/${ client.body.rut }/${ coupon.id }`} 
                        className="boton-comprar-servicio" onClick={ getCoupon }>
                            Obtener cupón
                    </Link>
                </div>
            </div>
            <div className="divisor-desktop"></div>
            <div className="div-block-26-copy">
                <p className="descripcion_2">Direcciones</p>

                <div className="div-block-29">
                    <img src="https://uploads-ssl.webflow.com/60da07a904f25339b115d11e/60f4c569fb792d607478e0a9_Location.png" alt="icono-gps" className="image-23" />
                    <p className="texto-ubicacion">Santa María 3322<br />vitacura<br />REGIÓN METROPOLITANA</p>
                </div>
                <div className="div-block-29">
                    <img src="https://uploads-ssl.webflow.com/60da07a904f25339b115d11e/60f4c569fb792d607478e0a9_Location.png" alt="icono-gps" className="image-23" />
                    <p className="texto-ubicacion">Santa María 3322<br />vitacura<br />REGIÓN METROPOLITANA</p>
                </div>
                <div className="div-block-29">
                    <img src="https://uploads-ssl.webflow.com/60da07a904f25339b115d11e/60f4c569fb792d607478e0a9_Location.png" alt="icono-gps" className="image-23" />
                    <p className="texto-ubicacion" onClick={ handleMapLocation }>Santa María 3322<br />vitacura<br />REGIÓN METROPOLITANA</p>
                </div>
                
            </div>
            <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212999.19736400706!2d-70.76991586607882!3d-33.47242276274744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Santiago%20Metropolitan%20Region%2C%20Chile!5e0!3m2!1sen!2sve!4v1630072070108!5m2!1sen!2sve" title="myMap" id="myMap" width="996" height="400" allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="divisor-desktop"></div>
            <p className="descripcion-copy">TAMBIÉN TE PODRÍA INTERESAR</p>
            <CuponesDestacados />

        </div>
        <Footer />
        </div>
    )
    
}
