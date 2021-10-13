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
        const resp = await fetchSinToken( 'clientes/login/'+rut+'/'+password, data, 'GET' );        

        if( resp.status === 200 ) {        
            
            const resp2 = await fetchSinToken( 'direcciones/getUser/'+rut, data, 'POST' );

            if( resp2.status === 200 ) {

                const body = await resp2.json();                
                const { rut, nombre, telefono, correo, vehiculos} = body;
                //localStorage.setItem('token', body.jwt );
                localStorage.setItem('rut', JSON.stringify( rut ));
                localStorage.setItem('nombre', JSON.stringify( nombre ));
                localStorage.setItem('telefono', JSON.stringify( telefono ));
                localStorage.setItem('correo', JSON.stringify( correo )  );
                localStorage.setItem('vehiculos', JSON.stringify( vehiculos ));
                localStorage.setItem('token-init-date', new Date().getTime());

                dispatch( login({
                    uid: rut,
                    nombre: nombre,
                    correo: correo,
                    telefono: telefono,
                    vehiculos: vehiculos
                }) )                
                
                history.push('/');
                document.querySelector('.popup-container').style.display = 'none';
                document.querySelector('body').style.overflow = 'visible';    

                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido de vuelta',
                    text: body.nombre
                })

            } else {            
                Swal.fire('Error', 'El Rut o la Contraseña son incorrectos', 'error');
            }
            notice.hideLoading();
        } else {            
            Swal.fire('Error', 'El Rut o la Contraseña son incorrectos', 'error');
        }
    }
}

export const loginFirst = ( rut, password, history ) => {
    return async( dispatch ) => {        

        notice.showLoading({
            type: 'dots',
            title: 'Por favor espere',
            color: '#333',
            backgroundColor: 'rgba(255,255,255,.6)',
            fontSize: 14
        });
        const data = { "identifier": rut, "password": password };       

        //Validar que no se encuentre en la BD

        const resp = await fetchSinToken( 'clientes/registro/'+rut+'/'+password, data, 'POST' );        

        if( resp.status === 200 ) { 
            
            const body = await resp.json();
            
            const { rut, nombre, telefono, correo, vehiculos} = body;
            //localStorage.setItem('token', body.jwt );
            localStorage.setItem('rut', JSON.stringify( rut ));
            localStorage.setItem('nombre', JSON.stringify( nombre ));
            localStorage.setItem('telefono', JSON.stringify( telefono ));
            localStorage.setItem('correo', JSON.stringify( correo ));
            localStorage.setItem('vehiculos', JSON.stringify( vehiculos ));
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( login({
                uid: rut,
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                vehiculos: vehiculos
            }) )      
                                
                history.push('/');
                document.querySelector('.popup-container').style.display = 'none';
                document.querySelector('body').style.overflow = 'visible';
            
                Swal.fire({
                    icon: 'success',
                    title: 'Registro Exitoso',
                    text: 'De ahora en adelante podrás ingresar con tu contraseña'
                })    

        } else {            
            Swal.fire('Error', 'Ocurrió un error en el registro', 'error');
        }
        notice.hideLoading();

    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


export const startChecking = () => {
    return (dispatch) => {
        
        // const token = localStorage.getItem('token');
        const rutUsuario = localStorage.getItem('rut');       
        const nombreUsuario = localStorage.getItem('nombre');       
        const telefonoUsuario = localStorage.getItem('telefono');       
        const correoUsuario = localStorage.getItem('correo');       
        const vehiculosUsuario = localStorage.getItem('vehiculos');       
        
        if(rutUsuario) {

          
          return  dispatch( login({
                uid: rutUsuario,
                nombre: nombreUsuario,
                correo: correoUsuario,
                telefono: telefonoUsuario,
                vehiculos: JSON.parse(vehiculosUsuario)
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