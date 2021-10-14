import { types } from '../types/types';

const initialState = {    
    cupons: [],
    cuponCliente: [],
    loading: true,
    cuponClienteLoaded: false
};


export const cdaReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
       
        case types.GET_COUPON_REQUEST:
            return {
                ...state,
                loading: true
            }
         
        case types.GET_COUPON_CLIENTE:
            return {
                ...state,
                loading: true
            }    

        case types.GET_COUPON_SUCCESS: {
            const newCoupons = [...state.cupons];  
            const couponIndex = state.cupons.findIndex(coupon => coupon.id === action.payload.id);
            if(couponIndex > -1) {
                newCoupons[couponIndex] = action.payload
            } else {
                newCoupons.push(action.payload)
            } 
            
            return {
                ...state,
                loading: false,
                cupons: newCoupons
            }
        }
        
        case types.GET_COUPON_CLIENTE_SUCCESS: {
            return {
                ...state,
                loading: false,
                cuponClienteLoaded: true,
                cuponCliente: [ ...action.payload ]
            }
        } 
        
        case types.cuponLoaded:
            return {
                ...state,
                cupons: [ ...action.payload ]
            }

        case types.cuponLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }


}
