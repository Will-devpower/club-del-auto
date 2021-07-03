

export const Suscripcion = () => {
    return (
        <div className="formulario">
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
    )
}
