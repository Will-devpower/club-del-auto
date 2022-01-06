import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { loginFirst } from '../actions/auth';


import { useHistory } from 'react-router-dom';
import { Header } from '../layout/Header';

export const LoginFirstTime = () => {

    const dispatch = useDispatch();
    const history = useHistory();    
    

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lRut: '',
        lPassword: '',
        lPasswordConfim: ''
    });    
    
    const { lRut, lPassword, lPasswordConfim  } = formLoginValues;

    const handleLoginFirst = ( e ) => {
        e.preventDefault();        
        dispatch( loginFirst( lRut, lPassword, lPasswordConfim, history ) );        
    }

    return (
        <div className="outter login-container" style={{height:'100vh'}}>
            <Header />
            <div className="middle">
                
                <div className="div-block-59">                    
                    
                    <h1 className="heading-login">Bienvenido al club!</h1>
                    <h4>Registra tus datos a continuación:</h4>
                    
                    <div className="inner form-block-2">
                        <form onSubmit={ handleLoginFirst }>
                                               
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
                            
                                <input
                                    type="password"
                                    className="form-control text-field-2"
                                    placeholder="Registra tu Contraseña"
                                    name="lPassword"
                                    value={ lPassword }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='false'
                                    required
                                />

                                <input
                                    type="password"
                                    className="form-control text-field-2"
                                    placeholder="Repite tu Contraseña"
                                    name="lPasswordConfim"
                                    value={ lPasswordConfim }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='false'
                                    required
                                />

                            <center><h6>(La contraseña debe incluir de 6 a 20 caractéres, al menos un número, Maýusculas y minúsculas)</h6></center>
                            
                            <div className="form-group" style={{display:'flex', justifyContent:'center'}}>
                                <input 
                                    type="submit"
                                    className="cda-btn1 mt-20"
                                    value="Registrar" 
                                />
                            </div>
                            
                        </form>                    
                    </div>
                    <a href="/login" className="link-2">Volver al Login</a>
                    <a href="/olvide-pass" className="link-2">¿Olvidaste tu contraseña?</a>
                </div>               
            </div>
        </div>
    )
}