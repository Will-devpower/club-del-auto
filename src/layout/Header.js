import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo1 from '../assets/cda-logo1.png';
import React, { useState, useCallback } from 'react'
// import logo2 from '../assets/cda-logo2.png';
import logo3 from '../assets/cda-logo3.png';
// import { triggerLoginPopup } from "../helpers/triggerLogin";


export const Header = () => {

    const { uid } = useSelector(state => state.auth);  

    const [open, setOpen] = useState(false);
    const [top, setTop] = useState('-180px');
 
    const handleClick = useCallback(() => {
        if(!open) {
            setTop('-60px')
        } else {
            setTop('-180px')
        }
        setOpen(!open);        
    }, [open]);

    return (
        <>            
            <div className="navegacion">
                <Link to="/">
                    <div className="div-block-3">
                        <img src={ logo1 } className="logo1" alt="logo1" />
                        <img src={ logo3 } className="logo2" alt="logo3" />
                    </div>
                </Link>
                <nav className="nav-menu" style={{ top: top }}>                 
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/contacto" className="nav-link">Contáctanos</Link>
                    {
                        ( uid !== undefined ) 
                        ? <Link to="/client-account" className="log-in">Mi cuenta</Link>
                        : <Link to="/login" className="log-in">Ingresar a mi cuenta</Link>
                    }
                </nav>
                <div className="nav-button">
                    <div className="icon-nav-menu">
                        <i className="fas fa-bars" onClick={ handleClick }></i>
                    </div>
                </div>
                <span className="close_icon"><i className="fas fa-times"></i></span>
            </div>
        </>
    )
}
