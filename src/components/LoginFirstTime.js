import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { loginFirst } from '../actions/auth';


import { useHistory } from 'react-router-dom';

export const LoginFirstTime = () => {

    const dispatch = useDispatch();
    const history = useHistory();    
    

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lRut: '',
        lEmail: '',
        lPatente: '',
        lPassword: ''
    });    
    
    const { lRut, lPassword, lPasswordConfim  } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();        
        dispatch( loginFirst( lRut, lPassword, history ) );        
    }

    return (
        <div className="outter login-container" style={{height:'100vh'}}>
            <div className="middle">
                
                <div className="div-block-59">
                    
                    <a href="/" className="link-2">Volver al home</a>
                    <br/><br/>
                    <h1 className="heading-login">Bienvenido al club!</h1>
                    <h3>Registra tus datos a continuación:</h3>
                    
                    <div className="inner form-block-2">
                        <form onSubmit={ handleLogin }>
                                               
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
                                    name="lPassword"
                                    value={ lPasswordConfim }
                                    onChange={ handleLoginInputChange }
                                    autoComplete='false'
                                    required
                                />
                            
                            <div className="form-group" style={{display:'flex', justifyContent:'center'}}>
                                <input 
                                    type="submit"
                                    className="btnSubmit"
                                    value="Registrar" 
                                />
                            </div>

                            
                        </form>                    
                    </div>
                </div>               
            </div>
        </div>
    )
}