import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { startLogin } from '../actions/auth';
import userIcon from '../assets/user-icon2.png';


import { useHistory } from 'react-router-dom';
import { Header } from '../layout/Header';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const history = useHistory();    
    

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lRut: '',
        lEmail: '',
        lPatente: '',
        lPassword: ''
    });    
    
    const { lRut, lPassword } = formLoginValues;
        

    const handleLogin = ( e ) => {
        e.preventDefault();
        
        dispatch( startLogin( lRut, lPassword, history ) );        
    }

    return (
        <div className="outter login-container" style={{height:'100vh'}}>
            <Header />
            <div className="middle contact-page">
                
                <div className="div-block-59">                   
                    
                    <img src={ userIcon } alt="icono-usuario" className="image-31" />
                    <h1 className="heading-login">Ingresa a tu cuenta</h1>
                    <div className="inner form-block-2">
                        <form onSubmit={ handleLogin }>
                            
                                {/* <input
                                    type="text"
                                    className="form-control text-field-2"
                                    placeholder="Correo"
                                    name="lEmail"
                                    value={ lEmail }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='false'
                                    required
                                /> */}
                            
                            
                                <input 
                                    type="text"
                                    className="form-control text-field-2"
                                    placeholder="RUT"
                                    name="lRut"
                                    value={ lRut }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='true'
                                    required
                                />
                            
                            
                                {/* <input 
                                    type="text"
                                    className="form-control text-field-2"
                                    placeholder="Patente"
                                    name="lPatente"
                                    value={ lPatente }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='true'
                                    required
                                /> */}
                            
                            
                                <input
                                    type="password"
                                    className="form-control text-field-2"
                                    placeholder="Contraseña"
                                    name="lPassword"
                                    value={ lPassword }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='false'
                                    required
                                />
                            
                            <div className="form-group" style={{display:'flex', justifyContent:'center'}}>
                                <input 
                                    type="submit"
                                    className="cda-btn1 mt-20"
                                    value="Ingresar" 
                                />
                            </div>

                            
                        </form>                    
                    </div>
                    <a href="/login-first" className="link-2">Ingreso por Primera Vez</a>
                    <a href="/olvide-pass" className="link-2">¿Olvidaste tu contraseña?</a>
                </div>               
            </div>
        </div>
    )
}