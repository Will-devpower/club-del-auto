import Swal from 'sweetalert2';

import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';
// import { prepareRecords } from '../helpers/prepareRecords';


export const recordStartAddNew = ( record ) => {
    return async( dispatch, getState ) => {

        const { uid, name } = getState().auth;

        try {
            const resp = await fetchConToken('expedientes', record, 'POST');
            const body = await resp.json();

            console.log(body)

            if ( body.ok ) {
                record.id = body.expediente.id;
                record.user = {
                    _id: uid,
                    name: name
                }
                console.log( record );
                dispatch( recordAddNew( record ) );
            }


        } catch (error) {
            console.log(error);            
        } 
    }
}



const recordAddNew = (record) => ({
    type: types.recordAddNew,
    payload: record
});

export const recordSetActive = (record) => ({
    type: types.recordSetActive,
    payload: record
});

export const clearActiveRecord = () => ({ type: types.clearActiveRecord });



export const recordStartUpdate = ( record ) => {
    return async(dispatch) => {

        try {
            const resp = await fetchConToken(`expedientes/${ record.id }`, record, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {                
                dispatch( recordUpdated( record ) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}

const recordUpdated = ( record ) => ({
    type: types.recordUpdated,
    payload: record
});


export const recordStartDelete = () => {
    return async ( dispatch, getState ) => {

        const { id } = getState().aegis.activeRecord;
        try {
            const resp = await fetchConToken(`expedientes/${ id }`, {}, 'DELETE' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( recordDeleted() );
                dispatch( clearActiveRecord() );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}


const recordDeleted = () => ({ type: types.recordDeleted });


// export const recordStartLoading = () => {
//     return async(dispatch, getState) => {

//         try {
            
//             const { uid } = getState().auth;
//             const resp = await fetchConToken( 'expedientes' );
//             const body = await resp.json();
//             const filteredRecord = body.expedientes.filter(record => record.user._id === uid);            
        
//             const records = prepareRecords( filteredRecord );
            
//             dispatch( recordLoaded( records ) );

//         } catch (error) {
//             console.log(error)
//         }

//     }
// }

// const recordLoaded = (records) => ({
//     type: types.recordLoaded,
//     payload: records
// })

export const recordLogout =() => ({ type: types.recordLogout });