import React, { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { mockArr } from "../helpers/mockArray";

const baseUrl = process.env.REACT_APP_API_URL;

export const CuponesDestacados = () => {
  const { cupons, textosApp } = useSelector((state) => state.cda);
  const { btn_cupones } = textosApp;

  return (
    <div className="cupones-page-copy">
      {cupons &&
        cupons.slice(0, 3).map((cupon) => {
          return (
            <Link
              to={`/cupones/${cupon.id}`}
              className="cupon-link-wrapper"
              key={cupon.id}
            >
              <div className="cupon-card">
                <div className="div-block-73">
                  <div
                    className="cupon-card-cupon-page"
                    style={{
                      backgroundImage: `url(${baseUrl + cupon.img[0].url})`,
                    }}
                  ></div>
                  <div className="div-block-75">
                    <h1 className="heading-12">{cupon.proveedor.nombre}</h1>
                    <p className="texto-cupones">{cupon.bajada}</p>
                    <div className="div-block-20">
                      <p className="link">{btn_cupones}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};
