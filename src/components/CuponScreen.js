import { Link } from "react-router-dom"
import { CuponesDestacados } from "./CuponesDestacados"

export const CuponScreen = () => {
    return (
        <div className="section-7">
            <h1 className="titulo-servicio">Taller Vitacura</h1>
            <p className="bajada-servicio">Inspección de auto por vacaciones</p>
            <div className="div-block-26">
                <div>
                    <div className="slider w-slider"></div>
                    <p className="descripcion-servicio-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className="div-block-27">
                    <p className="descripcion">DESCRIPCIÓN</p>
                    <div className="div-block-28">
                        <img src="https://uploads-ssl.webflow.com/60da07a904f25339b115d11e/60f4c1eb32558eee7089b5bf_Porcentajes_2.png" alt="icono1" className="image-22" />
                        <p className="descripcion-servicio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="divisor-entre-descrip-servicios"></div>
                    <div className="div-block-28">
                        <img src="https://uploads-ssl.webflow.com/60da07a904f25339b115d11e/60f4c1ebb62a5610e369699e_TerminosCondiciones_1.png" alt="" className="image-22" />
                        <p className="terminos-condiciones">Términos y condiciones</p>
                    </div>
                    <Link to="/" className="boton-comprar-servicio">Obtener cupón</Link>
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
                    <p className="texto-ubicacion">Santa María 3322<br />vitacura<br />REGIÓN METROPOLITANA</p>
                </div>
            </div>
            <div className="mapa"></div>
            <div className="divisor-desktop"></div>
            <p className="descripcion-copy">TAMBIÉN TE PODRÍA INTERESAR</p>
            <CuponesDestacados />

        </div>
    )
}
