import React from "react"
import "./style.css"

function Product(props) {

  const { name, price, main_img } = props.props;

  return (
    <div className="product-card">
      <img className="product-img" src={main_img} alt={name} />
      <div className="product-info-cont">
        <h1 className="product-title">{name}</h1>
        <div className="price-container">
          <span className="desde">desde</span>
          <h3 className="product-price">${price}</h3>
        </div>
      </div>
      <button className="product-ver-mas-button">Ver más</button>
    </div>
  )
}

export default Product