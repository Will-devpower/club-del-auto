import { Footer } from '../layout/Footer'
import { Header } from "../layout/Header";
import { LoginScreen } from "./LoginScreen";
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { sendMail } from '../actions/auth';
// import userIcon from '../assets/user-icon2.png';
// import { useHistory } from 'react-router-dom';

export const Contacto = () => {

    const dispatch = useDispatch();
    // const history = useHistory();    
    

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lNombre: '',
        lEmail: '',
        lAsunto: '',
        lMensaje: ''
    });    
    
    const { lNombre, lEmail, lAsunto, lMensaje } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();        
        dispatch( sendMail( lNombre, lEmail, lAsunto, lMensaje ) );       
    }


    return (
        <div className="section-4">            
            <div className="popup-container">
                <LoginScreen />
            </div>   
            <Header />  
            <div className="outter" style={{height:'100vh'}}>
            <div className="middle contact-page">                
                <div className="div-block-59">                    
                    <h1 className="heading-login">Envíanos un correo. Te responderemos a la brevedad.</h1>
                    <div className="inner form-block-2">
                        <form onSubmit={ handleLogin }>   

                                <input 
                                    type="text"
                                    className="form-control text-field-2"
                                    placeholder="Tu nombre"
                                    name="lNombre"
                                    value={ lNombre }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='true'
                                    required
                                />

                                <input
                                    type="email"
                                    className="form-control text-field-2"
                                    placeholder="Email"
                                    name="lEmail"
                                    value={ lEmail }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='false'
                                    required
                                />

                            <input
                                    type="text"
                                    className="form-control text-field-2"
                                    placeholder="Asunto del mensaje"
                                    name="lAsunto"
                                    value={ lAsunto }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='false'
                                    required
                                />

                            <textarea
                                    className="form-control text-field-3"
                                    placeholder="Escribe tu mensaje"
                                    name="lMensaje"
                                    value={ lMensaje }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='false'
                                    rows='10'
                                    required
                                />
                            
                            <div className="form-group" style={{display:'flex', justifyContent:'center'}}>
                                <input 
                                    type="submit"
                                    className="btnSubmit"
                                    value="Enviar" 
                                />
                            </div>
                            
                        </form>                    
                    </div> 

                </div>               
            </div>
        </div>
            
            <br/>
            <Footer />
            <br/><br/><br/><br/>
        </div>
    )
}
