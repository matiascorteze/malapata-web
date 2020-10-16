import React from "react";
import "./style.css"
import ButtonsSections from "../ButtonsSections";

function Navbar() {
  return (
    <div className="navbarContainer" id="INICIO">
      <div className="navbar">
        <div className="logo"><img className="logoImg" src="https://i.postimg.cc/NFgP3B3h/logo.png" alt="Malapata Logo"></img></div>
        <ButtonsSections />
      </div>
    </div>
  )
}

export default Navbar