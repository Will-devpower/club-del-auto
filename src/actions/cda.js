import { types } from '../types/types';
import { fetchSinToken, fetchEnhance } from '../helpers/fetch';
import Swal from 'sweetalert2';

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

export const getCuponClientes = () => {
    return async (dispatch) => {

        try {        
            dispatch(({ type: types.GET_COUPON_CLIENTE }));
            const response = await fetchEnhance(`cuponclientes`);
            const cuponCliente = await response.json();      
            
            console.log(cuponCliente)
            
            dispatch(({ 
                type: types.GET_COUPON_CLIENTE_SUCCESS,
                payload: cuponCliente 
            }));            
    
        } catch (error) {
            console.log(error)
        }
    }
}
export const getTextosApp = () => {
    return async(dispatch) => {
        try {        
            dispatch(({ type: types.GET_TEXTOS_APP }));
            const response = await fetchEnhance(`app`);
            const textos = await response.json();              
           
            dispatch(({ 
                type: types.GET_TEXTOS_SUCCESS,
                payload: textos 
            }));            
    
        } catch (error) {
            console.log(error)
        }   
    }
}
export const getBannersCupones = () => {
    return async(dispatch) => {
        try {        
            dispatch(({ type: types.GET_BANNERS_CUPONES }));
            const response = await fetchEnhance(`banners-cupones`);
            const banners = await response.json();              
            
            dispatch(({ 
                type: types.GET_BANNERS_SUCCESS,
                payload: banners 
            }));            
    
        } catch (error) {
            console.log(error)
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

export const buyCoupon = ( rut, patente, cupon ) => {
    return async( dispatch ) => {
        
        Swal.showLoading();
        let rutNew = rut.replace(/"/g,'')
        const data = { "identifier": rut, "cupon": cupon }; 

        //Validar si el cupon tiene maximos de solicitudes por patente
        console.log("patente: "+patente);

        const resp = await fetchSinToken( 'cupones/obtener/'+rutNew+'/'+cupon+'/'+patente, data, 'GET' );
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

export const sendAcc = ( rut, cupon ) => {
    return async( dispatch ) => {
        
        Swal.showLoading();
        let rutNew = rut.replace(/"/g,'')
        const data = { "identifier": rut, "cupon": cupon }; 

        const resp = await fetchSinToken( 'cupones/obtener/'+rutNew+'/'+cupon, data, 'GET' );

        if( resp.status === 200 ) {
            
            Swal.fire({
                icon: 'success',
                title: 'Incidente reportado',
                text: 'Los detalles fueron enviados a nuestro equipo',
                footer: 'El los próximos días nos pondremos en contacto con ud'
            })
            
        } else {            
            Swal.fire('Error', 'Ocurrió un error al procesar el cupón', 'error');
        }
        

    }
}

export const cuponLogout =() => ({ type: types.cuponLogout });


