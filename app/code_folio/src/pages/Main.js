// required modules
import React from 'react'
// css styling
import '../styles/To_Main.css'
// components
import Gallery from '../components/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Main = () => {
    return (
      <div className="page-container">
        <Header />
        <Gallery />
        <Footer />
      </div>
    );
}

export default Main
