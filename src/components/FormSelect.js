import { Link } from "react-router-dom"


export const FormSelect = () => {
    return (
        <div className="formulario">
            <Link to='/' className="goHome link-2">Volver al inicio</Link>
            <br/>
            <h1 className="heading-7">Seleccione una Opción</h1>
            <div className="select-form">                
                <div>
                    <Link to="form-choque"><h2>Choque</h2></Link>                    
                </div>
                <div>
                    <Link to="form-robo"><h2>Robo</h2></Link>
                </div>
            </div>
        </div>
    )
}
