import React from "react";
import "./style.css"

function Footer() {
  return (

    <section className="footer-container">
      <div className="instagram">
        <i className="fab fa-instagram" />
        <span>@malapata3D</span>
      </div>
      <div className="mail">
        <i className="far fa-envelope" />
        <span>info@malapata3d.com</span>
      </div>
      <div className="phone">
        <i className="fas fa-phone-alt" />
        <span>011-12345678</span>
      </div>
    </section>
  )
}

export default Footer