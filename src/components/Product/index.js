import React from "react"
import "./style.css"

function Product(props) {

  const { name, price, img } = props.props;

  function handleclick() {
    console.log(name, price);
  }

  return (
    <div className="product-card" onClick={handleclick}>
      <img className="product-img" src={img} alt="product pic" />
      <h1 className="product-title">{name}</h1>
      <div className="price-container">
        <span className="desde">desde</span>
        <h3 className="product-price">${price}</h3>
      </div>
      <button className="product-ver-mas-button">Ver más</button>
    </div>
  )
}

export default Product