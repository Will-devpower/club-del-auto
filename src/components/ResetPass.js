import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { resetPass } from '../actions/auth';


import { useHistory } from 'react-router-dom';

export const ResetPass = () => {

    const dispatch = useDispatch();
    const history = useHistory();    
    
    const { token, id } = useParams();
    

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lRut: ''
    });    
    
    const { lPassword, lPasswordConfim } = formLoginValues;
        

    const handleResetPass = ( e ) => {
        e.preventDefault();        
        dispatch( resetPass( id, token, lPassword, lPasswordConfim, history ) );        
    }

    return (
        
        <div className="outter login-container" style={{height:'100vh'}}>
           
            <div className="middle">                
                <div className="div-block-59">
                    
                    <a href="/" className="link-2">Volver al home</a>
                    <br/><br/>
                    <h1 className="heading-login">Ingresa tu Nueva contraseña</h1>
                    <div className="inner form-block-2">
                        <form onSubmit={ handleResetPass }>                            

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
                                    className="btnSubmit"
                                    value="Ingresar" 
                                />
                            </div>

                            
                        </form>                    
                    </div>
                </div>               
            </div>
        </div>
    )
}

