import { Footer } from '../layout/Footer'
import purpleCircle from '../assets/purple-circle.png'
import wPerson from '../assets/w-person.png'

import { Header } from "../layout/Header";
import { LoginScreen } from "./LoginScreen";

export const FormRobAcc = () => {
    return (
        
        <div className="section-4">
            <br/><br/>
            <div className="popup-container">
                <LoginScreen />
            </div>   
            <Header />   
            <img src={ purpleCircle } alt="purple-circle" className="image-17"/>
            <img src={ wPerson } alt="w-person" className="image-16"/>
            <div className="formulario">
            <h1 className="heading-2 text-center">En caso de Choque:</h1>
                <div className="form-block">
                    <form action="" className="form">
                        <label htmlFor="" className="field-label">NOMBRE Y APELLIDO DEL CONDUCTOR:</label>
                        <input type="text" id="name" className="text-field"/>
                        <label htmlFor="" className="field-label">PATENTE:</label>
                        <input type="text" id="name-2" className="text-field"/>
                        <a href="/" className="join w-button">Enviar Datos</a>
                    </form>
                </div>
            </div>
            <br/>
            <Footer />
            <br/><br/><br/><br/><br/>
        </div>
    )
}
