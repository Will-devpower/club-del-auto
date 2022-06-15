//const baseUrl = "https://strapi.clubdelauto.cl"
const baseUrl = "https://b8a4-201-188-138-176.ngrok.io"

const fetchEnhance = (endpoint, data = {}, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    
    return fetch(url);
}

const fetchSinToken = ( endpoint, data, method = 'GET' ) => {
    
    const url = `${ baseUrl }/${ endpoint }`;    

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}


const fetchConToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify( data )
        });
    }
}



export {
    fetchSinToken,    
    fetchConToken,
    fetchEnhance
}