import { Link } from "react-router-dom";
import { mockArr } from "../helpers/mockArray";


export const CuponesDestacados = () => {    

    return (
        <div className="cupones-page-copy">
            {
                mockArr &&
                mockArr.slice(0, 3).map(elem => {
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
    )
}
