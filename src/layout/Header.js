import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo1 from '../assets/cda-logo1.png';
// import logo2 from '../assets/cda-logo2.png';
import logo3 from '../assets/cda-logo3.png';
import { triggerLoginPopup } from "../helpers/triggerLogin";

export const Header = () => {

    const { uid } = useSelector(state => state.auth);   

    return (
        <div className="navegacion">
            <Link to="/">
                <div className="div-block-3">
                    <img src={ logo1 } className="logo1" alt="logo1" />
                    <img src={ logo3 } className="logo2" alt="logo3" />
                </div>
            </Link>
            <nav className="nav-menu">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/" className="nav-link">Contáctanos</Link>
                {
                    ( uid !== undefined ) 
                    ? <Link to="/client-account" className="log-in">Mi cuenta</Link>
                    : <button onClick={ triggerLoginPopup } className="log-in" value="Ingresar a mi cuenta">Ingresar a mi cuenta</button>
                }
            </nav>
            <div className="nav-button">
                <div className="icon-nav-menu">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </div>
    )
}
