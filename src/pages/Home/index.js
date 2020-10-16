import React from "react"
import BarritaHor from "../../components/BarritaHor"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"
import ProductList from "../../components/ProductList"
import Redes from "../../components/Redes"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductList />
      <BarritaHor />
      <Redes />
      <BarritaHor />
      <Footer />
    </>
  )
}

export default Home