import { Link } from "react-router-dom"
import { Header } from "../layout/Header"
import { LoginScreen } from "./LoginScreen"


export const FormSelect = () => {
    return (
        <div className="formulario">
            <div className="popup-container">
                <LoginScreen />
            </div>            
            <Header />
            <div className="form-inner rendered-form">
                <Link to='/' className="link-2">Volver al inicio</Link>
                <br/>
                <h1 className="heading-7 mt-70">Seleccione una Opción</h1>
                <div className="select-form">                
                    <div>
                        <Link to="form-choque"><h2>Choque</h2></Link>                    
                    </div>
                    <div>
                        <Link to="form-robo"><h2>Robo</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
