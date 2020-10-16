import React from "react";
import Product from "../Product"
import products from "../../data/products.json"
import "./style.css"

function ProductList() {

  const productList = products;

  return (
    <section className="product-list-container" id="productList">
      <h1 className="product-list-header">Nuestros productos</h1>
      <div className="product-list">
        {productList.map((product, key) => {
          return (
            <Product props={product} key={key} />
          )
        })}
      </div>
    </section>

  )
}

export default ProductList