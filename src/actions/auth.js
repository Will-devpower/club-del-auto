import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { cuponLogout } from './cda';


export const startLogin = ( rut, password, history ) => {
    return async( dispatch ) => {
        
        const data = { "identifier": rut, "password": password };       

        //const resp = await fetchSinToken( 'auth/local', data, 'POST' );
        const resp = await fetchSinToken( 'clientes/login/'+rut+'/'+password, data, 'GET' );
        console.log("consulta en BD: "+resp.status);

        if( resp.status === 200 ) {
            
            const resp2 = await fetchSinToken( 'direcciones/getUser/'+rut, data, 'POST' );
            console.log("llamado a API: "+resp2);
            console.log("status de la respuesta: "+resp2.status);

            if( resp2.status === 200 ) {
                
                const body = await resp2.json();

                console.log(body);

                //localStorage.setItem('token', body.jwt );
                localStorage.setItem('usuario', JSON.stringify( body.nombre )  );
                localStorage.setItem('token-init-date', new Date().getTime() );

                dispatch( login({
                    uid: body.rut,
                    name: body.nombre,
                    body: body
                }) )
                
                history.push('/');
                document.querySelector('.popup-container').style.display = 'none';
                document.querySelector('body').style.overflow = 'visible';

            } else {            
                Swal.fire('Error', 'El Rut o la Contraseña son incorrectos', 'error');
            }
            
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