import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { cdaReducer } from './cdaReducer';



export const rootReducer = combineReducers({    
    cda: cdaReducer,
    auth: authReducer
})