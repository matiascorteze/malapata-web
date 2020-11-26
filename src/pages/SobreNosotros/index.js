import React from "react"
import Navbar from "../../components/Navbar"
import BarritaHor from "../../components/BarritaHor"
import "./style.css"
import Footer from "../../components/Footer"

function SobreNosotros() {
  return (
    <>
      <Navbar />
      <BarritaHor/>
      <div className="nosotros-top-section">
        <img
          className="nosotros-main-pic"
          src="https://i.postimg.cc/6QvSRHrP/perrito-01.jpg"
          alt="perrito macanudo" />
        <p className="nosotros-text">En mi experiencia como voluntaria en la ONG "Proyecto 4 Patas" dedicada a rescatar animales de la calle podía observar una de las problemáticas por las que pasaban los rescataditos, llegaban con quebraduras, fisuras, discapacidades neurológicas o con alguna mal formación en sus extremidades. <br/><br/>Los veterinarios en estos casos les colocaban una férula de neopren, o el clásico vendaje Robert Jones con una madera como tutor pero con ninguno de estos productos podíamos bañar a nuestras mascotas, ni dejarlas disfrutar de un paseo un dia de lluvia, estos  vendajes se ensuciaban y se humedecían, ni hablar cuando ellos mismos las ensucian con sus evacuaciones contaminando  la zona a tratar y manteniendola húmeda, permitiendo asi el desarrollo de olores y bacterias, hasta hemos llegado a amputar extremidades por la manifestación de infecciones si no se cambian periódicamente los vendajes.<br/><br/>Por todas estas razones es que desarrollamos la Férula Gruyere, nuestro puntapié para seguir innovando en el resto de los productos que venimos realizando desde el año 2017. Todos destinados a mejorar la calidad de vida de nuestros peludos.</p>
      </div>
      <BarritaHor/>
      <Footer />
    </>
  )
}

export default SobreNosotros