import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import Notice from "@ouduidui/notice";

const notice = new Notice();

export const startLogin = ( rut, password, history ) => {
    return async( dispatch ) => {        

        notice.showLoading({
            type: 'dots',
            title: 'Por favor espere',
            color: '#333',
            backgroundColor: 'rgba(255,255,255,.6)',
            fontSize: 14
        });
        const data = { "identifier": rut, "password": password };       

        //const resp = await fetchSinToken( 'auth/local', data, 'POST' );
        const resp = await fetchSinToken( 'clientes/login/'+rut+'/'+password, data, 'GET' );
        

        if( resp.status === 200 ) {            
            
            const resp2 = await fetchSinToken( 'direcciones/getUser/'+rut, data, 'POST' );
            

            if( resp2.status === 200 ) {
                
                const body = await resp2.json();
                

                //localStorage.setItem('token', body.jwt );
                localStorage.setItem('usuario', JSON.stringify( body )  );
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
            notice.hideLoading();
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
        
        // const token = localStorage.getItem('token');
        const usuario = localStorage.getItem('usuario');       
        
        if(usuario) {

          const { rut: uid, name } = JSON.parse(usuario);
          return  dispatch( login({
                uid,
                name,
                body: usuario
            }) )
        } 
            
        dispatch( checkingFinish() );
                      
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });


export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();        
        dispatch( logout() );        
    }
}

const logout = () => ({ type: types.authLogout })