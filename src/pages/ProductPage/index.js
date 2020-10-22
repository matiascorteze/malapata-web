import React from "react"
import Navbar from "../../components/Navbar"
import PictureContainer from "../../components/PictureContainer";
import products from "../../data/products.json";
import "./style.css";
import ScriptTag from 'react-script-tag';
import BarritaHor from "../../components/BarritaHor";
import Footer from "../../components/Footer";

function ProductPage(props) {

  const { id } = props.match.params
  const product = products.filter((product) => product.url === id)[0]

  const { name, price, desc, medidas } = product

  return (
    <>
      <Navbar />
      <div className="product-top-section">
        <PictureContainer props={product} />
        <div className="product-info-ind">
          <h1 className="product-name-ind">{name}</h1>
          <h3 className="product-price-ind">Desde ${price}</h3>
          <p className="product-desc-ind">
            {desc.map((desc, key) => {
              return (
                <span key={key}>{desc}</span>
              )
            })}</p>

          <ScriptTag
            type="text/javascript"
            src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
            data-preference-id="77337820-b8524982-385b-4487-9da1-84d2acfa9f84"
            data-button-label="Comprar" />



        </div>
      </div>
      <BarritaHor />
      <div className="product-bottom-section">
        <h1 className="bottom-section-title">¿Cómo tomo las medidas de mi mascota?</h1>
        <h2 className="bottom-section-subtitle">Siempre tu mascota parada, nunca acostada.</h2>
        {medidas && medidas.map((medida, key) => {
          return (
            <div key={key}>
              <h3 className="medida-title">{medida.title}</h3>
              <p className="medida-proc">{medida.proc}</p>
            </div>
          )
        })}
      </div>
      <Footer/>
    </>
  )
}

export default ProductPage