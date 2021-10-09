import { Footer } from '../layout/Footer'
import purpleCircle from '../assets/purple-circle.png'
import wPerson from '../assets/w-person.png'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { suscripcion } from '../actions/cda';

export const Suscripcion = () => {

    const dispatch = useDispatch();
    const history = useHistory(); 

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lName: '',
        lEmail: ''
    });

    const { lName, lEmail  } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();        
        dispatch( suscripcion( lName, lEmail, history ) );        
    }

    return (
        <div className="section-4">
            <img src={ purpleCircle } alt="purple-circle" className="image-17"/>
            <img src={ wPerson } alt="w-person" className="image-16"/>
            <div className="formulario home-form">
            <h1 className="heading-2 text-center">Mantente al tanto <br />de nuestras actualizaciones</h1>
                <div className="form-block">
                    <form action="" className="form" onSubmit={ handleLogin }>

                        <label htmlFor="" className="field-label">NOMBRE Y APELLIDO</label>
                        <input type="text" name="lName" className="form-control text-field-2"
                            value={ lName }
                            onChange={ handleLoginInputChange }/>

                        <label htmlFor="" className="field-label">CORREO</label>
                        <input type="text" name="lEmail" className="form-control text-field-2" 
                            value={ lEmail }
                            onChange={ handleLoginInputChange }/>
                        
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Registrarme" 
                            />

                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
