import React from "react";
import Product from "../Product"
import products from "../../data/products.json"
import { Link } from "react-router-dom"
import "./style.css"

function ProductList() {

  const productList = products;

  return (
    <section className="product-list-container" id="productList">
      <h1 className="product-list-header">Nuestros productos</h1>
      <div className="product-list">
        {productList.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.url}`} className="product-link">
              <Product props={product}/>
            </Link>
          )
        })}
      </div>
    </section>

  )
}

export default ProductList