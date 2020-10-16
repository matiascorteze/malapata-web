import React from "react";
import "./style.css"

function ButtonsSections() {
  return(
    <ul className="buttonsSections">
      <a href="#hero" className="sectionInd">INICIO</a>
      <div className="vertical-line"></div>
      <a href="#productList" className="sectionInd">PRODUCTOS</a>
      <div className="vertical-line"></div>
      <a href="#FOTO4" className="sectionInd">SOBRE NOSOTROS</a>
    </ul>
  )
}

export default ButtonsSections