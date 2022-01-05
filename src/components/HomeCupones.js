import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import orangeCircle from '../assets/orange-circle.png'
import orangeDots from '../assets/orange-dots.png'

const baseUrl = process.env.REACT_APP_API_URL;


export const HomeCupones = ({tituloCupones, btn}) => {

    
    const { cupons } = useSelector(state => state.cda);
    console.log('D',cupons)
    return (
        <div className="section-3">
         <img src={ orangeCircle } alt="orange-circle" className="image-15"/>
         <img src={ orangeDots } alt="dots" className="image-14"/>   
        <div className="cupones">
            <div className="div-block-17">
                <h1 className="titulos-centrados">{tituloCupones}</h1>
            </div>
            <div className="div-block-10">
                {
                    cupons.length >= 1 &&
                    cupons.slice(0, 3).map(( cupon ) => (
                        <Link to={`/cupones/${ cupon.id }`} className="cupon-link-wrapper" key={ cupon.id }>
                        <div className="cupon-card">
                            <div className="div-block-73">
                                <div className="cupon-card-cupon-page" style={{backgroundImage:`url(${baseUrl+cupon.img[0].url})`}}></div>
                                <div className="div-block-75">
                                    <h1 className="heading-12">{cupon.proveedor.nombre}</h1>
                                    <p className="texto-cupones">{ cupon.bajada }</p>
                                    <div className="div-block-20">
                                        <p className="link">{btn}</p>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
            <div className="div-block-18">
                <Link to="/cupones-de-descuento" className="coupons cda-btn3">Ver todos los cupones</Link>
            </div>
        </div>
        </div>
    )
}
