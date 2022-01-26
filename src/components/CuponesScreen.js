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

    const { cupons, bannersCupones, bannersLoaded, textosApp } = useSelector(state => state.cda);
    const { btn_cupones } = textosApp;
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
                                            <img src={baseUrl+banner.url} alt={banner.url}/>
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
                    cupons.map(cupon => {
                      return (
                        <Link to={`/cupones/${ cupon.id }`} className="cupon-link-wrapper" key={ cupon.id }>
                        <div className="cupon-card">
                            <div className="div-block-73">
                                <div className="cupon-card-cupon-page" style={{backgroundImage:`url(${baseUrl+cupon.img[0].url})`}}></div>
                                <div className="div-block-75">
                                    <h1 className="heading-12">{cupon.proveedor.nombre}</h1>
                                    <p className="texto-cupones">{ cupon.bajada }</p>
                                    <div className="div-block-20">
                                        <p className="link">{btn_cupones}</p>                                        
                                    </div>
                                </div>
                            </div>
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
