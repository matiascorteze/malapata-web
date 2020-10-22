import React from "react";
import "./style.css"

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-header">
        <h2 className="hero-subtitle">Malapata - Ortopedia 3D</h2>
        <h1 className="hero-title">Férulas y carritos para mascotas!</h1>
      </div>
      <div className="img-cont">
        <img className="hero-img" src="https://i.postimg.cc/sXPNHv09/perrito-02.jpg" alt="Foto de perrito" />
      </div>
    </section>
  )
}

export default Hero