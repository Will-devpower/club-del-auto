import { types } from '../types/types';
import { fetchSinToken, fetchEnhance } from '../helpers/fetch';
import Swal from 'sweetalert2';

export const setActiveCupon = (cupon) => ({
    type: types.setActiveCupon,
    payload: cupon
});

export const clearActiveCupon = () => ({ type: types.clearActiveCupon });


export const cuponsStartLoading = () => {
    return async(dispatch) => {

        try {    
            
            const resp = await fetchSinToken( 'cupones' );                
            const body = await resp.json();           
            
            dispatch( cuponLoaded( body ) );

        } catch (error) {
            console.log('Access Unauthorized')
        }

    }
}

const cuponLoaded = (cupons) => ({
    type: types.cuponLoaded,
    payload: cupons
})

export const getCouponById = id => async(dispatch) => {
        try {        
            dispatch(({ type: types.GET_COUPON_REQUEST }));
            const response = await fetchEnhance(`cupones/${id}`);
            const coupon = await response.json();
            
            // console.log(coupon)          
            
            dispatch(({ 
                type: types.GET_COUPON_SUCCESS,
                payload: coupon 
            }));            

        } catch (error) {
            console.log(error)
        }   
}

export const buyCoupon = ( rut, cupon ) => {
    return async( dispatch ) => {
        
        Swal.showLoading();

        const data = { "identifier": rut, "cupon": cupon };       

        const resp = await fetchSinToken( 'cupones/obtener/'+rut+'/'+cupon, data, 'GET' );
        console.log("consulta en BD: "+resp);
        console.log("status de la respuesta: "+resp.status);

        if( resp.status === 200 ) {
            
            Swal.fire({
                icon: 'success',
                title: 'Cupón obtenido',
                text: 'El detalle del cupón fue enviado a su correo',
                footer: 'recuerda revisar la carpeta spam'
              })
            
        } else {            
            Swal.fire('Error', 'Ocurrió un error al procesar el cupón', 'error');
        }
        

    }
}

export const suscripcion = ( nombre, email ) => {
    return async( dispatch ) => {
        
        Swal.showLoading();

        const data = { "nombre": nombre, "email": email };       

        const resp = await fetchSinToken( 'suscripciones', data, 'POST' );
        console.log("consulta en BD: "+resp);
        console.log("status de la respuesta: "+resp.status);

        if( resp.status === 200 ) {
            
            Swal.fire({
                icon: 'success',
                title: 'Registro Exitoso',
                text: 'Próximamente te enviaremos noticias!'
              })
            
        } else {            
            Swal.fire('Error', 'Ocurrió un error al registrar tu suscripción, Intenta de nuevo más tarde.', 'error');
        }
        

    }
}


export const cuponLogout =() => ({ type: types.cuponLogout });


