import { types } from '../types/types';

const initialState = {    
    cupons: [],
    loading: true
};


export const cdaReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
       
        case types.GET_COUPON_REQUEST:
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
                
        case types.recordAddNew:
            return {
                ...state,
                cupons: [
                    ...state.cupons,
                    action.payload
                ]
            }
    
        case types.clearActiveCupon:
            return {
                ...state,
                activeCupon: null
            }


        case types.cuponUpdated:
            return {
                ...state,
                cupons: state.cupons.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }
        
        case types.cuponDeleted:
            return {
                ...state,
                cupons: state.cupons.filter(
                    e => ( e.id !== state.activeCupon.id )
                ),
                activeCupon: null
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
