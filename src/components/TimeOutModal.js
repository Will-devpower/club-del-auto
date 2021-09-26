import React, { useRef, useState } from 'react';
import IdleTimer from 'react-idle-timer';
import { startLogout } from '../actions/auth';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

Modal.setAppElement('#root');

export const TimeOutModal = () => {

    const [showModal, setshowModal] = useState(false);        
    const idleTimerRef = useRef(null);
    const sessionRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const onIdle = () => {  
        setshowModal(true); 
        sessionRef.current = setTimeout(() => {
            logOut();
        }, 30000 ); 
    }    

    const stayLoggedIn = () => {       
       setshowModal(false);
       clearTimeout(sessionRef.current);
    }

    const logOut = () => {
        setshowModal(false);        
        clearTimeout(sessionRef.current);
        dispatch( startLogout() );
        history.push('/');
    } 

    return (
        <div>          
          <Modal isOpen={ showModal }>
            <h2>Has estado inactivo por mas de 5 minutos</h2>
            <p>Seras desconectado Pronto</p>
            <div>
                <button onClick={ logOut }>Cerrar Sesión</button>
                <button onClick={ stayLoggedIn }>Permanecer conectado</button>
            </div>    
          </Modal> 
          <IdleTimer
            ref={ idleTimerRef }       
            onIdle={ onIdle }
            timeout={ 60 * 1000 } 
          />
        </div>
    )
}
