import { Footer } from '../layout/Footer'
import purpleCircle from '../assets/purple-circle.png'
import wPerson from '../assets/w-person.png'

export const Suscripcion = () => {
    return (
        <div className="section-4">
            <img src={ purpleCircle } alt="purple-circle" className="image-17"/>
            <img src={ wPerson } alt="w-person" className="image-16"/>
            <div className="formulario home-form">
            <h1 className="heading-2 text-center">Mantente al tanto <br />de nuestras actualizaciones</h1>
                <div className="form-block">
                    <form action="" className="form">
                        <label htmlFor="" className="field-label">NOMBRE Y APELLIDO</label>
                        <input type="text" id="name" className="text-field"/>
                        <label htmlFor="" className="field-label">CORREO</label>
                        <input type="text" id="name-2" className="text-field"/>
                        <a href="/" className="join w-button">Enviar</a>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
