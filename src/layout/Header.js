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
    const [top, setTop] = useState('-110vh');
    const [icon, setIcon] = useState('fas fa-bars');
 
    const handleClick = useCallback(() => {
        if(!open) {
            setTop('-60px')
            setIcon('fas fa-times')
        } else {
            setTop('-110vh')
            setIcon('fas fa-bars')
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
                    <Link to="/" className="nav-link cda-btn2">Home</Link>
                    <Link to="/contacto" className="nav-link cda-btn2">Contáctanos</Link>
                    {
                        ( uid !== undefined ) 
                        ? <Link to="/client-account" className="log-in cda-btn1">Mi cuenta</Link>
                        : <Link to="/login" className="log-in cda-btn1">Ingresar a mi cuenta</Link>
                    }
                </nav>
                <div className="nav-button">
                    <div className="icon-nav-menu">
                        <i className={ icon } onClick={ handleClick }></i>
                    </div>
                </div>
                <span className="close_icon"><i className="fas fa-times"></i></span>
            </div>
        </>
    )
}
