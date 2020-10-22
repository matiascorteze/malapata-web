import React from "react";
import { Link } from "react-router-dom"
import "./style.css"

function ButtonsSections() {
  return (
    <ul className="buttonsSections">
      <Link to="/" className="sectionInd">INICIO</Link>
      <div className="vertical-line"></div>
      <Link to="/" className="sectionInd">PRODUCTOS</Link>
      <div className="vertical-line"></div>
      <Link to="/sobre-nosotros" className="sectionInd">SOBRE NOSOTROS</Link>
    </ul>
  )
}

export default ButtonsSections