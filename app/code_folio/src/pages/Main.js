// required modules
import React from 'react'
// css styling
import '../styles/To_Main.css'
// components
import Gallery from '../components/Container'
import Footer from '../components/Footer'

const Main = () => {
    return (
      <div className="main">
      <div className="main-container">
        <Gallery />
        <Footer />
      </div>
      </div>
    );
}

export default Main
