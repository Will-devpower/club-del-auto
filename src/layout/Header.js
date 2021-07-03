import logo1 from '../assets/cda-logo1.png';
import logo2 from '../assets/cda-logo2.png';

export const Header = () => {
    return (
        <div className="navegacion">
            <a href="/">
                <div className="div-block-3">
                    <img src={ logo1 } className="logo1" alt="logo1" />
                    <img src={ logo2 } className="logo2" alt="logo2" />
                </div>
            </a>
            <nav className="nav-menu">
                <a href="/" className="nav-link">Home</a>
                <a href="/" className="nav-link">Contáctanos</a>
                <a href="/" className="log-in">Ingresar a mi cuenta</a>
            </nav>
            <div className="nav-button">
                <div className="icon-nav-menu">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </div>
    )
}
