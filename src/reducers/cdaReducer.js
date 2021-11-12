import { types } from '../types/types';

const initialState = {    
    cupons: [],
    cuponCliente: [],    
    textosApp: [],
    bannersCupones: [],    
    loading: true,
    cuponClienteLoaded: false,
    textosLoaded: false,
    bannersLoaded: false,    
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
        case types.GET_TEXTOS_APP:
            return {
                ...state,
                loading: true
            }
        case types.GET_BANNERS_CUPONES:
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
        
        case types.GET_TEXTOS_SUCCESS: {
            return {
                ...state,                
                textosLoaded: true,
                textosApp: action.payload
            }
        }
        case types.GET_BANNERS_SUCCESS: {
            return {
                ...state,                
                bannersLoaded: true,
                bannersCupones: action.payload
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
