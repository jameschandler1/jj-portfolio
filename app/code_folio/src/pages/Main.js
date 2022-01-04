// required modules
import React from 'react'
// css styling
import '../styles/To_Main.css'
// components
import Header from '../components/Header'
import Nav from '../components/Nav'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const Main = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Main
