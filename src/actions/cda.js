import { types } from '../types/types';
import { fetchSinToken, fetchEnhance } from '../helpers/fetch';


export const setActiveCupon = (cupon) => ({
    type: types.setActiveCupon,
    payload: cupon
});

export const clearActiveCupon = () => ({ type: types.clearActiveCupon });


export const cuponsStartLoading = () => {
    return async(dispatch) => {

        try {    
            
            const resp = await fetchSinToken( 'cupons' );
            const body = await resp.json();

            console.log(body)
            // const filteredRecord = body.expedientes.filter(record => record.user._id === uid);            
        
            // const records = prepareRecords( filteredRecord );
            
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
            const response = await fetchEnhance(`cupons/${id}`);
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


export const cuponLogout =() => ({ type: types.cuponLogout });


