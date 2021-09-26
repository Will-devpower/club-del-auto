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
                         <div key={elem.id} className="div-block-25">
                            <div className="cupon-card-cupon-page" style={{backgroundImage:`url(${elem.image[0].url})`}}></div>
                            <h1 className="heading-6">{elem.service}</h1>
                            <p className="texto-cupones">{elem.short_desc}</p>
                            <Link to={`/cupon/${ elem.id }`} className="link-page">MÁS INFORMACIÓN</Link>
                         </div>
                      )  
                    }) 
                }
            </div>
            <Footer />
        </div>
    )
}
