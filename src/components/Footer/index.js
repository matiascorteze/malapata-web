import React from "react";
import "./style.css"

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer">
        <div className="instagram">
          <i className="fab fa-instagram" />
          <a
            href="https://www.instagram.com/malapata3d/"
            target="_blank"
            rel="noopener noreferrer">@malapata3d</a>
        </div>
        <div className="mail">
          <i className="far fa-envelope" />
          <a
            href="mailto:malapata3d@gmail.com&subject=Consulta%20web">malapata3d@gmail.com</a>
        </div>
        <div className="phone">
          <i className="fas fa-phone-alt" />
          <a href="https://wa.me/5491151743319">11-51743319</a>
        </div>
      </div>
      <a 
        href="https://github.com/matiascorteze"
        target="_blank"
        rel="noopener noreferrer"
        className="signature">Made with <span className="heart">♥</span> by Matias Corteze</a>
    </section>
  )
}

export default Footer