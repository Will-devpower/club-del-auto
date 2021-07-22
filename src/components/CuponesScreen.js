import { Link } from "react-router-dom";
import { mockArr } from "../helpers/mockArray";

export const CuponesScreen = () => {    

    return (
        <>            
            <div className="banners-cupones">
                <div className="div-block-24"></div>
            </div>
            <div className="section-5"></div>
            <div className="cupones-page">
                {
                    mockArr &&
                    mockArr.map(elem => {
                      return (
                         <div key={elem.title} className="div-block-25">
                            <div className="cupon-card-cupon-page" style={{backgroundImage:`url(${elem.imgSrc})`}}></div>
                            <h1 className="heading-6">{elem.title}</h1>
                            <p className="texto-cupones">{elem.description}</p>
                            <Link to={`/cupon/${ elem.id }`} className="link-page">MÁS INFORMACIÓN</Link>
                         </div>
                      )  
                    }) 
                }
            </div>
        </>
    )
}
