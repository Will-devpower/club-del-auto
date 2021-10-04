import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { cuponsStartLoading } from "../actions/cda";
import { LoginScreen } from "./LoginScreen";
import { useEffect } from "react";

export const CuponesScreen = () => { 
    
    const dispatch = useDispatch();

    const { cupons } = useSelector(state => state.cda);    
    
    useEffect(() => {
        dispatch( cuponsStartLoading() );        
    }, [dispatch])

    return (
        <div className="cupones-screen">
            <div className="popup-container">
                <LoginScreen />
            </div>   
            <Header />         
            <div className="banners-cupones">
                <div className="div-block-24"></div>
            </div>
            <div className="section-5"></div>
            <div className="cupones-page">
                {                    
                    cupons.map(elem => {
                      return (
                        <Link to={`/cupones/${ elem.id }`} className="cupon-link-wrapper" key={elem.id}>
                         <div className="div-block-25">
                            <div className="cupon-card-cupon-page" style={{backgroundImage:`url(${elem.img[0].url})`}}></div>
                            <h1 className="heading-6">{elem.servicio}</h1>
                            <p className="texto-cupones">{elem.bajada}</p>
                            <p className="link-page">MÁS INFORMACIÓN</p>
                         </div>
                         </Link>
                      )  
                    }) 
                }
            </div>
            <Footer />
        </div>
    )
}
