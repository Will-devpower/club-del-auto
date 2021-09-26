import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { cuponLogout } from './cda';


export const startLogin = ( rut, password, history ) => {
    return async( dispatch ) => {
        
        const data = { "identifier": rut, "password": password };       

        const resp = await fetchSinToken( 'auth/local', data, 'POST' );
        const body = await resp.json();

        
        if( resp.status === 200 ) {
            
           
            localStorage.setItem('token', body.jwt );
            localStorage.setItem('usuario', JSON.stringify( body.user )  );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.user.id,
                name: body.user.username
            }) )
            
            history.push('/');
            document.querySelector('.popup-container').style.display = 'none';
            document.querySelector('body').style.overflow = 'visible';
        } else {            
            Swal.fire('Error', 'El Rut o la Contraseña son incorrectos', 'error');
        }
        

    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


export const startChecking = () => {
    return (dispatch) => {
        
        const token = localStorage.getItem('token');
        const usuario = localStorage.getItem('usuario');        
        
        if(token && usuario) {

          const { id: uid, name } = JSON.parse(usuario);
          return  dispatch( login({
                uid,
                name
            }) )
        } 
            
        dispatch( checkingFinish() );
                      
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });


export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( cuponLogout() );
        dispatch( logout() );        
    }
}

const logout = () => ({ type: types.authLogout })