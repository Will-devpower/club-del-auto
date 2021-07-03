import { Cupon } from "./Cupon"
import { Suscripcion } from "./Suscripcion"


export const HomeScreen = () => {
    return (
        <div className="container">
            <div className="banner">
                <h1 className="heading">Nos preocupamos <br /> por tu seguridad</h1>
            </div>
            <div className="asistencias">
                <div className="div-block-6"></div>
                <div className="div-block-9">
                    <h1 className="heading-2">¿Necesitas asistencia inmediata?</h1>
                    <p className="paragraph-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.
                    </p>
                    <a href="/" className="w-button">Solicitar asistencia</a>
                </div>
            </div>
            <div className="asistencias">                
                <div className="div-block-9">
                    <h1 className="heading-2">¿Necesitas asistencia inmediata?</h1>
                    <p className="paragraph-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.
                    </p>
                    <a href="/" className="w-button">Llena el formulario</a>
                </div>
                <div className="div-block-6"></div>
            </div>
            <div className="div-block-22"></div>
            <div className="asistencias movil">
                <div className="div-block-6">
                    <h1 className="heading-2">¿Necesitas asistencia inmediata?</h1>
                    <p className="paragraph-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.
                    </p>
                    <a href="/" className="w-button">Solicitar asistencia</a>
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

            <Cupon />

            <div className="el-club">
                <h1 className="heading-3">Sé parte <strong>del club</strong></h1>
                <p className="paragraph-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.</p>
                <a href="/" className="join">Más información</a>
            </div>

            <Suscripcion />
        </div>
    )
}
