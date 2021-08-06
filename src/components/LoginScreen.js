import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { startLogin } from '../actions/auth';

import { useHistory } from 'react-router-dom';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lRut: '',
        lPassword: ''
    });    
    
    const { lRut, lPassword } = formLoginValues;    

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin( lRut, lPassword, history ) );        
    }

    return (
        <div className="outter login-container" style={{height:'100vh'}}>
            <div className="middle">
                <div className="inner login-form-1">
                    <form onSubmit={ handleLogin } style={{display:'flex', justifyContent:'center'}}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="RUT"
                                name="lRut"
                                value={ lRut }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={ lPassword }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group" style={{display:'flex', justifyContent:'center'}}>
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Iniciar Sesión" 
                            />
                        </div>
                    </form>                    
                </div>    
                
            </div>
        </div>
    )
}