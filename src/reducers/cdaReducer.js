import { types } from '../types/types';

const initialState = {
    records: [],
    activeRecord: null
};


export const cdaReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.recordSetActive:
            return {
                ...state,
                activeRecord: state.records.find(
                    e => e.id === action.payload
                )
            }
        
        case types.recordAddNew:
            return {
                ...state,
                records: [
                    ...state.records,
                    action.payload
                ]
            }
    
        case types.clearActiveRecord:
            return {
                ...state,
                activeRecord: null
            }


        case types.recordUpdated:
            return {
                ...state,
                records: state.events.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }
        
        case types.recordDeleted:
            return {
                ...state,
                records: state.records.filter(
                    e => ( e.id !== state.activeRecord.id )
                ),
                activeEvent: null
            }

        case types.recordLoaded:
            return {
                ...state,
                records: [ ...action.payload ]
            }

        case types.recordLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }


}
