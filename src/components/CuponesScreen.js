import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { cuponsStartLoading } from "../actions/cda";
import { LoginScreen } from "./LoginScreen";
import { useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

const baseUrl = process.env.REACT_APP_API_URL;


export const CuponesScreen = () => { 
    
    const dispatch = useDispatch();

    const { cupons, bannersCupones, bannersLoaded } = useSelector(state => state.cda);
    const { banner_image } = bannersCupones;    
    const bannersAvailable = !!(bannersLoaded && bannersCupones);
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
                <div className="div-block-24">
                    {
                        bannersAvailable &&
                        <Splide
                            options={ {
                                rewind : true,
                                width  : '100%',
                                height: '330px',
                                gap    : '1rem',
                                type   : 'loop',
                                autoplay: true
                            } }
                        >
                            {
                                banner_image.map((banner, key) => {
                                    return (
                                        <SplideSlide key={key}>
                                            <img src={baseUrl+banner.url} alt="Image 1"/>
                                        </SplideSlide>
                                    )
                                })
                            }
                        </Splide>
                    }
                </div>
            </div>
            <div className="section-5"></div>
            <div className="cupones-page">
                {                    
                    cupons.map(elem => {
                      return (
                        <Link to={`/cupones/${ elem.id }`} className="cupon-link-wrapper" key={elem.id}>
                         <div className="div-block-25">
                            <div className="cupon-card-cupon-page" style={{backgroundImage:`url(${baseUrl+elem.img[0].url})`}}></div>
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
